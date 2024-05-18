import React from "react";
import { FaMicrophone, FaPause, FaPlay } from "react-icons/fa";
import { FaScissors } from "react-icons/fa6";

const SeekBar: React.FC = () => {
	return (
		<React.Fragment>
			<div className="seekBar-tools">
				<div className="d-flex align-items-center gap-3">
					<FaScissors fontSize={20} color="grey" />
					<p className="text-secondary fw-bold m-0">Split</p>
				</div>
				<div className="d-flex align-items-center gap-3">
					<FaMicrophone fontSize={20} color="grey" />
					<p className="text-secondary fw-bold m-0">Voiceover</p>
				</div>
			</div>
			<div className="d-flex flex-column align-items-center justify-content-center w-50">
				<div className="d-flex align-items-center gap-3 w-100">
					<button className="btn">
						<FaPlay fontSize={25} color="grey" />
						<FaPause fontSize={25} color="grey" />
					</button>
					<input type="range" min="0" step="0.01" className="w-100" />
				</div>
				<div className="time-display">
					<span>25:05:7563</span> / <span>42:56:2342</span>
				</div>
			</div>
		</React.Fragment>
	);
};

export default SeekBar;
