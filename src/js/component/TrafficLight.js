import React, {useState} from "react";

export function TrafficLight(){
    const [redOn, SetRedOn] = useState(false);
    const [yellowOn, SetYellowOn] = useState(false);
    const [greenOn, SetGreenOn] = useState(false);

    const HandleClick = (color)=>{
        SetRedOn(color == "red");
        SetYellowOn(color == "yellow");
        SetGreenOn(color == "green");
        console.log(color);
    }

    return(<div className="m-auto w-min">
        <div className="bg-gray-500 m-auto w-1/5 h-9"/>
        <div className="flex flex-col p-2 bg-gray-500 rounded-lg space-y-2">
            <Light color="red" isOn={redOn} onClicked={HandleClick}/>
            <Light color="yellow" isOn={yellowOn} onClicked={HandleClick}/>
            <Light color="green" isOn={greenOn} onClicked={HandleClick}/>

        </div>
    </div>)
}

function Light({color, isOn, onClicked}){
    
    const HandleLightClick = () =>{
        onClicked(color);
    }

    const brightness = (isOn)? 400 : 900;
    const fullColor = " bg-"+color+"-"+brightness + " ";
    const shadow = (isOn)? " shadow-lg shadow-"+color+"-500/100 " : "";
    return(<div className={"w-20 h-20 rounded-full " + fullColor + shadow} onClick={HandleLightClick}>

    </div>)
}