import React from "react";
import "./App.css";

import SearchBar from "./components/SearchBar/SearchBar";
import api from "./Api/api";
import ListaVideos from "./components/ListaVideos/ListaVideos";
import DetalheVideo from "./components/DetalheVideo/DetalheVideo";

import "bootstrap/dist/css/bootstrap.min.css";

class App extends React.Component {
	state = {
		videos: [],
		selectedVideo: null
	};

	handleSubmit = async (termFromSearchBar) => {
		const response = await api.get(`/search?part=id,snippet&maxresults=20&key=AIzaSyDizCTXsGMFXx60KCk3douu6eUe6_wmOlM`, {
			params: {
				q: termFromSearchBar
			}
		});
		this.setState({
			videos: response.data.items
		});
	};
	handleVideoSelect = (video) => {
		this.setState({ selectedVideo: video });
	};

	render() {
		return (
			<div className="container">
				<SearchBar handleFormSubmit={this.handleSubmit} />
				<DetalheVideo video={this.state.selectedVideo} />
				<ListaVideos className="col-12 col-lg-6" handleVideoSelect={this.handleVideoSelect} videos={this.state.videos} />
			</div>
		);
	}
}

export default App;
