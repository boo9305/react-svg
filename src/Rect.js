import {useState} from 'react'

function Rect (props) {

  return (
    <g>
    <rect id="rect" width={props.box.width} height={props.box.height} x={props.box.x} y={props.box.y} fill="white" stroke="gray"
      stroke-dasharray={props.box.strokeDasharray} 
      style={{ cursor : props.box.cursor}}
      text="asd"
    >
    </rect>
    <circle id='c1' cx={props.box.x} cy={props.box.y} r={props.box.r} style={{ cursor : "nw-resize" }}></circle>
    <circle id='c2' cx={props.box.x + props.box.width} cy={props.box.y} r={props.box.r} style={{ cursor : "ne-resize" }}></circle>
    <circle id='c3' cx={props.box.x} cy={props.box.y + props.box.height} r={props.box.r} style={{ cursor : "ne-resize" }}></circle>
    <circle id='c4' cx={props.box.x + props.box.width} cy={props.box.y + props.box.height} r={props.box.r} style={{ cursor : "nw-resize" }}></circle>

    </g>)


}

export default Rect
