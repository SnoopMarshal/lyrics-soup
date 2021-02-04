import React, { Component } from "react";
import ArtistCard from "./artist-card";

export default class TopArtist extends Component {
  render() {
    return (
      <div className="flex flex-col justify-center items-center w-full mt-10 lg:px-20">
        <div className="w-full lg:w-5/6 justify-start items-start mb-4">
          <span className="lh-text-gray font-semibold text-xl">
            Top searched artist
          </span>
        </div>
        <div className="w-full xl:w-5/6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 items-center gap-4">
            <ArtistCard colorScheme="pink" name="Linkin Park" imageUrl="https://cdn-images.deezer.com/images/artist/4eb6517a096da2ccd8768f1513593cb8/250x250-000000-80-0-0.jpg"/>
            <ArtistCard colorScheme="purple" name="Beetles" imageUrl="https://cdn-images.deezer.com/images/artist/178fc2c83ce06eef3f2294f1ca16cf7b/250x250-000000-80-0-0.jpg"/>
            <ArtistCard colorScheme="pink" name="Slipknot" imageUrl="https://cdn-images.deezer.com/images/artist/62e6edfaf5461eeb5b7310903229607a/250x250-000000-80-0-0.jpg"/>
            <ArtistCard colorScheme="purple" name="Pantera" imageUrl="https://cdn-images.deezer.com/images/artist/84ac172a2df2c4f04f97c482c103bcaf/250x250-000000-80-0-0.jpg"/>
            <ArtistCard colorScheme="pink" name="Iron Maiden" imageUrl="https://cdn-images.deezer.com/images/artist/082f3e7d6f3f0ae104a4da93c97273d7/250x250-000000-80-0-0.jpg"/>
        </div>
      </div>
    );
  }
}
