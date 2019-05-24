import React from 'react'
import {InputItem, Button, WingBlank, Flex} from 'antd-mobile'
import MsgBox from '@/view/msg/msg-box'
import './index.less'


export default class Index extends React.Component {

    render() {
        return (
            <div className={'main-content'}>
                <div className={'msg-box'}>
                    <WingBlank size={'sm'}>
                        <MsgBox/>
                    </WingBlank>
                </div>
                <div>
                    <WingBlank size={'sm'}>
                        <Flex>
                            <InputItem className={'text-input'}/>
                            <Button className={'send-button'} onClick={() => {
                                console.log("111")
                            }}>发送</Button>
                        </Flex>
                    </WingBlank>
                </div>
            </div>
        )
    }
}
