import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Header from "./../layout/header";
import Content from "./../layout/content";
import Lyrics from "./lyrics";
export default class Home extends Component {
  render() {
    return (
      <>
        <Header />
        <div className="flex content mt-32">
        <BrowserRouter>
            <Route exact path='/' component={Content}/>
            <Route path='/:artist/:song' component={Lyrics}/>
          </BrowserRouter>
        </div>
      </>
    );
  }
}
