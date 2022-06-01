import React from 'react'
import noorder from '../assets/ant-design.png'
import { Link } from 'react-router-dom'
import { Row, Col,Form } from "react-bootstrap";

function Order () {
    return (
        <div>

            <div className='row'>
            <div className='col-xl-2 col-lg-2 col-md-4 col-sm-4-col-12'>

                    <div class="wrapper">

                        <nav id="sidebar">
                            <div class="sidebar-header">

                            </div>

                            <ul class="list-unstyled components pt-5">


                                <li>
                                    <a className='myac ' href="#">My Account</a>
                                </li>
                                <li>
                                    <a className='acoo' href="#">Accounts details</a>
                                </li>
                                <li>
                                    <a className='acoo' href="/">Orders</a>
                                </li>
                            </ul>


                        </nav>
                        
                        </div>
                    
            </div>
                <div className='col-xl-10 col-lg-10 col-md-8 col-sm-12 col-12  accounthome'>
                <p className='myAccounts mt-5 pt-5'>ORDER</p>

                
                

               <div className='noorder d-flex pt-4'>
               <img src={noorder} className='img-fluid frame1' />
        <a class="nav-link1" href="#">BROWSE PRODUCTS</a>
        <p className='ben'>No order has been made yet.</p>
               
               
               </div>
             
            
               
          

                </div>
                


            </div>

            <script src="https://code.jquery.com/jquery-1.12.0.min.js"></script>

            <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>

            <script src="https://cdnjs.cloudflare.com/ajax/libs/malihu-custom-scrollbar-plugin/3.1.5/jquery.mCustomScrollbar.concat.min.js"></script>
        </div>
    )
}

export default Order
