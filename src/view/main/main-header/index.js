import React from 'react'
import {NavBar, Icon} from 'antd-mobile';


export default class Index extends React.Component {

    render() {
        return (
            <NavBar
                leftContent={
                    <div onClick={() => {
                        console.log("====")
                    }
                    }>
                        <Icon type="ellipsis"/>
                    </div>
                }>
                奇葩的聊天室
            </NavBar>
        )
    }
}


