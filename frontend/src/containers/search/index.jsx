import React, { useState } from "react";
import { SearchContainer, SearchInput, SearchButton } from "./styles";
import { searchUsers } from "../../services/user.service";
import { useDispatch } from "react-redux";
import { DashboardActions } from "../../redux/action-types/dashboard-action-types";
import { onLoadDashboardUsers } from "../../redux/actions/dashboard-actions";

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

        setIsLoading(true);
        try {
            const response = await searchUsers(query.trim());
            dispatch({
                type: DashboardActions.SET_USERS,
                payload: response.data
            });
        } catch (error) {
            alert("Unable to search!")
            console.error('Error making API request:', error);
        } finally {
            setIsLoading(false);
        }
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