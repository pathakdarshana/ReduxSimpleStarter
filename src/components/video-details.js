import React from 'react';

const VideoDetails = ({video}) => {
	if(!video){
		return <div>Loading</div>
	}
	const videoId = video.id.videoId;
	const url =  `https://www.youtube.com/embed/${videoId}`; 

	return (
		<div className='video-detail col-md-8'>
			<div className='embed-reponsive embed-responsive-4by3'>
				<iframe className='embed-reponsive-item' width="560" height="315" src={url} allowFullScreen=""> </iframe>
			</div>
			<div className='details'>
				<div>{video.snippet.title}</div>
				<div>{video.snippet.description}</div>
			</div>
		</div>
	);
}

export default VideoDetails;