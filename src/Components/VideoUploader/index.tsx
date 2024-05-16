import React from "react";

type VideoUploaderProps = {
	id: string;
	onUpload: (file: File) => void;
};

const VideoUploader: React.FC<VideoUploaderProps> = ({ id, onUpload }) => {
	const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const file = event.target.files?.[0];
		if (file) {
			onUpload(file);
		}
	};

	return (
		<input
			type="file"
			accept="video/*"
			id={id}
			onChange={handleFileChange}
			style={{ display: "none" }}
		/>
	);
};

export default VideoUploader;
