import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class LyricsCard extends Component {
  render() {
    const { title, artist, album } = this.props.data;
    return (
      <Link to={`/${artist.name}/${title}`}>
        <div className="flex w-full justify-start lyrics-card text-white my-4 p-4 lg:px-10 rounded-md">
          <div className="flex w-1/3 justify-center items-center rounded-full">
            <img
              srcSet=""
              className="w-20 h-20 rounded-full object-contain"
              src={album.cover_medium}
              alt="albumArt"
            />
          </div>
          <div className="flex w-2/3 flex-col justify-center">
            <span className="font-semibold">{title}</span>
            <span>Album: {album.title}</span>
            <span className="text-sm">Artist: {artist.name}</span>
          </div>
        </div>
      </Link>
    );
  }
}
