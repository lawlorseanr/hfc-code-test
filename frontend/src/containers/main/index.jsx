import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Container } from "./styles";
import { onLoadDashboardUsers } from "../../redux/actions/dashboard-actions";
import { Users } from "../users";
import { Search } from "../search";


export const MainContainer = () => {
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(onLoadDashboardUsers());
    // eslint-disable-next-line
  }, []);

  return (
    <Container>
      <Search />
      <Users />
    </Container>
  );
};
