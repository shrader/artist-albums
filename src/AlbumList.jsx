import React from 'react';
import AlbumDetails from './AlbumDetails';

function AlbumList({ albumsData }) {
  // for each album in the results render AlbumDetails component and pass relevant data in props
  return (
    <div className="container ">
      {albumsData.results.map((album) => (
        <AlbumDetails key={album.collectionId} albumData={album} />
      ))}
    </div>
  );
}

export default AlbumList;
