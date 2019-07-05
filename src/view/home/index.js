import React from 'react';
import {InputItem, Button, WingBlank} from 'antd-mobile'
import './index.less'
import {connect} from 'react-redux';
import {USER_ACTION} from "@/redux";
import {withRouter} from 'react-router-dom';


const mapDispatchToProps = dispatch => {
    return {
        updateNickName: nickname => dispatch({
            type: USER_ACTION.UPDATE_NICKNAME,
            nickname: nickname
        })
    }
}

const mapStateToProps = (state) => ({
    wsClient: state.wsClient,
    id: state.id,
})

class Index extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            nickname: ''
        }
    }

    setNikeNameAndPush() {
        if (this.state.nickname) {
            this.props.updateNickName({nickname: this.state.nickname})
            this.props.wsClient.updateNickName({id: this.props.id, nickname: this.state.nickname})
            this.props.history.push({pathname: '/main'})//带有state
        } else {
            alert("请输入昵称")
        }
    }

    render() {
        return (
            <WingBlank className={"home-wrap"}>
                <div className={"home-wrap-content"}>
                    <InputItem onChange={(val) => this.setState({nickname: val})}
                               className={"home-wrap-input"}>昵称</InputItem>
                    <Button onClick={() => this.setNikeNameAndPush()} className={"home-wrap-button"}>进入聊天室</Button>
                </div>
            </WingBlank>
        )
    }
}

const routerIndex = withRouter(Index);//CourseIntro是自己定义的组件名称


export default connect(mapStateToProps, mapDispatchToProps, null, {forwardRef: true})(routerIndex);
