import React, { useState } from "react";
import VideoUploader from "../../Components/VideoUploader";
import VideoRecorder from "../../Components/VideoRecorder";
import SoundEffects from "../../Components/SoundEffects";
import VideoEditorTools from "../../Components/VideoEditorTools";

const VideoEditor = () => {
	const [videoURL, setVideoURL] = useState<string | null>(null);
	const [videoFile, setVideoFile] = useState<File | null>(null);

	const handleVideoUpload = (file: File) => {
		const url = URL.createObjectURL(file);
		setVideoURL(url);
		setVideoFile(file);
	};

	const handleVideoRecord = (url: string, file: Blob) => {
		setVideoURL(url);
		setVideoFile(
			new File([file], "recorded_video.webm", { type: "video/webm" })
		);
	};

	return (
		<div>
			<h1>Video Editor</h1>
			<div>
				<button
					onClick={() => document.getElementById("video-uploader")?.click()}>
					Upload Video
				</button>
				<button
					onClick={() => document.getElementById("video-recorder")?.click()}>
					Record Video
				</button>
			</div>
			<div>
				<VideoUploader id="video-uploader" onUpload={handleVideoUpload} />
				<VideoRecorder id="video-recorder" onRecord={handleVideoRecord} />
			</div>
			{videoURL && (
				<>
					<div>
						<video
							style={{ height: "400px", width: "600px" }}
							src={videoURL}
							controls
						/>
					</div>
					<SoundEffects videoFile={videoFile} />
					<VideoEditorTools videoFile={videoFile} />
				</>
			)}
		</div>
	);
};

export default VideoEditor;
