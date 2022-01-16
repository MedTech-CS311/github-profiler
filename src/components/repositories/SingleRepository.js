import { Badge } from "@mui/material";
import React from "react";

export default class SingleRepository extends React.Component {
    constructor() {
        super()

        this.state = {
            repo: {}
        }
    }

    componentDidMount() {
        this.setState({repo: this.props.repo})
    }

    render() {
        return (
            <div>
                {this.state.repo && 
                    (
                        <div className="single-repository-content">
                            <div className="single-repository-header">
                                <h4 className="single-repository-name">{this.state.repo.name}</h4>
                                <div>
                                    <span 
                                        variant="outline"
                                        color="primary"
                                        class="single-repository-visibility-badge"
                                    >
                                        {this.state.repo.visibility}
                                    </span>
                                </div>
                            </div>
                        </div>
                        
                    )
                }
            </div>
        )
    }

} 