import { useState } from "react";
import "./home.scss";

import { Link } from "react-router-dom";

function Home() {
  return (
    <section className="home">
      <div className="welcome-message">
        <h1> Welcome To Authenticate </h1>
        <p>
          This project exist to achive the simple task of Registering a "user" &
          Loging in the "user".
        </p>
        <Link to={'/dashboard'}> Dashboard <div className="line"> </div> </Link>
      </div>
    </section>
  );
}

export default Home;
