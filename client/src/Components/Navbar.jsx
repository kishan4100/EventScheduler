import React, { useState } from "react";
import styled from "styled-components";
import logo from "../images/Wow Its Happening-logos_transparent.png";
import CreateEvent from "./CreateEvent";

const NavContainer = styled.div`
  min-height: 10vh;
`;

const Nav = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 10vh;
  background-color: #f0f0f0;
  z-index: 10;
`;

const Left = styled.div`
  display: flex;
`;

const Logo = styled.img`
  max-width: 500px;
  max-height: 100px;
  margin-left: 60%;
  cursor: pointer;
`;

const Right = styled.div`
  display: flex;
  margin-right: 15%;
  align-items: center;
  gap: 2rem;
  font-size: 1.3rem;
`;
const Events = styled.div`
  color: #ababab;
  cursor: pointer;
  &:hover {
    color: black;
  }
`;
const AddEvent = styled.div`
  background-color: #de5f70;
  color: white;
  padding: 15px;
  border-radius: 30px;
  cursor: pointer;
  &:hover {
    background-color: #f70223;
  }
`;

function Navbar() {
  const [clicked, setClicked] = useState(false);
  const handleClick = () => {
    setClicked(true);
  };

  return (
    <NavContainer>
      <Nav>
        <Left>
          <Logo src={logo} />
        </Left>
        <Right>
          <Events>Events</Events>
          <AddEvent onClick={handleClick}>Create Event</AddEvent>
          {clicked && <CreateEvent clicked={clicked} setClicked={setClicked} />}
        </Right>
      </Nav>
    </NavContainer>
  );
}

export default Navbar;
