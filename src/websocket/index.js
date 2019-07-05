const websocketUrl = 'ws://127.0.0.1:9410'

export default class WebsocketClient {

    constructor() {
        this.SendMsgTypeEnum = {
            MsgTypeCreate: 0,
            MsgTypeSendOne: 1,
            MsgTypeSendAll: 2,
        }

        this.ReceiveMsgTypeEnum = {
            ConnSuccess: 0,
            Msg: 1,
        }
    }

    connect = () => {
        this.websocket = new WebSocket(websocketUrl)
        this.websocket.onopen = this.onOpen
        this.websocket.onmessage = this.onMessage
    }

    onOpen = (res) => {
        console.log('链接创建成功')
        console.log('返回内容', res)

    }

    onMessage = (res) => {
        console.log('消息返回')
        console.log(res)
    }

    send = ({sender, content, type}) => {


    }


}
