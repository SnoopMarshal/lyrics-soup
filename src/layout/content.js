import React, { Component } from "react";
import TopArtist from "../main/top-artist";
import TopSong from "../main/top-song";
import SearchIcon from "@material-ui/icons/Search";
import axios from "axios";
import LyricsList from "../main/lyricsList";
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
        <form
          className="flex justify-center items-center w-full px-0 md:px-20 xl:px-40 mt-10"
          onSubmit={this.handleSubmit}
        >
          <input
            type="text"
            onChange={this.handleChange}
            required
            className="w-full md:w-3/5 lg:w-2/5  lh-bg-gray rounded-full pl-4 py-2 focus:outline-none text-lg"
            placeholder="search by artist or song title"
          />
          <button type="submit" className="focus:outline-none ml-4">
            <SearchIcon className="text-white" />
          </button>
        </form>
        <div className="flex justify-center">
          <LyricsList lyricsList={this.state.lyricsList} />
        </div>
        <TopArtist />
        <TopSong />
      </div>
    );
  }
}
