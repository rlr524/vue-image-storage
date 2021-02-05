// qs allows us to stringify our query string object; we could also just hard code it but using qs makes our app a little more scalable
import qs from "qs";

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
};