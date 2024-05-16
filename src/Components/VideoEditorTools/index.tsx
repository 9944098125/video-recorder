import React, { useRef, useState } from "react";
import { FFmpeg } from "@ffmpeg/ffmpeg";
import { fetchFile } from "@ffmpeg/util";

const ffmpeg = new FFmpeg();

type VideoEditorToolsProps = {
	videoFile: File | null;
};

const VideoEditorTools: React.FC<VideoEditorToolsProps> = ({ videoFile }) => {
	const [splitTime, setSplitTime] = useState<number>(0);
	const [outputVideos, setOutputVideos] = useState<string[]>([]);
	const voiceOverRef = useRef<HTMLInputElement>(null);

	const splitVideo = async () => {
		if (!videoFile) return;

		await ffmpeg.load();
		await ffmpeg.writeFile("input.webm", await fetchFile(videoFile));

		await ffmpeg.exec([
			"-i",
			"input.webm",
			"-t",
			`${splitTime}`,
			"output1.webm",
		]);
		await ffmpeg.exec([
			"-i",
			"input.webm",
			"-ss",
			`${splitTime}`,
			"output2.webm",
		]);

		const data1 = ffmpeg.readFile("output1.webm");
		const data2 = ffmpeg.readFile("output2.webm");
		console.log(data1, data2);
		// const url1 = URL.createObjectURL(
		// 	new Blob([data1.buffer], { type: "video/webm" })
		// );
		// const url2 = URL.createObjectURL(
		// 	new Blob([data2.buffer], { type: "video/webm" })
		// );
		// setOutputVideos([url1, url2]);
	};

	const addVoiceOver = async () => {
		if (!videoFile || !voiceOverRef.current?.files?.[0]) return;

		const voiceOverFile = voiceOverRef.current.files[0];
		await ffmpeg.load();
		await ffmpeg.writeFile("input.webm", await fetchFile(videoFile));
		await ffmpeg.writeFile("voiceover.mp3", await fetchFile(voiceOverFile));

		await ffmpeg.exec([
			"-i",
			"input.webm",
			"-i",
			"voiceover.mp3",
			"-c:v",
			"copy",
			"-map",
			"0:v:0",
			"-map",
			"1:a:0",
			"output.webm",
		]);

		const data = ffmpeg.readFile("output.webm");
		console.log(data);
		// const url = URL.createObjectURL(new Blob([data], { type: "video/webm" }));
		// setOutputVideos([url]);
	};

	return (
		<div>
			<h2>Video Editing Tools</h2>
			<div>
				<label>Split Video at (seconds):</label>
				<input
					type="number"
					value={splitTime}
					onChange={(e) => setSplitTime(Number(e.target.value))}
				/>
				<button onClick={splitVideo}>Split Video</button>
			</div>
			<div>
				<label>Add Voice Over:</label>
				<input type="file" accept="audio/*" ref={voiceOverRef} />
				<button onClick={addVoiceOver}>Add Voice Over</button>
			</div>
			{outputVideos.map((url, index) => (
				<video
					style={{ height: "400px", width: "600px" }}
					key={index}
					controls
					src={url}
				/>
			))}
		</div>
	);
};

export default VideoEditorTools;
