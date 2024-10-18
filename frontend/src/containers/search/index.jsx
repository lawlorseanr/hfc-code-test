import React, { useState } from "react";
import { SearchContainer, SearchInput, SearchButton } from "./styles";
import { useDispatch } from "react-redux";
import { handleSearch, onLoadDashboardUsers } from "../../redux/actions/dashboard-actions";

export const Search = () => {
    const dispatch = useDispatch();

    const [query, setQuery] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const handleSearchClick = async () => {
        if (isLoading) {
            return;
        }
        if (query.trim() === "") {
            dispatch(onLoadDashboardUsers());
            return;
        }

        dispatch(handleSearch({ query, setIsLoading }))  
    };

    return (
        <SearchContainer>
            <SearchInput
                type="text"
                placeholder="Search users"
                value={query}
                disabled={isLoading}
                onChange={(e) => setQuery(e.target.value)}
            />
            <SearchButton onClick={handleSearchClick}>Search</SearchButton>
        </SearchContainer>
    )
}