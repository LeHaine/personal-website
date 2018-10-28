import React, { Component } from "react";
import { Segment, Grid, Header, Image } from "semantic-ui-react";
import logo from "../../static/logo.png";

class AboutSegment extends Component {
    render() {
        return (
            <Segment
                id={this.props.id}
                className="AboutSegment"
                style={{ padding: "8em 0em" }}
            >
                <Grid container stackable verticalAlign="top">
                    <Grid.Row>
                        <Grid.Column width={14}>
                            <Header as="h3" style={{ fontSize: "2em" }}>
                                About me
                            </Header>
                            <p style={{ fontSize: "1.33em" }}>
                                My name is Colton Daily. I am a software
                                engineer that can work with a wide range of
                                technologies.
                            </p>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column width={4}>
                            <Header as="h3" style={{ fontSize: "1.5em" }}>
                                Web
                            </Header>
                            <p>
                                Frontend developer that can design and create
                                beautiful websites using modern technologies
                                such as React.
                            </p>
                        </Grid.Column>
                        <Grid.Column width={3}>
                            <Header as="h3" style={{ fontSize: "1.5em" }}>
                                Backend
                            </Header>
                            <p>
                                Backend developer with experience RESTful
                                services, databases, large data processing,
                                NodeJS, and more.
                            </p>
                        </Grid.Column>
                        <Grid.Column width={3}>
                            <Header as="h3" style={{ fontSize: "1.5em" }}>
                                Mobile
                            </Header>
                            <p>
                                Mobile developer for creating native mobile apps
                                on both iOS and Android.
                            </p>
                        </Grid.Column>
                        <Grid.Column width={4}>
                            <Header as="h3" style={{ fontSize: "1.5em" }}>
                                Games
                            </Header>
                            <p>
                                Indie game developer with bunch of projects
                                spread across mobile and web.
                            </p>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Segment>
        );
    }
}

export default AboutSegment;
