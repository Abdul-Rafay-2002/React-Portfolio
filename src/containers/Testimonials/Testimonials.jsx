import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill } from 'react-icons/bs'
import { urlFor, client } from '../../client';
import { AppWrap } from '../../wrapper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade } from 'swiper';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import '../Testimonials/Testimonials.scss';

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [brands, setBrands] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const brandsQuery = '*[_type == "testimonials"]';
    const query = '*[_type == "brands"]';

    client.fetch(query).then((data) => {
      setBrands(data);
    });

    client.fetch(brandsQuery).then((data) => {
      setTestimonials(data);
    });
  }, []);
  const test = testimonials[currentIndex]

  const arrowHandler = (index) => {
    setCurrentIndex(index);
  };
  return (
    <>
      <h2 className='head-text'>Client <span>Testimonials</span></h2>
      {testimonials.length && (
        <>
          <div className='app_testimonials'>
            <div className="app__testimonials-item">
              <div className="app__testimonials-item-img">
                <img src={urlFor(testimonials[currentIndex].imageurl)} alt={testimonials[currentIndex].name} />
              </div>
              <div className="app__testimonials-item-content">
                <p>{testimonials[currentIndex].feedback}</p>
                <h4>{test.name}</h4>
                <h6>{test.company}</h6>
              </div>
            </div>
          </div>
          <div className="app_testimonials-arrows">
            <div className="app_testimonials-btn"></div>
            <button className="app_testimonials-btn" onClick={() => arrowHandler(currentIndex === 0 ? testimonials.lenght - 1 : currentIndex - 1)}><BsFillArrowLeftCircleFill /></button>
            <button className="app_testimonials-btn" onClick={() => arrowHandler(currentIndex === testimonials.lenght - 1 ? 0 : currentIndex + 1)}><BsFillArrowRightCircleFill /></button>
          </div>
        </>
      )}
      <div className='app__brands-items'>
        {/* {brands.map((brand) => (
          <motion.div
            whileInView={{ opacity: [0, 1] }}
            transition={{ duration: .6, type: 'tween' }}
            key={brand._id}
            className='app__brands-img'
          >
            <img src={urlFor(brand.imgUrl)} alt={brand.name} />
          </motion.div>
        ))} */}


        <Swiper
          spaceBetween={10}
          slidesPerView={3}
          loop={true}
          autoplay={{ delay: 1000, disableOnInteraction: false }}
          speed={800}
          modules={[EffectFade]} effect="fade"
          // set number of slides to load dynamically
          preloadImages={true}
          updateOnImagesReady={true}
        >
          {brands.map((brand) => (
            <SwiperSlide key={brand._id}>
              <motion.div
                whileInView={{ opacity: [0, 1] }}
                transition={{ duration: .6, type: 'tween' }}
                className='app__brands-img'
              >
                <img src={urlFor(brand.imgUrl)} alt={brand.name} />
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  )
}

export default AppWrap(Testimonials, 'testimonials');