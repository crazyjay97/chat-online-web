import React from 'react'
import {InputItem, Button, WingBlank, Flex} from 'antd-mobile'
import MsgBox from '@/view/msg/msg-box'
import './index.less'


export default class Index extends React.Component {

    constructor() {
        super()
        this.state = {
            txt: ''
        }
    }

    componentDidMount() {
        this.refs.msgWrap.scrollTop = this.refs.msgWrap.scrollHeight - 100
    }

    render() {
        return (
            <div className={'main-content'}>
                <div ref={'msgWrap'} className={'msg-box'}>
                    <WingBlank size={'sm'}>
                        <MsgBox ref={'msgBox'}/>
                    </WingBlank>
                </div>
                <div>
                    <WingBlank size={'sm'}>
                        <Flex>
                            <InputItem onChange={(val) => this.setState({txt: val})} className={'text-input'}/>
                            <Button className={'send-button'}
                                    onClick={
                                        () => {
                                            this.refs.msgBox.sendMsg({msg: this.state.txt, type: 0}, () => {
                                                this.refs.msgWrap.scrollTop = this.refs.msgWrap.scrollHeight
                                            })

                                        }
                                    }
                            >发送</Button>
                        </Flex>
                    </WingBlank>
                </div>
            </div>
        )
    }
}
