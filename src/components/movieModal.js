import React from "react";
import Modal from "react-modal";
import MovieShema from "./formikComponent/movieShema";
import Select from "react-select";
import { Formik, Form, Field } from "formik";
import CustomInputComponent from "./formikComponent/customInputComponent";
import CustomUploadFileComponent from "./formikComponent/customUploadFile";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {
  createMovie,
  getGenres,
  getOMDBMovie,
  removeOmdbMovie,
} from "../store/actions/movieActions";
import { useState } from "react";
import { useRef } from "react";

Modal.setAppElement("#root");

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    width: "50%",
    height: "75%",
    transform: "translate(-50%, -50%)",
  },
};

const MovieModal = () => {
  //deo za preuzimanje zanrova
  const dispatch = useDispatch();
  const genres = useSelector((state) => state.movies.genres);
  const omdbMovie = useSelector((state) => state.movies.OMDBMovie);
  const options = genres.map((item) => {
    let temp = { value: item.id, label: item.type };
    return temp;
  });
  //deo za preuzimanje selektovanih zanrova
  const [selectedGenres, setSelectedGenres] = useState([]);
  const handleSelectChange = (selectedGenres) => {
    setSelectedGenres(selectedGenres);
    console.log(selectedGenres);
  };

  const movieRef = useRef();

  const findOmdbMovie = (event) => {
    event.preventDefault();

    dispatch(getOMDBMovie(movieRef.current.values.title));
  };

  const removeOmdbMovieFun = (event) => {
    event.preventDefault();
    movieRef.current.values.description = " ";
    movieRef.current.values.title = "";
    movieRef.current.values.cover_image = "";
    dispatch(removeOmdbMovie());
  };

  useEffect(() => {
    dispatch(getGenres());
  }, []);
  useEffect(() => {
    if (omdbMovie) {
      movieRef.current.values.description = omdbMovie.Plot;
      movieRef.current.values.cover_image = omdbMovie.Poster;
    }
  }, [omdbMovie]);
  const [modalIsOpen, setIsOpen] = React.useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const afterOpenModal = () => {
    // za sad nista
  };

  const closeModal = () => {
    setIsOpen(false);
    dispatch(removeOmdbMovie());
  };
  return (
    <div>
      <button className="btn btn-outline-info" onClick={openModal}>
        Open Modal
      </button>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <h2>Create movie</h2>
        <br></br>
        <div>
          <Formik
            initialValues={{
              title: "",
              description: "",
              cover_image: undefined,
            }}
            validationSchema={MovieShema}
            enableReinitialize={true}
            innerRef={movieRef}
            onSubmit={(values) => {
              console.log(values);
              dispatch(createMovie(values, selectedGenres));
              closeModal();
            }}
          >
            {() => (
              <Form>
                <Field
                  name="title"
                  type="text"
                  component={CustomInputComponent}
                  placeholder="title"
                  className="form-control"
                ></Field>
                <button
                  class="btn btn-danger"
                  onClick={findOmdbMovie}
                  style={{ marginRight: "5%" }}
                >
                  Find from omdb
                </button>
                <button onClick={removeOmdbMovieFun} class="btn btn-danger">
                  Remove
                </button>
                <p></p>
                <Field
                  name="description"
                  type="textarea"
                  component={CustomInputComponent}
                  placeholder="description"
                  className="form-control"
                ></Field>
                <label>Movie cover picture</label>
                <br></br>
                <Field
                  name="cover_image"
                  component={CustomUploadFileComponent}
                  placeholder="cover image"
                ></Field>
                <Select
                  isMulti
                  options={options}
                  values={selectedGenres}
                  onChange={handleSelectChange}
                ></Select>
                <br></br>
                <button className="btn btn-outline-info" type="submit">
                  Create
                </button>
              </Form>
            )}
          </Formik>
        </div>
      </Modal>
    </div>
  );
};
export default MovieModal;
