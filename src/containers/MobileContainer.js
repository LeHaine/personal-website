import React, { Component } from "react";
import {
    Image,
    Container,
    Icon,
    Menu,
    Segment,
    Sidebar,
    Responsive
} from "semantic-ui-react";
import logo from "../logo.svg";
import NavMenu from "../components/NavMenu";

class MobileContainer extends Component {
    state = {};
    handlePusherClick = () => {
        const { sidebarOpened } = this.state;

        if (sidebarOpened) {
            this.setState({ sidebarOpened: false });
        }
    };

    handleToggle = () => {
        this.setState({ sidebarOpened: !this.state.sidebarOpened });
    };
    render() {
        return (
            <Responsive maxWidth={Responsive.onlyMobile.maxWidth}>
                <Sidebar.Pushable>
                    <Sidebar
                        as={Menu}
                        animation="overlay"
                        inverted
                        vertical
                        visible={this.state.sidebarOpened}
                    >
                        <NavMenu />
                    </Sidebar>

                    <Sidebar.Pusher
                        dimmed={this.state.sidebarOpened}
                        onClick={this.handlePusherClick}
                        style={{ minHeight: "100vh" }}
                    >
                        <Segment inverted textAlign="center" vertical>
                            <Container>
                                <Menu inverted pointing secondary size="large">
                                    <Menu.Item onClick={this.handleToggle}>
                                        <Icon name="sidebar" />
                                    </Menu.Item>
                                </Menu>
                            </Container>
                        </Segment>

                        {this.props.children}
                    </Sidebar.Pusher>
                </Sidebar.Pushable>
            </Responsive>
        );
    }
}

export default MobileContainer;
