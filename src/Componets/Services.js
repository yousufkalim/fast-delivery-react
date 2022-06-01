import React from 'react'

// ----------Import Iamges to Assets------------

import frame from '../assets/Frame (3).png'
import Icon from "../assets/Icon.png"
import Icon2 from "../assets/Icon (1).png"
import Icon3 from "../assets/Icon (2).png"
import Icon4 from "../assets/Icon (3).png"
import Icon5 from "../assets/Icon (4).png"
import Icon6 from "../assets/Icon (5).png"
import innerpic from "../assets/Iconinner.png"



//----------Icons end--------------
import { Link } from 'react-router-dom'

//--------------Using Functional componet----------------

function Services() {
  return (
    <>



      <div className='row serivese'>
        <div className='col-6 col-lg-6 col-md-6 col-ms-12 moving '>
          <hr className='hre'></hr>

          <p className='hiree'>SERVICES</p>
          <p className='hiree1 container'>HOME >> HIRE</p>

        </div>
        <div className='col-6 col-lg-6 col-md-6 col-ms-12 col-12 movingimg'>
          <img src={frame} className='img-fluid frame3' />

        </div>

      </div>


      <div className=' contianer border' style={{backgroundColor:'#E5E5E5'}}>
      <div className='container  ff'>
      <p className='what pt-5'>Why Choose Us</p>
          <p className='tailored'>Effective Ways</p>
      </div>
        {/* _____________________ */}

        <div class="pro-container border">
          <div class="pro1 imgmove ">
            <img className="proimage" src={innerpic} alt="" />

          </div>


          <div class="pro imgmove ">
            <img className="proimage1 " src={Icon2} alt="" />
            <div class="des">

            </div>
          </div>

          <div class="pro imgmove">
            <img className="proimage1" src={Icon3} alt="" />
            <div class="des">

            </div>
          </div>
        </div>
        <div class="pro-container">
          <div class="pro imgmove" >
            <img className="proimage1" src={Icon4} alt="" />

          </div>


          <div class="pro imgmove">
            <img className="proimage1" src={Icon5} alt="" />
            <div class="des">

            </div>
          </div>

          <div class="pro imgmove">
            <img className='proimage1' src={Icon6} alt="" />
            <div class="des">

            </div>
          </div>
        </div>

<div className='p-5'></div>
      </div>




    


    </>
  )
}

export default Services
