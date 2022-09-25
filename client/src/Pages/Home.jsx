import React from "react";
import styled from "styled-components";
import Navbar from "../Components/Navbar";
import SearchBox from "../Components/SearchBox";
import Slider from "../Components/Slider";
import Footer from "../Components/Footer";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchEvents } from "../redux/apiCalls";
import Events from "../Components/Events/Events";

const Container = styled.div``;

function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
    fetchEvents(dispatch);
  }, [dispatch]);

  return (
    <Container>
      <Navbar />
      <SearchBox />
      <Slider />
      <Events />
      <Footer />
    </Container>
  );
}

export default Home;
