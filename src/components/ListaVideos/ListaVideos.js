import React from "react";
import Video from "./Video/Video";

const ListaVideos = ({ videos, handleVideoSelect }) => {
	const titulo = <h2>Resultados</h2>;
	const mostrarVideos = videos.map((video) => {
		return (
			<li className="list-group-item col-lg-6 col-12">
				<Video key={video.id.videoId} video={video} handleVideoSelect={handleVideoSelect} />
			</li>
		);
	});
	return (
		<div>
			{titulo}
			{mostrarVideos}
		</div>
	);
};

export default ListaVideos;
