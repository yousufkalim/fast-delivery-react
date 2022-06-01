import React from 'react'
import innerpic from "../assets/Iconinner.png"
function Table() {
  return (
    <>
    <div className='container border'>
        <div className='row'>
            <div className='col border d-flex justify-content-between'>
              <div className='border border-danger' 
              style={{
                  height: '250px',
                  width: '320px',
                 borderRadius: '13.136363983154297px'
                  }}>
                 <img scr={innerpic} className="img-fluid border"/>

                </div>  
               <div className='border border-danger' 
              style={{
                  height: '250px',
                  width: '320px',
                 borderRadius: '13.136363983154297px'
                  }}
              ></div>  
               <div className='border border-danger' 
              style={{
                  height: '250px',
                  width: '320px',
                 borderRadius: '13.136363983154297px'
                  }}
              ></div>  

            </div>
        </div>
    </div>
    </>
  )
}

export default Table