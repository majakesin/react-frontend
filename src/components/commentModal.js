import React from "react";
import Modal from "react-modal";
import CustomInputComponent from "./formikComponent/customInputComponent";
import CustomTextAreaComponent from "./formikComponent/customTextAreaComponent";
import { Formik, Field, Form } from "formik";
import { useDispatch } from "react-redux";
import CommentShema from "./formikComponent/commentShema";
import { createComment } from "../store/actions/movieActions";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    width: "50%",
    height: "45%",
    transform: "translate(-50%, -50%)",
  },
};

const CommentModal = ({ movie_id, socket }) => {
  const dispatch = useDispatch();
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
        Add comment
      </button>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <h2>Create comment</h2>
        <br></br>
        <div>
          <Formik
            initialValues={{
              title: "",
              description: "",
            }}
            validationSchema={CommentShema}
            onSubmit={(values) => {
              dispatch(createComment(values, movie_id));

              socket.send(JSON.stringify("New comment has been created"));
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
                  component={CustomTextAreaComponent}
                  placeholder="description"
                  className="form-control"
                ></Field>
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
export default CommentModal;
