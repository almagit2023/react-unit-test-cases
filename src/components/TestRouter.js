import React from "react";

import {
  Link,
  Route,
  Routes,
  useParams,
} from "react-router-dom";

const About = () => <h1>About page</h1>;
const Home = () => <h1>Home page</h1>;
const Contact = () => {
  const { name } = useParams();
  return <h1 data-testid="contact-name">{name}</h1>;
};

const TestRouter = () => {
  const name = "Kapil";
  return (
    <>
      <nav data-testid="navbar">
        <Link data-testid="home-link" to="/">
          Home
        </Link>
        <br />
        <Link data-testid="about-link" to="/about">
          About
        </Link>
        <br />
        <Link data-testid="contact-link" to={`/contact/${name}`}>
          Contact
        </Link>
      </nav>

      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact/:name" element={<Contact />} />
      </Routes>
    </>
  );
};

export default TestRouter;