import React, { Component } from 'react';
// import Vimeo from '@u-wave/react-vimeo';
import ReactPlayer from 'react-player'

import { VideoOverlayWrapper, VideoClose } from './style.js';
import closeBtn from '../../images/close-btn.svg';

class VideoOverlay extends Component {

	componentDidMount() {
		document.addEventListener('keydown', this.props.escFunction);
	}

	render() {

		const {videoOpen, closeVideo, videoURL, videoPlaying} = this.props

		return (
			<VideoOverlayWrapper videoOpen={videoOpen}>
				<VideoClose onClick={closeVideo}>
					<img src={closeBtn} alt="" />
				</VideoClose>
				<ReactPlayer
					url={videoURL}
					playing={videoPlaying}
					width='100%'
          height='100%'
				/>
			</VideoOverlayWrapper>
		);
	}

}

export default VideoOverlay;
