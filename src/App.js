import React, { Component } from 'react'
import {Route} from 'react-router-dom';
import Navapp from './Component/Navbar/Navapp'
import Homepage from './Component/HomePage/Homepage'
import Playingmode from './Component/ChoosingPlayingMode/Playingmode'
import Playerdetails from './Component/WithPlayer/Playerdetails/Playerdetails';
import Selectingside from './Component/WithPlayer/ChoosingPlayerSide/Selectingside'
import Gamepage from './Component/WithPlayer/GameBoard/Gamepage'
import GameboardAi from './Component/WithAi/GameboardAI/GameboardAi'
import PlayerdetailsAi from './Component/WithAi/Playerdetails/PlayerdetailsAi';
import SelectingsideAi from './Component/WithAi/ChoosingPlayerSide/SelectingsideAi';
import About from './Component/Aboutgame/About';
import Howplay from './Component/Howtoplay/Howplay';

export default class App extends Component {
  render() {
    return (
      <div>
        <Navapp/>
        <Route path ="/" exact component={Homepage}></Route>
        <Route path ="/aboutgame" exact component={About}></Route>
        <Route path ="/howtoplay" exact component={Howplay}></Route>
        <Route path ="/playingmode" exact component={Playingmode}></Route>
        <Route path ="/playerdetails" exact component={Playerdetails}></Route>
        <Route path ="/selectingside" exact component={Selectingside}></Route>
        <Route path ="/gameboard" exact component={Gamepage}></Route>
        <Route path ="/playerdetailsai" exact component={PlayerdetailsAi}></Route>
        <Route path ="/selectingsideai" exact component={SelectingsideAi}></Route>
        <Route path ="/gameboardai" exact component={GameboardAi}></Route>
      </div>
    )
  }
}
