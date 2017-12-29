import React from "react";
import {Players} from './../api/players';
import Player from './Player';
import FlipMove from 'react-flip-move';

// My content
const renderPlayers = (playerList) => {
    // playerList je iba vymysleny parameter moze sa volat hocijako
    return playerList.map((player) => {
        return <Player key={player._id} player={player}/>;
    });
};

export default PlayerList = ({players}) => {
    return <div>
        <FlipMove maintainContainerHeight={true}>
            {players.length === 0 ?
                <div className="item">
                    <p className="item__message">Add you first player to get started!</p>
                </div> : renderPlayers(players)}
        </FlipMove>
    </div>
};

// Andrew content
//export default class PlayerList extends React.Component {
//    renderPlayers() {
//        if (this.props.players.length === 0) {
//            return <div className="item">
//               <p className="item__message">Add you first player to get started!</p>
//            </div>
//
//        } else {
//            return this.props.players.map((player) => {
//                return <Player key={player._id} player={player}/>;
//            });
//        }
//    }
//
//    render() {
//        return (
//            <div>
//                <FlipMove>
//                    <div>{this.renderPlayers()}</div>
//                </FlipMove>
//            </div>
//        );
//    }
//}