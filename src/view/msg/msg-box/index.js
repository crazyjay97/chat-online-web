import React from 'react'
import './index.less'


export default class Index extends React.Component {


    constructor() {
        super()
        this.state = {
            mine: {
                id: '3333'
            },
            msgHis: [
                {
                    content: '你是谁',
                    sId: '123',
                    sName: '糊涂哥',
                    type: 0
                },
                {
                    content: '我是王二',
                    sId: '3333',
                    sName: '生气哥',
                    type: 0
                }
            ]
        }
    }


    render() {
        return (
            <div>
                {this.state.msgHis.map(msg => {
                    return (
                        <div key={msg.sId}>
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

