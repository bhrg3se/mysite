import React, { Component } from 'react';
import logo from './logo.svg';
import avatar from './avatar.png'
import nown from './noun_tree.svg'
import notBug from './notbug.gif'
import './App.css';
import { SocialIcon } from 'react-social-icons';
import Avatar from 'react-avatar';
import { Input, Menu, Button } from 'semantic-ui-react'
import Particles from 'react-particles-js';

class App extends Component {



  render() {
    return (
      <div className="App">
        <header className="App-header">


            <Avatar  size="100" round={true} src={avatar}/>
            <Particles
                params={{
                    particles: {
                        line_linked: {
                            shadow: {
                                enable: true,
                                color: "#3CA9D1",
                                blur: 5
                            }
                        }
                    }
                }}
                style={{
                    width: '100%',
                    //   backgroundImage: `url(${nown})`
                }}
            />
          <p>
            Hi
          </p>
            <p>I am a full stack developer from Nepal.</p>
            <p>Besides <a >programming</a> I love <a>movies</a>, <a>psychology</a> and <a>philosophy</a>  .</p>
            <p>AND MEMES!!!</p>
            
          <div>
              <SocialIcon url={"https://www.facebook.com/bhrg3se"} bgColor={"white"}/>
              <SocialIcon url={"https://www.linkedin.com/bhrg3se"} bgColor={"white"}/>
              <SocialIcon url={"https://www.twitter.com/bhrg3se"} bgColor={"white"}/>
              <SocialIcon url={"https://www.github.com/bhrg3se"} bgColor={"white"}/>
            

          </div>
        </header>
        <div>
          <Button onClick={()=>{window.location="https://blog.bhargab.com.np"}}>Blog</Button>
        </div>
      </div>
    );
  }
}

export default App;
