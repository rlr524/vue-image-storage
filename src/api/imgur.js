/**
 * @description
 * qs allows us to stringify our query string object; we could also just hard code it but using qs makes our app a little more scalable
 */
import qs from "qs";
import axios from "axios";

const CLIENT_ID = process.env.VUE_APP_IMGUR_CLIENT_ID;
const ROOT_URL = "https://api.imgur.com";

export default {
	login() {
		const querystring = {
			client_id: CLIENT_ID,
			response_type: "token",
		};
		window.location = `${ROOT_URL}/oauth2/authorize?${qs.stringify(
			querystring
		)}`;
	},
	fetchImages(token) {
		return axios.get(`${ROOT_URL}/3/account/me/images`, {
			headers: {
				"content-type": "application/json",
				Authorization: `Bearer ${token}`,
			},
		});
	},
	uploadImages(images, token) {
		/**
		 * @method
		 * Calling Array.from here to turn the object that is returned from our DOM event into a true array
		 * Then mapping over this array to allow us to upload multiple images
		 */
		const promises = Array.from(images).map((image) => {
			/**
			 * @class
			 * FormData is a part of the javascript api and allows us to send a set of key/value pairs as part of a request
			 * in this case we're sending a key composed of the string "image" and a value of our images object
			 * we instantiate a new FormData object and then append our k/v pair as arguments to the append method
			 */
			const formData = new FormData();
			/**
			 * @instance
			 * The image string passed as the first arg is our image key as specified by the imgur api, not our image iterator; we
			 * then also pass our image iterator as our value to pass in whichever image is referenced at that point in our iteration
			 */
			formData.append("image", image);
			return axios.post(`${ROOT_URL}/3/image`, formData, {
				headers: {
					Authorization: `Bearer ${token}`,
				},
			});
		});
		/**
		 * We stored our method in a const named promises in order to be able to return our method
		 * as an array of promises (for each image we iterate over) and then resolve Promise only
		 * when all of our array of promises are resolved; this allows every upload request to be
		 * completed in our iteration of uploads before we allow the uploadImages function to continue
		 */
		return Promise.all(promises);
	},
};
/**
 * @description
 * There was an issue with the current imgur api in which it was refusing localhost. The fix was to use the network address
 * 192.168.86.250:8080 instead of localhost and also provide that same ip as the callback on the imgur app registration
 */
