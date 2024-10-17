import React from "react";
import { useSelector } from "react-redux";

export const Loading = ({ children }) => {
    const loading = useSelector((state) => state.dashboard.loading);
    return loading ? <div>Loading...</div> : children;
}