import React, { useState, useRef, useEffect } from "react";
import { FaPauseCircle, FaPlay } from "react-icons/fa";

type Song = {
	song: {
		title: string;
		url: string;
		id: number;
		img: string;
		time: string;
	};
};

const SongPlayer = (props: Song) => {
	const { song } = props;
	const [currentSongId, setCurrentSongId] = useState<number | null>(null);
	const [isPlaying, setIsPlaying] = useState<number | null>(null);
	const audioRefs = useRef<{ [key: number]: HTMLAudioElement | null }>({});

	const playSong = (song: any) => {
		if (currentSongId !== song.id) {
			if (currentSongId !== null && audioRefs.current[currentSongId]) {
				audioRefs.current[currentSongId]?.pause();
			}
			audioRefs.current[song.id]?.play();
			setCurrentSongId(song.id);
			setIsPlaying(song.id);
		} else {
			audioRefs.current[song.id]?.play();
			setIsPlaying(song.id);
		}
	};

	const pauseSong = (songId: number) => {
		audioRefs.current[songId]?.pause();
		setIsPlaying(null);
	};

	useEffect(() => {
		return () => {
			Object.values(audioRefs.current).forEach((audio) => {
				if (audio) {
					audio.pause();
					audio.currentTime = 0;
				}
			});
		};
	}, []);

	return (
		<div className="w-100">
			<li
				style={{ position: "relative" }}
				className="d-flex align-items-center gap-5"
				key={song.id}>
				<div className="d-flex align-items-center gap-2">
					<img
						src={song.img}
						alt=""
						style={{ height: "40px", width: "40px", borderRadius: "50%" }}
					/>
					<div className="d-flex flex-column">
						<span className="fs-6 fw-bold">{song.title}</span>
						<span className="text-secondary">{song.time}</span>
					</div>
				</div>
				<audio ref={(el) => (audioRefs.current[song.id] = el)}>
					<source src={song.url} type="audio/mp3" />
				</audio>
				{isPlaying === song.id ? (
					<button
						style={{
							position: "absolute",
							left: "2px",
							top: "5px",
							backgroundColor: "transparent",
							border: "none",
						}}
						className="btn text-dark"
						onClick={() => pauseSong(song.id)}>
						<FaPauseCircle fontSize={15} color="black" />
					</button>
				) : (
					<button
						style={{
							position: "absolute",
							left: "2px",
							top: "5px",
							backgroundColor: "transparent",
							border: "none",
						}}
						className="btn text-dark"
						onClick={() => playSong(song)}>
						<FaPlay fontSize={15} color="black" />
					</button>
				)}
			</li>
		</div>
	);
};

export default SongPlayer;
