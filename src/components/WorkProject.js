import React, { Component } from "react";
import { Grid, Image, Header } from "semantic-ui-react";

class WorkProject extends Component {
    render() {
        return (
            <div className="WorkProject">
                <Grid container stackable verticalAlign="top">
                    <Grid.Row>
                        <Grid.Column width={5}>
                            <Image src={this.props.logo} />
                        </Grid.Column>
                        <Grid.Column width={11} textAlign="left">
                            <Grid.Row>
                                <Header as="h3" style={{ fontSize: "1.5em" }}>
                                    {this.props.title}
                                </Header>
                            </Grid.Row>
                            <Grid.Row>{this.props.children}</Grid.Row>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </div>
        );
    }
}

export default WorkProject;
