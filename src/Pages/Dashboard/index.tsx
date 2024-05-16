import React, { useState, useEffect } from "react";
import RecordingOptions from "../../Components/RecordingOptions";
import CameraRecorder from "../../Components/RecordingOptions/CameraRecorder";
import ScreenRecorder from "../../Components/RecordingOptions/ScreenRecorder";
import BothRecorder from "../../Components/RecordingOptions/BothRecorder";
import "./styles.css";

const Dashboard: React.FC = () => {
	const [showModal, setShowModal] = useState(false);
	const [recordingOption, setRecordingOption] = useState<
		"camera" | "screen" | "both" | null
	>(null);
	const [videoURLs, setVideoURLs] = useState<string[]>([]);

	useEffect(() => {
		// Load videos from local storage on mount
		const storedVideos = localStorage.getItem("videos");
		if (storedVideos) {
			setVideoURLs(JSON.parse(storedVideos));
		}
	}, []);

	const saveVideosToLocalStorage = (urls: string[]) => {
		localStorage.setItem("videos", JSON.stringify(urls));
	};

	const startRecording = (option: "camera" | "screen" | "both") => {
		setRecordingOption(option);
	};

	const handleStop = (url: string) => {
		const updatedURLs = [...videoURLs, url];
		setVideoURLs(updatedURLs);
		saveVideosToLocalStorage(updatedURLs);
		setRecordingOption(null);
	};

	const handleBothStop = (urls: { camera: string; screen: string }) => {
		let updatedURLs = [...videoURLs];
		if (urls.camera) updatedURLs = [...updatedURLs, urls.camera];
		if (urls.screen) updatedURLs = [...updatedURLs, urls.screen];
		setVideoURLs(updatedURLs);
		saveVideosToLocalStorage(updatedURLs);
		setRecordingOption(null);
	};

	return (
		<div className="p-5">
			<button
				className="record-video-button"
				onClick={() => setShowModal(true)}>
				Start Recording
			</button>
			<RecordingOptions
				showModal={showModal}
				setShowModal={setShowModal}
				startRecording={startRecording}
			/>
			{recordingOption === "camera" && <CameraRecorder onStop={handleStop} />}
			{recordingOption === "screen" && <ScreenRecorder onStop={handleStop} />}
			{recordingOption === "both" && <BothRecorder onStop={handleBothStop} />}
			<div className="mt-5 d-flex flex-wrap align-items-center gap-3">
				{videoURLs.map((url, index) => (
					<div key={index}>
						<video
							style={{ height: "150px", width: "250px" }}
							src={url}
							controls
						/>
					</div>
				))}
			</div>
		</div>
	);
};

export default Dashboard;
