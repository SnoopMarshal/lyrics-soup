/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from "react";
import {Link} from 'react-router-dom';

export default class SongCard extends Component {
  render() {
    const { title, album, artist, imageUrl, colorScheme } = this.props;
    return (
      <Link className="h-full" to={`/${artist}/${title}`}>
        <div className={`flex lh-card-${colorScheme} w-full py-12 px-4 items-center h-full`}>
          <div className="flex w-1/3 rounded-full">
            <img
              srcSet=""
              className="w-20 h-20  rounded-full object-contain"
              src={imageUrl}
            />
          </div>
          <div className="flex w-2/3 flex-col justify-center items-start pl-2">
            <span className="text-white font-semibold text-lg">{title}</span>
            <span className="lh-text-gray font-semibold">{artist}</span>
            <span className="lh-text-gray text-sm">{album}</span>
          </div>
        </div>
      </Link>
    );
  }
}
