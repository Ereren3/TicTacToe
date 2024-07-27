import {useState} from "react";

export default function Square({value,onSquareClick}) {

    //const [value, setValue] = useState(null);

    /*function handleClick(){
        setValue("x")
    };*/

    return(
        <button
            className="Square Button"
            style={
            {
                height:30,
                width:30,
                borderWidth:1,
                borderColor:"black"
            }}
            onClick={onSquareClick}
        >
            {value}
        </button>
    )
}