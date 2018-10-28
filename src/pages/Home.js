import React, { Component } from "react";
import ResponsiveContainer from "../containers/ResponsiveContainer";
import AboutSegment from "../containers/segments/AboutSegment";
import WorkSegment from "../containers/segments/WorkSegment";
import ProjectsSegment from "../containers/segments/ProjectsSegment";
import ContactSegment from "../containers/segments/ContactSegment";

class Home extends Component {
    render() {
        return (
            <ResponsiveContainer className="Home">
                <AboutSegment id="about" />
                <WorkSegment id="work" />
                <ProjectsSegment id="projects" />
                <ContactSegment id="contact" />
            </ResponsiveContainer>
        );
    }
}

export default Home;
