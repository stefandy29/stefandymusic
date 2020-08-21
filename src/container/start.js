import React, { Component } from "react";
import Header from "./header/header";
import Secphoto from "./secphoto/secphoto";
import Section from "./section/section";
import Logo from "./logo/logo";
import Footer from "./footer/footer";
import MusicData from "./musicdata/musicData";
import Child from "./UI/Child";
import BandCamp from "./bandcamp/bandCamp";
class Start extends Component {
  render() {
    return (
      <div>
        <Child>
          <Header />
          <Secphoto />
          <Logo />
          <Section />
          <MusicData />
          <BandCamp />
          <Footer />
        </Child>
      </div>
    );
  }
}

export default Start;
