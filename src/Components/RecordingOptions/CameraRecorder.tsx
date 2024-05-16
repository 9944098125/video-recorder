import React, { useState, useRef } from "react";

type Props = {
	onStop: (videoURL: string) => void;
};

const CameraRecorder: React.FC<Props> = ({ onStop }) => {
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
						onStop(videoURL);
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
		}
		if (videoRef.current && videoRef.current.srcObject) {
			(videoRef.current.srcObject as MediaStream)
				.getTracks()
				.forEach((track) => track.stop());
		}
		setRecording(false);
	};

	return (
		<div>
			<div>
				<video
					style={{ height: "400px", width: "600px" }}
					ref={videoRef}
					autoPlay
					muted
				/>
			</div>
			<div>
				<button
					className="btn btn-primary"
					onClick={recording ? stopRecording : startRecording}>
					{recording ? "Stop Recording" : "Start Recording"}
				</button>
			</div>
		</div>
	);
};

export default CameraRecorder;
