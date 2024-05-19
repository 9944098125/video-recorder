import React, { useState, useRef, useEffect } from "react";
import { FaPlay, FaPause, FaMicrophone } from "react-icons/fa";
import "./styles.css";
import { FaScissors } from "react-icons/fa6";

const SeekBar: React.FC = () => {
	const videoRef = useRef<HTMLVideoElement>(null);
	const [isPlaying, setIsPlaying] = useState(false);
	const [currentTime, setCurrentTime] = useState(0);
	const [duration, setDuration] = useState(0);

	const handlePlayPause = () => {
		if (videoRef.current) {
			if (videoRef.current.paused) {
				videoRef.current.play();
				setIsPlaying(true);
			} else {
				videoRef.current.pause();
				setIsPlaying(false);
			}
		}
	};

	const handleSeek = (event: React.ChangeEvent<HTMLInputElement>) => {
		if (videoRef.current) {
			const time = (Number(event.target.value) / 100) * duration;
			videoRef.current.currentTime = time;
		}
	};

	const formatTime = (seconds: number): string => {
		const minutes = Math.floor(seconds / 60);
		seconds = Math.floor(seconds % 60);
		return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
	};

	return (
		<div className="video-editor">
			<div className="edit-tools">
				<div className="d-flex align-items-center gap-3">
					<FaScissors fontSize={20} color="violet" />
					Split
				</div>
				<div className="d-flex align-items-center gap-3">
					<FaMicrophone fontSize={20} color="red" />
					Voiceover
				</div>
			</div>
			<div className="controls">
				<button onClick={handlePlayPause} className="play-pause-btn">
					<FaPause /> / <FaPlay />
				</button>
				<input
					type="range"
					className="seek-bar"
					min="0"
					max="100"
					step="0.1"
					value={(currentTime / duration) * 100 || 0}
					onChange={handleSeek}
				/>
				<div className="time">
					<span>{formatTime(currentTime)}</span> /{" "}
					<span>{formatTime(duration)}</span>
				</div>
			</div>
		</div>
	);
};

export default SeekBar;
