import React, { Component } from "react";
import logo from "../static/logo.png";
import { Image, Menu, Container } from "semantic-ui-react";

class NavMenu extends Component {
    render() {
        return (
            <Container className="NavMenu">
                <Menu.Item as="a" header>
                    <Image size="mini" src={logo} />
                </Menu.Item>
                <Menu.Item as="a" href="#work">
                    Work
                </Menu.Item>
                <Menu.Item as="a" href="#projects">
                    Projects
                </Menu.Item>
                <Menu.Item as="a" href="#contact">
                    Contact
                </Menu.Item>
            </Container>
        );
    }
}

export default NavMenu;
