import React, { Component } from 'react'
import Style from './Playerdetails.module.css';
import {Link} from 'react-router-dom';
import Card from '@material-ui/core/Card';
import TextField from '@material-ui/core/TextField';

export default class Playerdetails extends Component {
    constructor(props){
        super(props)
        this.state={
            player_one:'',
            player_two:'',
            message:'',
        }
    }

    handleChange=(e)=>{
        this.setState({
            [e.target.name]:e.target.value
        })
        console.log(this.state.player_two)
    }
    continue=()=>{
        if(this.state.player_one !='' && this.state.player_two !=''){
            localStorage.setItem('player_one', this.state.player_one);
            localStorage.setItem('player_two', this.state.player_two);
            window.location.href = "selectingside";
           
        }
        else{
            
            this.setState({
                message:"Invalid Name"
            })
        }
    }
    render() {

        return (
            <div className={Style.body}>
                <div className={Style.body_frame}>
                    <Card className={Style.card}>
                        <div style={{marginTop:"5%"}}>
                            <p>Please fill Name</p>
                        </div>
                        <div className={Style.players_arrng}>
                            <div className={Style.input_arrng}>
                                <label>Player-1 Name:</label>
                                <TextField label="Hello Amit" variant="outlined" style={{width:"120px"}} onChange={this.handleChange} name='player_one'/>
                            </div>
                            <div style={{height:"100%"}}>
                                <hr style={{height:"100%"}}></hr>
                            </div>
                            <div className={Style.input_arrng}>
                                <label>Player-2 Name:</label>
                                <TextField label="Hello anuj" variant="outlined" style={{width:"120px"}} onChange={this.handleChange} name='player_two'/>
                            </div>
                        </div>
                        <div style={{color:"red", marginTop:"15px"}} >
                            <p>{this.state.message}</p>
                        </div>
                        <div>
                            <button className={Style.btn} onClick={this.continue}>Continue</button>
                        </div>
                    </Card>
                </div>
            </div>
        )
    }
}
