import React from "react";
import { IoVideocam } from "react-icons/io5";
import RecordingOptions from "../RecordingOptions";

const RecordVideoButton = () => {
	const [showRecordingOptionsModal, setShowRecordingOptionsModal] =
		React.useState(false);
	return (
		<React.Fragment>
			<button
				onClick={() => setShowRecordingOptionsModal(true)}
				className="btn record-button d-flex align-items-center gap-1 fw-bold">
				<span
					style={{ backgroundColor: "#7FFFD4" }}
					className="rounded px-2 py-1 me-3">
					<IoVideocam fontSize={20} color="green" />
				</span>
				Record Video
			</button>
			{showRecordingOptionsModal && (
				<RecordingOptions
					showModal={showRecordingOptionsModal}
					setShowModal={setShowRecordingOptionsModal}
				/>
			)}
		</React.Fragment>
	);
};

export default RecordVideoButton;
