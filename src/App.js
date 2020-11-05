import React from 'react';
import './App.css';
import Profile from './components/content/content';
import Header from './components/header/header.jsx';
import NavBar from './components/navBar/navBar.jsx';
import Dialogs from './components/Dialogs/dialogs';
import News from './components/news/News';
import Music from './components/music/Music';
import Setting from './components/Setting/Setting';

import { BrowserRouter, Route } from 'react-router-dom';




function App(props) {
  return (
    <BrowserRouter>
      <div className='appWrapper' >
        <Header />
        <NavBar />
          <div className='appWrapperContent'>
              <Route path='/dialogs' render={ () => <Dialogs dialogsData={props.state.dialogsData} messageData={props.state.messageData} />}/>
              <Route path='/profile' render={ () => <Profile postsData={props.state.postsData}
                                                             dispatch={props.dispatch} />} />
              <Route path="/news" render={ () => <News />} />
              <Route path="/music" render={ () => <Music />} />
              <Route path="/setting" render={ () => <Setting/>} />
          </div>
     </div>
    </BrowserRouter>
  );
}

export default App;
