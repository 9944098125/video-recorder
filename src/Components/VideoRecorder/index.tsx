import React, { useState, useRef } from "react";

type VideoRecorderProps = {
	id: string;
	onRecord: (url: string, file: Blob) => void;
};

const VideoRecorder: React.FC<VideoRecorderProps> = ({ id, onRecord }) => {
	const [recording, setRecording] = useState(false);
	const videoRef = useRef<HTMLVideoElement>(null);
	const mediaRecorderRef = useRef<MediaRecorder | null>(null);
	const chunksRef = useRef<Blob[]>([]);

	const startRecording = () => {
		navigator.mediaDevices
			.getUserMedia({ video: true, audio: true })
			.then((stream) => {
				if (videoRef.current) {
					videoRef.current.srcObject = stream;
					mediaRecorderRef.current = new MediaRecorder(stream, {
						mimeType: "video/webm",
					});

					mediaRecorderRef.current.ondataavailable = (e) => {
						chunksRef.current.push(e.data);
					};

					mediaRecorderRef.current.onstop = () => {
						const blob = new Blob(chunksRef.current, { type: "video/webm" });
						chunksRef.current = [];
						const videoURL = URL.createObjectURL(blob);
						onRecord(videoURL, blob);
					};

					mediaRecorderRef.current.start();
					setRecording(true);
				}
			})
			.catch((error) => console.error("Error accessing media devices:", error));
	};

	const stopRecording = () => {
		if (mediaRecorderRef.current) {
			mediaRecorderRef.current.stop();
			setRecording(false);
		}
	};

	return (
		<div>
			<video
				ref={videoRef}
				autoPlay
				muted
				style={{ display: recording ? "block" : "none" }}
			/>
			<button onClick={recording ? stopRecording : startRecording}>
				{recording ? "Stop Recording" : "Start Recording"}
			</button>
		</div>
	);
};

export default VideoRecorder;
