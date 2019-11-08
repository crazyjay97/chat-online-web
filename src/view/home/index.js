import React from 'react';
import {InputItem, Button, WingBlank, Toast} from 'antd-mobile'
import './index.less'
import {connect} from 'react-redux';
import {USER_ACTION} from "@/redux";
import {withRouter} from 'react-router-dom';
import http from '@/http'


const mapDispatchToProps = dispatch => {
    return {
        updateNickName: nickname => dispatch({
            type: USER_ACTION.UPDATE_NICKNAME,
            nickname: nickname
        }),
        createUser: id => dispatch({
            type: USER_ACTION.CREATE_USER,
            payload: {
                id: id,
            }
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
            //set nickname
            http({
                url: `join?nickname=${this.state.nickname}`,
                method: 'get',
            }).then(({data}) => {
                let {Id, Type, Content} = data
                if (Type === this.props.wsClient.SendMsgTypeEnum.Success) {
                    this.props.createUser(Id)
                    this.props.wsClient.connect(Id)
                    this.props.history.push({pathname: '/main'})
                } else {
                    Toast.fail('很抱歉，昵称已存在，请更换昵称后重试', 1);
                }
            })
        } else {
            Toast.fail('请输入昵称', 1);
        }
    }

    updateNickName() {

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
