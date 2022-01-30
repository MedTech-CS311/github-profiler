import React, { useEffect, useState } from "react";
import SingleRepository from "./SingleRepository";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserRepos } from "../../redux/repos/repos.actions";

function RepositoriesList() {
  const dispatch = useDispatch();

  const initialFilters = {
    page: 1,
    per_page: 10,
    visibility: "public",
  };

  const [filters, setFilters] = useState(initialFilters);
  const reposList = useSelector((state) => state.repos.reposList);
  const reposListLoading = useSelector((state) => state.repos.loading);

  useEffect(() => {
    dispatch(fetchUserRepos(filters));
    // eslint-disable-next-line
  }, []);

  const handleNextPage = () => {
    setFilters(
      {
        filters: { ...filters, page: filters.page + 1 },
      },
      () => {
        dispatch(fetchUserRepos(filters));
      }
    );
  };

  const handlePrevPage = () => {
    setFilters(
      {
        filters: { ...filters, page: filters.page - 1 },
      },
      () => {
        dispatch(fetchUserRepos(filters));
      }
    );
  };

  return (
    <div className="repositories-container">
      <h2 className="repositories-header">Popular Repositories:</h2>

      {reposListLoading === "loading" ? (
        <div className="repositories-list-container">
          <span>Loading ...</span>
        </div>
      ) : reposList.length === 0 ? (
        <div className="repositories-list-container">
          <span>No repositories ...</span>
        </div>
      ) : (
        <div className="repositories-list-container">
          {reposList.map((repo, index) => (
            <div className="single-repository-container" key={index}>
              <SingleRepository repo={repo} />
            </div>
          ))}

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
