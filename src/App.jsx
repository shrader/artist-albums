import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import AlbumList from './AlbumList';
import Error from './Error';
import Loading from './Loading';
import Api from './Api';
import './App.css';

function App() {
  // default to be used as my 'favorite artist'
  const DEFAULT_ARTIST = 'imagine dragons';
  const [albumsData, setAlbumsData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);
  
  useEffect(() => {
    getAlbumsData(DEFAULT_ARTIST);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // call getAlbums from the Api, set state for albumsData and isLoading
  async function getAlbumsData(artist) {
    setIsLoading(true);
    // error handling
    try {
      let tempData = await Api.getAlbums(artist);
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
      {isLoading && <Loading />}
      {error && <Error />}
      {checkValidData()}
    </>
  );

}

export default App;
