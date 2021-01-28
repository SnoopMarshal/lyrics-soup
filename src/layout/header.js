import React, { Component } from "react";

export default class Header extends Component {
  render() {
    return (
      <div className="fixed top-0 w-full header-my-info z-10 shadow-md">
        <div className="flex items-center p-2">
          <span className="font-semibold text-xl text-white">My Info</span>
        </div>
        <div className="flex flex-col items-center p-2 justify-center">
          <span className="font-bold text-4xl lh-text-green uppercase roboto">Lyrics Finder</span>
          <span className="lh-text-gray">your lyrics bot</span>
        </div>
      </div>
    );
  }
}
