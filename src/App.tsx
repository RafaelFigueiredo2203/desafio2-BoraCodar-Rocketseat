

import reactLogo from './assets/react.svg'
import './style.scss';

import { DetailsProduct } from './Components/DetailsProduct';
import { Product } from './Components/Product/Product';

function App() {


  return (
    <div className='body'>
      <Product/>

      <DetailsProduct/>
    </div>
  )
}

export default App
