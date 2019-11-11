import React from 'react'
import './index.less'
import common from '@/common'

import {connect} from 'react-redux';

const mapStateToProps = (state) => ({
    wsClient: state.wsClient,
    id: state.id,
    name: state.name,
    msgHis: state.msgHis
})

class Index extends React.Component {


    constructor(props) {
        super(props)
        this.props = props
    }

    sendMsg({msg, type}) {
        this.props.wsClient.send({
            content: msg,
            id: this.props.id,
            name: this.props.name,
            type: type,
        })
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        this.props.updateScrollHeight()
    }

    render() {
        return (
            <div className={'msg-wrap'}>
                {this.props.msgHis.map((msg, index) => {
                    return (
                        <div key={index}>
                            <div className={'msg-row'}>
                                <MsgBar msg={msg} mId={this.props.id}/>
                            </div>
                        </div>
                    )
                })}
            </div>
        )
    }
}

const MsgBar = (props) => {
    if (props.msg.type == common.SendMsgTypeEnum.MsgTypeSendAll) {
        if (props.msg.id == props.mId) {
            return (
                <div className={'msg-bar-mine'}>
                    <span>{props.msg.name}</span>
                    <div className={'msg-bar-content msg-bar-content-mine'}>
                        {props.msg.content}
                    </div>
                </div>
            )
        } else {
            return (
                <div className={'msg-bar-other'}>
                    <span>{props.msg.name}</span>
                    <div className={'msg-bar-content msg-bar-content-other'}>
                        {props.msg.content}
                    </div>
                </div>
            )
        }
    } else if (props.msg.type == common.SendMsgTypeEnum.MsgTypeUserExit) {
        return (
            <div className={'msg-tip'} >
                {props.msg.name}离开了聊天室
            </div>
        )
    } else if (props.msg.type == common.SendMsgTypeEnum.MsgTypeUserJoin) {
        return (
            <div className={'msg-tip'}>
                {props.msg.name}加入了聊天室
            </div>
        )
    }
}

export default connect(mapStateToProps, null, null, {forwardRef: true})(Index);
