import React, { Component } from "react";
import imglist from "./imglist.json";
import HUD from "./HUD";


class PicContainer extends Component {
    state={
        imgs: imglist,
        score: 0,
        lastClicked: ''
    };

    shuffle = array => {
        array.sort(() => Math.random() - 0.5);
      }

    Shuffle = () =>{
        this.shuffle(this.state.imgs)
    };

    Clicked = (event) => {
        if (event.target.alt === this.state.lastClicked) {
            alert("You Lose!");
            this.setState({
                score: 0,
                lastClicked: ''
            })
            this.Shuffle();
        } else {
            this.setState({
                score: this.state.score + 1,
                lastClicked: event.target.alt
            })
            this.Shuffle()
        }
    };

    render(){
        return(
            <div className="">            
                <HUD
                    score={this.state.score}
                    src={this.state.path}
                    lastClicked={this.state.lastClicked}/>
                {this.state.imgs.map(pic =>
                    <img 
                        className="col-md-4 pic"
                        key={pic.color}
                        alt={pic.color}
                        title={pic.color}
                        src={pic.path}
                        onClick={this.Clicked}
                    />
                )}
            </div>
        )
    };
};

export default PicContainer;