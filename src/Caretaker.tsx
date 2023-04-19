import React, {useState} from 'react';
import {fetchData, DataResponse} from "./DataManager";

function Caretaker() {
    return (
        <div> 
            <header style = {{fontSize: 40, textAlign: "center"}}> Meet The Caretakers!</header>

            <p style = {{textAlign: "left", margin: 15}}> 
                <span style={{fontWeight: "bold", fontSize: 24, textDecorationLine: 'underline'}}>
                        Riley Foster
                </span>
                <p>
                     Favorite Pokemon: Ivysaur and Chimchar
                    <div> 
                        <img src={"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png"}/>
                        <img src={"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/390.png"}/> 
                    </div>
                </p>
                <div>
                    Riley skills
                </div>
            </p>

            <p style = {{textAlign: "left", margin: 15}}> 
                <span style={{fontWeight: "bold", fontSize: 24, textDecorationLine: 'underline'}}>
                        Daniel Johnston
                </span>
                    <p>
                        Favorite Pokemon: Psyduck and Tatsugiri
                        <div> 
                            <img src={"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/54.png"}/>
                            <img src={"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/978.png"}/> 
                        </div>
                    </p>
                    <div>
                        Daniel skills
                    </div>
                </p>
        </div>
    );
}

export default Caretaker