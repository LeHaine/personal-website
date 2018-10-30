import React, { Component } from "react";
import { Segment, Grid } from "semantic-ui-react";

class ContactSegment extends Component {
    render() {
        return (
            <Segment id={this.props.id} className="ContactSegment">
                <Grid container stackable verticalAlign="top">
                    <Grid.Row>
                        <Grid.Column width={5}>
                            <a
                                className="contactLink"
                                href="https://github.com/lehaine"
                                rel="noopener noreferrer"
                                target="_blank"
                            >
                                GitHub
                            </a>
                        </Grid.Column>

                        <Grid.Column width={4}>
                            <a
                                className="contactLink"
                                href="https://www.linkedin.com/in/colton-daily-6958a99b/"
                                rel="noopener noreferrer"
                                target="_blank"
                            >
                                LinkedIn
                            </a>
                        </Grid.Column>

                        <Grid.Column width={5}>
                            <a
                                className="contactLink"
                                href="mailto:colt.daily@gmail.com"
                                rel="noopener noreferrer"
                                target="_blank"
                            >
                                Email
                            </a>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Segment>
        );
    }
}

export default ContactSegment;
