import React from 'react'
import hairAccessories from '../../assets/hair-accessories.png'
import ornaments from '../../assets/Ornaments.png';
import { Link } from 'react-router-dom';
const HairAccessories = () => {
  return (
    <section className='py-16 px-4 lg:px-0'>
      <div className="container mx-auto flex flex-col md:flex-row gap-8">
        {/*Hair Accessories  */}
        <div className="relative flex-1">
          <img src={hairAccessories} alt="Hair Accessories" className='w-full h-full object-cover'/>
          <div className="absolute bottom-8 left-8 bg-white bg-opacity-90 p-4">
            <h2 className='text-2xl font-bold text-gray-900 mb-2'> Hair Accessories</h2>
            <Link className = 'text-gray-900 underline' to="/collections/all?shop=hair-accessories" >Shop Now</Link>
          </div>
        </div>

        {/* Ornaments */}
        <div className="relative flex-1">
          <img src={ornaments} alt="Hair Accessories" className='w-full h-full object-cover left-3'/>
          <div className="absolute bottom-8 left-8 bg-white bg-opacity-90 p-4">
            <h2 className='text-2xl font-bold text-gray-900 mb-2'> Ornaments</h2>
            <Link className = 'text-gray-900 underline' to="/collections/all?shop=ornaments" >Shop Now</Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HairAccessories
