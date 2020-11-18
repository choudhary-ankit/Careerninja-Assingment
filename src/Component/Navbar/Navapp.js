import React, { Component } from 'react';
import Style from './Navapp.module.css'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import {Link} from 'react-router-dom';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';
import Drawer from '@material-ui/core/Drawer';
import CloseIcon from '@material-ui/icons/Close';

export default class Navapp extends Component {
    constructor(props){
        super(props)
        this.state={
            open_drawer:false,
        }
    }
    drawerOpen=()=>{
        this.setState({
            open_drawer:true
        })
    }
    drawerClose=()=>{
        this.setState({
            open_drawer:false
        })
    }
    render() {
        return (
            <div>
                <AppBar position="fixed" style={{background:"linear-gradient(to right, #005a9e, #ffad06)"}}>
                    <Toolbar className={Style.text_arrng}>
                        <div>
                            <Link to="/" style={{textDecoration:"none", color:"white"}}>           
                                <Typography variant="p" component="h1">CareerNinja</Typography>
                            </Link> 
                        </div>
                        <div className={Style.fullscreen_display}>
                            <div className={Style.game_menu_arrng}> 
                                <Link to="/howtoplay" style={{textDecoration:"none", color:"white"}}>
                                    <Typography variant="p" component="h4">How to play</Typography>
                                </Link>
                                <Link to="/aboutgame" style={{textDecoration:"none", color:"white"}}>
                                    <Typography variant="p" component="h4">About Game</Typography>
                                </Link>
                            </div> 
                        </div>
                        <div className={Style.small_display}>
                            <IconButton edge="start" color="inherit" aria-label="menu" onClick={this.drawerOpen}>
                                <MenuIcon />
                            </IconButton>
                            <Drawer
                                variant="persistent"
                                anchor="top"
                                open={this.state.open_drawer}
                                className={Style.drawer_paper}>
                                <div>
                                    <div className={Style.menu_arrng}>
                                        <div className={Style.game_menu_arrng}> 
                                            <Link to="/howtoplay" style={{textDecoration:"none", color:"white"}}>
                                                <Typography variant="p" component="h4">How to play</Typography>
                                            </Link>
                                            <Link to="/aboutgame" style={{textDecoration:"none", color:"white"}}>
                                                <Typography variant="p" component="h4">About Game</Typography>
                                            </Link>
                                        </div>
                                        <div>
                                            <IconButton edge="start" color="inherit" aria-label="menu" onClick={this.drawerClose}>
                                                <CloseIcon  />
                                            </IconButton>
                                        </div>
                                    </div>
                                </div>
                            </Drawer>
                        </div>
                    </Toolbar>
                </AppBar>
            </div>
        )
    }
}
