import React, { useState } from "react";
import { FFmpeg } from "@ffmpeg/ffmpeg";
import { fetchFile } from "@ffmpeg/util";

const ffmpeg = new FFmpeg();

type SoundEffectsProps = {
	videoFile: File | null;
};

const SoundEffects: React.FC<SoundEffectsProps> = ({ videoFile }) => {
	const [soundEffect, setSoundEffect] = useState<File | null>(null);
	const [outputVideo, setOutputVideo] = useState<string>("");

	const addSoundEffect = async () => {
		if (!videoFile || !soundEffect) return;

		await ffmpeg.load();
		await ffmpeg.writeFile("input.webm", await fetchFile(videoFile));
		await ffmpeg.writeFile("effect.mp3", await fetchFile(soundEffect));

		await ffmpeg.exec([
			'-i input.webm -i effect.mp3 -filter_complex "[1]volume=0.5[a];[0][a]amix" output.webm',
		]);

		const data = await ffmpeg.readFile("output.webm");
		console.log(data);
		const url = URL.createObjectURL(new Blob([data], { type: "video/webm" }));
		setOutputVideo(url);
	};

	return (
		<div>
			<h2>Add Sound Effects</h2>
			<input
				type="file"
				accept="audio/*"
				onChange={(e) =>
					setSoundEffect(e.target.files ? e.target.files[0] : null)
				}
			/>
			<button onClick={addSoundEffect}>Add Sound Effect</button>
			{outputVideo && (
				<div>
					<h2>Output Video with Sound</h2>
					<video
						style={{ height: "400px", width: "600px" }}
						controls
						src={outputVideo}
					/>
				</div>
			)}
		</div>
	);
};

export default SoundEffects;
