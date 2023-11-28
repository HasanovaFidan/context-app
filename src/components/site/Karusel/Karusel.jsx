import React from 'react'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
function Karusel() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
      autoplaySpeed: 6000
      };
  return (
    <div>
           <Slider {...settings}>
        <div className='one'>
      <div className="write">
      <span>Special Treding</span>
      <h1>Nylon Blend Jacket</h1>
            <p>Casual Line</p>
            <p>Naylon mix Fabric</p>
            <p>Waterfrow Fabric</p>
            <a href="">Discover More</a>
      </div>

        </div>
        <div className='two'>
        <div className="write">
      <span>Special Treding</span>
            <h1>Regular Cotton Shirt</h1>
            <p>Casual Line</p>
            <p>Naylon mix Fabric</p>
            <p>Waterfrow Fabric</p>
            <a href="">Discover More</a>
      </div>
        </div>
        <div className='three'>
        <div className="write">
      <span>TRRENDING NOW</span>
            <h1>Nylon Blend Jacket</h1>
            <p>Casual Line</p>
            <p>Naylon mix Fabric</p>
            <p>Waterfrow Fabric</p>
            <a href="">Discover More</a>
      </div>
        </div>
  
      </Slider>
      <div className="card__kecid">
        <h2>Best Seller</h2>
        <h2>New Arrials</h2>
        <h2>Most Popular</h2>
      </div>
    </div>
  )
}

export default Karusel
