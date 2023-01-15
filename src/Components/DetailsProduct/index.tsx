import { Button, ButtonGroup } from '@chakra-ui/react'
import  './DetailsProduct.scss';
import { useState } from 'react';

export function DetailsProduct(){

  const [changeBuy, setChangeBuy] = useState(false);

  return(
    <div className='detailsBody'>

      
     <span className='cp'>CÓDIGO: 42404</span>

     <h1>Sofá Margot II - Rosé</h1>

     <h3>R$ 4.000 </h3>

     {
      changeBuy === false ? (
      <button onClick={() => setChangeBuy(true)} className='btn'>
    ADICIONAR À CESTA
    </button>
      )
      :
      (
        <button onClick={() => setChangeBuy(false)} className='btnbuy'>
        REMOVER DA CESTA
        </button>
      )
      }
    </div>
  );
}