import React, { Component } from "react";
import { Grid, Header, Image } from "semantic-ui-react";

class Project extends Component {
    render() {
        return (
            <Grid
                container
                stackable
                verticalAlign="middle"
                style={{ padding: "1.5em" }}
            >
                <Grid.Row>
                    <Grid.Column width={14}>
                        <Header
                            as="h3"
                            style={{
                                fontSize: "1.5em",
                                marginBottom: "0.25em"
                            }}
                        >
                            {this.props.title}
                        </Header>
                        <p style={{ fontSize: "1.22em" }}>
                            {this.props.subtitle}
                        </p>
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row className="Project">
                    <Grid.Column width={6}>
                        <Image src={this.props.screenshot} />
                    </Grid.Column>
                    <Grid.Column width={8}>{this.props.children}</Grid.Column>
                </Grid.Row>
            </Grid>
        );
    }
}

export default Project;
