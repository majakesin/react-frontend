import React, { useEffect } from "react";
import axios from "axios";

const Home = () => {
  const componentDidMount = () => {
    axios.get("api/auth/user").then(
      (res) => {
        console.log(res);
      },
      (err) => {
        console.log(err);
      }
    );
  };

  useEffect(() => {
    componentDidMount();
  });
  return (
    <div>
      <p></p>
    </div>
  );
};
export default Home;
