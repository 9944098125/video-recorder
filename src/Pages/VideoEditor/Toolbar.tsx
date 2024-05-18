import React from "react";
import { FaLink } from "react-icons/fa";
import { CiVideoOn, CiTextAlignRight } from "react-icons/ci";
import { SiImessage } from "react-icons/si";
import { RiFirstAidKitFill } from "react-icons/ri";
import { BsThreeDots } from "react-icons/bs";
import VideoTypes from "../../Components/ToolbarParts/VideoTypes";
import useClickOutside from "../../Hooks/useClickOutside";
import Uploader from "../../Components/ToolbarParts/Uploader";
import Video from "../../Components/ToolbarParts/Video";
import Avatars from "../../Components/ToolbarParts/Avatars";
import SongPlayer from "../../Components/ToolbarParts/SongPlayer";

const stockVideos = [
	{ id: 1, url: "https://youtu.be/VGGbcaGeklg?si=KBU8ePQgrngsptNm" },
	{ id: 2, url: "https://youtu.be/S3pl101A0H8?si=eE5H9Bs-XvS6s1ZE" },
	{ id: 3, url: "https://youtu.be/4Pl9jkY7JK8?si=FZk4wUTt0c0fzZqb" },
];

const avatars = [
	{
		id: 1,
		src: "https://play-lh.googleusercontent.com/7Ak4Ye7wNUtheIvSKnVgGL_OIZWjGPZNV6TP_3XLxHC-sDHLSE45aDg41dFNmL5COA",
	},
	{
		id: 2,
		src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTzWsAw33KgN8K-jn51mofICU-VHn6DaCxprjo9-lOTEQi5QXB1CY-WhCdUcUqXvl2NSQ&usqp=CAU",
	},
	{
		id: 3,
		src: "https://pbs.twimg.com/media/FksPaP6XEAIXY9H.jpg",
	},
	{
		id: 4,
		src: "https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/321830247/original/aa20bcdaa1ed769431a116d0eaeb3ad3c2134c10/revolutionize-your-image-with-a-personalized-ai-avatar.jpg",
	},
	{
		id: 5,
		src: "https://approachableai.com/wp-content/uploads/2022/12/AIPortraitExample-scaled.jpg",
	},
	{
		id: 6,
		src: "https://imgv3.fotor.com/images/gallery/watercolor-female-avatar.jpg",
	},
];

const songs = [
	{
		title: "Song 1",
		url: "/songs/song1.mp3",
		id: 1,
		time: "2:46",
		img: "https://variety.com/wp-content/uploads/2022/07/Music-Streaming-Wars.jpg?w=1000&h=563&crop=1",
	},
	{
		title: "Song 2",
		url: "/songs/song2.mp3",
		id: 2,
		time: "2:56",
		img: "https://blog.hubspot.com/hs-fs/hubfs/motivational-songs.webp?width=595&height=400&name=motivational-songs.webp",
	},
	{
		title: "Song 3",
		url: "/songs/song3.mp3",
		id: 3,
		time: "2:39",
		img: "https://cdn.mos.cms.futurecdn.net/JeNUjeekiJbgNdwzYLgjwS.jpg",
	},
	{
		title: "Song 4",
		url: "/songs/song4.mp3",
		id: 4,
		time: "1:26",
		img: "https://hips.hearstapps.com/hmg-prod/images/mh-1-27-love-songs-1611762837.jpg?crop=0.301xw:0.603xh;0.699xw,0.0481xh&resize=640:*",
	},
	{
		title: "Song 5",
		url: "/songs/song5.mp3",
		id: 5,
		time: "3:69",
		img: "https://i.cbc.ca/1.7020158.1699304992!/fileImage/httpImage/zenesoul-on-the-block.jpg",
	},
];

const soundEffects = [
	{
		title: "Effect 1",
		url: "/songs/se-1.wav",
		id: 1,
		time: "2:46",
		img: "https://static.vecteezy.com/system/resources/previews/013/005/650/original/swoosh-pop-art-comic-speech-bubbles-book-sound-effects-free-vector.jpg",
	},
	{
		title: "Effect 2",
		url: "/songs/se-2.wav",
		id: 2,
		time: "2:56",
		img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGexTGcQw50rYBcl6te6wYsHylJZ6RvREob1h9Z-MpTw&s",
	},
	{
		title: "Effect 3",
		url: "/songs/se-3.wav",
		id: 3,
		time: "2:39",
		img: "https://static1.cbrimages.com/wordpress/wp-content/uploads/2023/11/split-images-of-comic-sound-effect.jpg",
	},
	{
		title: "Effect 4",
		url: "/songs/se-4.wav",
		id: 4,
		time: "1:26",
		img: "https://media.gettyimages.com/id/1318557874/vector/boom-vector-comic-speech-bubble-effect.jpg?s=612x612&w=gi&k=20&c=JzsXG0W0DlUgGVYdjSDum32MGFXwlGTHOoaf1kdZU90=",
	},
	{
		title: "Effect 5",
		url: "/songs/se-5.wav",
		id: 5,
		time: "3:69",
		img: "https://media.istockphoto.com/id/1459479186/vector/comic-speech-bubbles-cartoon-balloons-on-colorful-retro-background-fun-clouds-sound-effect.jpg?s=612x612&w=0&k=20&c=NhP4W5NnwDNA6dp8c-VyHe5VlBFVdp49jBUkXr7oVKo=",
	},
];

const Toolbar = () => {
	const [showVideoTypes, setShowVideoTypes] = React.useState(false);

	const vtcRef = React.useRef(null);

	useClickOutside(vtcRef, () => {
		setShowVideoTypes(false);
	});

	return (
		<React.Fragment>
			<div className="p-2">
				<h4 className="text-secondary fw-bold fs-4 m-0">Add Media</h4>
				<div id="toolbar-side" style={{ height: "70vh", overflowY: "scroll" }}>
					{" "}
					<Uploader
						text="Click to Browse or drag them here..."
						head="Upload a video"
					/>
					<div className="d-flex align-items-center gap-4 px-2 mb-2">
						<div className="toolbar-icons">
							<CiVideoOn fontSize={35} color="grey" />
							<p className="text-secondary fs-6 fw-bold">Record</p>
						</div>
						<div className="toolbar-icons">
							<SiImessage fontSize={35} color="grey" />
							<p className="text-secondary fs-6 fw-bold">Text - Speech</p>
						</div>
					</div>
					<div className="d-flex align-items-center gap-4 px-2">
						<div style={{ position: "relative" }} className="toolbar-icons">
							<div className="new-container">New</div>
							<CiTextAlignRight fontSize={35} color="grey" />
							<p className="text-secondary fs-6 fw-bold">Voice</p>
						</div>
						<div className="w-50 mt-0">
							<div
								style={{ height: "40px", width: "100%" }}
								className="d-flex align-items-center lower-cards mb-2">
								<RiFirstAidKitFill fontSize={20} color="grey" />
								<p className="text-secondary m-0 ms-2 fs-6 fw-bold">
									Brand Kit
								</p>
							</div>
							<div
								style={{ height: "40px", width: "100%" }}
								className="d-flex align-items-center lower-cards">
								<FaLink fontSize={20} color="grey" />
								<p className="text-secondary m-0 ms-2 fs-6 fw-bold">Links</p>
							</div>
						</div>
					</div>
					<div className="stock-videos mb-3">
						<h5 className="text-secondary fw-bold fs-6">Stock Videos</h5>
						<div className="d-flex align-items-center gap-3">
							<span className="text-secondary">Animals</span>
							<span className="text-secondary">Nature</span>
							<span className="text-secondary">People</span>
							<BsThreeDots
								onClick={() => setShowVideoTypes(true)}
								fontSize={25}
								color="grey"
								style={{ cursor: "pointer" }}
							/>
							<div ref={vtcRef} className="video-types">
								<VideoTypes showVideoTypes={showVideoTypes} />
							</div>
						</div>
						<div
							id="stockVideos"
							style={{ width: "100%", overflowX: "scroll" }}
							className="d-flex align-items-center gap-2">
							{stockVideos.map((video: { id: number; url: string }) => (
								<Video key={video.id} src={video.url} />
							))}
						</div>
					</div>
					<div className="avatars-container mb-2">
						<h5 className="text-secondary fw-bold fs-6">AI Avatars</h5>
						<div
							id="stockVideos"
							style={{ width: "100%", overflowX: "scroll" }}
							className="d-flex align-items-center">
							{avatars.map((each) => (
								<Avatars src={each.src} key={each.id} />
							))}
						</div>
					</div>
					<div className="p-2">
						<h5 className="text-secondary fw-bold fs-6">Stock Music</h5>
						{songs.map((song: any) => (
							<SongPlayer song={song} key={song.id} />
						))}
					</div>
					<div className="p-2">
						<h5 className="text-secondary fw-bold fs-6">Sound Effects</h5>
						{soundEffects.map((song: any) => (
							<SongPlayer song={song} key={song.id} />
						))}
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Toolbar;
