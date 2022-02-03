import React, { useEffect, useState } from "react";
import axios from "axios";
import SingleRepository from "./SingleRepository";
import { useDispatch, useSelector } from "react-redux";
import { fetchRepos } from "../../store/actions/repos.actions";

function RepositoriesList() {
  const initialFilters = {
    page: 1,
    per_page: 10,
    visibility: "public",
  };

  const [filters, setFilters] = useState(initialFilters);
  const dispatch = useDispatch()
  const reposData = useSelector((state) => state.repos.reposData) ;

  useEffect(() => {
    dispatch(fetchRepos());
    // eslint-disable-next-line
  }, []);

  

  const handleNextPage = () => {
    setFilters(
      {
        filters: { ...filters, page: filters.page + 1 },
      },
      () => {
        dispatch(fetchRepos());
      }
    );
  };

  const handlePrevPage = () => {
    setFilters(
      {
        filters: { ...filters, page: filters.page - 1 },
      },
      () => {
        dispatch(fetchRepos());
      }
    );
  };

  return (
    <div className="repositories-container">
      <h2 className="repositories-header">Popular Repositories:</h2>

      {reposData === "loading" ? (
        <div className="repositories-list-container">
          <span>Loading ...</span>
        </div>
      ) : reposData.length === 0 ? (
        <div className="repositories-list-container">
          <span>No repositories ...</span>
        </div>
      ) : (
        <div className="repositories-list-container">
          { reposData.map((repo,index) => 
            <div className="single-repository-container" id="container" key={index} >
              <SingleRepository repo={repo} />
            </div>
          )}

          <div className="repositoies-list-navigation-buttons-container">
            <button
              onClick={handlePrevPage}
              className="repositoies-list-navigation-button"
              disabled={filters.page === 1}
            >
              {"<"}
            </button>
            <button
              onClick={handleNextPage}
              className="repositoies-list-navigation-button"
            >
              {">"}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default RepositoriesList;
