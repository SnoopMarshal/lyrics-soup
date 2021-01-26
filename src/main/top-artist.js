import React, { Component } from "react";
import ArtistCard from "./artist-card";

export default class TopArtist extends Component {
  render() {
    return (
      <div className="flex flex-col justify-center items-center w-full mt-10 px-40">
        <div className="w-5/6 justify-start items-start mb-4">
          <span className="lh-text-gray font-semibold text-xl">
            Top searched artist
          </span>
        </div>
        <div className="w-5/6 flex justify-between items-center ">
            <ArtistCard/>
            <ArtistCard/>
            <ArtistCard/>
            <ArtistCard/>
            <ArtistCard/>
        </div>
      </div>
    );
  }
}
