import React, { useState, useEffect } from 'react';
import MainSlider from '../components/MainSlider/MainSlider';
import Categories from '../components/Categories/Categories';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import { useAppDispatch, useAppSelector } from '../hooks/reduxHooks.js';
import { onGetMovies } from '../redux/reducers/movies.js';

const Home = () => {
  const { Movies } = useAppSelector(state => state.movies);
  const [heroMovies, setHeroMovies] = useState([]);
  const [categoryMovies, setCategoryMovies] = useState([]);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(onGetMovies());
  }, [dispatch]);

  useEffect(() => {
    if (Object.keys(Movies).length) {
      getHeroMovies(Movies);
      getcategoryMovies(Movies);
    }
  }, [Movies]);

  const getHeroMovies = data => {
    const temp = [];
    data.titles.filter(data => {
      if (data.moduleType === 'HERO') {
        return temp.push(data.layoutTitles.titles);
      }
      return [];
    });
    setHeroMovies(temp);
  };
  const getcategoryMovies = data => {
    const temp = [];
    data.titles.filter(data => {
      if (data.moduleType === 'LAYOUT') {
        return temp.push(data);
      }
      return [];
    });
    setCategoryMovies(temp);
  };

  return (
    <>
      <MainSlider movies={heroMovies} />
      <Categories movies={categoryMovies} />
      <Container className='text-center mb-5'>
        <Button className='customButton' variant='outline-warning'>
          Explore Movies
        </Button>
      </Container>
    </>
  );
};

export default Home;
