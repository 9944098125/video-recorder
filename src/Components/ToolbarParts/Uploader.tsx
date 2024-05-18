import React from "react";
import { FaCloudUploadAlt } from "react-icons/fa";

type UploaderProps = {
	text: string;
	head: string;
};
const Uploader = (props: UploaderProps) => {
	const { text, head } = props;
	return (
		<React.Fragment>
			<label
				htmlFor="file"
				style={{
					width: "100%",
					cursor: "pointer",
				}}
				className="d-flex flex-column justify-content-center align-items-center rounded py-2">
				<input id="file" type="file" style={{ display: "none" }} />

				<div className="bg-primary rounded text-white mb-3">
					<FaCloudUploadAlt fontSize={25} />
				</div>
				<p className="text-primary fw-bold fs-6 m-0">{head}</p>
				<p style={{ width: "50%" }} className="text-secondary text-center">
					{text}
				</p>
			</label>
		</React.Fragment>
	);
};

export default Uploader;
