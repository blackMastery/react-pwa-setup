import React from "react";
import ThemeContext from "./MyContext";


export class Provider extends React.Component {
    render() {
        return (
            <ThemeContext.Provider value={this.props.theme}>
                {this.props.children}
            </ThemeContext.Provider>
        );
    }
}