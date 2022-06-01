import React from 'react'
// ----------Import Iamges to Assets------------

import media from '../assets/Group 7.png'
import map from '../assets/Rectangle 19.png'

// ----------Import Iamges to Assets End------------


// ----------------- Using Functioal Component--------------------


function Contactus() {
  return (
  <div>

<div className='container cl'>



      <div className='container  d-flex justify-content-center '>


       
        <div className='lineeee'>
              <p className='getintouch pt-5'>Get In Touch</p>
              <hr className='hr1' />
        </div>
      </div>


      <div className='row '>
        <div className='col-2 '></div>
        <div className='col-5 '>
          <p className='mt-5 ml-5 leave container'>Leave us a message</p>
        </div>
        <div className='col-5 '></div>
  </div>
{/* ========================================================= */}
           
    <div className='container '>

      <div className='row '>
        
        <div className='col-6 col-md-12 col-ms-12 col-12 col-xl-6 col-lg-12 '>
        <div className='col-6 mb-3 '> <input type="text" class="form-control form4" placeholder="First name" /></div>
        <div className='col-6 mb-3 '> <input type="text" class="form-control form4" placeholder="Address" /></div>
        <textarea name="comment" class="form-control form5 mr-5" rows="5" placeholder='Your Message' />
        {/* <div className='col-6 mb-3 '> <input type="text" class="form-control form5" placeholder="" /></div> */}
        <div className='col-5 '>
          <button type="button" class="btn4 mt-4">Send</button>
          <div className='p-4'></div>

        </div>
        </div>


      <div className='col-6 col-md-12 col-ms-12 col-12 col-xl-6 col-lg-12 mb-3'>
           <div className='col'>
          <p>Infomation technologies building,
            Victoria Island, Lagos, Nigeria.</p>
            </div>

            <div className='col'> +234 081-1236-4568
          <p className='pt-3'>hello@info.com.ng</p>
           </div>

           
        <div className='col'>
          <img src={media} />

          <div className='col mt-4 ' >
            <img className='map' src={map}/>

          </div>




        </div>




      </div>

      </div>

    </div>










    </div>


      



      



    </div>
  )
}

export default Contactus
