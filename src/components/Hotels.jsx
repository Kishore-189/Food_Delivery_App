import React, {useState} from 'react'

export default function Hotels(props) {
    // console.log(hotels);
    const [quantity, setquantity] = useState(1);
    const [varient, setvarient] = useState('small');
  return (
    <div style={{margin:'60px'}} className='shadow-lg p-3 mb-5 w-auto bg-white rounded' >
        <h1>{props.hotels.name}</h1>
        <img src={props.hotels.image} className="img-fluid" style={{height:'200px', width:'200px'}}/>
        <div className='flex-container'>
            <div className='w-100 m-1'>
                <p>Variants</p>
                <select value={varient} onChange={(e)=>{setvarient(e.target.value)}}>
                    {props.hotels.varients.map(varient => {
                        return <option value={varient}>{varient}</option>
                    })}
                </select>
            </div>
            <div className='w-100 m-1'>
                <p>Quantity</p>
                    <select className='form-control' value={quantity} onChange={(e)=>{setquantity(e.target.value)}}>
                        {[...Array(8).keys()].map((x, i) => {
                            return <option value={i+1}>{i+1}</option>
                        })}
                    </select>
            </div>
        </div>
        <div className='flex-container'>
                        <div className='m-10 w-100'>
                            <h4 className='m-2'>Prices: {props.hotels.prices[0][varient]*quantity}</h4>
                        </div>
                        <div className='m-1 w-100'> 
                            <button className='btn m-2'>ADD TO CART</button>
                       
                        </div>
        </div>
    </div>
  )
}
