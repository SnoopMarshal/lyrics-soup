import React, { Component } from "react";
import SongCard from "./song-card";
let songList = [
  {
    colorScheme: "purple",
    title: "High hopes",
    artist: "Kodaline",
    album: "In A Perfect World (Expanded Edition)",
    imageUrl:
      "https://cdn-images.deezer.com/images/cover/ae1ef143dd6852df87eefe8a405c091b/250x250-000000-80-0-0.jpg",
  },
  {
    colorScheme: "pink",
    title: "Sleep On The Floor",
    artist: "The Lumineers",
    album: "Cleopatra (Deluxe)",
    imageUrl:
      "https://cdn-images.deezer.com/images/cover/aefa86ec3ef21684b383f02f0c30e028/250x250-000000-80-0-0.jpg",
  },
  {
    colorScheme: "purple",
    title: "Wish You Were Here",
    artist: "Pink Floyd",
    album: "Wish You Were Here (2011 Remastered Version)",
    imageUrl:
      "https://cdn-images.deezer.com/images/cover/839a00ff2b0b53eb7225a232cb994952/250x250-000000-80-0-0.jpg",
  },
  {
    colorScheme: "pink",
    title: "Let It Go",
    artist: "James Bay",
    album: "Chaos And The Calm",
    imageUrl:
      "https://cdn-images.deezer.com/images/cover/6abf68e7b1a21ed49979c41dfede063b/250x250-000000-80-0-0.jpg",
  },
  {
    colorScheme: "purple",
    title: "All I Want",
    artist: "Kodaline",
    album: "In A Perfect World (Expanded Edition)",
    imageUrl:
      "https://cdn-images.deezer.com/images/cover/ae1ef143dd6852df87eefe8a405c091b/250x250-000000-80-0-0.jpg",
  },
];
export default class TopSong extends Component {
  render() {
    return (
      <div className="flex flex-col justify-center items-center w-full mt-10 lg:px-20">
        <div className="w-full lg:w-5/6 justify-start items-start mb-4">
          <span className="lh-text-gray font-semibold text-xl">
            Top searched songs
          </span>
        </div>
        <div className="w-full xl:w-5/6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 items-center gap-4">
          {songList.map((o, i) => {
            return (
              <SongCard
                key={i}
                colorScheme={o.colorScheme}
                title={o.title}
                artist={o.artist}
                album={o.album}
                imageUrl={o.imageUrl}
              />
            );
          })}
        </div>
      </div>
    );
  }
}
