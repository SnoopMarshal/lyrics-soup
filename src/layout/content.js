import React, { Component } from "react";
import TopArtist from "../main/top-artist";
import TopSong from "../main/top-song";

export default class Content extends Component {
  render() {
    return (
      <div className="flex flex-col h-full w-full justify-around">
        <div className="flex justify-center items-center w-full px-40">
          <input
            type="text"
            className="w-1/3 lh-bg-gray rounded-full pl-4 py-2 focus:outline-none text-lg"
            placeholder="search by artist or song title"
          />
        </div>
          <TopArtist />
          <TopSong />
      </div>
    );
  }
}
