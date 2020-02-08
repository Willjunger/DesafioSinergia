import axios from "axios";

// const KEY = "AIzaSyDizCTXsGMFXx60KCk3douu6eUe6_wmOlM";

export default axios.create({
	baseURL: "https://www.googleapis.com/youtube/v3",
	params: {
		part: "snippet"
		// maxResults: 20
		// key: KEY
	}
});
