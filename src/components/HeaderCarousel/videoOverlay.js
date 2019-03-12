import React, { Component } from 'react';
import { VideoOverlayWrapper, VideoClose } from './style.js';
import closeBtn from '../../images/close-btn.svg';

class VideoOverlay extends Component {

	componentDidMount(){
    document.addEventListener("keydown", this.props.escFunction, false);
  }
  componentWillUnmount(){
    document.removeEventListener("keydown", this.props.escFunction, false);
  }
	render() {

		
		return (
			<VideoOverlayWrapper videoOpen={this.props.videoOpen}>
			<VideoClose onClick={this.props.videoClick}>
					<img src={closeBtn} alt="" />
				</VideoClose>
			
			</VideoOverlayWrapper>
		);
	}
}

export default VideoOverlay;
