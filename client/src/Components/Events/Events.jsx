import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import Event from "./Event";

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  min-height: 50vh;
`;

const EventsContainer = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  width: 60%;
  min-height: 50vh;
`;

const TextContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
  text-decoration: underline;
  font-weight: lighter;
  margin: 3vh auto;
`;

function Events() {
  const events = useSelector((state) => state.Events.Events);
  return events ? (
    <MainContainer>
      <TextContainer>Ongoing Events</TextContainer>
      <EventsContainer>
        {events.map((event) => (
          <Event key={event._id} event={event} />
        ))}
      </EventsContainer>
    </MainContainer>
  ) : (
    <MainContainer></MainContainer>
  );
}

export default Events;
