import productGif from '../../assets/Sofá.gif';
import product from '../../assets/product1.png';
import button360 from '../../assets/Vector.png';
import exit from '../../assets/Vectorexit.png'
import './style.scss';
import { useState } from 'react';

export  function Product(){

  const [change, setChange] = useState(false);

    return(

      <div className='bodyProduct'>

      {

      change === false ? (
       <>
      <button onClick={() => setChange(true)} className='button360'><img src={button360}/></button>

      <img src={product}/>
      </>
      )

      :
    (
      <>
      <button onClick={() => setChange(false)} className='button360'><img className='exit' src={exit}/></button>

      <img src={productGif}/>
      </>
    )
      }
      </div>
   

    );
}