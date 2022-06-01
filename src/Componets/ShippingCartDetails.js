import React from 'react'
import { BsArrowRight } from "react-icons/bs";
import rectangle83 from '../assets/Rectangle 83.png'
import bicart from '../assets/bi_cart-x.png'
import PURCHASE from '../assets/PURCHASE CART.png'

import { Link } from 'react-router-dom'

function  ShippingCartDetails() {
  return (
    <>

      <div className='container-fluid mt-5   ff'>
      <h2 style={{fontSize:'3rem',fontWeight:'600'}}>
            <span style={{ color: "red" }}>SHOPPING CART <BsArrowRight /></span>{" "}
            <span style={{ color: "grey" }}>
              CHECKOUT <BsArrowRight />
            </span>{" "}
            <span style={{ color: "grey" }}>ORDER COMPLETE</span>
          </h2>
   
      </div>


      <div className='container-fluid '>
        <div className='row  '>
          <div className='col-xl-7 col-lg-7 col-md-12 col-ms-12 col-12 mt-5 '>
          <p className='movingline' style={{textAlign:'end',marginTop:'0px'}}>X</p>
          <div className='row ml-5'>
            <img src={rectangle83} className='img-fluid ml-5' />
            <div className='col-2-border ml-3 mt-3'>
            

           
              <p className='decdeal' style={{ fontWeight: "600" }}>Decdeal Disposable Mask</p>

           


              <p className='decdeal'>39.99 $
              </p>
              <div className='d-flex  pl-3 '>
                <p className='ml-3'>Art. No.:<br />
                  Color:

                </p>
                <p className='ml-3'>54637253 <br />
                  Mint

                </p>
                <p className='ml-3'>Size:<br />
                  Total:
                </p>
                <p className='ml-3'>21*45<br />
                  39.99
                </p>

             

              </div>
              

            </div>
          

           


          </div>
          <p style={{textAlign:'end',color:'black',fontWeight:'bold'}}>Total</p>
          <div className='black border mt-2 ' style={{width:'90%',marginLeft:'100px'}}></div>  
          <p style={{textAlign:'end',marginTop:'5px',color:'black',fontWeight:'bold'}}>82.39$</p>

          </div>




          <div className='col-xl-5 col-lg-5 col-md-12 col-ms-12 col-12 asaa  border-danger'>
          <div className='addind'>
        <p className='addme mt-5 ml-4'>Add A DISCOUNT CODE</p>
        <input type="text" placeholder=""
        style={{ marginTop: "-10px", width: "65%",marginLeft:"20px" }}/>
        <button className='addplz'>Add</button>
        <p className='addme ml-4' style={{marginTop:'18px'}}>Log in to use your member offers.</p>
        <button className='btnme1 ml-4'> LOG IN</button>
        <p className='mt-3 ml-4'>Order value:
        <br/>Shipping:
         </p>
         <p style={{marginLeft:'300px',marginTop:'-60px'}}>82.98 $
         <br/>
         0.0 $
          </p>
         <p className='mt-3 ml-4'>Total</p>
         <p style={{marginLeft:'300px',marginTop:'-30px'}}>82.98 $</p>
        <button className='btnme111 ml-4'>Continue to checkout</button>
        <div className='mt-4 mmm'></div>


                </div>

          </div>

        </div>
      </div>
     

    
    
    
    </>
  )
}

export default ShippingCartDetails
