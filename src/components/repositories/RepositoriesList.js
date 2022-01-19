import React, { useEffect, useState } from "react";
import axios from "axios";
import SingleRepository from "./SingleRepository";

function RepositoriesList() {
  const initialFilters = {
    page: 1,
    per_page: 10,
    visibility: "public",
  };

  const [filters, setFilters] = useState(initialFilters);
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    fetchRepos();
    // eslint-disable-next-line
  }, []);

  const fetchRepos = () => {
    setRepos("loading");
    axios
      .get("https://api.github.com/user/repos", {
        params: filters,
      })
      .then((response) => {
        setRepos(response.data);
      })
      .catch((error) => {
        console.log(error);
        setRepos([]);
      });
  };

  const handleNextPage = () => {
    setFilters(
      {
        filters: { ...filters, page: filters.page + 1 },
      },
      () => {
        fetchRepos();
      }
    );
  };

  const handlePrevPage = () => {
    setFilters(
      {
        filters: { ...filters, page: filters.page - 1 },
      },
      () => {
        fetchRepos();
      }
    );
  };

  return (
    <div className="repositories-container">
      <h2 className="repositories-header">Popular Repositories:</h2>

      {repos === "loading" ? (
        <div className="repositories-list-container">
          <span>Loading ...</span>
        </div>
      ) : repos.length === 0 ? (
        <div className="repositories-list-container">
          <span>No repositories ...</span>
        </div>
      ) : (
        <div className="repositories-list-container">
          {repos.map((repo, index) => (
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
