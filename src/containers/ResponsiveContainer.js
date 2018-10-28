import React, { Component } from "react";
import MobileContainer from "./MobileContainer";
import DesktopContainer from "./DesktopContainer";
class ResponsiveContainer extends Component {
    render() {
        return (
            <div className="ResponsiveContainer">
                <DesktopContainer>{this.props.children}</DesktopContainer>
                <MobileContainer>{this.props.children}</MobileContainer>
            </div>
        );
    }
}

export default ResponsiveContainer;
