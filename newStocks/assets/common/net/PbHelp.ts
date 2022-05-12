import { pb } from "../../proto/proto"


export default {

    selectProtoBlackData(messageId, buff) {

        if (messageId == pb.MessageId.Rep_Game_Login) {
            return pb.CmdGameLoginReply.decode(new Uint8Array(buff));
        }
        else if (messageId) {

        }

    }


}