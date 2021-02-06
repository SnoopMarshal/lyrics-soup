import React, { Component } from "react";
import TopArtist from "../main/top-artist";
import TopSong from "../main/top-song";
import axios from "axios";
import LyricsList from "../main/lyricsList";
import AutoComplete from "../main/autoComplete";
export default class Content extends Component {
  state = {
    title: "",
    lyricsList: [],
  };
  handleChange = (e) => {
    this.setState({
      title: e.target.value,
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    if (this.state.title !== "") {
      this.getLyricsList(this.state.title);
    }
  };
  getLyricsList = (title) => {
    axios
      .get(`https://api.lyrics.ovh/suggest/${title}`)
      .then((res) => {
        this.setState({ lyricsList: res.data });
      })
      .catch((err) => {
        this.setState({ lyricsList: [] });
      });
  };
  render() {
    return (
      <div className="flex flex-col h-full w-full justify-around px-2">
        <AutoComplete/>
        <div className="flex justify-center">
          <LyricsList lyricsList={this.state.lyricsList} />
        </div>
        <TopArtist />
        <TopSong />
      </div>
    );
  }
}
