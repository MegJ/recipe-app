import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { NavBar } from '../components/navbar'
import RecipePage from "./pages/RecipePage";
import HomePage from "./pages/HomePage";
import SearchResultsPage from "./pages/SearchResultsPage";





const AppRouter = () => {

    return (
        <>
            <BrowserRouter>
                <NavBar />
                <Routes>
                    <Route path={"/"} element={<HomePage />} />
                    <Route exact path={"/search-results"} element={<SearchResultsPage/>} />
                    <Route path={"/search-results/:query"} element={<SearchResultsPage/>} />
                    <Route path={"/recipe/:id"} element={<RecipePage />} />
                </Routes>
            </BrowserRouter>
        </>
        )  
    }

export default AppRouter;