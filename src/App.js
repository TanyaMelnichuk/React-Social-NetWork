import React  from 'react';
import {BrowserRouter, Route} from "react-router-dom";
import './App.css';

import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import state, {updateNewPostText} from "./redux/state";
import Friends from "./components/Friends/Friends";

const App = (props) => {

  return (
      <div className="app-wrapper">
        <Header />
        <Nav state={props.state.sideBar}/>
        <div className="app-wrapper-content">
          <Route path='/profile' render={ () => <Profile profilePage={props.state.profilePage}
                                                         addPost={state.addPost}
                                                         updateNewPostText={props.updateNewPostText} /> } />
          <Route path='/dialogs' render={ () => <Dialogs state={props.state.dialogsPage} />  } />
          <Route path='/news' component={News} />
          <Route path='/music' component={Music} />
          <Route path='/settings' component={Settings} />
          <Route path='/friends' render={ () => <Friends state={props.state.friendsPage} />  }  />
        </div>
      </div>
  );
}

export default App;
