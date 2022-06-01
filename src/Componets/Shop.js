import React from "react";
// ----------Import Iamges to Assets------------
// import img1 from "../assets/img1.jpg";

import img2 from "../assets/img2.jpg";
import img1 from "../assets/Rectangle 294.png";
import img3 from "../assets/img3.jpg";
import img4 from "../assets/img4.jpg";
// ----------Import Iamges to Assets End------------

import { Link } from 'react-router-dom'


// ----------------- Using Class Component--------------------


export default class Shop extends React.Component {
    render() {
        return (
            <div>



                <div className="container-fluid cont">
                    <img src={img1} className='img-fluid img1' />

                    <h1 className="shop">SHOP</h1>
                </div>

                <div className="container py-3 con1 ">
                    <div className="row cont1 mt-5">
                        <h1 className="ele"> ELECTRONICS <br />
                            <span style={{ margin: "3rem" }}>30+</span></h1>
                        <h1 className="ele"> FAST FOOD <br />
                            <span style={{ margin: "3rem" }}>30+</span></h1>
                        <h1 className="ele"> GROCERY <br />
                            <span style={{ margin: "3rem" }}>30+</span></h1>
                        <h1 className="ele"> PHARMACY <br />
                            <span style={{ margin: "3rem" }}>30+</span></h1>
                    </div>
                </div>


                <div className="container">
                    <h1 className="with mt-4 ml-3 " style={{fontWeight:'bolder'}}> SHOP WITH US</h1>
                    <p className="para ml-3">Its esay to transfer your files with our great selection of accessories</p>
                </div>



                <div className="container-fluid">
                    <div className="row">
                        <div className="col-xl-2 col-lg-12 col-md-12 col-sm-12 col-12">
                        <p>
                        <a class="btn" data-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
                        <p className="ml-3 mt-3" style={{ fontWeight: 'bolder', fontSize: '20px' }}>CATEGORIES</p>
                        </a>
                       
                        </p>
                        <div class="collapse" id="collapseExample">
                        <div class="card card-body">
                        <ul className="multiul mt-4 p-4">
                                    <li className="mt-3">Electronics</li>
                                    <li className="mt-3">Pharmacy</li>
                                    <li className="mt-3">blankets</li>
                                    <li className="mt-3">cutains</li>
                                    <li className="mt-3">pillowcases</li>
                                    <li className="mt-3">rugs</li>
                                    <li className="mt-3">living room</li>
                                    <li className="mt-3">child room</li>
                                    <li className="mt-3">bathroom</li>
                                    <li className="mt-3">Outdoor</li>

                                </ul>
                        </div>
                        </div>


    
                        </div>
                        <div className="col-10 -dark d-flex flex-wrap justify-content-around">
                        <div class="fe-box">
                                <img src="img/features/f1.png" alt="" />
                                <div class="card" style={{ width: "400px" }}>
                                    <img class="card-img-top" src={img2} alt="Card image cap" />
                                    <div class="card-body">
                                        <h5 class="card-title">Decideal Dispoables Masks</h5>
                                        <p class="card-text">Lorem Ipsum is Simply ommy text of the printing</p>
                                        <h1 className="dollar">$53.99</h1>
                                        <button style={{border:"1px solid red", width:'180px',height:'40px',borderRadius:'15px',marginLeft:'0px', backgroundColor:'white',color:'red', fontWeight:'bold'}}>Add To Cart</button>

                                    </div>
                                </div>

                            </div>
                            <div class="fe-box">
                                <img src="img/features/f1.png" alt="" />
                                <div class="card" style={{ width: "400px" }}>
                                    <img class="card-img-top" src={img3} alt="Card image cap" />
                                    <div class="card-body">
                                        <h5 class="card-title">Decideal Dispoables Masks</h5>
                                        <p class="card-text">Lorem Ipsum is Simply ommy text of the printing</p>
                                        <h1 className="dollar">$53.99</h1>
                                                               <button className="mebtn" style={{border:"1px solid red", width:'180px',height:'40px',borderRadius:'15px',marginLeft:'0px', backgroundColor:'white',color:'red', fontWeight:'bold'}}>Add To Cart</button>

                                    </div>
                                </div>

                            </div>
                            <div class="fe-box">
                                <img src="img/features/f1.png" alt="" />
                                <div class="card" style={{ width: "400px" }}>
                                    <img class="card-img-top" src={img4} alt="Card image cap" />
                                    <div class="card-body">
                                        <h5 class="card-title">Decideal Dispoables Masks</h5>
                                        <p class="card-text">Lorem Ipsum is Simply ommy text of the printing</p>
                                        <h1 className="dollar">$53.99</h1>
                                                               <button className="mebtn" style={{border:"1px solid red", width:'180px',height:'40px',borderRadius:'15px',marginLeft:'0px', backgroundColor:'white',color:'red', fontWeight:'bold'}}>Add To Cart</button>

                                    </div>
                                </div>

                            </div>
                            <div class="fe-box">
                                <img src="img/features/f1.png" alt="" />
                                <div class="card" style={{ width: "400px" }}>
                                    <img class="card-img-top" src={img2} alt="Card image cap" />
                                    <div class="card-body">
                                        <h5 class="card-title">Decideal Dispoables Masks</h5>
                                        <p class="card-text">Lorem Ipsum is Simply ommy text of the printing</p>
                                        <h1 className="dollar">$53.99</h1>
                                                               <button className="mebtn" style={{border:"1px solid red", width:'180px',height:'40px',borderRadius:'15px',marginLeft:'0px', backgroundColor:'white',color:'red', fontWeight:'bold'}}>Add To Cart</button>

                                    </div>
                                </div>

                            </div>
                            <div class="fe-box">
                                <img src="img/features/f1.png" alt="" />
                                <div class="card" style={{ width: "400px" }}>
                                    <img class="card-img-top" src={img3} alt="Card image cap" />
                                    <div class="card-body">
                                        <h5 class="card-title">Decideal Dispoables Masks</h5>
                                        <p class="card-text">Lorem Ipsum is Simply ommy text of the printing</p>
                                        <h1 className="dollar">$53.99</h1>
                                                               <button className="mebtn" style={{border:"1px solid red", width:'180px',height:'40px',borderRadius:'15px',marginLeft:'0px', backgroundColor:'white',color:'red', fontWeight:'bold'}}>Add To Cart</button>

                                    </div>
                                </div>

                            </div>
                            <div class="fe-box">
                                <img src="img/features/f1.png" alt="" />
                                <div class="card" style={{ width: "400px" }}>
                                    <img class="card-img-top" src={img4} alt="Card image cap" />
                                    <div class="card-body">
                                        <h5 class="card-title">Decideal Dispoables Masks</h5>
                                        <p class="card-text">Lorem Ipsum is Simply ommy text of the printing</p>
                                        <h1 className="dollar">$53.99</h1>
                                                               <button className="mebtn" style={{border:"1px solid red", width:'180px',height:'40px',borderRadius:'15px',marginLeft:'0px', backgroundColor:'white',color:'red', fontWeight:'bold'}}>Add To Cart</button>

                                    </div>
                                </div>

                            </div>

                            <div class="fe-box">
                                <img src="img/features/f1.png" alt="" />
                                <div class="card" style={{ width: "400px" }}>
                                    <img class="card-img-top" src={img2} alt="Card image cap" />
                                    <div class="card-body">
                                        <h5 class="card-title">Decideal Dispoables Masks</h5>
                                        <p class="card-text">Lorem Ipsum is Simply ommy text of the printing</p>
                                        <h1 className="dollar">$53.99</h1>
                                                               <button className="mebtn" style={{border:"1px solid red", width:'180px',height:'40px',borderRadius:'15px', backgroundColor:'white',color:'red', fontWeight:'bold'}}>Add To Cart</button>

                                    </div>
                                </div>

                            </div>
                            <div class="fe-box">
                                <img src="img/features/f1.png" alt="" />
                                <div class="card" style={{ width: "400px" }}>
                                    <img class="card-img-top" src={img3} alt="Card image cap" />
                                    <div class="card-body">
                                        <h5 class="card-title">Decideal Dispoables Masks</h5>
                                        <p class="card-text">Lorem Ipsum is Simply ommy text of the printing</p>
                                        <h1 className="dollar">$53.99</h1>
                                                               <button className="mebtn" style={{border:"1px solid red", width:'180px',height:'40px',borderRadius:'15px', backgroundColor:'white',color:'red', fontWeight:'bold'}}>Add To Cart</button>

                                    </div>
                                </div>

                            </div>
                            <div class="fe-box">
                                <img src="img/features/f1.png" alt="" />
                                <div class="card" style={{ width: "400px" }}>
                                    <img class="card-img-top" src={img4} alt="Card image cap" />
                                    <div class="card-body">
                                        <h5 class="card-title">Decideal Dispoables Masks</h5>
                                        <p class="card-text">Lorem Ipsum is Simply ommy text of the printing</p>
                                        <h1 className="dollar">$53.99</h1>
                        <button className="mebtn" style={{border:"1px solid red", width:'180px',height:'40px',borderRadius:'15px',marginLeft:'0', backgroundColor:'white',color:'red', fontWeight:'bold'}}>Add To Cart</button>
                                        
                                    </div>
                                </div>

                            </div>
                        </div>

                    </div>
                </div>


            </div>
        )
    }
}