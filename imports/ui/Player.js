import React from "react";
import {Players} from './../api/players';

// tato componenta musi byt react objekt s propsami kvoli FlipMove
export default class Player extends React.Component {
    render() {
        let itemClassName = "item item--position-" + this.props.player.rank;

        return <div className={itemClassName} key={this.props.player._id}>
            <div className="player">
                <div>
                    <h3 className="player__name">{this.props.player.name}</h3>

                    <p className="player__stats">
                        {this.props.player.position} place - {this.props.player.score} points(s)
                    </p>
                </div>

                <div className="player__actions">
                    <button className="button button--round" onClick={()=> {
                Players.update(this.props.player._id, {$inc: {score: -1}});
            }}>
                        -1
                    </button>

                    <button className="button button--round" onClick={()=> {
                Players.update(this.props.player._id, {$inc: {score: 1}});
            }}>
                        +1
                    </button>

                    <button className="button button--round" onClick={()=>
                Players.remove({_id: this.props.player._id})}>
                        X
                    </button>
                </div>
            </div>
        </div>;
    }
}

////Andrew content
//export default class Player extends React.Component {
//    render() {
//        console.log(this.props);
//        return
//        <p key={this.props.player._id}>
//
//            {this.props.player.name} has {this.props.player.score} points(s)
//
//            <button onClick={()=> {
//                Players.update(this.props.player._id, {$inc: {score: -1}});
//            }}>-1</button>
//
//            <button onClick={()=> {
//                Players.update(this.props.player._id, {$inc: {score: 1}});
//            }}>+1</button>
//
//            <button onClick={()=> Players.remove({_id: this.props.player._id})}>X</button>
//        </p>;
//    }
//}

//Player.propTypes = {
//  player: React.PropTypes.object.isRequired
//};