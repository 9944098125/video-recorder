import React from "react";
import { Modal } from "react-bootstrap";

import recording from "../../Assets/recording.jpg";
import ai from "../../Assets/ai.png";
import Uploader from "../ToolbarParts/Uploader";

const VideoModal = ({ setShowModal, showModal }: any) => {
	return (
		<React.Fragment>
			<Modal
				show={showModal}
				onHide={() => setShowModal(false)}
				centered
				size="lg"
				backdrop="static"
				keyboard={false}>
				<Modal.Header closeButton>
					<Modal.Title>Let's Make a Video</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<Uploader
						text="Choose a file or drag them here..."
						head="Upload a video"
					/>
					<div className="d-flex align-items-center justify-content-evenly px-5 py-2">
						<div
							id="startRecording"
							style={{ cursor: "pointer" }}
							className="d-flex align-items-center gap-2">
							<img
								src={recording}
								alt=""
								style={{ height: "80px", width: "150px", borderRadius: "9px" }}
							/>
							<p className="text-secondary fw-bold">Start by Recording</p>
						</div>
						<div
							id="startRecording"
							style={{ cursor: "pointer" }}
							className="d-flex align-items-center gap-2">
							<img
								src={ai}
								alt=""
								style={{ height: "80px", width: "150px", borderRadius: "9px" }}
							/>
							<p className="text-secondary fw-bold">Start with AI</p>
						</div>
					</div>
				</Modal.Body>
			</Modal>
		</React.Fragment>
	);
};

export default VideoModal;
