import React from 'react';
// ------------Icons--------------
import {BsFacebook} from 'react-icons/bs';
import {BsLinkedin} from "react-icons/bs";
import {FaInstagramSquare} from "react-icons/fa";
import {AiFillTwitterCircle} from "react-icons/ai";
import { BsArrowRight} from "react-icons/bs"
//----------Icons end--------------

// ----------Import Iamges to Assets------------
import frame3 from "../assets/Frame (1).png"
import copy from "../assets/img2 copy.jpg"
// ----------Import Iamges to Assets End------------


// ----------------- Using CLas Component--------------------
export default class OrderComplete extends React.Component {
  render() {
    return (
        <div>


      <div className='container-fluid react'>
          <div className="row">
              <div className="col-lg-6 col-md-12 col-ms-12 py-5">
                  <div className="line ml-5  "></div>
                  <h1 className='usss ml-5 mt-1'>ABOUT US</h1>
                  <p className='home ml-5'>HOME >> ABOUT US</p>
              </div>
              <div className="col-lg-6 col-md-12 col-ms-12  py-5">
                  <div className='container   mt-3 img1'>
                <img src={frame3} className='img-fluid frame ffre' style={{marignTop:'-40px'}} />
                  
                  </div>
              </div>
          </div>
      </div>


<div className='container-fluid d-flex justify-content-between mt-5'>
    <div className="row mt-5">
        <div className="col-lg-7 col-md-12 col-ms-12  -danger  whoo" style={{marginTop:'200px'}}>
            <p className="who mt-5">Who We Are</p>
            <p className=' fass fast '>Fastest Delivery Services is a hyper-local delivery company.We provideb last mine fillament services to found grocery online and offline retail.Our technology enabed solutions help our customers get better visibilty & control of their orders and create a source of their competitive advantages!
                <br/>
                <br/>
                Fastest Delivery Services is a hyper-local delivery company.We provideb last mine fillament services to found grocery online and offline retail.Our technology enabed solutions help our customers get better visibilty & control of their orders and vains in class customers .we are giving and adding fleet on month-on-month basic.
            </p>
            <div className='icon'>
                <h1 className='num'>99%</h1>
                <h2 className='num1 '>Customer <br/>
                support
                </h2>
                <div className='bss'><BsFacebook /></div>
                <div className='bs bss'><BsLinkedin/></div>
                <div className='faa bss'><FaInstagramSquare/></div>
                <div className='ai bss'><AiFillTwitterCircle/></div>
            </div>
        </div>
        <div className="col-lg-5 py-4 mt-5">
            
          
                
                
          <img src={copy} className='img-fluid picc' />
       
           
        </div>
    </div>
</div>
<div className='container-fluid  inn mt-4'>
    <div className="container   mt-5 py-2">
        <p className='proo mt-5'>PROVIDING HIGH QUALITY DELIVERY 
            <br/>
             SERVICES TO ALL OF OUR CLIENTS
        </p>
        <h3 className='this'>This Sounds Simple But its beneficial to your Bussiness Success</h3>
        <div className='row mt-5'>
            <div className="col-lg-4  -dark py-5 mt-3">
             <div className='picss  py-4'></div>
              <h1 className='our mt-2'>Our Vision</h1>
              <p className='wee'>We Have Transformed <br/>
                  Commentional delivery to<br/>
                  modernized instant delivery
              </p>
            </div>
            <div className="col-lg-4  mt-3 py-5">
            <div className='picss1  py-4'></div>
              <h1 className='our mt-2'>Our Vision</h1>
              <p className='wee'>We Have Transformed <br/>
                  Commentional delivery to<br/>
                  modernized instant delivery
              </p>
            </div>
            <div className="col-lg-4 py-5 mt-3">
            <div className='picss2  py-4'></div>
              <h1 className='our mt-2'>Our Vision</h1>
              <p className='wee'>We Have Transformed <br/>
                  Commentional delivery to<br/>
                  modernized instant delivery
              </p>
            </div>
        </div>
    </div>
</div>


      </div>

    )
  }
}
