import React, { useState } from 'react';
import styled from 'styled-components';

const VideoEmbedder = () => {
    const [videoSrc, setVideoSrc] = useState('');

    const handleDrop = (event) => {
        event.preventDefault();
        const file = event.dataTransfer.files[0];
        if (file.type === 'video/mp4') {
            const videoURL = URL.createObjectURL(file);
            setVideoSrc(videoURL);
        }
    };

    const handleFileInputChange = (event) => {
        const file = event.target.files[0];
        if (file && file.type === 'video/mp4') {
            const videoURL = URL.createObjectURL(file);
            setVideoSrc(videoURL);
        }
    };

    const handleDragOver = (event) => {
        event.preventDefault();
    };

    return (
        <UploadDiv
            onDrop={handleDrop}
            onDragOver={handleDragOver}
        >
            {videoSrc ? (
                <VideoContainer>
                    <video controls>
                        <source src={videoSrc} type="video/mp4" />
                    </video>
                </VideoContainer>
            ) : (
                <div>
                    <p>Drop an MP4 video file here or</p>
                    <input type="file" accept="video/mp4" onChange={handleFileInputChange} />
                </div>
            )}
        </UploadDiv>
    );
};

export default VideoEmbedder;

const UploadDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    text-align: center;

    max-width: 100%;
    max-height: 100%;
    height: auto;
    width: auto;

    border: 1px dashed gray;
`

const VideoContainer = styled.div`
  max-width: 50rem;
  max-height: 50rem;
  height: auto;
  width: auto;

  video {
    max-width: 100%;
    max-height: 100%;
    height: auto;
    width: auto;
  }
`;