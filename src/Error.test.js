/* eslint-disable no-undef */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { render, screen } from '@testing-library/react';
import Error from './Error';

describe('Error componenet functions properly', () => {
  test('renders error', () => {
    render(<Error />);
    const errorElement = screen.getByText('Api request failed!', { exact: true });
    expect(errorElement).toBeInTheDocument();
  });
});
