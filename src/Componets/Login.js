import React from 'react'
// ----------Import Iamges to Assets------------
import { Link } from 'react-router-dom'

import Reactangle from '../assets/Rectangle 1100.png'
import logo from '../assets/Logo.png'

// ----------------- Using Functioal Component--------------------


function Login() {
    return (
        <div>


            <div className='container login-container '>
                <div className='row'>
                    <div className='col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12  '>
                        
                     
                                <img src={Reactangle} className=' editing ' style={{ height: '470px' }} />

                       

                    </div>
                    <div className='col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12  login-form-2 mb-2'>
                        <div className='signbox'  style={{ height: '470px' }}>


                            <img src={logo} className='img-fluid logo2' />

                            <h4>Sign into you account</h4>
                            <form className='login-form-2' style={{ marginTop: '-30px' }}>
                                <div class="form-group mb-3  ">
                                    <input type="text" class="form-control mb-1" placeholder="Your Email " value="" />
                                </div>
                                <div class="form-group">

                                    <input type="password" class="form-control" placeholder="Your Password *" value="" />
                                </div>
                                <div class="form-group  acha">
                                    <a href="#" class="ForgetPwd   " value="Login">Forget Password?</a>
                                </div>
                                <div class="form-group">
                                    <input type="submit" class="btnSubmit  btn " value="LOGIN" />
                                </div>

                                <a href="#" class="ForgetPwd py-3 " id="create" value="Login">CREATE AN ACCOUNT</a>


                            </form>
                        </div>
                    </div>

                </div>
            </div>

           
        </div>
    )
}

export default Login
