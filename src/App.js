import logo from './logo.svg';
import {useState} from 'react'
import Rect from './Rect'

function App() {
  const [viewBox, setViewBox] = useState("")
  const [vbX, setVbX] = useState(600)
  const [moveDragOn, setMoveDragOn] = useState(false);
  const [resizeDragOn, setResizeDragOn] = useState(false);
  const [resizeCircle, setResizeCircle] = useState("")
  const [clickBox, setClickBox] = useState({})
  
  const [box , setBox] = useState({ 
    x : 10, 
    y : 10 ,
    width : 100, 
    height : 50,
    strokeDasharray : 0,
    r : 0,
    cursor : "default",
    modify : false,
  })
  
  const onSvgDown = (e) => {
    if (e.target.nodeName === "rect") {
      if (resizeDragOn == true) return;
      const diffX = e.pageX - box.x 
      const diffY = e.pageY - box.y
      setMoveDragOn(true)
      setClickBox({x : e.pageX, y : e.pageY, diffX : diffX, diffY : diffY})
    }
    else if (e.target.nodeName === 'circle'){
      setResizeCircle(e.target.id)
      setResizeDragOn(true)
      setMoveDragOn(false)
      setClickBox({x : e.pageX, y : e.pageY, width : box.width, height : box.height})
    }
  }
  const onSvgMove = (e) => {
    if (moveDragOn) setBox({...box, x : e.pageX - clickBox.diffX, y : e.pageY - clickBox.diffY})
    if (resizeDragOn) {

      if (resizeCircle === 'c1') {
        setBox({...box, x : e.pageX , y : e.pageY , width : clickBox.width + (clickBox.x - e.pageX) , height : clickBox.height + (clickBox.y - e.pageY)})
      } else if ( resizeCircle === 'c2') {
        setBox({...box, width : e.pageX - box.x , y : e.pageY , height : clickBox.height + (clickBox.y - e.pageY)})
      } else if ( resizeCircle === 'c3') {
        setBox({...box, x : e.pageX , height : e.pageY - box.y , width : clickBox.width + (clickBox.x - e.pageX)})
      } else if ( resizeCircle === 'c4') {
        setBox({...box, width : e.pageX - box.x , height : e.pageY - box.y})
      }
    }
  }
  const onSvgUp = (e) => {
    if (e.target.nodeName === "rect") {
      if (e.pageX === clickBox.x && e.pageY === clickBox.y) {
        if (box.strokeDasharray !== 0) setBox({...box, strokeDasharray : 0 , r : 0, cursor : "default"})
        else setBox({...box, strokeDasharray : 2 , r : 4, cursor : "move"})
      }
    }
    setMoveDragOn(false)
    setResizeDragOn(false)
  }
  const onSvgClick = (e) => {
    //alert(e.target.id)
    if (e.target.id === "rect") {
//      if (box.strokeDasharray !== 0) setBox({...box, strokeDasharray : 0 , r : 0, cursor : "default"})
//      else setBox({...box, strokeDasharray : 2 , r : 4, cursor : "move"})
    }
    else {
//      const x = 50i
//      setViewBox("0 0 " + String(vbX - x) + " " + String(vbX - x))
//      setVbX(vbX - x)
    }
  }
  
  return (
    <div className="App">
      <div className="Svg" >
        <svg viewBox={viewBox} width="600" height="600" style={{ border : "1px solid gray"}} 
          onMouseDown={(e) => onSvgDown(e)} onMouseUp={(e) => onSvgUp(e)} onMouseMove={(e) => onSvgMove(e)}>
          <Rect box={box}></Rect>
        </svg>

      </div>
    </div>
  );
}

export default App;
