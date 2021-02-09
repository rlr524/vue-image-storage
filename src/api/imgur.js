// qs allows us to stringify our query string object; we could also just hard code it but using qs makes our app a little more scalable
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
};

// Note: There was an issue with the current imgur api in which it was refusing localhost. The fix was to use the network address
// 192.168.86.250:8080 instead of localhost and also provide that same ip as the callback on the imgur app registration
