import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import Api from './Api';
import './App.css';

function App() {
  // default to be used as my 'favorite artist
  const DEFAULT_ARTIST = 'imagine dragons';
  const [albumsData, setAlbumsData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);
  const [currArtist, setCurrArtist] = useState(DEFAULT_ARTIST);
  const [artistName, setArtistName] = useState('Artist Name');
  const [artistLink, setArtistLink] = useState('');
  
  useEffect(() => {
    getAlbumsData(currArtist);
  }, [currArtist]);

  // call getAlbums from the Api, set state for albumsData and isLoading
  async function getAlbumsData(artist) {
    setIsLoading(true);
    // error handling
    try {
      let tempData = await Api.getAlbums(artist);
      console.log(`returned data ${tempData}`);
      setAlbumsData(tempData);
      // setArtistLink(albumsData.results[0].artistViewUrl);
      // setArtistName(albumsData.results[0].artistName);
    } catch (e) {
      console.error(e);
      setError(true);
    }

    if (albumsData) {
      if (albumsData.results.length !==0) {
        setArtistLink(albumsData.results[0].artistViewUrl);
        setArtistName(albumsData.results[0].artistName);
        setError(false);
      }
    }
    setIsLoading(false);
  }


  if (error) {
    return (
      <>
        <Navbar artistName={artistName} artistLink={artistLink} setCurrArtist={setCurrArtist} />
        <p>Error!</p>
      </>
    )
  }

  if (albumsData) {
    return (
      <div>
        <Navbar artistName={artistName} artistLink={artistLink} setCurrArtist={setCurrArtist} />
        <p>
          {albumsData.resultCount}
          {albumsData.results[0].artistName}
        </p>
      </div>
    )
  }

  return (
    <>
       <Navbar artistName={artistName} artistLink={artistLink} setCurrArtist={setCurrArtist} />
      <p>{isLoading}</p>
    </>
  )


}


export default App;
