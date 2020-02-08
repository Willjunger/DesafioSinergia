import React from "react";

import "./Video.css";

const Video = ({ video, handleVideoSelect }) => {
	return (
		<div onClick={() => handleVideoSelect(video)} className="d-flex  align-itens-center col-lg-12 col-12 ">
			<img className="tamanho-thumbnail" src={video.snippet.thumbnails.medium.url} alt={video.snippet.description}></img>
			<div className="d-flex flex-column espaco-interno-titulo-descricao">
				<h6>{video.snippet.title}</h6>
				<p className="limite-letras">{video.snippet.description}</p>
			</div>
		</div>
	);
};

export default Video;
