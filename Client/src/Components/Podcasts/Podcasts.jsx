import React, { useState, useRef } from 'react';

const MusicPlayerPage = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const videoRef = useRef(null);

  const videoQueue = [
    { id: 1, title: "Elon Musk: Advice for Young People | Lex Fridman Podcast Clips", videoSrc: "src/assets/Podcastings/Elon Musk_ Advice for Young People _ Lex Fridman Podcast Clips.mp4" },
    { id: 2, title: "Elon Musk on the Lessons of History | Lex Fridman Podcast Clips", videoSrc: "src/assets/Podcastings/videoplayback (1).mp4" },
    { id: 3, title: "One of the Greatest Speeches Ever | Steve Jobs", videoSrc: "src/assets/Podcastings/One of the Greatest Speeches Ever _ Steve Jobs.mp4" },
    { id: 4, title: "Priyanka Chopra’s Speech Will Leave You SPEECHLESS — Best Life Advice", videoSrc: "src/assets/Podcastings/Priyanka Chopra’s Speech Will Leave You SPEECHLESS — Best Life Advice.mp4" },
    { id: 5, title: "Thomas and the Royal Engine | Thomas & Friends Storytime | Kids Podcast and Stories", videoSrc: "src/assets/Podcastings/Thomas and the Royal Engine _ Thomas & Friends Storytime _ Kids Podcast and Stories.mp4" },
  ];

  const handlePlayPause = () => {
    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handlePrevious = () => {
    const newIndex = currentVideoIndex > 0 ? currentVideoIndex - 1 : videoQueue.length - 1;
    setCurrentVideoIndex(newIndex);
    setIsPlaying(false);
    videoRef.current.src = videoQueue[newIndex].videoSrc;
    videoRef.current.play();
    setIsPlaying(true);
  };

  const handleNext = () => {
    const newIndex = (currentVideoIndex + 1) % videoQueue.length;
    setCurrentVideoIndex(newIndex);
    setIsPlaying(false);
    videoRef.current.src = videoQueue[newIndex].videoSrc;
    videoRef.current.play();
    setIsPlaying(true);
  };

  const handleTimeUpdate = () => {
    setCurrentTime(videoRef.current.currentTime);
  };

  const handleLoadedMetadata = () => {
    setDuration(videoRef.current.duration);
  };

  const handleSeek = (e) => {
    videoRef.current.currentTime = e.target.value;
    setCurrentTime(e.target.value);
  };

  const handleQueuePlay = (index) => {
    setCurrentVideoIndex(index);
    setIsPlaying(false);
    videoRef.current.src = videoQueue[index].videoSrc;
    videoRef.current.play();
    setIsPlaying(true);
  };

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60).toString().padStart(2, '0');
    return `${minutes}:${secs}`;
  };

  const containerStyle = {
    display: 'flex',
    height: '100vh',
    width: '100vw',
    backgroundColor: '#282c34',
    color: '#ffffff',
    fontFamily: 'Arial, sans-serif',
  };

  const mainContentStyle = {
    flex: '3 1 0',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '20px',
    overflow: 'hidden',
    maxWidth: 'calc(100% - 400px)',
  };

  const mediaContainerStyle = {
    width: '100%',
    height: '0',
    paddingTop: '56.25%', // 16:9 aspect ratio
    position: 'relative',
    marginBottom: '20px',
  };

  const mediaStyle = {
    position: 'absolute',
    top: '0',
    left: '0',
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  };

  const controlsStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '15px',
    width: '80%',
    maxWidth: '600px',
  };

  const seekBarStyle = {
    width: '100%',
  };

  const timeInfoStyle = {
    fontSize: '16px',
  };

  const queueStyle = {
    flex: '1 1 400px',
    display: 'flex',
    flexDirection: 'column',
    padding: '20px',
    backgroundColor: '#1e1e1e',
    overflowY: 'auto',
    boxShadow: 'inset -5px 0 10px rgba(0,0,0,0.3)',
  };

  const queueItemStyle = {
    padding: '10px',
    backgroundColor: '#2d2d2d',
    borderRadius: '8px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.2)',
    marginBottom: '10px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  };

  const iconButtonStyle = {
    fontSize: '24px',
    border: 'none',
    backgroundColor: 'transparent',
    color: '#ffffff',
    cursor: 'pointer',
  };

  const playIcon = '▶️'; // Unicode play icon
  const pauseIcon = '⏸️'; // Unicode pause icon
  const backwardIcon = '⏪'; // Unicode backward icon
  const forwardIcon = '⏩'; // Unicode forward icon

  return (
    <div style={containerStyle}>
      <div style={mainContentStyle}>
        <div style={mediaContainerStyle}>
          <video
            ref={videoRef}
            style={mediaStyle}
            controls
            onTimeUpdate={handleTimeUpdate}
            onLoadedMetadata={handleLoadedMetadata}
          />
        </div>
        <div style={controlsStyle}>
          <div>
            <button onClick={handlePrevious} style={iconButtonStyle}>
              {backwardIcon}
            </button>
            <button onClick={handlePlayPause} style={iconButtonStyle}>
              {isPlaying ? pauseIcon : playIcon}
            </button>
            <button onClick={handleNext} style={iconButtonStyle}>
              {forwardIcon}
            </button>
          </div>
          <input
            type="range"
            min="0"
            max={duration}
            value={currentTime}
            onChange={handleSeek}
            style={seekBarStyle}
          />
          <div style={timeInfoStyle}>
            {formatTime(currentTime)} / {formatTime(duration)}
          </div>
        </div>
      </div>
      <div style={queueStyle}>
        <h2>Queue</h2>
        {videoQueue.map((video, index) => (
          <div key={video.id} style={queueItemStyle}>
            <div>
              <strong>{video.title}</strong>
            </div>
            <button onClick={() => handleQueuePlay(index)} style={iconButtonStyle}>
              {currentVideoIndex === index && isPlaying ? pauseIcon : playIcon}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MusicPlayerPage;
