import React from "react";
import ReactPlayer from "react-player";

type VideoProps = {
	src: string;
};
const Video = (props: VideoProps) => {
	const { src } = props;
	return (
		<div className="video-container">
			<ReactPlayer muted playing url={src} height={80} width={150} />
		</div>
	);
};

export default Video;
