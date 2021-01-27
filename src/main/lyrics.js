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
          this.setState({ lyrics: "Lyrics could be found in the library" });
        }
      })
      .catch((err) => {
        this.setState({ lyrics: "No Lyrics Found" });
      });
  };
  render() {
    console.log(this.props);
    return (
      <div className="flex flex-col w-full justify-around relative">
        <div className="flex flex-col h-full items-center">
          <p className="lh-text-gray display-linebreak text-3xl py-10">
            {this.state.lyrics}{" "}
          </p>
        </div>
        <div className="fixed left-0 flex flex-col">
          <span className="lh-text-gray">{this.state.song}</span>
          <span className="lh-text-gray">{this.state.artist}</span>
        </div>
      </div>
    );
  }
}
