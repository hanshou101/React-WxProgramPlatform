"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var TitleBar = require('./TitleBar').default;
var TechSupport = require('./TechSupport').default;
var Solutions = require('./Solutions').default;
var Advantages = require('./Advantages').default;
var ProjectShows = require('./ProjectShows').default;
var ProService = require('./ProService').default;
var FooterBar = require('./FooterBar').default;
const css = require("../../css/App.css");
const React = require("react");
exports.default = class Home extends React.Component {
    render() {
        return (
        // <div>
        React.createElement("div", { className: css.row },
            React.createElement(TitleBar, null, "  "),
            React.createElement(TechSupport, null, "   "),
            React.createElement(Solutions, null, "     "),
            React.createElement(Advantages, null, "     "),
            React.createElement(ProjectShows, null, "   "),
            React.createElement(ProService, null, "    "),
            React.createElement(FooterBar, null, "     ")));
    }
};
