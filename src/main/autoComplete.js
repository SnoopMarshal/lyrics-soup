import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { debounce } from "lodash";
import Spinner from "./spinner";
export default class AutoComplete extends Component {
  constructor(props) {
    super(props);
    this.state = {
      suggestions: [],
      loader: false,
    };
  }
  handleChange = debounce((e) => {
    const text = e.target.value;
    if (text.length === 0) {
      this.setState(() => ({
        suggestions: [],
        loader: false,
      }));
    } else {
      this.getLyricsList(text);
    }
  }, 500);
  renderSuggestions() {
    const { suggestions } = this.state;
    if (suggestions.length === 0) {
      return null;
    }
    return (
      <ul className="autocomplete-card px-4 absolute w-full md:w-3/5 lg:w-2/5 mt-12">
        {suggestions.map((items) => (
          <Link to={`/${items.artist.name}/${items.title}`} key={items.id}>
            <li className="w-full py-2 text-white cursor-default font-semibold">
              <div className="w-full flex items-center">
                <img
                  className="h-16 w-16 rounded-full"
                  src={items.album.cover_medium}
                  alt="album art"
                />
                <div className="flex flex-col pl-4">
                  <span className="text-lg">{items.title}</span>
                  <span>Album: {items.album.title}</span>
                  <span>Artist: {items.artist.name}</span>
                </div>
              </div>
            </li>
          </Link>
        ))}
      </ul>
    );
  }

  renderSpinner() {
    if (!this.state.loader) {
      return null;
    }
    return (
      <div className="spinner-card p-4 absolute w-full md:w-3/5 lg:w-2/5 mt-12 flex justify-center">
        <Spinner />
      </div>
    );
  }

  getLyricsList = (text) => {
    axios
      .get(`https://api.lyrics.ovh/suggest/${text}`)
      .then((res) => {
        this.setState(() => ({ suggestions: res.data.data, loader: false }));
      })
      .catch((err) => {
        this.setState(() => ({ suggestions: [], loader: false }));
      });
  };
  render() {
    return (
      <div className="px-4 relative flex justify-center">
        <input
          type="text"
          onChange={(e) => {
            this.setState({ loader: true });
            this.handleChange(e);
          }}
          required
          className="w-full md:w-3/5 lg:w-2/5  lh-bg-gray rounded-full pl-4 py-2 focus:outline-none text-lg"
          placeholder="search by artist or song title"
        />
        {this.state.loader ? this.renderSpinner() : this.renderSuggestions()}
      </div>
    );
  }
}
