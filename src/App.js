import logo from './logo.svg';
import {useState} from 'react'
import Rect from './Rect'

function App() {
  const [viewBox, setViewBox] = useState("")
  const [vbX, setVbX] = useState(600)

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
        <svg viewBox={viewBox} width="600" height="600" style={{ border : "1px solid gray"}} >
          <Rect></Rect>
        </svg>

      </div>
    </div>
  );
}

export default App;
