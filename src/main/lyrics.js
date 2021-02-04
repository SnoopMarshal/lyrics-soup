import React, { Component } from "react";
import axios from "axios";
export default class Lyrics extends Component {
  state = {
    song: null,
    artist: null,
    lyrics: "",
  };
  componentDidMount() {
    let song = this.props.match.params.song;
    let artist = this.props.match.params.artist;
    this.setState(
      {
        song: song,
        artist: artist,
      },
      () => {
        this.getLyrics(this.state.artist, this.state.song);
      }
    );
  }
  getLyrics = (artist, song) => {
    axios
      .get(`https://api.lyrics.ovh/v1/${artist}/${song}`)
      .then((res) => {
        if (res.data.lyrics !== "") {
          this.setState({ lyrics: res.data.lyrics });
        } else {
          this.setState({ lyrics: "Lyrics could not be found in the library" });
        }
      })
      .catch((err) => {
        this.setState({ lyrics: "No Lyrics Found" });
      });
  };
  render() {
    return (
      <div className="flex flex-col w-full justify-center items-center px-2">
        <div className="flex flex-col w-full md:2/3 lg:w-1/2 border-b border-gray-500 p-4 shadow-sm rounded-md lyrics-header mt-4">
          <span className="lh-text-gray text-xl font-bold">{this.state.song}</span>
          <span className="lh-text-gray font-semibold">Artist: {this.state.artist}</span>
        </div>
        <div className="flex flex-col h-full items-center">
          <p className="lyrics-card text-white text-center display-linebreak md:text-2xl lg:text-3xl mt-4 md:px-10 lg:px-20 pt-10 pb-4 rounded-md">
            {this.state.lyrics}{" "}
          </p>
        </div>
      </div>
    );
  }
}
