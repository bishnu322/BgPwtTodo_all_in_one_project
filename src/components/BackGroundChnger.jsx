import React from 'react'

const BackGroundChnger = ({colorName, color = "white", setColor, ChangedColor}) => {
  return (
    <div>
        <button className='py-2 px-7 rounded-xl m-1
        
        ' style={{backgroundColor : colorName, color : color}}
        onClick={() => {setColor(ChangedColor)}}
        >{colorName}</button>
    </div>
  )
}

export default BackGroundChnger