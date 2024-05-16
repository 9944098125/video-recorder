import React from "react";
import { Modal } from "react-bootstrap";

import "./styles.css";

type Props = {
	showModal: boolean;
	setShowModal: (value: boolean) => void;
	startRecording: (option: "camera" | "screen" | "both") => void;
};

const RecordingOptions = ({
	showModal,
	setShowModal,
	startRecording,
}: Props) => {
	const handleRecordingOption = (option: "camera" | "screen" | "both") => {
		setShowModal(false);
		startRecording(option);
	};

	return (
		<Modal
			show={showModal}
			onHide={() => setShowModal(false)}
			centered
			size="lg"
			backdrop="static">
			<Modal.Header closeButton>
				<Modal.Title>
					<h4 className="text-danger fw-bold">What do you want to record?</h4>
				</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				<div className="d-flex justify-content-between align-items-center px-5">
					<div
						className="camera"
						onClick={() => handleRecordingOption("camera")}>
						<span>Camera</span>
					</div>
					<div
						className="screen"
						onClick={() => handleRecordingOption("screen")}>
						<span>Screen</span>
					</div>
					<div className="both" onClick={() => handleRecordingOption("both")}>
						<span>Both</span>
					</div>
				</div>
			</Modal.Body>
		</Modal>
	);
};

export default RecordingOptions;
