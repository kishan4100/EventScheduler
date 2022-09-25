import React from "react";
import styled from "styled-components";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import img from "../images/pngtree-best-method-of-self-study-vector-png-image_5934070.png";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f0f0f0;
  min-height: 65vh;
`;

const SliderContainer = styled.div`
  position: relative;
  min-width: 70%;
  min-height: 55vh;
  background-color: red;
  z-index: 1;
`;
const Slide = styled.img`
  position: absolute;
  object-fit: fill;
  min-width: 100%;
  max-height: 100%;

  width: inherit;
  z-index: -1;
`;

function Slider() {
  return (
    <Container>
      <SliderContainer>
        <ArrowBackIosIcon
          sx={{
            cursor: "pointer",
            position: "absolute",
            top: "50%",
            left: "5%",
          }}
          fontSize="large"
        />
        <Slide src={img} />
        <ArrowForwardIosIcon
          sx={{
            cursor: "pointer",
            position: "absolute",
            right: "5%",
            top: "50%",
          }}
          fontSize="large"
        />
      </SliderContainer>
    </Container>
  );
}

export default Slider;
