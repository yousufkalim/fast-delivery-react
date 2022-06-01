import React from 'react'
import Navbar from "./Navbar"
import Frame from "../assets/Frame.png"
import Icon from "../assets/Icon.png"
import Icon2 from "../assets/Icon (1).png"
import Icon3 from "../assets/Icon (2).png"
import Icon4 from "../assets/Icon (3).png"
import Icon5 from "../assets/Icon (4).png"
import Icon6 from "../assets/Icon (5).png"

import img1 from "../assets/img1.jpg";
import img2 from "../assets/img2.jpg";
import injection from "../assets/Rectangle injection.png"
import img3 from "../assets/img3.jpg";
import img4 from "../assets/img4.jpg";
import rectangle from "../assets/Rectangle (1).png"
import info from "../assets/info.png"
import innerpic from "../assets/Iconinner.png"
import info1 from "../assets/info (1).png"
import info2 from "../assets/info (2).png"
import info3 from "../assets/info (3).png"
import pic from "../assets/Pic.png"
import count from "../assets/counting.png"
import count1 from "../assets/counting (1).png"
import count2 from "../assets/counting (2).png"
import bg from "../assets/BG.png"
import rectangle131 from "../assets/Rectangle 13 (2).png"
import rectangle132 from "../assets/Rectangle 13 (3).png"
import Table from './Table'









function Home() {
  return (
    <div>

      <div className='row'>

        <div className='col-6 py-5 mt-5'>
          <div className='box2 mt-5 ml-5  '>
            <hr className='hrr' />
            <p className='WE-PROVIDE'>WE PROVIDE <span>FASTEST</span> <br />DELIVERY SERVICE.</p>
            <p className='order'>Order food and grocery Delivery online form <br /> hundreds of restaurants and shops nearby</p>
            <button type="button" class="btn1 mt-4 readd">READ MORE</button>
          </div>
        </div>
        <div className='col-6 py-5 mt-5  -danger aqaq'>

          <img src={Frame} className='img-fluid' />
        </div>

      </div>











      <div className=' contianer' style={{backgroundColor:'#E5E5E5'}}>
        <div className='container '>


        <div className='container  ff'>
      <p className='what pt-5'>Why Choose Us</p>
          <p className='tailored'>Effective Ways</p>
      </div>

        </div>
        {/* _____________________ */}
        <div class="pro-container  ">
          <div class="pro1 imgmove   ">
            <img className="proimage" src={innerpic} alt="" />

          </div>


          <div class="pro imgmove  -danger ">
            <img className="proimage1  " src={Icon2} alt="" />
            <div class="des">

            </div>
          </div>

          <div class="pro imgmove">
            <img className="proimage1 " src={Icon3} alt="" />
            <div class="des">

            </div>
          </div>
        </div>
        <div class="pro-container  -danger">
          <div class="pro imgmove">
            <img className="proimage1 " src={Icon4} alt="" />

          </div>


          <div class="pro imgmove">
            <img className="proimage1 " src={Icon5} alt="" />
            <div class="des">

            </div>
          </div>

          <div class="pro imgmove">
            <img className='proimage1 ' src={Icon6} alt="" />
            <div class="des">

            </div>
          </div>
        </div>

<div className='p-5'></div>
      </div>





      <div className='container  ff'>
      <p className='what pt-5'>POPULAR GOODS</p>
          <p className='tailored'>Quick Pick</p>
      </div>

   
    
      <div className='container '>
        <div className='row third phar'>

          <div className='col-12 col-md-12 mt-5 d-flex justify-content-center'>
            <div className='medicine ml-5   phar'>

              <button type="button" class="btn12 grocery " style={{fontWeight:'bolder'}}>PHARMACY</button>
              <a href="#" class="ml-4  grocery " style={{color:'grey'}}>GROCERY</a>
              <a href="#" class="ml-4 elel"style={{color:'grey'}}>FAST FOOD</a>
              <a href="#" class="ml-4 elel"style={{color:'grey'}}>ELECTRONICS</a>
              <a href="#" class="ml-4 elel"style={{color:'grey'}}>GIFTS</a>

            </div>
          </div>


        </div>
      </div>

      {/* ----------------------------cards--------------------------------- */}

      <section id="feature" class="section-p1 pt-5">
        {/*  */}

        {/* // */}
        <div class="fe-box">
          <img src="img/features/f1.png" alt="" />
          <div class="card" style={{ width: "300px" }}>
            <img class="card-img-top" src={img2} alt="Card image cap" />
            <div class="card-body">
              <h5 class="card-title">Decideal Dispoables Masks</h5>
              <p>Lorem Ipsum is Simply dummmmy text of the printing</p>
              <h1 className="dollar">$53.99</h1>
              <button className='mebtn' style={{border:"1px solid red", width:'180px',height:'40px',borderRadius:'15px',marginLeft:'-70px', backgroundColor:'white',color:'red', fontWeight:'bold'}}>Add To Cart</button>
            
            </div>
          </div>

        </div>
        <div class="fe-box">
          <div class="card " style={{ width: "300px" }}>
            <img class="card-img-top" src={img3} alt="Card image cap" />
            <div class="card-body">
              <h5 class="card-title">Decideal Dispoables Masks</h5>
              <p class="card-text">Lorem Ipsum is Simply ommy text of the printing</p>
              <h1 className="dollar">$53.99</h1>
                        <button className='mebtn' style={{border:"1px solid red", width:'180px',height:'40px',borderRadius:'15px',marginLeft:'-70px', backgroundColor:'white',color:'red', fontWeight:'bold'}}>Add To Cart</button>

            </div>
          </div>
        </div>
        <div class="fe-box">
          <div class="card" style={{ width: "300px" }}>
            <img class="card-img-top" src={img4} alt="Card image cap" />
            <div class="card-body">
              <h5 class="card-title">Decideal Dispoables Masks</h5>
              <p class="card-text">Lorem Ipsum is Simply ommy text of the printing</p>
              <h1 className="dollar">$53.99</h1>
                        <button className='mebtn' style={{border:"1px solid red", width:'180px',height:'40px',borderRadius:'15px',marginLeft:'-70px', backgroundColor:'white',color:'red', fontWeight:'bold'}}>Add To Cart</button>

            </div>
          </div>
        </div>
        <div class="fe-box">
          <div class="card" style={{ width: "300px" }}>
            <img class="card-img-top" src={img2} alt="Card image cap" />
            <div class="card-body">
              <h5 class="card-title">Decideal Dispoables Masks</h5>
              <p class="card-text">Lorem Ipsum is Simply ommy text of the printing</p>
              <h1 className="dollar">$53.99</h1>
                        <button className='mebtn' style={{border:"1px solid red", width:'180px',height:'40px',borderRadius:'15px',marginLeft:'-70px', backgroundColor:'white',color:'red', fontWeight:'bold'}}>Add To Cart</button>

            </div>
          </div>
        </div>

      </section>

      {/* // +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */}


      <div className='row pt-5 mt-5'>
        <div className='col-5 col-xl-5 col-lg-12 col-md-12 col-12'>
          <img src={rectangle} className='img-fluid fef ' style={{ width: '100%' }} />
        </div>
        <div className='col-7 col-xl-7 col-lg-12 col-md-12 col-sm-12 col-12 sidecont' style={{ width: '100%' }}>
          <p className='sit '>SIT IT HOME
            <br></br>
            WE WILL TAKE CARE</p>
          <p className='weee'>We cover different industry sectors, from food and <br />beverage, chemical, retail, durable goods and more. We <br />offer on-demand delivery services for all your local <br />needs across UAE, at most competitive prices</p>

          <div className='row mt-5 ml-5 '>
            <img src={info} className='img-fluid mt-5 ml-4 eli' />
            <img src={info1} className='img-fluid mt-5 ml-5 eli ' />
            <img src={info2} className='img-fluid mt-5 ml-5 eli ' />
            <img src={info3} className='img-fluid mt-5 ml-5 eli' />
          </div>
          <button className='btnread '>READ MORE</button>
          <div className='p-5'></div>
        </div>

      </div>


      <div className='container  ff'>
      <p className='what '>Why Choose Us</p>
          <p className='tailored'>Effective Ways</p>
      </div>

   <div className='container-fluid '>
      <div className='row '>
        {/* <div className='col-1'></div> */}
        <div className='col-12 col-xl-6 col-lg-12 col-md-12 col-sm-12 ddd '>
          <img src={pic} className='img-fluid frame11 ' />
          <div className='eee'>
            <img src={bg} className='img-fluid greenbox ' />
            <img src={count} className='img-fluid greenbox1' />
            <p className='container fastt'>Fast delivery within Abu Dhabi</p>
            {/* <div className='contianer-fluid border border-danger'> */}
            <p className=" container sata ">We provide delivery services within Dubai. We have mostly covered all of Dubai and the areas which have been left out will be covered in near future</p>
            {/* </div> */}

          </div>


        </div>
        <div className='col-12 col-xl-6 col-lg-12 col-md-12 col-sm-12 border-danger'>
          <div className='aaa mt-3' style={{backgroundColor:'#1C7584',borderRadius:'15px'}}>
        <img src={count} className='img-fluid mt-5' style={{marginLeft:'10px'}} />
          <p className=' fas mt-4 ml-3 'style={{color:'white'}}>Fast delivery within Abu Dhabi</p>
          <p className='wep ml-3'>We provide customized delivery for all types of merchants. Whether you need dedicated delivery field executives for your business or you need our field executives to deliver orders for you. Customers also can make use of app/website to place order and get items delivered where ever they want.</p>
          <div className='p-3'></div>
          </div>


          <img src={count1} className='img-fluid countmoving countmoving1 mt-5' />
          <p className='customized  customizedd  dty mt-4 ml-3 '>Customized Solutions for all</p>
          <p className='wepro weproo ml-3'>We provide customized delivery for all types of merchants. Whether you need dedicated delivery field executives for your business or you need our field executives to deliver orders for you. Customers also can make use of app/website to place order and get items delivered where ever they want.</p>

          <img src={count2} className='img-fluid countmoving countmoving1 mt-5' />
          <p className='customized customizedd dty mt-4 ml-3 '>Dedicated Field Executives</p>
          <p className='wepro weproo ml-3 container  '>Merchant can contact our business team and follow the procedure to become dedicated merchant. Field executives will directly work with dedicated merchants without our intervention. Dedicated merchants can select to whom the order should be assigned </p>

        </div>


      </div>
      </div>
      <div className='container  ff'>
      <p className='what mt-5'>BE A PART OF US</p>
          <p className='tailored'>KOIN NOW FASTEST DELIVERY SERVICES</p>
      </div>
  


    <section id="feature" class="section-p1">
        <div class="fe-box ">
              <div className='caartsouter www'>
            <img src={rectangle131} className='img-fluid cartss' />
            <h5 className='name mt-3'>Hire a Delivery Boy</h5>
            <p className=' reach'>Reach more customers and achieve growth with us§</p>
            <button className='btn1212 '>FIND OUT MORE</button>
          </div>
        </div>
        <div class="fe-box">
              <div className='caartsouter www '>
            <img src={rectangle132} className='img-fluid cartss' />
            <h5 className='name mt-3'>Hire a Delivery Boy</h5>
            <p className=' reach'>Reach more customers and achieve growth with us§</p>
            <button className='btn1212  '>FIND OUT MORE</button>
          </div>
        </div>
        
    </section>

      


    </div>
  )
}

export default Home
