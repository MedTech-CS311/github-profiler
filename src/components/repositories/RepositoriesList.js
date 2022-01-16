import React from "react";
import axios from "axios";
import SingleRepository from "./SingleRepository";

export default class RepositoriesList extends React.Component {
    constructor() {
        super()
        this.state = {
            filters: {
                page: 1,
                per_page: 10,
                visibility: "public"
            },
            repos: []
        }
    }

    componentDidMount() {
        this.fetchRepos();
    }

    fetchRepos = () => {
        axios.get("https://api.github.com/user/repos", {
            params: this.state.filters
        })
        .then((response) => {
            this.setState({repos: response.data})
        })
        .catch((error) => {
            console.log(error)
        })
    }

    handleNextPage = () => {
        this.setState({
            filters: { ... this.state.filters, page: this.state.filters.page + 1}
        }, () => {
            this.fetchRepos();
        })
    }

    handlePrevPage = () => {
        this.setState({
            filters: { ... this.state.filters, page: this.state.filters.page + 1}
        }, () => {
            this.fetchRepos();
        })
    }

    render() {
        return (
            <div>
                <h2 className="repositories-header">Popular Repositories:</h2>
                {this.state.repos &&
                    <div className="repositories-container">
                    {
                        this.state.repos.map((repo, index) => (
                            <div className="single-repository-container" key={index}>
                                <SingleRepository repo={repo} />
                            </div>
                        ))
                    }
                    </div>
                }
                
                <button onClick={this.handlePrevPage}>prev page</button>
                <button onClick={this.handleNextPage}>next page</button>
            </div>
        )
    }
}