import React from "react";
import styled from "styled-components";
import { Facebook, Instagram, Twitter } from "@mui/icons-material";
import logo from "../images/Wow Its Happening-logos_white.png";

const FooterContainer = styled.div`
  display: flex;
  justify-content: center;
  background-color: #363534;
`;
const Container = styled.div`
  width: 70%;
  display: flex;
  color: black;
  background-color: #363534;
  align-items: center;
`;
const Left = styled.div`
  flex: 1;
  padding-left: 15px;
`;
const Title = styled.h1`
  font-size: ${(props) => props.fz};
  padding-bottom: 10px;
  color: white;
`;

const Logo = styled.img`
  max-width: 500px;
  max-height: 500px;
`;

const Desc = styled.p`
  padding-bottom: 10px;
  font-size: 1.05rem;
  line-height: 1.8rem;
  color: white;
  max-width: 90%;
`;
const SocialContainer = styled.div`
  display: flex;
`;
const SocialIcon = styled.div`
  margin: 10px;
  cursor: pointer;
  font-size: 1.3rem;
  background-color: #${(props) => props.bg};
  border-radius: 50%;
  height: 50px;
  width: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
`;

const Barrier = styled.div`
  width: 2px;
  height: 83%;
  background-color: gray;
  border-radius: 500px;
`;

const Right = styled.div`
  flex: 1;
  padding: 25px;
  padding-left: 30px;
  max-width: 300px;
`;

const List = styled.ul`
  width: 80%;
  margin: 0;
  padding: 10px 0px;
  list-style: none;
  display: flex;
  flex-direction: column;
`;
const ListItem = styled.li`
  width: 50%;
  margin-bottom: 20px;
  cursor: pointer;
  font-size: 1rem;
  color: white;
`;

function Footer() {
  return (
    <FooterContainer>
      <Container>
        <Left>
          <Logo src={logo} />
          <Desc>
            Book Any event, Anytime, Anywhere in Bangalore at Wow! Its Happening
            - The easiest, cheapest and hassle free "WAY" to your favourite
            events in the city. Smile a little, Laugh a lot, Interact and have a
            great time at various upcoming and entertaining events with your
            friends.{" "}
          </Desc>
        </Left>
        <Barrier />
        <Right>
          <Title fz="1.2rem">Menu</Title>
          <List>
            <ListItem>About</ListItem>
            <ListItem>Terms</ListItem>
            <ListItem>Privacy Policy</ListItem>
            <ListItem>Refund Policy</ListItem>
            <ListItem>Contact</ListItem>
          </List>
          <Barrier />
          <Title fz="1.2rem">Follow us</Title>
          <SocialContainer>
            <SocialIcon bg="3B5998">
              <Facebook />
            </SocialIcon>
            <SocialIcon bg="f2003c">
              <Instagram />
            </SocialIcon>
            <SocialIcon bg="00acee">
              <Twitter />
            </SocialIcon>
          </SocialContainer>
        </Right>
      </Container>
    </FooterContainer>
  );
}

export default Footer;
