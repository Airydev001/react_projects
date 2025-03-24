export default function Die(props) {
    return (
        <button
        aria-pressed = {props.isHeld}
         aria-label = {`Die with value${props.value}, ${props.isHeld? "held": "not held"}`}
        onClick={()=>props.onclick(props.id)}
        style= {{
            backgroundColor: 
            props.isHeld ? 
            "#59E391": "white"
        }}>{props.value}</button>
    )
}