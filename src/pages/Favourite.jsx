import React, { useState } from 'react';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';

// Bootstrap
import { Col, Row } from 'reactstrap';

// Reducers
import { removeFavourite } from '../store/actions/favouritesAction';

// Components
import MainLayout from '../layout/MainLayout';
import EmptyState from '../components/EmptyState';
import MovieCard from '../components/MovieCard';
import MovieDetail from '../components/MovieDetail';
import MyModal from '../components/MyModal';

function Favourite() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [movieDetail, setMovieDetail] = useState({});

  const storeFavourites = useSelector(state => state.favouritesReducer);
  const dispatch = useDispatch();

  const handleGetMovieDetail = async (imdbID) => {
    handleToggleModal();
    const response = await axios.get(`http://www.omdbapi.com?apikey=8ff5daa3&i=${imdbID}`);
    setMovieDetail(response.data);
  }

  const handleRemoveFavourite = (imdbID) => dispatch(removeFavourite(imdbID));
  const handleToggleModal = () => setIsModalOpen(!isModalOpen);

  return (
    <MainLayout>
      {storeFavourites.data.length && (
        <Row>
          {storeFavourites.data.map((item, idx) => (
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