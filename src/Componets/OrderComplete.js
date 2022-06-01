import React from 'react';
import { Link } from 'react-router-dom'


// ------------- React icons --------------
import {BsFacebook} from 'react-icons/bs';
import {BsLinkedin} from "react-icons/bs";
import {FaInstagramSquare} from "react-icons/fa";
import {AiFillTwitterCircle} from "react-icons/ai";
import { BsArrowRight} from "react-icons/bs"

// ----------------- Using class Component--------------------

export default class OrderComplete extends React.Component {
  render() {
    return (
        <>
     



 <div className='container-fluid border'>

{/* // -------------Shopping bar------------------------ */}

<div className='container-fluid mt-5   ff'>
      <h2 style={{fontSize:'3rem',fontWeight:'600'}}>
            <span style={{ color: "grey" }}>SHOPPING CART <BsArrowRight /></span>{" "}
            <span style={{ color: "grey" }}>
              CHECKOUT <BsArrowRight />
            </span>{" "}
            <span style={{ color: "red" }}>ORDER COMPLETE</span>
          </h2>
   
      </div>



{/* // ------------------Thank you box-------------------- */}
      <div className='container  -danger co mt-5 py-3'>
          <h1 className='thank'>Thank you.Your Order has been received</h1>
          <div className='mt-5'></div>
      </div>
     
       <div className='container  border-danger coo1 mt-5  '>
           <h1 className='orr' ><span style={{color:"grey"}}>ORDER NUMBER</span> <br/>
               4312
           </h1>
           <div className='orr1'></div>
           <h1 className='orr'><span style={{color:"grey"}}>DATE</span> <br/>
               APRAIL 12,2022
           </h1>
           <div className='orr1'> </div>
           <h1 className='orr'><span style={{color:"grey"}}>TOTAL</span> <br/>
               $62.99
           </h1>
           <div className='orr1'> </div>
           <h1 className='orr'><span style={{color:"grey"}}>PAYMENT METHOD</span> <br/>
               Cash on delivery
           </h1>
       </div>




    {/* //    ---------------- Pay the Cash on delivery------------------- */}

       <div className='container  -danger mt-4'>
           <h1 className='pay '>PAY WITH CASH UP ON DELIVERY</h1>
       </div>
         
        <div className='container '>
        <h1 className='del ml-3 mt-5'>ORDER DETAILS</h1>
              <div className='mix ml-3 mt-5'>
              <h2 className='product' style={{fontSize:'23px',fontWeight:'600'}}>PRODUCT</h2>
              <h2 className='product1'style={{fontSize:'23px',fontWeight:'600'}}>SUBTOTAL</h2>
              </div>
              <hr className='hr3' />
              <div className='mix ml-3'>
              <h2 className='product'>Decided Dispossible</h2>
              <h2 className='product1'>$53.33</h2>
              </div>
              <hr className='hr3' />
              <div className='mix ml-3'>
              <h2 className='product'>Subtotal</h2>
              <h2 className='product1'>$53.33</h2>
              </div>
              <hr className='hr3' />
              <div className='mix ml-3'>
              <h2 className='product'>Shiping</h2>
              <h2 className='product1'>$53.33</h2>
              </div>
              <hr className='hr3' />
              <div className='mix ml-3 '>
              <h2 className='product'>Payment Method</h2>
              <h2 className='product1'>Cash on delivery</h2>
              </div>
              <hr className='hr3' />
              <div className='mix ml-3'>
              <h2 className='product'style={{fontSize:'23px',fontWeight:'600'}}>TOTAL</h2>
              <h2 className='product1'style={{fontSize:'23px',fontWeight:'600', color:'#1C7584'}}>$62.99</h2>
              </div>
              <hr className='hr3' />
        </div>

       
 </div>
      </>

    )
  }
}
