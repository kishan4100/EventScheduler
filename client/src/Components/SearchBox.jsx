import React from "react";
import styled from "styled-components";
import SearchIcon from "@mui/icons-material/Search";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 15vh;
  background-color: #8758ff;
`;
const SearchContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 40%;
  border: 2px solid white;
  padding-left: 60px;
  padding-right: 40px;
  min-height: 40px;
`;
const Input = styled.input`
  min-width: 97%;
  outline: none;
  border: none;
  padding: 10px 30px;
  height: 40px;
  font-size: 1.5rem;
  margin-left: 10px;
`;

function SearchBox() {
  return (
    <Container>
      <SearchContainer>
        <SearchIcon
          sx={{ cursor: "Pointer", color: "primary" }}
          fontSize="large"
        />
        <Input />
      </SearchContainer>
    </Container>
  );
}

export default SearchBox;
