import React, { Component } from "react";
import {
    Container,
    Icon,
    Menu,
    Segment,
    Sidebar,
    Responsive
} from "semantic-ui-react";
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
                        style={{ backgroundColor: "#edf2f4" }}
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
                        <Segment
                            style={{ backgroundColor: "#edf2f4" }}
                            textAlign="center"
                            vertical
                        >
                            <Container>
                                <Menu
                                    style={{ backgroundColor: "#edf2f4" }}
                                    secondary
                                    size="large"
                                >
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
