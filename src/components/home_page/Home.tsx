var TitleBar = require('./TitleBar').default
var TechSupport = require('./TechSupport').default
var Solutions = require('./Solutions').default
var Advantages = require('./Advantages').default
var ProjectShows = require('./ProjectShows').default
var ProService = require('./ProService').default
var FooterBar = require('./FooterBar').default


import css = require('../../css/App.css')
import React = require('react');

exports.default = class Home extends React.Component {
    render() {
        return (
            // <div>
            <div className={css.row}>

                <TitleBar>  </TitleBar >

                <TechSupport>   </TechSupport>

                < Solutions  >     </  Solutions   >
                < Advantages >     </ Advantages    >
                < ProjectShows >   </  ProjectShows   >
                < ProService  >    </  ProService   >
                < FooterBar  >     </  FooterBar   >






            </div >
        )
    }
}