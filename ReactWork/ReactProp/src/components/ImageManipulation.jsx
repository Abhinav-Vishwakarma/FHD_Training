import React, {useState} from 'react'
import cat from './cat.png'
function ImageManipulation() {
    const [catHeight, setCatHeight] = useState(250)
  return (
    <div style={{
        border:'2px solid black',
        height:'480px',
        width: ' 350px',
        alignContent: 'center',
        justifyContent:'center',
        paddingLeft : '100px'
    }}>
        <div>
            <img src = {cat}  height={catHeight} width = {250} />
        </div>
        <button onClick={()=>{
            setCatHeight(catHeight + 20);
        }}> Increase height </button>
        <button onClick={()=>{
            setCatHeight(catHeight - 20);
        }}> Decrease height </button>
    </div>
  )
}

export default ImageManipulation