import React from 'react'
import './index.less'


export default class Index extends React.Component {


    constructor(props) {
        super(props)
        this.props = props
        this.state = {
            mine: {
                id: '3333',
                sName: '生气哥',
            },
            msgHis: [
                {
                    content: '你是谁',
                    sId: '123',
                    sName: '糊涂哥',
                    type: 0
                },
            ]
        }
    }

    sendMsg({msg, type}, callback) {
        this.state.msgHis.push({
            content: msg,
            sId: this.state.mine.id,
            sName: this.state.mine.sName,
            type: type,
        })
        this.setState({
            msgHis: this.state.msgHis
        }, callback)
    }

    render() {
        return (
            <div className={'msg-wrap'}>
                {this.state.msgHis.map((msg, index) => {
                    return (
                        <div key={index}>
                            <div className={'msg-row'}>
                                <MsgBar msg={msg} mId={this.state.mine.id}/>
                            </div>
                        </div>
                    )
                })}
            </div>
        )
    }
}

const MsgBar = (props) => {
    if (props.msg.sId === props.mId) {
        return (
            <div className={'msg-bar-mine'}>
                <span>{props.msg.sName}</span>
                <div className={'msg-bar-content msg-bar-content-mine'}>
                    {props.msg.content}
                </div>
            </div>
        )
    } else {
        return (
            <div className={'msg-bar-other'}>
                <span>{props.msg.sName}</span>
                <div className={'msg-bar-content msg-bar-content-other'}>
                    {props.msg.content}
                </div>
            </div>
        )
    }
}

