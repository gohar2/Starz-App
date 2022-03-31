import React from 'react';
import Container from 'react-bootstrap/Container';
import CategoryItems from '../CategoryItems/CategoryItems';

const Categories = ({ movies }) => {
  return (
    <div className='padding-0-8'>
      {movies.map((movie, i) => {
        return (
          <Container key={i} className='mb-5' fluid>
            <div className='layout-slider' key={i}>
              <h3 className='layout-slider-title'>{movie.title}</h3>
              <CategoryItems movieList={movies[i].layoutTitles.titles} />
            </div>
          </Container>
        );
      })}
    </div>
  );
};

export default Categories;
