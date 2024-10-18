import styled from "styled-components";

export const SearchContainer = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
`;

export const SearchInput = styled.input`
  display: flex;
  flex: 1;
  max-width: 540px;
  padding: 10px;
  font-size: 16px;
  border: 2px solid #ccc;
  border-radius: 10px;
  width: 300px;
  margin-right: 10px;
`;

export const SearchButton = styled.button`
  display: flex;
  padding: 10px 15px;
  justify-content: center;
  font-size: 16px;
  border: none;
  width: 100px;
  background-color: ${(props) => {
    switch (props.variant) {
      case "primary":
        return "#1C33EE"
      case "secondary":
        return "#E9EDF7"
      default:
        return "#1C33EE"
    }
  }};
  color: white;
  border-radius: 20px;
  font-size: 12px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;