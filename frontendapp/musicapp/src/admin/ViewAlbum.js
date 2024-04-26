import React, { useEffect, useState } from 'react';
import axios from 'axios';
import config from '../config';
import { useParams } from 'react-router-dom';
import './viewuser.css'
import './adminnavbar.css'

export default function ViewAlbum() {
  const [albumData, setAlbumData] = useState([]);

  const { moviename } = useParams(); // Extract email from URL parameters

  useEffect(() => {
    const fetchSongsData = async () => {
      try {
        const response = await axios.get(`${config.url}/viewsongs/${moviename}`);
        setAlbumData(response.data);
      } catch (error) {
        console.error(error.message);
      }
    };

    if (moviename) {
      fetchSongsData();
    }
  }, [moviename]);

  return (
    <div className="main_content">
    {/* <h2 class="header" > I am in View Users page</h2>   */}
    <div className="info">

      
        <h2 align="left">songs</h2><br/>
        <table >
  
        <tbody>
          <tr>
            {albumData.length > 0 ? (
              albumData.map((data, index) => (
                <td key={index}>
                 {
  
          
            <div className="card">
      {/* <img src={`${config.url}/albumimage/${data.image}`} alt={data.image} width="50%" className='imgcd' /> */}
   
          <h4>{data.songname}</h4>
        
          </div>
  } 
                </td>
              ))
            ) : (
              <tr>
                <td colSpan="6" align="center">No Songs found</td>
              </tr>
            )}
            </tr>
          </tbody>
          </table>
          </div>
      </div>
      
  )
}
