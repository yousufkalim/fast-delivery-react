import React from 'react'

// ----------Import Iamges to Assets------------

import Reactangle from '../assets/Rectangle 1100.png'
import logo from '../assets/Logo.png'

// ----------------- Using Functioal Component--------------------
 

function Forgetpassword() {
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

                            <h4>Forget Password</h4>
                            <form className='login-form-2' style={{ marginTop: '-30px' }}>
                                <div class="form-group mb-3  ">
                                    <input type="email" class="form-control mb-1" placeholder="Email Adrress " value="" />
                                    <p className='paswword mt-3'>A password will be sent to you address</p>

                                </div>
                                <div className='mt-5'></div>
                                <div className='mt-5'></div>
                                <div className='mt-5'></div>

      
                                <div class="form-group">
                                    <input type="submit" class="btnSubmit  btn " value="Send" style={{marginTop:'30px'}} />
                                </div>

                                    <div className='container' style={{textAlign:'center'}}>
                                <a href="#" class="ForgetPwd py-3  "style={{textAlign:'center'}} id="create" value="Login">CREATE AN ACCOUNT</a>

                                    </div>


                            </form>
                        </div>
                    </div>

                </div>
            </div>
            
        </div>
    )
}

export default Forgetpassword
