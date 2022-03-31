import React from 'react';
import Container from 'react-bootstrap/Container';
import Slider from 'react-slick';

const MainSlider = ({ movies }) => {
  var settings = {
    dots: false,
    className: 'center',
    centerMode: true,
    infinite: true,
    slidesToShow: 1,
    speed: 500,
    arrows: false
  };
  const BannerList = movies[0]?.map(number => {
    const arr = [];
    Object.values(number.thumbnails).forEach(val => {
      arr.push(val);
    });
    return arr;
  });

  return (
    <div>
      <Container className='p-0 mb-5' fluid>
        <Slider {...settings}>
          {BannerList?.map((elem, i) => {
            return (
              <div key={i}>
                <img src={elem[0].url} alt='description' />
              </div>
            );
          })}
        </Slider>
      </Container>
    </div>
  );
};

export default MainSlider;
