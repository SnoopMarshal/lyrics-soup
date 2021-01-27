import React, { Component } from "react";

export default class Header extends Component {
  render() {
    return (
      <div className="fixed top-0 w-full">
        <div className="flex items-center p-2 header-my-info">
          <span className="font-semibold text-xl text-white">My Info</span>
        </div>
        <div className="flex flex-col items-center p-2 justify-center shadow-lg">
          <span className="font-bold text-4xl lh-text-green uppercase text-4xl roboto">Lyrics Finder</span>
          <span className="lh-text-gray">your lyrics bot</span>
        </div>
      </div>
    );
  }
}
