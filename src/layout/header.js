import React, { Component } from "react";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
export default class Header extends Component {
  render() {
    return (
      <div className="fixed top-0 w-full header-my-info z-10 shadow-md">
        <div className="flex flex-col items-end p-2 justify-start">
          <a
            href="mailto:bikram.1795@gmail.com"
            className="font-semibold text-lg lg:text-xl text-white flex items-center"
          >
            <MailOutlineIcon className="text-white" />
            bikram.1795@gmail.com
          </a>
          <a
            className="font-semibold text-white flex items-center"
            href="https://www.linkedin.com/in/bikram-nath-87b251124"
            target="_blank"
            rel="noreferrer"
          >
            <LinkedInIcon className="text-white text-lg lg:text-xl" />
            Bikram Nath
          </a>
        </div>
        <div className="flex flex-col items-center p-2 justify-center">
          <span className="font-bold text-2xl lg:text-4xl lh-text-green uppercase roboto">
            Lyrics Finder
          </span>
          <span className="lh-text-gray">your lyrics bot</span>
        </div>
      </div>
    );
  }
}
