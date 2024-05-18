import React from "react";
import { Modal } from "react-bootstrap";
import Item from "./Item";
import { Md60FpsSelect, MdScreenShare, MdSlideshow } from "react-icons/md";
import { FaCameraRetro } from "react-icons/fa";
import { VscUnmute } from "react-icons/vsc";
import { IoIosSettings } from "react-icons/io";

import camera from "../../Assets/camera.jpg";
import audio from "../../Assets/audio.jpg";
import screen from "../../Assets/screen.jpg";
import screenCamera from "../../Assets/screencamera.jpg";
import slidesCamera from "../../Assets/slidescamera.jpg";
import slides from "../../Assets/slides.webp";

type RecordingOptionsProps = {
	showModal: boolean;
	setShowModal: (value: boolean) => void;
};
const recordingOptionsButtons = [
	{
		id: 1,
		label: "Camera",
		img: camera,
	},
	{
		id: 2,
		label: "Audio",
		img: audio,
	},
	{
		id: 3,
		label: "Screen",
		img: screen,
	},
	{
		id: 4,
		label: "Screen & Camera",
		img: screenCamera,
	},
	{
		id: 5,
		label: "Slides & Camera",
		img: slidesCamera,
	},
	{
		id: 6,
		label: "Slides",
		img: slides,
	},
];
const RecordingOptions = (props: RecordingOptionsProps) => {
	const { showModal, setShowModal } = props;
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
					<Modal.Title>What Do You Want to Record ?</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<div className="d-flex flex-wrap justify-content-center align-items-center gap-5">
						{recordingOptionsButtons.map((item) => {
							return <Item key={item.id} label={item.label} img={item.img} />;
						})}
					</div>
					<div className="mt-5 mb-4 d-flex align-items-center justify-content-center py-3">
						<div
							style={{ backgroundColor: "#FFFF8F", cursor: "pointer" }}
							className="rounded px-3 py-1">
							<Md60FpsSelect
								fontSize={12}
								color="blue"
								style={{ marginRight: "5px" }}
							/>
							Select a video
						</div>
					</div>
					<div className="d-flex align-items-center justify-content-between">
						<div className="d-flex align-items-center gap-2">
							<div
								className="text-center rounded px-4 py-1"
								style={{
									cursor: "pointer",
									boxShadow: "1px 1px 1px 1px grey",
								}}>
								<FaCameraRetro fontSize={25} color="grey" />
								<p className="text-dark fw-bold">Camera</p>
							</div>
							<div
								className="text-center rounded px-4 py-1"
								style={{
									cursor: "pointer",
									boxShadow: "1px 1px 1px 1px grey",
								}}>
								<VscUnmute fontSize={25} color="grey" />
								<p className="text-dark fw-bold">Unmute</p>
							</div>
						</div>
						<div className="d-flex align-items-center gap-2">
							<div
								className="text-center rounded px-4 py-1"
								style={{
									cursor: "pointer",
									boxShadow: "1px 1px 1px 1px grey",
								}}>
								<MdScreenShare fontSize={25} color="grey" />
								<p className="text-dark fw-bold">Screen</p>
							</div>
							<div
								className="text-center rounded px-4 py-1"
								style={{
									cursor: "pointer",
									boxShadow: "1px 1px 1px 1px grey",
								}}>
								<MdSlideshow fontSize={25} color="grey" />
								<p className="text-dark fw-bold">Slides</p>
							</div>
						</div>
						<div className="d-flex align-items-center gap-2">
							<div
								className="text-center rounded px-4 py-1"
								style={{
									cursor: "pointer",
									boxShadow: "1px 1px 1px 1px grey",
								}}>
								<IoIosSettings fontSize={25} color="grey" />
								<p className="text-dark fw-bold">Camera</p>
							</div>
						</div>
					</div>
				</Modal.Body>
			</Modal>
		</React.Fragment>
	);
};

export default RecordingOptions;
