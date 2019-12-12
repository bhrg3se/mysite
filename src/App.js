import React, { Component } from 'react';

import avatar from './avatar.png'
import notBug from './notbug.gif'
import './App.css';
import { SocialIcon } from 'react-social-icons';
import Avatar from 'react-avatar';


class App extends Component {



  render() {
    return (
      <div className="App">
        <header className="App-header">


            <Avatar  size="100" round={true} src={avatar} />

            <img src={notBug} alt={""}/>
          <p>
            Hi
          </p>
            <p>I am a full stack developer from Nepal.</p>
            <p>There is no ester egg in this website. This is just a react bootstrap .</p>
            <p>Nothing to see here</p>


            <p>It ain't much but check out my <a href={"https://blog.bhargab.com.np"} style={{color:"darkgreen"}}>blog</a></p>
          <div className={"Social-icons"} about={"Meh"}>
              <SocialIcon url={"https://www.facebook.com/bhrg3se"} bgColor={"darkgreen"}/>
              <SocialIcon url={"https://www.linkedin.com/bhrg3se"} bgColor={"darkgreen"}/>
              <SocialIcon url={"https://www.twitter.com/bhrg3se"} bgColor={"darkgreen"}/>
              <SocialIcon url={"https://www.github.com/bhrg3se"} bgColor={"darkgreen"}/>
            

          </div>

        </header>

      </div>
    );
  }
}

export default App;
