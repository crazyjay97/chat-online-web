import React from 'react'
import {NavBar, Icon} from 'antd-mobile';


export default class MainHeader extends React.Component {


    render() {
        return (
            <NavBar
                leftContent={
                    <div onClick={() => {
                        console.log("====")
                        this.props.navBarHandler()
                    }
                    }>
                        <Icon type="ellipsis"/>
                    </div>
                }>
                嘻嘻
            </NavBar>
        )
    }
}


