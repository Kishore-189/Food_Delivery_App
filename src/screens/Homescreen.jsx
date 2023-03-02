import React from 'react'
import Hotels from '../components/Hotels'
import Pizzadata from '../Pizzadata'

export default function Homescreen() {
    // console.log(Pizzadata);
  return (
    <div>
        <div className='row'>
            {Pizzadata.map(hotels=>{
                // console.log(hotels);
                return <div className='col-md-4'>
                        <div>
                            <Hotels hotels={hotels}/>
                        </div>  
                    </div>
                
            })}
        </div>
    </div>
  )
}
