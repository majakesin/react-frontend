import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMovies, getGenres } from "../store/actions/movieActions";
import { InputGroup, FormControl } from "react-bootstrap";
import { debounce } from "lodash";
import Select from "react-select";
const Search = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState(undefined);
  const [selectedGenres, setSelectedGenres] = useState(undefined);
  const genres = useSelector((state) => state.movies.genres);

  const options = genres.map((item) => {
    let temp = { value: item.id, label: item.type };
    return temp;
  });

  const handleChange = (selectedGenres) => {
    setSelectedGenres(selectedGenres);
    dispatch(getMovies(undefined, title, selectedGenres));
  };
  const searchHandleChange = debounce((event) => {
    dispatch(getMovies(undefined, event.target.value, selectedGenres));
    setTitle(event.target.value);
  }, 1000);

  useEffect(() => {
    dispatch(getGenres());
  }, []);
  return (
    <div className="row" style={{ marginLeft: "5%" }}>
      <div className="col-sm">
        <InputGroup>
          <FormControl
            placeholder="Search"
            className="form-control"
            onChange={searchHandleChange}
          />
        </InputGroup>
      </div>
      <div className="container col-sm">
        <Select
          defaultValue={undefined}
          options={options}
          values={selectedGenres}
          onChange={handleChange}
        ></Select>
      </div>
    </div>
  );
};
export default Search;
