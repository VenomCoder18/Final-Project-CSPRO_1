import React from 'react';
export default Caretaker

function Caretaker() {
    return (
        <div> 
            <header style = {{fontSize: 40, textAlign: "center"}}> Meet The Caretakers!</header>

            <p style = {{textAlign: "left", margin: 15}}> 
                <span style={{fontWeight: "bold", fontSize: 24, textDecorationLine: 'underline'}}>
                        Riley Foster
                </span>
                <p/>
                Favorite Pokémon: Ivysaur and Chimchar
                <div> 
                    <img src={"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png"}/>
                    <img src={"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/390.png"}/> 
                </div>
                <div>
                    Riley actively ensures that all Pokémon are kept well-exercised—while maintaining a fun and enriching environment for our Pokémon! <br/>
                    Holding a certificate in Pokémon-handling, Riley is adept at keeping Pokémon safe, even when herding hyper Pikachus.<br/>
                    Riley has excellent attention to detail and guarantees that our Pokémon have proper documentation and records.
                </div>
            </p>

            <p style = {{textAlign: "left", margin: 15}}> 
                <span style={{fontWeight: "bold", fontSize: 24, textDecorationLine: 'underline'}}>
                        Daniel Johnston
                </span>
                <p/>
                Favorite Pokémon: Psyduck and Tatsugiri
                <div> 
                    <img src={"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/54.png"}/>
                    <img src={"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/978.png"}/> 
                </div>
                <div>
                    Daniel's Master's Degree in Pokémon Health from Uva Academy of Paldea has prepared him well to care for Pokémon 
                    of all types and levels.<br/>
                    Daniel has specialized in reading different Pokémon's body language to evaluate their emotions and needs.<br/>
                    Passionate about problem solving, Daniel adapts well to the unpredictable nature of Pokémon medicine and is patient with our emotionally developing Pokémon.
                </div>
            </p>
        </div>
    );
}