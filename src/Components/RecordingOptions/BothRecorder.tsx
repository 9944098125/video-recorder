import React, { useState, useRef } from "react";

type Props = {
	onStop: (videoURLs: { camera: string; screen: string }) => void;
};

const BothRecorder: React.FC<Props> = ({ onStop }) => {
	const [recording, setRecording] = useState(false);
	const cameraVideoRef = useRef<HTMLVideoElement>(null);
	const screenVideoRef = useRef<HTMLVideoElement>(null);
	const cameraMediaRecorderRef = useRef<MediaRecorder | null>(null);
	const screenMediaRecorderRef = useRef<MediaRecorder | null>(null);
	const cameraChunksRef = useRef<Blob[]>([]);
	const screenChunksRef = useRef<Blob[]>([]);

	const startRecording = () => {
		navigator.mediaDevices
			.getUserMedia({ video: true, audio: true })
			.then((cameraStream) => {
				if (cameraVideoRef.current) {
					cameraVideoRef.current.srcObject = cameraStream;
					cameraMediaRecorderRef.current = new MediaRecorder(cameraStream, {
						mimeType: "video/webm",
					});

					cameraMediaRecorderRef.current.ondataavailable = (e) => {
						cameraChunksRef.current.push(e.data);
					};

					cameraMediaRecorderRef.current.onstop = () => {
						const cameraBlob = new Blob(cameraChunksRef.current, {
							type: "video/webm",
						});
						cameraChunksRef.current = [];
						const cameraVideoURL = URL.createObjectURL(cameraBlob);
						onStop({ camera: cameraVideoURL, screen: "" });
					};

					cameraMediaRecorderRef.current.start();
				}

				navigator.mediaDevices
					.getDisplayMedia({ video: true, audio: true })
					.then((screenStream) => {
						if (screenVideoRef.current) {
							screenVideoRef.current.srcObject = screenStream;
							screenMediaRecorderRef.current = new MediaRecorder(screenStream, {
								mimeType: "video/webm",
							});

							screenMediaRecorderRef.current.ondataavailable = (e) => {
								screenChunksRef.current.push(e.data);
							};

							screenMediaRecorderRef.current.onstop = () => {
								const screenBlob = new Blob(screenChunksRef.current, {
									type: "video/webm",
								});
								screenChunksRef.current = [];
								const screenVideoURL = URL.createObjectURL(screenBlob);
								onStop({ camera: "", screen: screenVideoURL });
							};

							screenMediaRecorderRef.current.start();
						}
					})
					.catch((error) =>
						console.error("Error accessing screen media devices:", error)
					);
			})
			.catch((error) =>
				console.error("Error accessing camera media devices:", error)
			);

		setRecording(true);
	};

	const stopRecording = () => {
		if (cameraMediaRecorderRef.current) {
			cameraMediaRecorderRef.current.stop();
		}
		if (cameraVideoRef.current && cameraVideoRef.current.srcObject) {
			(cameraVideoRef.current.srcObject as MediaStream)
				.getTracks()
				.forEach((track) => track.stop());
		}

		if (screenMediaRecorderRef.current) {
			screenMediaRecorderRef.current.stop();
		}
		if (screenVideoRef.current && screenVideoRef.current.srcObject) {
			(screenVideoRef.current.srcObject as MediaStream)
				.getTracks()
				.forEach((track) => track.stop());
		}

		setRecording(false);
	};

	return (
		<div>
			<div className="d-flex gap-2 align-items-center">
				<video
					style={{ height: "400px", width: "600px" }}
					ref={cameraVideoRef}
					autoPlay
					muted
				/>
				<video
					style={{ height: "400px", width: "600px" }}
					ref={screenVideoRef}
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

export default BothRecorder;
