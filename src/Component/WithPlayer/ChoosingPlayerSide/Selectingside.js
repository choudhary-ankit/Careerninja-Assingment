import React, { Component } from 'react'
import Style from './Selectingside.module.css'
import {Link} from 'react-router-dom';
import Card from '@material-ui/core/Card';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import Radio from '@material-ui/core/Radio';

export default class Selectingside extends Component {
    constructor(props){
        super(props)
        this.state={
            player:'',
            selecting_x_o:'',
            player_one:'',
            player_two:'',
            message:'',
        }
    }
    componentDidMount=()=>{
        let one = localStorage.getItem('player_one');
        let two = localStorage.getItem('player_two');
        this.setState({
            player_one:one,
            player_two:two
        })
        localStorage.removeItem('player_one');
        localStorage.removeItem('player_two');
    }
    handleChange=(e)=>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }
    continue=()=>{
        if(this.state.player !='' && this.state.selecting_x_o !=''){
            if(this.state.player_one===this.state.player){
                localStorage.setItem('first_move', this.state.player);
                localStorage.setItem('second_move', this.state.player_two);
                localStorage.setItem('selected', this.state.selecting_x_o);
                window.location.href = "gameboard";
            }
            else if(this.state.player===this.state.player_two){
                localStorage.setItem('first_move', this.state.player);
                localStorage.setItem('second_move', this.state.player_one);
                localStorage.setItem('selected', this.state.selecting_x_o);
                window.location.href = "gameboard";
            }
        }
        else{
            this.setState({
                message:"select please"
            })
        }
    }
    render() {
        console.log(this.state.selecting_x_o)
        return (
            <div className={Style.body}>
                <div className={Style.body_frame}>
                    <Card className={Style.card}>
                        <div>
                            <p>pick your side</p>
                        </div>
                        <div>
                            <FormControl variant="outlined" style={{width:"200px"}}>
                                <InputLabel>Select player Name</InputLabel>
                                <Select
                                    value={this.state.player}
                                    onChange={this.handleChange}
                                    label="Select player Name"
                                    name="player"
                                >
                                    <MenuItem value="">
                                        <em>None</em>
                                    </MenuItem>
                                    <MenuItem value={this.state.player_one}>{this.state.player_one}</MenuItem>
                                    <MenuItem value={this.state.player_two}>{this.state.player_two}</MenuItem>
                                </Select>
                            </FormControl>
                        </div>
                        <div style={{color:"red"}}>
                            <p>{this.state.message}</p>
                        </div>
                        <div className={Style.xo_arrng}>
                            <h3 className={Style.x_arrng}>X</h3>
                            <h3 className={Style.o_arrng}>O</h3>
                        </div>
                        <div className={Style.radio_arrng}>
                            <Radio
                                checked={this.state.selecting_x_o === 'x'}
                                onChange={this.handleChange}
                                value="x"
                                name="selecting_x_o"
                                color="primary"
                            />
                            <Radio
                                checked={this.state.selecting_x_o === 'o'}
                                onChange={this.handleChange}
                                value="o"
                                name="selecting_x_o"
                                color="primary"
                            />
                        </div>
                        <div>
                            <button className={Style.btn_friend} onClick={this.continue}>continue</button>  
                        </div>
                    </Card>
                </div>
            </div>
        )
    }
}
