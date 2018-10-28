import React, { Component } from "react";
import logo from "../logo.svg";
import { Image, Menu, Container } from "semantic-ui-react";

class NavMenu extends Component {
    render() {
        return (
            <Container className="NavMenu">
                <Menu.Item as="a" header>
                    <Image size="mini" src={logo} />
                    Colt Daily
                </Menu.Item>
                <Menu.Item as="a" href="#about">
                    About me
                </Menu.Item>
                <Menu.Item as="a" href="#skills">
                    Skills
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
