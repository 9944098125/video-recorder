import React from "react";
import VideoModal from "../../Components/VideoModal";
import Toolbar from "./Toolbar";
import { BsPhoneLandscapeFill } from "react-icons/bs";

import "./styles.css";
import SeekBar from "../../Components/ToolbarParts/seekbar";
import { FaCircle } from "react-icons/fa";
import { FaTurnDown } from "react-icons/fa6";

const VideoEditor = () => {
	const [showModal, setShowModal] = React.useState(true);

	return (
		<React.Fragment>
			<VideoModal showModal={showModal} setShowModal={setShowModal} />
			<div className="d-flex">
				<div className="toolbar-container">
					<Toolbar />
				</div>
				<div>
					<div className="p-5 d-flex align-items-center justify-content-center flex-column">
						<div style={{ height: "400px", width: "100%" }} className="">
							<video
								style={{ height: "100%", width: "100%" }}
								src=""
								className="bg-black rounded"></video>
						</div>
						<div
							style={{ cursor: "pointer" }}
							className="d-flex align-items-center gap-4">
							<div className="d-flex align-items-center gap-2 p-4">
								<BsPhoneLandscapeFill fontSize={15} color="grey" />
								<p className="text-secondary fw-bold fs-6 m-0">Landscape</p>
								<FaTurnDown fontSize={15} color="grey" />
							</div>
							<div className="d-flex align-items-center gap-2 p-4">
								<FaCircle fontSize={15} color="black" />
								<p className="text-secondary fw-bold fs-6 m-0">Background</p>
							</div>
						</div>
					</div>
					<div className="seekBar">
						<SeekBar />
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default VideoEditor;
