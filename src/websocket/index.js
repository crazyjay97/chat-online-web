import store, {USER_ACTION} from '@/redux'

const websocketUrl = 'ws://192.168.1.22:9410'

export default class WebsocketClient {

    constructor() {
        this.SendMsgTypeEnum = {
            MsgTypeCreate: 0,
            MsgTypeSendOne: 1,
            MsgTypeSendAll: 2,
            MsgTypeUpdateNickname: 4,
            Success: 200,
            MsgTypeNickAlreadyUse: 505
        }

        this.ReceiveMsgTypeEnum = {
            ConnSuccess: 0,
            Msg: 1,
        }
    }

    connect = (id) => {
        this.websocket = new WebSocket(websocketUrl + '/' + id)
        this.websocket.onopen = this.onOpen
        this.websocket.onmessage = this.onMessage
    }

    onOpen = (res) => {
        console.log('链接创建成功')
    }

    onMessage = (res) => {
        if (res.data) {
            let data = JSON.parse(res.data)
            this.msgHandle(data)
        }
    }

    send = ({content, id, type}) => {
        let data = {Sender: id, Content: content, Type: type}
        this.websocket.send(JSON.stringify(data))
    }


    msgHandle(data) {
        switch (data.Type) {
            case this.SendMsgTypeEnum.MsgTypeCreate:
                this.initInfo(data)
                break
            case this.SendMsgTypeEnum.MsgTypeSendAll:
                this.resMsg(data)
                break
            case this.SendMsgTypeEnum.MsgTypeNickAlreadyUse:
                break
        }
    }

    updateNickName({id, nickname}) {
        let data = {Sender: id, Content: nickname, Type: this.SendMsgTypeEnum.MsgTypeUpdateNickname}
        this.websocket.send(JSON.stringify(data))
    }

    resMsg = (data) => {
        store.dispatch({
            type: USER_ACTION.RES_MSG,
            msg: {
                content: data.Content,
                id: data.Sender,
                name: data.SenderName
            }
        })

    }

    initInfo(data) {
        store.dispatch({
            type: USER_ACTION.CREATE_USER,
            payload: {
                id: data.Id,
            }
        })
    }

}
