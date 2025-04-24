import React, {useContext} from 'react'
import Card from '../../Images/img05.jpg';
import { DataContext } from '../../Context/Dataprovider';
import { FaWindowClose } from "react-icons/fa";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import { FaTrashCan } from "react-icons/fa6";



export const Carrito = () => {
  const value = useContext(DataContext)
  const [menu,setMenu] = value.menu

  const tooglefalse = ()=> {
    setMenu(false);
  }

  const show1 = menu ? "carritos show" : "carritos";
  const show2 = menu ? "carrito show" : "carrito";

  return (
    <div className={show1}>
      <div className={show2}>
        <div className="carrito__close" onClick={tooglefalse}>
          {/* <box-icon name='x' ></box-icon> */}
          <FaWindowClose className='x'/>
        </div>
        <h2>SU CARRITO</h2>
        <div className="carrito__center">          
          <div className="carrito__item">
            <img src='https://ucarecdn.com/c05ea8a9-1f00-4349-b6cc-b67403258bfe/-/preview/600x800/-/format/auto/' alt="" />
            <div className='info'>
              <h3>Equipacion Portugal Primaria NIKE</h3>
              <p className='price'>$200</p>
            </div>
            <div className='div__cantidad'>
              {/* <box-icon type='solid' name='up-arrow'></box-icon> */}
              <IoIosArrowUp size={40} className='arrow'/>
              <p className='cantidad'>1</p>
              {/* <box-icon type='solid' name='down-arrow'></box-icon> */}
              <IoIosArrowDown size={40} className='arrow'/>
            </div>
            <div className='remove__item'>
              {/* <box-icon name='trash'></box-icon> */}
              <FaTrashCan className='trash'/>
            </div>
          </div>

          <div className="carrito__item">
            <img src='https://ucarecdn.com/c05ea8a9-1f00-4349-b6cc-b67403258bfe/-/preview/600x800/-/format/auto/' alt="" />
            <div className='info'>
              <h3>Equipacion Portugal Primaria NIKE</h3>
              <p className='price'>$200</p>
            </div>
            <div className='div__cantidad'>
              {/* <box-icon type='solid' name='up-arrow'></box-icon> */}
              <IoIosArrowUp size={40} className='arrow'/>
              <p className='cantidad'>1</p>
              {/* <box-icon type='solid' name='down-arrow'></box-icon> */}
              <IoIosArrowDown size={40} className='arrow'/>
            </div>
            <div className='remove__item'>
              {/* <box-icon name='trash'></box-icon> */}
              <FaTrashCan className='trash'/>
            </div>
          </div>

          <div className="carrito__item">
            <img src='https://ucarecdn.com/c05ea8a9-1f00-4349-b6cc-b67403258bfe/-/preview/600x800/-/format/auto/' alt="" />
            <div className='info'>
              <h3>Equipacion Portugal Primaria NIKE</h3>
              <p className='price'>$200</p>
            </div>
            <div className='div__cantidad'>
              {/* <box-icon type='solid' name='up-arrow'></box-icon> */}
              <IoIosArrowUp size={40} className='arrow'/>
              <p className='cantidad'>1</p>
              {/* <box-icon type='solid' name='down-arrow'></box-icon> */}
              <IoIosArrowDown size={40} className='arrow'/>
            </div>
            <div className='remove__item'>
              {/* <box-icon name='trash'></box-icon> */}
              <FaTrashCan className='trash'/>
            </div>
          </div>

        </div>
        <div className="carrito__footer">
          <h3>Total: $2334 </h3>
          <button className='btn'>Pagar</button>
        </div>
      </div>
    </div>
  )
}
export default Carrito;