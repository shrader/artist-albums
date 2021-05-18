import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import AlbumList from './AlbumList';
import Api from './Api';
import './App.css';

function App() {
  // default to be used as my 'favorite artist
  const DEFAULT_ARTIST = 'imagine dragons';
  const [albumsData, setAlbumsData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);
  const [currArtist, setCurrArtist] = useState(DEFAULT_ARTIST);
  
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
    } catch (e) {
      console.error(e);
      setError(true);
    }
    if (albumsData) {
      if (albumsData.results.length !==0) {
        setError(false);
      }
    }
    setIsLoading(false);
  }
  
  function checkValidData() {
    if (albumsData && albumsData.results.length !==0) {
      return (
        <div>
          <AlbumList albumsData={albumsData} />
        </div>
      )
    }
  }

  return (
    <>
      <Navbar
      artistName={albumsData?.results[0]?.artistName || 'Artist Name'}
      artistLink={albumsData?.results[0]?.artistViewUrl || ''}
      albumCount={albumsData?.resultCount || 0}
      />
      {isLoading && <p>Loading...</p>}
      {error && <p>Error!</p>}
      {checkValidData()}
    </>
  );

}

export default App;
