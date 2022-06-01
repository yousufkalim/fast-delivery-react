import React from 'react'

// ----------Import Iamges to Assets------------

import Reactangle from '../assets/Rectangle 1100.png'
import logo from '../assets/Logo.png'
import { Link } from 'react-router-dom'

// ----------------- Using Functioal Component--------------------


function Signup() {
    return (
        <div>

            <div class="container login-container">
                <div class="row">
                    <div class="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12 ">


                        <img src={Reactangle} className=' editing ' style={{ height: '500px' }}  />

                    </div>


                    <div class="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12  login-form-2 mb-2 ">

                        <div className='signbox ' style={{ height: '500px' }}>

                            <img src={logo} className='img-fluid logo2' />

                            <h4>Create an Account</h4>
                            <form className='login-form-2 mt-1 py-1'>
                                <div class="form-group  mb-1 pt-1 ">
                                    <input type="text" class="form-control mt-1 rrr" style={{marginTop:'-30px'}} placeholder="Your Email " value="" />
                                    <p className='paswword mt-3' >A password will be sent to you address</p>
                                </div>
                                <div className=' pt-1'>
                                <p className='paswword mt-1 mb-3'>Anti-spam</p>
                                <p className='paswword1 '>A password will be sent to your email address Anti-spam
                                Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our privacy policy.</p>
                                </div>
                               
                               
                                <div class="form-group acha">
                                
                                    <input type="submit" class="btnSubmit border btn mt-1 " value="REGISTER" />
                                </div>
                                
                                <a href="#" class="ForgetPwd " id="create" value="Login">I HAVE AN ACCOUNT</a>

                                
                            </form>
                        </div>
                    </div>
                    <div className='p-3'></div>
                </div>
            </div>
        </div>
    )
}

export default Signup
