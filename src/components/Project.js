import React, { Component } from "react";
import { Grid, Header, Image } from "semantic-ui-react";

class Project extends Component {
    render() {
        return (
            <Grid.Row className="Project">
                <Grid.Column width={3}>
                    <Header as="h3" style={{ fontSize: "1.5em" }}>
                        {this.props.title}
                    </Header>
                    <p style={{ fontSize: "1.33em" }}>{this.props.subtitle}</p>
                </Grid.Column>
                <Grid.Column width={3}>
                    <Image src={this.props.screenshot} />
                </Grid.Column>
                <Grid.Column width={8} textAlign="left">
                    {this.props.children}
                </Grid.Column>
            </Grid.Row>
        );
    }
}

export default Project;
