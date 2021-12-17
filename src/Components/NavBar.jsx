import React, {useState, useEffect} from "react";
import axios from "axios";




const NavBar = (props) =>{
    
    useEffect(()=> {
        axios.get('https://pogoapi.net/api/v1/pokemon_types.json')
        .then(res=> {
            setPokemon(res.data)
        })
        .catch(err=> console.log(err))
        
    }, []);
    
    const bugArr = []
    const darkArr = []
    const dragonArr = []
    const electricArr = []
    const fairyArr = []
    const fightingArr = []
    const fireArr = []
    const flyingArr = []
    const ghostArr = []
    const grassArr = []
    const groundArr = []
    const iceArr = []
    const normalArr = []
    const poisonArr = []
    const psychicArr = []
    const rockArr = []
    const steelArr = []
    const waterArr = []




    const [pokemon, setPokemon] = useState([]);
    // const [grassTypes, setGrassTypes] = useState([]);
    // const [fireTypes, setFireTypes] = useState([]);
    // const [waterTypes, setWaterTypes] = useState([]);
    // const [electricTypes, setElectricTypes] = useState([]);
    // const [groundTypes, setGroundTypes] = useState([]);
    // const [rockTypes, setRockTypes] = useState([]);
    // const [flyingTypes, setFlyingTypes] = useState([]);
    // const [darkTypes, setDarkTypes] = useState([]);
    // const [bugTypes, setBugTypes] = useState([]);
    // const [fightingTypes, setFightingTypes] = useState([]);
    // const [ghostTypes, setGhostTypes] = useState([]);
    // const [iceTypes, setIceTypes] = useState([]);
    // const [steelTypes, setSteelTypes] = useState([]);
    // const [psychicTypes, setPsychicTypes] = useState([]);
    // const [normalTypes, setNormalTypes] = useState([]);
    // const [poisonTypes, setPoisonTypes] = useState([]);
    // const [fairyTypes, setFairyTypes] = useState([]);
    // const [dragonTypes, setDragonTypes] = useState([]);


    const types = (pokemon) => {
        Object.keys(pokemon).map((item, i)=>{
            let thing = pokemon[item].type
            return(
            thing[0] === "Grass" || thing[1] === "Grass" ? grassArr.push(Object.values(pokemon[item])):
            thing[0] === "Fire" || thing[1] === "Fire" ? fireArr.push(Object.values(pokemon[item])):
            thing[0] === "Bug" || thing[1] === "Bug" ? bugArr.push(Object.values(pokemon[item])):
            thing[0] === "Dark" || thing[1] === "Dark" ? darkArr.push(Object.values(pokemon[item])):
            thing[0] === "Dragon" || thing[1] === "Dragon" ? dragonArr.push(Object.values(pokemon[item])):
            thing[0] === "Electric" || thing[1] === "Electric" ? electricArr.push(Object.values(pokemon[item])):
            thing[0] === "Fairy" || thing[1] === "Fairy" ? fairyArr.push(Object.values(pokemon[item])):
            thing[0] === "Psychic" || thing[1] === "Psychic" ? psychicArr.push(Object.values(pokemon[item])):
            thing[0] === "Water" || thing[1] === "Water" ? waterArr.push(Object.values(pokemon[item])):
            thing[0] === "Fighting" || thing[1] === "Fighting" ? fightingArr.push(Object.values(pokemon[item])):
            thing[0] === "Flying" || thing[1] === "Flying" ? flyingArr.push(Object.values(pokemon[item])):
            thing[0] === "Ghost" || thing[1] === "Ghost" ? ghostArr.push(Object.values(pokemon[item])):
            thing[0] === "Ground" || thing[1] === "Ground" ? groundArr.push(Object.values(pokemon[item])):
            thing[0] === "Ice" || thing[1] === "Ice" ? iceArr.push(Object.values(pokemon[item])):
            thing[0] === "Normal" || thing[1] === "Normal" ? normalArr.push(Object.values(pokemon[item])):
            thing[0] === "Poison" || thing[1] === "Poison" ? poisonArr.push(Object.values(pokemon[item])):
            thing[0] === "Steel" || thing[1] === "Steel" ? steelArr.push(Object.values(pokemon[item])):
            thing[0] === "Rock" || thing[1] === "Rock" ? rockArr.push(Object.values(pokemon[item])): console.log("end")
            )
        })
    }
    
    types(pokemon)
    
    // const buttonTypes = () => {
        
    //     const bug = bugArr
    //     const dark = darkArr
    //     const dragon = dragonArr
    //     const electric = electricArr
    //     const fairy = fairyArr
    //     const fighting = fightingArr
    //     const fire = fireArr
    //     const flying = flyingArr 
    //     const ghost = ghostArr
    //     const grass = grassArr
    //     const ground = groundArr 
    //     const ice = iceArr
    //     const normal = normalArr 
    //     const poison = poisonArr
    //     const psychic = psychicArr 
    //     const rock = rockArr
    //     const steel = steelArr
    //     const water = waterArr 
        
    //     var pokemonTypes = [
    //         bug,
    //         dark,
    //         dragon,
    //         electric,
    //         fairy,
    //         fighting,
    //         fire,
    //         flying,
    //         ghost,
    //         grass,
    //         ground,
    //         ice,
    //         normal,
    //         poison,
    //         psychic,
    //         rock,
    //         steel,
    //         water
    //     ]
    // }
    // buttonTypes()

    return(
        <nav>
        {/* many buttons that display one jumbotron in the body that has different data for each button (Pokemon types) */}
            {
                Object.values(types).map((item, i)=>{
                    <button>{item}</button>
                })
            }
        </nav>
    )
}

export default NavBar;
    