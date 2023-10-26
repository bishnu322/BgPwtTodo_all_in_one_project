import { useState } from 'react';
import BackGroundChnger from "./components/BackGroundChnger";
import PasswordGenerator from './components/PasswordGenerator';

function BgMain() {
  let [color, setColor] = useState("#64748B")

  return (
    <div 
    className="w-full h-[80vh] duration-1000
    " style={{backgroundColor: color}}>
        
      <div className="flex bg-green-500 max-w-full mt-4 justify-center p-1 rounded-xl absolute bottom-20 left-36">
        <BackGroundChnger colorName = "Red" setColor = {setColor} ChangedColor='red' />
        <BackGroundChnger colorName = "Green" setColor = {setColor} ChangedColor='green' />
        <BackGroundChnger colorName = "Blue" setColor = {setColor} ChangedColor='blue' />
        <BackGroundChnger colorName = "Olive" setColor = {setColor} ChangedColor='olive' />
        <BackGroundChnger colorName = "Gray" setColor = {setColor} ChangedColor='gray' />
        <BackGroundChnger colorName = "Yellow" color='black' setColor = {setColor} ChangedColor='Yellow' />
        <BackGroundChnger colorName = "Pink" color='black' setColor = {setColor} ChangedColor='pink' />
        <BackGroundChnger colorName = "Purple" setColor = {setColor} ChangedColor='purple' />
        <BackGroundChnger colorName = "Maroon" setColor = {setColor} ChangedColor='maroon' />
        <BackGroundChnger colorName = "Orange" color='black' setColor = {setColor} ChangedColor='#fea17c' />
        <BackGroundChnger colorName = "Black" color='white' setColor = {setColor} ChangedColor='black' />
      </div>
    </div>
  );
}

export default BgMain;
