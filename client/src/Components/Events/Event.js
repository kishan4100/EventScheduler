import React from "react";
import styled from "styled-components";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import AccessAlarmIcon from "@mui/icons-material/AccessAlarm";
import img from "../../images/pngtree-best-method-of-self-study-vector-png-image_5934070.png";

const EventContainer = styled.div`
  width: 350px;
  height: 420px;
  margin: 30px;
  max-height: 25%;
  border: solid #c9c9c9 2px;
  border-radius: 20px;
  cursor: pointer;
`;
const EventHolder = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  align-items: center;
  border-radius: 20px;
`;
const TopContainer = styled.div`
  width: 100%;
  height: 75%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const ImageContainer = styled.div`
  width: 100%;
  height: 70%;
  overflow: hidden;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
`;
const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: fill;
`;
const TitleContainer = styled.div`
  max-width: 80%;
  margin-top: 10px;
  height: 20%;
`;
const Title = styled.span`
  font-size: 1.5rem;
  max-width: 80%;
  word-wrap: break-word;
`;
const Barrier = styled.div`
  background-color: gray;
  width: 90%;
  height: 1px;
  border-radius: 80px;
`;
const BottomContainer = styled.div`
  width: 100%;
  height: 25%;
  display: flex;
  justify-content: space-between;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
`;
const DateContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 30px;
  margin-bottom: 50px;
`;
const Date = styled.span`
  margin: 10px;
`;
const TimeContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 30px;
  margin-bottom: 50px;
`;
const Time = styled.span`
  margin: 10px;
`;

function Event({ event }) {
  console.log(event);

  return (
    <EventContainer>
      <EventHolder>
        <TopContainer>
          <ImageContainer>
            <Img src={img} />
          </ImageContainer>
          <TitleContainer>
            <Title>{event.description}</Title>
          </TitleContainer>
        </TopContainer>
        <Barrier></Barrier>
        <BottomContainer>
          <DateContainer>
            <CalendarMonthIcon fontSize="small" />
            <Date>312123</Date>
          </DateContainer>
          <TimeContainer>
            <AccessAlarmIcon fontSize="small" />
            <Time>3231</Time>
          </TimeContainer>
        </BottomContainer>
      </EventHolder>
    </EventContainer>
  );
}

export default Event;

// const object1 = {
//   title: "xyz",
//   selectedFile: "imgURL",
//   description: "asagdgdasgadgadagdagdgadadggad",
//   email: "xyz@gamil.com",
//   validTill: "27/12/2022",
//   category: "bootcamp",
//   location: "banglore",
//   price: "₹3000",
// };

// console.log(object1);
