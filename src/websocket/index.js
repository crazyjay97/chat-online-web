import store, {USER_ACTION} from '@/redux'

const websocketUrl = 'ws://192.168.1.35:9410'

import common from '@/common'

export default class WebsocketClient {

    constructor() {

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
            case common.SendMsgTypeEnum.MsgTypeCreate:
                this.initInfo(data)
                break
            case common.SendMsgTypeEnum.MsgTypeSendAll:
                this.resMsg(data)
                break
            case common.SendMsgTypeEnum.MsgTypeNickAlreadyUse:
                break
            case common.SendMsgTypeEnum.MsgTypeUserJoin:
                this.resMsg(data)
                break
            case common.SendMsgTypeEnum.MsgTypeUserExit:
                this.resMsg(data)
                break
        }
    }

    updateNickName({id, nickname}) {
        let data = {Sender: id, Content: nickname, Type: common.SendMsgTypeEnum.MsgTypeUpdateNickname}
        this.websocket.send(JSON.stringify(data))
    }

    resMsg = (data) => {
        console.log(data)
        store.dispatch({
            type: USER_ACTION.RES_MSG,
            msg: {
                content: data.Content,
                id: data.Sender,
                name: data.SenderName,
                type: data.Type,
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
