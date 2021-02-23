import React from "react";
import Modal from "react-modal";
import MovieShema from "./formikComponent/movieShema";
import Select from "react-select";
import { Formik, Form, Field } from "formik";
import CustomInputComponent from "./formikComponent/customInputComponent";
import CustomUploadFileComponent from "./formikComponent/customUploadFile";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { createMovie, getGenres } from "../store/actions/movieActions";
import { useState } from "react";

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

  useEffect(() => {
    dispatch(getGenres());
  }, []);
  const [modalIsOpen, setIsOpen] = React.useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const afterOpenModal = () => {
    // za sad nista
  };

  const closeModal = () => {
    setIsOpen(false);
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
