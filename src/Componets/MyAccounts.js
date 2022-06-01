import React from 'react'
import { Link } from 'react-router-dom'
import { Row, Col,Form } from "react-bootstrap";


function MyAccounts() {
    return (
        <div>

            <div className='row'>
            <div className='col-xl-2 col-lg-2 col-md-4 col-sm-4-col-12  '>

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




            {/* <div className='col-xl-2 col-lg-2 col-md-4 col-sm-6-col-12  '> */}


            <Col className="col-xl-10 col-lg-10 col-md-8 col-sm-12 col-12  mt-5  ">
            <p className='myAccounts mt-5 pt-5'> MY ACCOUNT</p>
                    <Row>
                        <Col className='ml-4'>
                        <p className='details'>Account Details</p>
                            <div className="d-flex justify-content-between">


                         

                                <input className=''
                                    type="text"
                                    placeholder=    "    First Name*"
                                    style={{ width: "48%",height:'70px', marginTop: "20px" }}
                                />
                                <input
                                    type="text"
                                    placeholder="    Last Name*"
                                    style={{ width: "48%",height:'70px', marginTop: "20px" }}
                                />
                            </div>
                            <input
                                type="text"
                                placeholder="    Display Name"
                                style={{ marginTop: "20px", height:'70px',width: "100%" }}
                            />
                            <input
                                className='inpputmoving'
                                type="text"
                                placeholder="    Email Address*"
                                style={{ marginTop: "20px",height:'70px', width: "100%" }}
                            />

                        <p className='detailss'>Password Changes</p>
                           
                            <input
                                type="text"
                                placeholder="    Current password (leave blank to leave unchanged)"
                                style={{ marginTop: "20px",height:'70px', width: "100%" }}
                            />
                            <input
                                type="text"
                                placeholder="    New password (leave blank to leave unchanged)*"
                                style={{ marginTop: "20px",height:'70px', width: "100%" }}
                            />
                               <input
                                type="text"
                                placeholder="    Confirm new password"
                                style={{ marginTop: "20px",height:'70px', width: "100%" }}
                            />
                            
                        </Col>

                    </Row>
            <button type="button" class="btn3 mt-4">Save Changes</button>

                </Col>




             

            </div>

            <script src="https://code.jquery.com/jquery-1.12.0.min.js"></script>

            <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>

            <script src="https://cdnjs.cloudflare.com/ajax/libs/malihu-custom-scrollbar-plugin/3.1.5/jquery.mCustomScrollbar.concat.min.js"></script>
        </div>
    )
}

export default MyAccounts
