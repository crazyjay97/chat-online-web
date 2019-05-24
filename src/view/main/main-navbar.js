import React from 'react'
import {Drawer, List, Icon} from 'antd-mobile';

export default class MainNavbar extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            showSidebar: false
        }
    }

    navbarHandler = (show) => {
        this.setState({
            showSidebar: show
        })
    }


    render() {
        return (
            <Drawer
                style={{minHeight: document.documentElement.clientHeight}}
                contentStyle={{color: '#A6A6A6', textAlign: 'center', paddingTop: '45px'}}
                touch={true}
                sidebar={
                    <List>
                        <List.Item>
                            <Icon type="md"/> Demo
                        </List.Item>
                    </List>
                }
                open={this.state.showSidebar}
            >
                <div></div>
            </Drawer>
        )
    }

}


