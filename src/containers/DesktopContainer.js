import React, { Component } from "react";
import { Menu, Segment, Responsive } from "semantic-ui-react";
import NavMenu from "../components/NavMenu";

class DesktopContainer extends Component {
    render() {
        return (
            <Responsive minWidth={Responsive.onlyTablet.minWidth}>
                <Segment inverted textAlign="center" vertical>
                    <Menu fixed="top" inverted>
                        <NavMenu />
                    </Menu>
                </Segment>

                {this.props.children}
            </Responsive>
        );
    }
}

export default DesktopContainer;
