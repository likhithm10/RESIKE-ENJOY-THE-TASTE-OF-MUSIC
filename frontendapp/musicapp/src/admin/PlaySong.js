import React, { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import { FaPlay, FaPause, FaStepBackward, FaStepForward, FaRedo, FaUndo } from 'react-icons/fa'; // Importing icons
import config from '../config';
import './playsong.css';
import { Route, Routes, useNavigate, useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

export default function PlaySong() {
    const { songname } = useParams();
    const [songs, setSongs] = useState([]);
    const [currentSongIndex, setCurrentSongIndex] = useState(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const audioRefs = useRef([]);
    const [currentTimes, setCurrentTimes] = useState([]);
    const [durations, setDurations] = useState([]);
    const [isDragging, setIsDragging] = useState(false);
    const [albumData, setAlbumData] = useState([]);
    const [songDurations, setSongDurations] = useState({});
    const navigate = useNavigate();

    useEffect(() => {
        const fetchSongData = async () => {
            try {
                const response = await axios.get(`${config.url}/playsong/${songname}`);
                setSongs(response.data);
                setCurrentTimes(response.data.map(() => 0));
                setDurations(response.data.map(() => 0));
                audioRefs.current = response.data.map(() => React.createRef());
            } catch (error) {
                console.error(error.message);
            }
        };

        if (songname) {
            fetchSongData();
        }
    }, [songname]);

    useEffect(() => {
        if (songs.length > 0) {
            playAudio(0);
        }
    }, [songs]);

    useEffect(() => {
        const fetchSongsData = async () => {
            try {
                const response = await axios.get(`${config.url}/viewplaysongs/${songname}`);
                setAlbumData(response.data);

            } catch (error) {
                console.error(error.message);
            }
        };

        if (songname) {
            fetchSongsData();
        }
    }, [songname]);

    useEffect(() => {
        const fetchSongDurations = async () => {
            for (const song of albumData) {
                try {
                    const audio = new Audio(`${config.url}/songaudio/${song.file}`);
                    await audio.load();
                    audio.onloadedmetadata = () => {
                        setSongDurations(currentDurations => ({
                            ...currentDurations,
                            [song.file]: audio.duration
                        }));
                    };
                } catch (error) {
                    console.error(`Error fetching duration for ${song.file}: ${error.message}`);
                    setSongDurations(currentDurations => ({
                        ...currentDurations,
                        [song.file]: 0
                    }));
                }
            }
        };

        if (albumData.length > 0) {
            fetchSongDurations();
        }
    }, [albumData]);

    const playAudio = (index) => {
        const audioElement = audioRefs.current[index]?.current;
        if (audioElement) {
            audioElement.src = `${config.url}/songaudio/${songs[index].file}`;
            const playPromise = audioElement.play();
            if (playPromise !== undefined) {
                playPromise
                    .then(() => {
                        setCurrentSongIndex(index);
                        setIsPlaying(true);
                    })
                    .catch((error) => console.error('Autoplay was prevented:', error));
            }
        }
    };
    

    const toggleAudio = (index) => {
        if (currentSongIndex === index) {
            if (isPlaying) {
                audioRefs.current[index].current.pause();
                setIsPlaying(false);
            } else {
                playAudio(index);
            }
        } else {
            if (currentSongIndex !== null && isPlaying) {
                audioRefs.current[currentSongIndex].current.pause();
            }
            playAudio(index);
        }
    };

    const updateTime = (index) => {
        if (!isDragging && audioRefs.current[index]?.current) {
            setCurrentTimes((prevTimes) => {
                const newTimes = [...prevTimes];
                newTimes[index] = audioRefs.current[index].current.currentTime;
                return newTimes;
            });
        }
    };

    const updateDuration = (index) => {
        setDurations((prevDurations) => {
            const newDurations = [...prevDurations];
            newDurations[index] = audioRefs.current[index].current.duration;
            return newDurations;
        });
    };

    const formatTime = (time) => {
        const minutes = Math.floor(time / 60);
        const seconds = Math.floor(time % 60);
        return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    };

    const handleProgressClick = (index, event) => {
        const progressBar = event.target;
        const newTime = (event.nativeEvent.offsetX / progressBar.offsetWidth) * durations[index];
        audioRefs.current[index].current.currentTime = newTime;
        setCurrentTimes((prevTimes) => {
            const newTimes = [...prevTimes];
            newTimes[index] = newTime;
            return newTimes;
        });
    };

    const handleDragStart = () => {
        setIsDragging(true);
    };

    const handleDragEnd = () => {
        setIsDragging(false);
    };

    const nextSong = () => {
        const currentIndexInAlbumData = albumData.findIndex(song => song.file === songs[currentSongIndex].file);
        const nextIndex = (currentIndexInAlbumData + 1) % albumData.length;
        const nextSongIndex = songs.findIndex(song => song.file === albumData[nextIndex].file);
        toggleAudio(nextSongIndex);
    };

    const prevSong = () => {
        const prevIndex = (currentSongIndex - 1 + songs.length) % songs.length;
        toggleAudio(prevIndex);
    };

    const forwardSong = () => {
        const newTime = currentTimes[currentSongIndex] + 5;
        audioRefs.current[currentSongIndex].current.currentTime = Math.min(newTime, durations[currentSongIndex]);
    };

    const backwardSong = () => {
        const newTime = currentTimes[currentSongIndex] - 5;
        audioRefs.current[currentSongIndex].current.currentTime = Math.max(newTime, 0);
    };

    const handlePlayButtonClick = async (songname) => {
        try {
            navigate(`/playsong/${songname}`);
        } catch (error) {
            console.error(error.message);
        }
    };

    

    function handleFavoriteButtonClick(song) {
        console.log(`Adding ${song.songname} to favorites`);
    }

    return (
        <div className="main_content">
            <div className="info">
                <div className="playlist">
                    {songs.map((song, index) => (
                        <div key={index} className='card1'>
                            <img src={`${config.url}/albumimage/${song.image}`} alt={song.songname} className="songImage" />
                            <audio
                                ref={audioRefs.current[index]}
                                onTimeUpdate={() => updateTime(index)}
                                onDurationChange={() => updateDuration(index)}
                                onEnded={nextSong}
                            />
                            <div className="title">{song.songname}</div>
                            <div className="timeBarContainer">
                                <div
                                    className="timeBar"
                                    onClick={(event) => handleProgressClick(index, event)}
                                    onMouseDown={handleDragStart}
                                    onMouseUp={handleDragEnd}
                                    onMouseLeave={handleDragEnd}
                                >
                                    <div className="progressBar" style={{ width: `${(currentTimes[index] / durations[index]) * 100}%` }}></div>
                                </div>
                                <div className="timeDisplay">{formatTime(currentTimes[index])} / {formatTime(durations[index])}</div>
                            </div>
                            <div className="controls">
                                <FaStepBackward className="controlIcon" onClick={prevSong} />
                                <FaUndo className="controlIcon" onClick={backwardSong} />
                                {index === currentSongIndex && isPlaying ? (
                                    <FaPause className="controlIcon" onClick={() => toggleAudio(index)} />
                                ) : (
                                    <FaPlay className="controlIcon" onClick={() => toggleAudio(index)} />
                                )}
                                <FaRedo className="controlIcon" onClick={forwardSong} />
                                <FaStepForward className="controlIcon" onClick={nextSong} />
                                {/* <input type="range" min="0" max="100" step="1" className="volumeSlider"  /> */}
                            </div>
                        </div>
                    ))}
                </div>
                <table id="playsong">
                    <thead>
                        <tr>
                            <th>Sno</th>
                            <th></th>
                            <th>Song Name</th>
                            <th>Artist</th>
                            <th>Play time</th>
                            <th>Date Added</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {albumData.length > 0 ? (
                            albumData.map((data, index) => (
                                <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td>
                                        <FaPlay className="controlIcon" onClick={() => handlePlayButtonClick(data.songname)} />
                                    </td>
                                    <td>{data.songname}</td>
                                    <td>{data.singers}</td>
                                    <td>{formatTime(songDurations[data.file])}</td>
                                    <td>{data.date}</td>
                                    <td><button className="button1" onClick={() => handleFavoriteButtonClick(data)}>
                                        <FontAwesomeIcon icon={faHeart} className="heartIcon" />
                                    </button></td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="6" align="center">No Songs found</td>
                            </tr>
                        )}
                    </tbody>
                </table>
                <Routes>
                    <Route path="/playsong/:songname" element={<PlaySong />} />
                </Routes>
            </div>
        </div>
    );
}
