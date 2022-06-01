import React from "react";


// ------------using React Bootstrap---------------
import { Row, Col,Form } from "react-bootstrap";
import { BsArrowRight } from "react-icons/bs";


// ----------------- Using Functioal Component--------------------


function Checkout() {
    return (
        <>

        {/* // --------shopping bar-------------------- */}

        <div className='container-fluid mt-5   ff'>
      <h2 style={{fontSize:'3rem',fontWeight:'600'}}>
            <span style={{ color: "grey" }}>SHOPPING CART <BsArrowRight /></span>{" "}
            <span style={{ color: "red" }}>
              CHECKOUT <BsArrowRight />
            </span>{" "}
            <span style={{ color: "grey" }}>ORDER COMPLETE</span>
          </h2>
   
      </div>






            <Row className="d-flex justify-content-center mt-5 border leftme">
               
               
                <Col className="col-xl-7 col-lg-7 col-md-12 col-sm-12 col-12 ml-4  mt-5 border">
                    <Row>
                        <Col>
                            <h3 className="mt-4">BILING DETAILS</h3>
                            <div className="d-flex justify-content-between">


                         

                                <input
                                    type="text"
                                    placeholder="First Name*"
                                    style={{ width: "48%", marginTop: "20px" }}
                                />
                                <input
                                    type="text"
                                    placeholder="Last Name"
                                    style={{ width: "48%", marginTop: "20px" }}
                                />
                            </div>
                            <input
                                type="text"
                                placeholder="COMPANY NAME (optional)"
                                style={{ marginTop: "20px", width: "100%" }}
                            />
                            <input
                                type="text"
                                placeholder="Country / Region"
                                style={{ marginTop: "20px", width: "100%" }}
                            />
                            <input
                                type="text"
                                placeholder="Street Address"
                                style={{ marginTop: "20px", width: "100%" }}
                            />
                            <input
                                type="text"
                                placeholder="Town / City"
                                style={{ marginTop: "20px", width: "100%" }}
                            />
                            <input
                                type="text"
                                placeholder="State / Country (optional)"
                                style={{ marginTop: "20px", width: "100%" }}
                            />
                            <input
                                type="text"
                                placeholder="Phone"
                                style={{ marginTop: "20px", width: "100%" }}
                            />
                            <input
                                type="text"
                                placeholder="Email"
                                style={{ marginTop: "20px", width: "100%" }}
                            />
                            <input
                                type="text"
                                placeholder="Order Notes (optional)"
                                style={{ marginTop: "20px", width: "100%", height: "150px" }}
                            />

        
                            <div class="form-check checkbox">
                            <input class="form-check-input checkbox1 " type="checkbox" value="" id="defaultCheck1"/>
                            
                            <h3 className="mt-4 " style={{marginLeft:'183px'}}>SHIPPING TO A DIFFERENT ADDRESS</h3>
                          
                          </div>
                            
                            
                            <div className="d-flex justify-content-between">


                         

                                <input
                                    type="text"
                                    placeholder="First Name*"
                                    style={{ width: "48%", marginTop: "20px" }}
                                />
                                <input
                                    type="text"
                                    placeholder="Last Name"
                                    style={{ width: "48%", marginTop: "20px" }}
                                />
                            </div>
                            <input
                                type="text"
                                placeholder="COMPANY NAME (optional)"
                                style={{ marginTop: "20px", width: "100%" }}
                            />
                            <input
                                type="text"
                                placeholder="Country / Region"
                                style={{ marginTop: "20px", width: "100%" }}
                            />
                            <input
                                type="text"
                                placeholder="Street Address"
                                style={{ marginTop: "20px", width: "100%" }}
                            />
                            <input
                                type="text"
                                placeholder="Town / City"
                                style={{ marginTop: "20px", width: "100%" }}
                            />
                            <input
                                type="text"
                                placeholder="State / Country (optional)"
                                style={{ marginTop: "20px", width: "100%" }}
                            />
                            <input
                                type="text"
                                placeholder="Phone"
                                style={{ marginTop: "20px", width: "100%" }}
                            />
                            <input
                                type="text"
                                placeholder="Email"
                                style={{ marginTop: "20px", width: "100%" }}
                            />
                            <input
                                type="text"
                                placeholder="Order Notes (optional)"
                                style={{ marginTop: "20px", width: "100%", height: "150px" }}
                            />
                            
                        </Col>
                    </Row>
                </Col>
                 <Col
                    className="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12 ml-5 mt-5 border"
                    
                >
                    <div className="mt-5" style={{ height: "300px", marginTop: "15px" }}>
                        <h3 style={{ textAlign: "center" }}>YOUR ORDER</h3>
                        <div
                            style={{
                               
                                height: "230px",
                                display: "flex",
                                justifyContent: "space-between",
                                flexDirection: "column",
                                marginTop: "15px",
                                
                                width:'100% '

                            }}
                        >
                            <div
                                style={{
                                    display: "flex",
                                    justifyContent: "space-between",

                                }}
                            >
                                <h5>PRODUCT</h5>
                                <h5>SUBTOTAL</h5>
                               
                            </div>
                            <hr className="productline"></hr>
                            <div
                                style={{
                                    display: "flex",

                                    justifyContent: "space-between",
                                }}
                            >
                                <p>Decdeal Disposable</p>
                                <p>$53.33</p>
                            </div>
                            <hr className="productline"></hr>

                            <div
                                style={{
                                    display: "flex",

                                    justifyContent: "space-between",
                                }}
                            >
                                <p>Subtotal</p>
                                <p>$53.33</p>
                            </div>
                            <hr className="productline"></hr>

                            <div
                                style={{
                                    display: "flex",

                                    justifyContent: "space-between",
                                }}
                            >
                                <p>Shipping</p>
                                <p>$53.33</p>
                            </div>
                            <hr className="productline"></hr>

                            <div
                                style={{
                                    display: "flex",
                                    justifyContent: "space-between",
                                    

                                    
                                }}
                            >
                                <h5>TOTAL</h5>



                                <h5 style={{color:'#1C7584',
                                                  display: "flex",
                                                  
                                                
                                                }}>$63.99</h5>
                            </div>
                            <hr className="productline"></hr>

                        </div>
                      
                      
                      
                        <div class="form-check form-check-inline checkboxx">
                        <input class="form-check-input checkbox11" 
                        type="checkbox" 
                        id="inlineCheckbox1" 
                        value="option1"/>
                       </div>

                        <h5
                            style={{
                                marginTop: '-27px',
                                marginLeft: '19px'
                            }}
                        >
                            Direct Band Transfer
                        </h5>
                        

                        
                        <div
                            style={{
                              
                                height: "50px",
                                textAlign: "start",
                                marginTop: "15px",
                            }}
                        >
                            <p className="p-1">
                                Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account
                            </p>
                        </div>





                        <div class="form-check form-check-inline checkboxxx">
                        <input class="form-check-input checkbox111" 
                        type="checkbox" 
                        id="inlineCheckbox" 
                        value="option1"/>
                       </div>
                        <h5
                            style={{
                                marginTop: '-27px',
                                marginLeft: '19px'
                            }}
                        >
                            Cash On Delivery
                        </h5>
                        <div
                            style={{
                                background: "#fff",
                                height: "50px",
                                textAlign: "start",
                                marginTop: "15px",
                            }}
                        >
                            <p className="p-1">
                                Pay with cash upon delivery.
                            </p>
                        </div>
                        <p
                            style={{
                                marginTop: "15px",
                                color:'grey'
                              
                            }}
                        >
                            Your personal data will be used to process your order, support your experience throughout this website, and for other purposes described in our
                            <span style={{ color: "green" }}> privacy policy.</span>
                        </p>
                        <p
                            style={{
                                marginTop: "15px",
                                color:'grey'
                            }}
                        >
                            I have read and agree to the website
                            <span style={{ color: "black" }}> terms and conditions *</span>
                        </p>
                        <div class="form-group">
                            <input type="submit" class="btnSubmit border btn " value="PLACE ORDER" />
                        </div>
                    </div>
                </Col> 
                
                      
            </Row>


        </>
    );
}

export default Checkout;