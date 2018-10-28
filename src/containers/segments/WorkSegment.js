import React, { Component } from "react";
import { Header, Segment, Grid } from "semantic-ui-react";
import WorkProject from "../../components/WorkProject";
import idLogo from "../../static/informed-delivery.jpg";
import myUspsLogo from "../../static/My-USPS-Mobile-Devices.jpg";

class WorkSegment extends Component {
    render() {
        return (
            <Segment id={this.props.id} className="WorkSegment">
                <Grid container stackable verticalAlign="top">
                    <Grid.Row>
                        <Grid.Column width={14}>
                            <Header as="h3" style={{ fontSize: "2em" }}>
                                Work
                            </Header>
                            <p style={{ fontSize: "1.33em" }}>
                                Currently working at:{" "}
                                <a
                                    href="https://www.optimo-it.com/"
                                    rel="noopener noreferrer"
                                    target="_blank"
                                >
                                    OPTiMO - IT
                                </a>
                            </p>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column width={14}>
                            <WorkProject
                                title="Informed Delivery"
                                logo={idLogo}
                            >
                                <p style={{ fontSize: "1.33em" }}>
                                    Maintained current code, developed new
                                    features for the front-end and back-end,
                                    database changes, created and consumed
                                    RESTful services, and production environment
                                    support.
                                </p>
                            </WorkProject>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column width={14}>
                            <WorkProject
                                title="My USPS Mobile"
                                logo={myUspsLogo}
                            >
                                <p style={{ fontSize: "1.33em" }}>
                                    Designed, developed, and maintained the
                                    Android My USPS mobile application.
                                </p>
                            </WorkProject>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Segment>
        );
    }
}

export default WorkSegment;
