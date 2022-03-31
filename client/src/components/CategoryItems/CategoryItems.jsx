import React from 'react';
import Slider from 'react-slick';

const CategoryItems = ({ movieList }) => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 3,
    arrows: false
  };
  const categoryItems = movieList?.map(movie => {
    const temp = [];
    Object.values(movie.thumbnails).forEach(val => {
      temp.push(val);
    });
    return temp;
  });
  return (
    <div>
      <Slider {...settings}>
        {categoryItems.map((movie, i) => {
          return (
            <div key={i} className='category-image'>
              <img src={movie[0].url} alt='description' />
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default CategoryItems;
