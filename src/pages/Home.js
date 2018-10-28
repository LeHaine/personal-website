import React, { Component } from "react";
import ResponsiveContainer from "../containers/ResponsiveContainer";
import AboutSegment from "../components/AboutSegment";

class Home extends Component {
    render() {
        return (
            <ResponsiveContainer className="Home">
                <AboutSegment />
            </ResponsiveContainer>
        );
    }
}

export default Home;
