import React, { useState } from 'react';
import axios from 'axios';

// Bootstrap
import { Col, Row } from 'reactstrap';

// Components
import MainLayout from '../layout/MainLayout';
import EmptyState from '../components/EmptyState';
import MovieCard from '../components/MovieCard';
import MovieDetail from '../components/MovieDetail';
import MyModal from '../components/MyModal';

import useStateWithLocalStorage from '../components/hooks/useLocalStorage';

function Favourite() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [movieDetail, setMovieDetail] = useState({});
  const [favourites, setFavourites] = useStateWithLocalStorage('favourites', []);

  const handleGetMovieDetail = async (imdbID) => {
    handleToggleModal();
    const response = await axios.get(`http://www.omdbapi.com?apikey=8ff5daa3&i=${imdbID}`);
    setMovieDetail(response.data);
  }

  const handleRemoveFavourite = (imdbID) => {
    const newFavourites = JSON.parse(favourites).filter(item => item.imdbID !== imdbID);
    setFavourites(JSON.stringify(newFavourites));
  };

  const handleToggleModal = () => setIsModalOpen(!isModalOpen);

  return (
    <MainLayout>
      {JSON.parse(favourites).length && (
        <Row>
          {JSON.parse(favourites).map((item, idx) => (
            <Col key={idx} md="4" className="mb-4">
              <MovieCard
                banner={item.Poster}
                title={item.Title}
                year={item.Year}
                isFavourite
                titleOnClick={() => handleGetMovieDetail(item.imdbID)}
                handleFavourite={() => handleRemoveFavourite(item.imdbID)}
              />
            </Col>
          ))}
        </Row>
      ) || <EmptyState message="You don't have any favourite movies?" />}
      <MyModal
        className="modal-dialog-centered modal-lg"
        visible={isModalOpen}
        onToggle={handleToggleModal}
        content={<MovieDetail {...movieDetail} />}
      />
    </MainLayout>
  );
}

export default Favourite;