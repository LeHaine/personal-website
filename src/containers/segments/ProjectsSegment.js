import React, { Component } from "react";
import { connect } from "react-redux";
import { Segment, Header, Grid } from "semantic-ui-react";
import Project from "../../components/Project";
import sagesSkyScreenShot from "../../static/sages-sky.png";
import { fetchUserEvents } from "../../state/github/actions";
class ProjectsSegment extends Component {
    state = {
        event: null
    };

    componentDidMount() {
        this.props.getEvents();
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.events) {
            nextProps.events.some(event => {
                if (event.type === "PushEvent") {
                    this.setState({ event: event });
                    return true;
                }
                return false;
            });
        }
    }

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
                    <Grid.Row style={{ marginBottom: "-1em" }}>
                        <Grid.Column width={14}>
                            <Header as="h3" style={{ fontSize: "1.5em" }}>
                                Latest Work
                            </Header>
                        </Grid.Column>
                    </Grid.Row>

                    {this.state.event && (
                        <Grid.Row>
                            <Grid.Column width={4}>
                                {new Date(
                                    this.state.event.created_at
                                ).toLocaleString()}
                            </Grid.Column>
                            <Grid.Column width={4}>
                                Repo:{" "}
                                <a
                                    href={
                                        "https://github.com/" +
                                        this.state.event.repo.name
                                    }
                                >
                                    {this.state.event.repo.name.split("/")[1]}
                                </a>
                            </Grid.Column>
                            <Grid.Column width={6}>
                                Commit:{" "}
                                <a
                                    href={
                                        "https://github.com/" +
                                        this.state.event.repo.name +
                                        "/commit/" +
                                        this.state.event.payload.commits[0].sha
                                    }
                                >
                                    {
                                        this.state.event.payload.commits[0]
                                            .message
                                    }
                                </a>
                            </Grid.Column>
                        </Grid.Row>
                    )}
                    {this.props.eventsLoading && (
                        <Grid.Row>
                            <Grid.Column width={14}>
                                Loading latest GitHub work...
                            </Grid.Column>
                        </Grid.Row>
                    )}
                    {this.props.eventsError && (
                        <Grid.Row>
                            <Grid.Column width={14}>
                                Unable to fetch my latest work from GitHub :(.
                                Check out my GitHub page below to view my latest
                                work.
                            </Grid.Column>
                        </Grid.Row>
                    )}
                    <Grid.Row style={{ marginBottom: "-1em" }}>
                        <Grid.Column width={14}>
                            <Header as="h3" style={{ fontSize: "1.5em" }}>
                                More Projects
                            </Header>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column width={14}>
                            Check out my GitHub page below for more projects.
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Segment>
        );
    }
}

const mapStateToProps = state => {
    return {
        events: state.fetch.userEvent.data,
        eventsLoading: state.fetch.userEvent.loading,
        eventsError: state.fetch.userEvent.error
    };
};

const mapDispatchToProps = dispatch => {
    return {
        getEvents: () => dispatch(fetchUserEvents())
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ProjectsSegment);
