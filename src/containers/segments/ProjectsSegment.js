import React, { Component } from "react";
import { Segment, Header, Grid } from "semantic-ui-react";
import Project from "../../components/Project";
import sagesSkyScreenShot from "../../static/sages-sky.png";

class ProjectsSegment extends Component {
    render() {
        return (
            <Segment id={this.props.id} className="ProjectsSegment">
                <Grid container stackable verticalAlign="middle">
                    <Grid.Row>
                        <Grid.Column width={14}>
                            <Header as="h3" style={{ fontSize: "2em" }}>
                                Featured Projects
                            </Header>
                        </Grid.Column>
                    </Grid.Row>
                    <Project
                        title="Sage's Sky"
                        subtitle="A limitless flying journey"
                        screenshot={sagesSkyScreenShot}
                    >
                        Sage's Sky is a beautiful and delightful distance game
                        where you, the player, throw a bird named Sage to see
                        how far he can get. You can buy in game upgrades to
                        increase Sages distances. Sage starts out as a fat pudgy
                        bird and can be reincarnated 4 more times to become a
                        stronger and more majestic bird.{" "}
                        <p>
                            <a
                                href="https://www.youtube.com/watch?v=uzIvk-21FK4"
                                rel="noopener noreferrer"
                                target="_blank"
                            >
                                Trailer
                            </a>
                            {"  -  "}
                            <a
                                href="https://play.google.com/store/apps/details?id=com.crazyandcoding.sagessky"
                                rel="noopener noreferrer"
                                target="_blank"
                            >
                                Android
                            </a>
                            {" - "}
                            <a
                                href="https://itunes.apple.com/us/app/sages-sky/id1025486003?mt=8"
                                rel="noopener noreferrer"
                                target="_blank"
                            >
                                iOS
                            </a>
                        </p>
                    </Project>
                    <Project title="More projects">
                        Check out my Github page below for more projects.
                    </Project>
                </Grid>
            </Segment>
        );
    }
}

export default ProjectsSegment;
