export default {
    SendMsgTypeEnum: {
        MsgTypeCreate: 0,
        MsgTypeSendOne: 1,
        MsgTypeSendAll: 2,
        MsgTypeUpdateNickname: 4,
        Success: 200,
        MsgTypeNickAlreadyUse: 505,
        MsgTypeUserJoin: 203,
        MsgTypeUserExit: 204,
    },
    ReceiveMsgTypeEnum: {
        ConnSuccess: 0,
        Msg: 1,
    }
}
