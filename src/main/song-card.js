/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from "react";
import {Link} from 'react-router-dom';

export default class SongCard extends Component {
  render() {
    const { title, album, artist, imageUrl, colorScheme } = this.props;
    return (
      <Link to={`/${artist}/${title}`}>
        <div className={`flex lh-card-${colorScheme} py-12 px-4 items-center`}>
          <div className="flex w-1/2 rounded-full">
            <img
              srcSet=""
              className="w-full  rounded-full object-contain"
              src={imageUrl}
            />
          </div>
          <div className="flex w-1/2 flex-col justify-center items-start pl-2">
            <span className="text-white font-semibold text-lg">{title}</span>
            <span className="lh-text-gray font-semibold">{artist}</span>
            <span className="lh-text-gray text-sm">{album}</span>
          </div>
        </div>
      </Link>
    );
  }
}
