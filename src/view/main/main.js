import React from 'react';
import MainHeader from './main-header'
import MainNavbar from './main-navbar'
import './main.less'

class Main extends React.Component {

    navBarHandler = (show) => {
        console.log(this.refs.mainNavbar)
    }

    render() {
        return (
            <div className={"main"}>
                <MainHeader navBarHandler={this.navBarHandler}/>
                <MainNavbar ref="mainNavbar" class={"main-nav-bar"}/>
            </div>
        )
    }
}

export default Main
