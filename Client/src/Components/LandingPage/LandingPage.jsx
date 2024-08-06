import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faSearch, faHeart, faCompactDisc, faMusic, faList, faPlayCircle, faPlay, faPause, faForward, faBackward } from '@fortawesome/free-solid-svg-icons';
const MusicPlayer = ({ song, playing, onPlayPause, onNext, onPrev }) => (
    <div style={styles.playerContainer}>
        <div style={styles.playerNowPlaying}>Now Playing</div>
        <img src={song.img} alt={song.name} style={styles.playerImage} />
        <div style={styles.playerSongTitle}>{song.name}</div>
        <div style={styles.playerArtist}>{song.artist}</div>
        <div style={styles.playerControls}>
            <button onClick={onPrev} style={styles.btnAction}>
                <FontAwesomeIcon icon={faBackward} />
            </button>
            <button onClick={onPlayPause} style={styles.btnAction}>
                <FontAwesomeIcon icon={playing ? faPause : faPlay} />
            </button>
            <button onClick={onNext} style={styles.btnAction}>
                <FontAwesomeIcon icon={faForward} />
            </button>
        </div>
    </div>
);

const LandingPage = () => {
    const [playing, setPlaying] = useState(false);
    const [index, setIndex] = useState(0);
    const [albumOffset, setAlbumOffset] = useState(0);
    const [currentSong, setCurrentSong] = useState({});

    const songs = [
        { name: "Ennadi Maayavi Nee", artist: "Sid Sriram", img: "https://a10.gaanacdn.com/gn_img/albums/dwN39y83DP/wN395vAv3D/size_l_1537963988.webp", src: "src/assets/Songs/Ennadi Maayavi Nee .mp3" },
        { name: "Yaanji", artist: "Anirudh Ravichander, Shakthisree Gopalan", img: "https://1601606126.rsc.cdn77.org/raagaimg/r_img/250/t/t0004517-1.jpg", src: "src/assets/Songs/Yaanji.mp3" },
        { name: "Newyork Nagam", artist: "A.R. Rahman,Shreya Ghosal", img: "https://1601606126.rsc.cdn77.org/raagaimg/r_img/250/t/t0000835.jpg", src: "src/assets/Songs/Newyork Nagaram .mp3" },
    ];

    const albums = [
        { name: "Aasa koda", img: "https://a10.gaanacdn.com/gn_img/albums/R7vKX66Wmr/vKXrXMvVWm/size_l.jpg", src: "src/assets/Songs/Aasa Kooda.mp3" },
        { name: "Adangaatha-Asuran", img: "https://a10.gaanacdn.com/gn_img/albums/koMWQ4B3qL/MWQ4lMmA3q/size_l.jpg", src: "src/assets/Songs/Adangaatha-Asuran.mp3" },
        { name: "Nenjin Ezhuth", img: "https://a10.gaanacdn.com/gn_img/albums/NOXWVRgWkq/XWVVd97zWk/size_l_1720517621.jpg", src: "src/assets/Songs/Nenjin Ezhuth.mp3" },
        { name: "Kadharalz", img: "https://a10.gaanacdn.com/gn_img/albums/01A3mrWNQX/A3moz5nabN/size_l_1718084020.jpg", src: "src/assets/Songs/Kadharalz.mp3" },
        { name: "Whistle Podu", img: "https://a10.gaanacdn.com/gn_img/albums/lJvKa56KDV/vKa5rQXXKD/size_l_1713337386.webp", src: "src/assets/Songs/Whistle Podu.mp3" },
        { name: "Tauba Tauba", img: "https://a10.gaanacdn.com/gn_img/albums/jBr3gybR1m/r3gerl49bR/size_l_1719911865.jpg", src: "src/assets/Songs/Tauba Tauba.mp3" },
    ];

    useEffect(() => {
        setCurrentSong(songs[0]);
    }, []);

    const justPlay = () => {
        const audio = document.getElementById('audio');
        if (playing) {
            audio.pause();
        } else {
            audio.play();
        }
        setPlaying(!playing);
    };

    const nextSong = () => {
        setIndex((index + 1) % songs.length);
        setCurrentSong(songs[(index + 1) % songs.length]);
    };

    const previousSong = () => {
        setIndex((index - 1 + songs.length) % songs.length);
        setCurrentSong(songs[(index - 1 + songs.length) % songs.length]);
    };

    const nextAlbum = () => {
        setAlbumOffset((prevOffset) => Math.min(prevOffset + 1, albums.length - 3));
    };

    const previousAlbum = () => {
        setAlbumOffset((prevOffset) => Math.max(prevOffset - 1, 0));
    };

    const playAlbum = (album) => {
        setCurrentSong(album);
        const audio = document.getElementById('audio');
        audio.src = album.src;
        audio.play();
        setPlaying(true);
    };

    return (
        <div style={styles.container}>
            <div style={styles.sidebar}>
                <div style={styles.logo}>
                    Decibel
                </div>
                <div style={styles.menu}>
                    <p>Menu</p>
                  
                    <a href="/Explore" style={styles.menuItem}>
                        <FontAwesomeIcon icon={faSearch} style={styles.icon} /> Explore
                    </a>
                </div>
                <div style={styles.library}>
                    <p>Updates</p>
                    <a href="/Podcasts" style={styles.menuItem}>
                        <FontAwesomeIcon icon={faCompactDisc} style={styles.icon} /> Podcasts
                    </a>
                    <a href="/Blog" style={styles.menuItem}>
                        <FontAwesomeIcon icon={faMusic} style={styles.icon} /> Blog
                    </a>
                </div>
                <div style={styles.myPlaylist}>
                    <p>Others</p>
                    <a href="/Events" style={styles.menuItem}>
                        <FontAwesomeIcon icon={faList} style={styles.icon} /> Events
                    </a>
                    <a href="/Playlists" style={styles.menuItem}>
                        <FontAwesomeIcon icon={faMusic} style={styles.icon} /> Playlists
                    </a>
                </div>
            </div>
            <div style={styles.content}>
                <div style={styles.topContent}>
                    <div style={{ ...styles.trending, backgroundImage: 'url(https://images.pexels.com/photos/306088/pexels-photo-306088.jpeg?auto=compress&cs=tinysrgb&w=600)' }}>
                        <div style={styles.left}>
                            <div style={styles.type}>Trending</div>
                            <div style={styles.title}>Top Trending Songs</div>
                            <div style={styles.artist}>Various Artists</div>
                            <div style={styles.view}>123,456,789 Views</div>
                            <a href="/Playlists" style={styles.btnPlay}>Play Now</a>
                        </div>
                    </div>
                </div>
                <div style={styles.bottomContent}>
                    <div style={styles.leftSide}>
                        <div style={styles.leftSideTop}>
                            <div style={styles.topAlbumsTitle}>
                                <div>Top Albums</div>
                                <div>
                                    <button style={styles.btnNav} onClick={previousAlbum}>&lt;</button>
                                    <button style={styles.btnNav} onClick={nextAlbum}>&gt;</button>
                                </div>
                            </div>
                            <div style={styles.topAlbumsContainer}>
                                <div style={{ ...styles.topAlbums, transform: `translateX(-${albumOffset * 110}px)` }}>
                                    {albums.map((album, index) => (
                                        <div style={styles.cardAlbums} key={index} onClick={() => playAlbum(album)}>
                                            <img src={album.img} alt={album.name} style={styles.cardImg} />
                                            <div>{album.name}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div style={styles.leftSideBottom}>
                            <div style={styles.genresTableTitle}>
                                <div>Genres</div>
                                <a href="/Explore" style={styles.seeAll}>See All</a>
                            </div>
                            <div style={styles.genresTable}>
                                <div style={styles.gridItem}>Pop</div>
                                <div style={styles.gridItem}>Rock</div>
                                <div style={styles.gridItem}>Hip-Hop</div>
                                <div style={styles.gridItem}>Jazz</div>
                                <div style={styles.gridItem}>Classical</div>
                                <div style={styles.gridItem}>Electronic</div>
                                <div style={styles.gridItem}>Country</div>
                                <div style={styles.gridItem}>R&B</div>
                            </div>
                        </div>
                    </div>
                    <div style={styles.rightSide}>
                        <MusicPlayer
                            song={currentSong}
                            playing={playing}
                            onPlayPause={justPlay}
                            onNext={nextSong}
                            onPrev={previousSong}
                        />
                    </div>
                </div>
            </div>
            <audio id="audio" src={currentSong.src} /> 
        </div>
    );
};

const styles = {
    container: {
        display: 'flex',
        minHeight: '100vh',
        backgroundColor: '#121212',
        fontfamily:'Sans-serif,Poppins',
    },
    sidebar: {
        width: '250px',
        padding: '20px',
        backgroundColor: '#252525',
        color: '#fff',
        display: 'flex',
        flexDirection: 'column',
    },
    logo: {
        fontSize: '24px',
        fontWeight: 'bold',
        marginBottom: '20px',
    },
    menu: {
        marginBottom: '20px',
    },
    menuItem: {
        display: 'flex',
        alignItems: 'center',
        padding: '10px 0',
        color: '#fff',
        textDecoration: 'none',
        fontSize: '18px',
    },
    icon: {
        marginRight: '10px',
    },
    library: {
        marginBottom: '20px',
    },
    myPlaylist: {},
    content: {
        flex: 1,
        padding: '20px',
    },
    topContent: {
        marginBottom: '20px',
    },
    trending: {
        display: 'flex',
        padding: '20px',
        borderRadius: '10px',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        color: '#fff',
        boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
    },
    left: {
        maxWidth: '300px',
    },
    type: {
        fontSize: '14px',
        fontWeight: 'bold',
        textTransform: 'uppercase',
        marginBottom: '10px',
    },
    title: {
        fontSize: '24px',
        fontWeight: 'bold',
        marginBottom: '10px',
    },
    artist: {
        fontSize: '18px',
        marginBottom: '10px',
    },
    view: {
        fontSize: '14px',
        marginBottom: '10px',
    },
    btnPlay: {
        display: 'inline-block',
        padding: '10px 20px',
        fontSize: '16px',
        fontWeight: 'bold',
        color: '#fff',
        backgroundColor: '#ff4b2b',
        borderRadius: '5px',
        textDecoration: 'none',
    },
    bottomContent: {
        display: 'flex',
    },
    leftSide: {
        flex: 2,
        marginRight: '20px',
    },
    rightSide: {
        flex: 1,
    },
    leftSideTop: {
        marginBottom: '20px',
        padding: '20px',
        borderRadius: '10px',
        backgroundColor: '#fff',
        boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
    },
    topAlbumsTitle: {
        display: 'flex',
        justifyContent: 'space-between',
        marginBottom: '10px',
        fontSize: '18px',
        fontWeight: 'bold',
        color: '#121212',
    },
    topAlbumsContainer: {
        overflow: 'hidden',
    },
    topAlbums: {
        display: 'flex',
        transition: 'transform 0.3s ease-in-out',
    },
    cardAlbums: {
        width: '100px',
        marginRight: '10px',
        textAlign: 'center',
        cursor: 'pointer',
    },
    cardImg: {
        width: '100%',
        borderRadius: '10px',
        marginBottom: '5px',
    },
    btnNav: {
        background: 'none',
        border: 'none',
        fontSize: '18px',
        cursor: 'pointer',
    },
    leftSideBottom: {
        padding: '20px',
        borderRadius: '10px',
        backgroundColor: '#fff',
        boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
    },
    genresTableTitle: {
        display: 'flex',
        justifyContent: 'space-between',
        marginBottom: '10px',
        fontSize: '18px',
        fontWeight: 'bold',
        color: '#121212',
    },
    seeAll: {
        textDecoration: 'none',
        fontSize: '14px',
        color: '#ff4b2b',
    },
    genresTable: {
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)',
        gap: '10px',
    },
    gridItem: {
        padding: '10px',
        textAlign: 'center',
        backgroundColor: '#f0f0f0',
        borderRadius: '5px',
        boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
        cursor: 'pointer',
        transition: 'background-color 0.3s ease',
    },
    gridItemHover: {
        backgroundColor: '#e0e0e0',
    },
    playerContainer: {
        padding: '20px',
        borderRadius: '10px',
        backgroundColor: '#fff',
        boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
        textAlign: 'center',
    },
    playerNowPlaying: {
        fontSize: '14px',
        marginBottom: '10px',
    },
    playerImage: {
        width: '100%',
        maxWidth: '200px',
        borderRadius: '10px',
        marginBottom: '10px',
    },
    playerSongTitle: {
        fontSize: '18px',
        fontWeight: 'bold',
        marginBottom: '5px',
    },
    playerArtist: {
        fontSize: '14px',
        color: '#666',
        marginBottom: '10px',
    },
    playerControls: {
        display: 'flex',
        justifyContent: 'center',
        gap: '10px',
    },
    btnAction: {
        background: 'none',
        border: 'none',
        fontSize: '24px',
        cursor: 'pointer',
        color: '#ff4b2b',
    },
};

export default LandingPage;
