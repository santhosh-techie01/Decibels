import React, { useState } from 'react';
const Playlists = () => {
  const [currentSong, setCurrentSong] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const songs = [
    { title: "Yaarumillaa", artist: "Santhosh Narayanan",src:"src/assets/Songs/Yaarumillaa.mp3" },
    { title: "Aasa Kooda", artist: "Radhul Nambiar, Chinmayi",src:"src/assets/Songs/Aasa Kooda.mp3"},
    { title: "Yaanji", artist: "D. Imman, Karthik, Shreya Ghoshal",src:"src/assets/Songs/Yaanji.mp3" },
    { title: "Newyork Nagaram", artist: "Santhosh Narayanan, Pradeep",src:"src/assets/Songs/Newyork Nagaram .mp3" },
    { title: "Ennadi Maayavi Nee", artist: "Dhanush",src:"src/assets/Songs/Ennadi Maayavi Nee .mp3" },
    { title: "Nenjin Ezhuth", artist: "Senthil Dass, Surmukhi Raman",src:"src/assets/Songs/Nenjin Ezhuth.mp3" },
    { title: "Adangaatha-Asuran", artist: "Sri Aravind",src:"src/assets/Songs/Adangaatha-Asuran.mp3" },
  ];
  const handleSelectSong = (song) => {
    if (currentSong?.title === song.title) {
      setIsPlaying(!isPlaying);
    } else {
      setCurrentSong(song);
      setIsPlaying(true);
    }
  };
  return (
    <div style={styles.app}>
      <div style={styles.songList}>
        <h1 style={styles.heading}>Playlist</h1>
        {songs.map((song, index) => (
          <div
            key={index}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            style={{
              ...styles.songItem,
              ...(hoveredIndex === index ? styles.songItemHover : {})
            }}
          >
            <div style={styles.songInfo}>
              <p style={styles.songTitle}>{song.title}</p>
              <p style={styles.songArtist}>{song.artist}</p>
            </div>
            <span
              onClick={() => handleSelectSong(song)}
              style={styles.playPauseIcon}
            >
              {currentSong?.title === song.title && isPlaying ? '⏸' : '▶'}
            </span>
          </div>
        ))}
      </div>
      <div style={styles.currentSongPlayer}>
        {currentSong ? (
          <>
            <p style={styles.nowPlaying}>Now Playing: {currentSong.title}</p>
            <p style={styles.artist}>Artist: {currentSong.artist}</p>
            <span
              onClick={() => setIsPlaying(!isPlaying)}
              style={styles.playPauseIcon}
            >
              {isPlaying ? '⏸' : '▶'}
            </span>
          </>
        ) : (
          <p style={styles.noSongSelected}>No song selected</p>
        )}
      </div>
    </div>
  );
};

const styles = {
  app: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: '#121212',
    color: 'white',
    minHeight: '100vh',
    width: '100vw',
    padding: '20px'
  },
  songList: {
    width: '100%',
    maxWidth: '600px',
    borderBottom: '1px solid #ccc'
  },
  heading: {
    textAlign: 'center',
    margin: '20px 0',
    fontSize: '24px',
    color: 'white'
  },
  songItem: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px',
    borderBottom: '1px solid #333',
    cursor: 'pointer',
    color: 'white',
  },
  songItemHover: {
    backgroundColor: '#333'
  },
  songInfo: {
    display: 'flex',
    flexDirection: 'column',
  },
  songTitle: {
    margin: 0
  },
  songArtist: {
    margin: 0,
    color: '#999'
  },
  playPauseIcon: {
    fontSize: '24px',
    cursor: 'pointer',
    padding: '5px',
    borderRadius: '50%',
  },
  currentSongPlayer: {
    marginTop: '20px',
    padding: '10px',
    border: '1px solid #ccc',
    width: '100%',
    maxWidth: '600px',
    textAlign: 'center',
    backgroundColor: '#0077b6',
  },
  nowPlaying: {
    margin: 0,
    fontSize: '16px'
  },
  artist: {
    margin: 0,
    fontSize: '14px',
    color: 'black'
  },
  noSongSelected: {
    margin: 0,
    fontSize: '16px',
    color: '#999'
  }
};

// Responsive styles
const responsiveStyles = `
  @media (max-width: 768px) {
    .songList {
      max-width: 100%;
    }

    .currentSongPlayer {
      max-width: 100%;
    }
  }

  @media (max-width: 480px) {
    .heading {
      font-size: 20px;
    }

    .songTitle, .songArtist {
      font-size: 14px;
    }

    .nowPlaying, .noSongSelected, .artist {
      font-size: 14px;
    }
  }
`;

const AppWithStyles = () => (
  <>
    <style>{responsiveStyles}</style>
    <Playlists />
  </>
);

export default AppWithStyles;
