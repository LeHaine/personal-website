import React, { Component } from "react";
import { Segment, Grid, Header } from "semantic-ui-react";

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
                            >
                                Github
                            </a>
                        </Grid.Column>

                        <Grid.Column width={4}>
                            <a
                                className="contactLink"
                                href="https://www.linkedin.com/in/colton-daily-6958a99b/"
                            >
                                LinkedIn
                            </a>
                        </Grid.Column>

                        <Grid.Column width={5}>
                            <a
                                className="contactLink"
                                href="mailto:colt.daily@gmail.com"
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
