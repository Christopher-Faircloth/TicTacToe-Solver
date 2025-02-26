import React from 'react';
import axios from 'axios';
import './basic.css';

function TicTacToe() {

    // API Call to start new game
    const new_game = () => {
        axios.request(
            {
                method: 'post',
                maxBodyLength: Infinity,
                url: 'http://127.0.0.1:5000/api/TTT/new_game',
                headers: { }
            }
        )
        .then((response) => {
            console.log(JSON.stringify(response.data));
        })
        .catch((error) => {
            console.log(error);
        });
    };

    // API call to get current status of the game
    const get_status = () => {
        axios.request(
            {
                method: 'get',
                maxBodyLength: Infinity,
                url: 'http://127.0.0.1:5000/api/TTT/status',
                headers: { }
            }
        )
        .then((response) => {
            console.log(JSON.stringify(response.data));
        })
        .catch((error) => {
            console.log(error);
        });
    };
    
    const make_move = (r,c) => {
        axios.request(
            {
                method: 'post',
                maxBodyLength: Infinity,
                url: 'http://127.0.0.1:5000/api/TTT/move',
                headers: { },
                data: {
                    row: r,
                    col: c
                }
            }
        )
        .then((response) => {
            console.log(JSON.stringify(response.data));
        })
        .catch((error) => {
            console.log(error);
        });
    };
    

    return ( 
        <div className = "TicTacToe">
            <header className = "TicTacToe-header">
                <p>The Collage of Classics</p>
                <button onClick={new_game}> Start New Game</button>
                <button onClick={get_status}> Get current game status</button>
            </header>
            <div className = "ttt-board-footer"></div>
            <div className = "ttt-board-body">
                <table className = "ttt-board-Layout">
                    <tr>
                        <th className = "ttt-button-design"><button className="ttt-button" onClick={() => make_move(0,0)}></button></th>
                        <th className = "ttt-button-design"><button className="ttt-button" onClick={() => make_move(0,1)}></button></th>
                        <th className = "ttt-button-design"><button className="ttt-button" onClick={() => make_move(0,2)}></button></th>
                    </tr>
                    <tr>
                        <th className = "ttt-button-design"><button className="ttt-button" onClick={() => make_move(1,0)}></button></th>
                        <th className = "ttt-button-design"><button className="ttt-button" onClick={() => make_move(1,1)}></button></th>
                        <th className = "ttt-button-design"><button className="ttt-button" onClick={() => make_move(1,2)}></button></th>
                    </tr>
                    <tr>
                        <th className = "ttt-button-design"><button className="ttt-button" onClick={() => make_move(2,0)}></button></th>
                        <th className = "ttt-button-design"><button className="ttt-button" onClick={() => make_move(2,1)}></button></th>
                        <th className = "ttt-button-design"><button className="ttt-button" onClick={() => make_move(2,2)}></button></th>
                    </tr>
                </table>
            </div>
            <div className = "ttt-board-footer"></div>
        </div>
    );

}

export default TicTacToe;