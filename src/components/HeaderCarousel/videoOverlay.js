import React, { Component } from 'react';
import YouTube from 'react-youtube';

import { VideoOverlayWrapper, VideoClose } from './style.js';
import closeBtn from '../../images/close-btn.svg';

class VideoOverlay extends Component {

	componentDidMount() {
		document.addEventListener(
			'keydown',
			this.props.escFunction
    );
	}


	render() {
		const opts = {
			height: '800',
			width: '1200',
			playerVars: {
				// https://developers.google.com/youtube/player_parameters
				autoplay: 0,
				showinfo: 0
			}
		};

		return (
			<VideoOverlayWrapper videoOpen={this.props.videoOpen}>
				<VideoClose onClick={this.props.closeVideo}>
					<img src={closeBtn} alt="" />
				</VideoClose>

				<YouTube videoId={this.props.videoURL} opts={opts} onReady={this._onReady.bind(this)} />
			</VideoOverlayWrapper>
		);
	}

	_onReady(event) {
		// access to player in all event handlers via event.target
    //event.target.pauseVideo();
    
    const elVideo = event.target;

    this.props.setVideo(elVideo);
    
    
	}
}

export default VideoOverlay;
