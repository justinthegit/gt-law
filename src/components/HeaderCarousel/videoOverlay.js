import React, { Component } from 'react';
import Vimeo from '@u-wave/react-vimeo';

import { VideoOverlayWrapper, VideoClose } from './style.js';
import closeBtn from '../../images/close-btn.svg';

class VideoOverlay extends Component {
	componentDidMount() {
		document.addEventListener('keydown', this.props.escFunction);
	}

	render() {
		return (
			<VideoOverlayWrapper videoOpen={this.props.videoOpen}>
				<VideoClose onClick={this.props.closeVideo}>
					<img src={closeBtn} alt="" />
				</VideoClose>
				<Vimeo
					video={this.props.videoURL}
					autoplay={false}
					onReady={this._onReady.bind(this)}
				/>
			</VideoOverlayWrapper>
		);
	}

	_onReady(video) {
		// access to player in all event handlers via event.target
		//event.target.pauseVideo();

		this.props.setVideo(video);
	}
}

export default VideoOverlay;
