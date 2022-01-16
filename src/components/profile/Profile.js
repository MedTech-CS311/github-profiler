import React from "react";
import axios from "axios";

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

export default class Profile extends React.Component {
    constructor() {
        super()
        this.state = {
            profile: {}
        }
    }

    componentDidMount() {
        axios.get(`https://api.github.com/user`)
        .then((response) => {
            this.setState({profile: response.data})
        })
    }

    handleNavigateToProfile = () => {
        window.location = this.state.profile.html_url
    }

    render() {
        return (
            <Card>
                <CardContent>
                    <div className="profile-content-container">
                        <img src={this.state.profile.avatar_url} alt="avatar" className="profile-avatar"/>
                        <h3 onClick={this.handleNavigateToProfile} className="profile-name">
                            {this.state.profile.name} <br/>
                            <span className="profile-login">
                                @{this.state.profile.login}
                            </span>
                        </h3>
                        <p></p>
                        <p>{this.state.profile.bio}</p>
                        { this.state.profile.email && <p>Email: {this.state.profile.email}</p>}
                        <p>Location: {this.state.profile.location}</p>
                        <p>Company: {this.state.profile.company}</p>
                        <p>Followers: {this.state.profile.followers}</p>
                    </div>
                </CardContent>
            </Card>
        )
    }

} 