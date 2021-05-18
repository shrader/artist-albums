/* eslint-disable no-undef */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { render, screen } from '@testing-library/react';
import Navbar from './Navbar';

describe('Navbar functions proprerly', () => {
  test('renders navbar', () => {
    const link = 'www.google.com';
    const artistName = 'fake Artist';
    render( 
      <Navbar
        artistName={artistName}
        artistLink={link}
        albumCount={ 1 }
      />
    );
    const artistNameDisp = screen.getByText('fake Artist', { exact: true });
    expect(artistNameDisp).toBeInTheDocument();
  });
});
