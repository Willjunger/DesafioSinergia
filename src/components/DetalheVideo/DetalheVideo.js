import React from "react";

const DetalheVideo = ({ video }) => {
	if (!video) {
		return <div></div>;
	}

	const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;
	return (
		<div className="col-lg-6 col-12 espaco-interno-titulo-descricao float-lg-right">
			<iframe width="100%" height="400" src={videoSrc} allowFullScreen title="Video player" />
			<div>
				<h4>{video.snippet.title}</h4>
				<p>{video.snippet.description}</p>
			</div>
		</div>
	);
};

export default DetalheVideo;
