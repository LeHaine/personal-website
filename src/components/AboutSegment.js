import React, { Component } from "react";
import { Segment, Grid, Button, Header } from "semantic-ui-react";

class AboutSegment extends Component {
    render() {
        return (
            <Segment className="About" style={{ padding: "8em 0em" }} vertical>
                <Grid container stackable verticalAlign="middle">
                    <Grid.Row>
                        <Grid.Column width={12}>
                            <Header as="h3" style={{ fontSize: "2em" }}>
                                About me
                            </Header>
                            <p style={{ fontSize: "1.33em" }}>lorem ipsum</p>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column width={12}>
                            <Button size="big">Resume</Button>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column width={3}>
                            <Header as="h3">Web</Header>
                            <p>lorem ipsum</p>
                        </Grid.Column>
                        <Grid.Column width={3}>
                            <Header as="h3">Backend</Header>
                            <p>lorem ipsum</p>
                        </Grid.Column>
                        <Grid.Column width={3}>
                            <Header as="h3">Mobile</Header>
                            <p>lorem ipsum</p>
                        </Grid.Column>
                        <Grid.Column width={3}>
                            <Header as="h3">Games</Header>
                            <p>lorem ipsum</p>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Segment>
        );
    }
}

export default AboutSegment;
