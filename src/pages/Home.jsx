import React, { useState } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';

// Bootstrap
import {
  FormGroup,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Input,
  Spinner,
  Row,
  Col,
} from 'reactstrap';
import { FaSearch, FaTimes } from "react-icons/fa";

// Reducer
import { addMovies } from '../store/actions/moviesAction';
import { addFavourite, removeFavourite } from '../store/actions/favouritesAction';

// Components
import MainLayout from '../layout/MainLayout';
import EmptyState from '../components/EmptyState';
import MovieCard from '../components/MovieCard';
import MovieDetail from '../components/MovieDetail';
import MyModal from '../components/MyModal';
import Box from '../styled/StyledBox';

function Home() {
  const [searchKeyword, setSearchKeyword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSearchFocus, setSearchFocus] = useState(false);
  const [movieDetail, setMovieDetail] = useState({});

  const storeMovies = useSelector(state => state.moviesReducer);
  const storeFavourites = useSelector(state => state.favouritesReducer);
  const dispatch = useDispatch();

  const getMovies = async (searchKeyword) => {
    setIsLoading(true);
    const response = await axios.get(`http://www.omdbapi.com?apikey=8ff5daa3&s=${searchKeyword}`);
    if (response.status === 200) {
      const data = response.data.Search || [];
      const error = response.data.Error || '';
      setSearchKeyword('');
      setSearchFocus(false);
      dispatch(addMovies({data, error}));
    }
    setIsLoading(false);
  }

  const handleGetMovieDetail = async (imdbID) => {
    handleToggleModal();
    const response = await axios.get(`http://www.omdbapi.com?apikey=8ff5daa3&i=${imdbID}`);
    setMovieDetail(response.data);
  }

  const handleInputChange = (e) => {
    setSearchKeyword(e.target.value);
  }

  const handleSearchMovie = (e) => {
    if (e.charCode === 13) {
      getMovies(e.target.value);
    }
  };

  const handleToggleFavourite = (action, imdbID) => {
    let favouritesStorage = localStorage.getItem('favouritesMovie');
    if (action === 'ADD') {
      const item = storeMovies.data.find(item => item.imdbID === imdbID);
      dispatch(addFavourite(item));
    } else {
      dispatch(removeFavourite(imdbID));
    }
  }

  const handleToggleModal = () => {
    setIsModalOpen(!isModalOpen)
  };

  const isFavourite = (imdbID) => {
    return storeFavourites.data.some(item => item.imdbID === imdbID)
  };

  const renderIconSearch = () => {
    if (isSearchFocus) {
      return <FaTimes />;
    }

    return <FaSearch />;
  }

  return (
    <MainLayout>
      <Box marginY={2}>
        <FormGroup>
          <InputGroup>
            <InputGroupAddon addonType="prepend">
              <InputGroupText>
                {renderIconSearch()}
              </InputGroupText>
            </InputGroupAddon>
            <Input
              type="text"
              placeholder="Enter movie title here..."
              value={searchKeyword}
              onBlur={() => setSearchFocus(false)}
              onChange={e => handleInputChange(e)}
              onFocus={() => setSearchFocus(true)}
              onKeyPress={e => handleSearchMovie(e)} />
          </InputGroup>
        </FormGroup>
      </Box>

      {isLoading && (
        <Box marginTop={10} isCentered>
          <Spinner color="dark" />
        </Box>
      ) || !!storeMovies.data.length && (
        <Row>
          {storeMovies.data.map((item, idx) => (
            <Col key={idx} md="4" className="mb-4">
              <MovieCard
                banner={item.Poster}
                title={item.Title}
                year={item.Year}
                isFavourite={isFavourite(item.imdbID)}
                titleOnClick={() => handleGetMovieDetail(item.imdbID)}
                handleFavourite={() => handleToggleFavourite(isFavourite(item.imdbID) ? 'REMOVE' : 'ADD', item.imdbID)}
              />
            </Col>
          ))}
        </Row>
      ) || <EmptyState message={storeMovies.error} />}

      <MyModal
        className="modal-dialog-centered modal-lg"
        visible={isModalOpen}
        onToggle={handleToggleModal}
        content={<MovieDetail {...movieDetail} />}
      />
    </MainLayout>
  );
}

export default Home;