
import LLWConfing from "../../../common/config/LLWConfing";
import LLWSDK from "../../../common/sdk/LLWSDK";
import { pb } from "../../../proto/proto";
import PopupManager from "../../../sctiprs/utils/PopupManager";

const { ccclass, property } = cc._decorator;

@ccclass
export default class AccountManage extends cc.Component {


    onBtnClick(event, data) {

        let name = event.target.name;

        //注销
        if (name == 'grzx_zxzh') {

            (<any>window).socket.send(pb.MessageId.Req_Hall_Logout, null, (info) => {

            });

            (<any>window).socket.flag = true;

            cc.director.loadScene('Login');

            // socket.send(pb.MessageId.Req_Hall_Unregistry, null, (info) => {
            //     console.log('注销:' + JSON.stringify(info));
            //     if (!info.code) {

            //     } else {
            //         console.log('注销有误!:' + info.code + info.err);
            //     }
            // })
        }

        //协议
        else if (name == 'grzx_yhxy') {
            console.log('用户协议');
            let url = LLWConfing.LoginUrl + '/user/decription1000.html'
            if (LLWConfing.AppFrom == pb.AppFrom.WeChatMinProgram) {
                LLWSDK.getSDK().onCopyText(url, (flag) => {
                    if (flag) {
                        // GlobalEvent.emit(EventCfg.SHOWTIPSTEXT, '用户协议地址已经复制，请前往网页黏贴地址打开');
                        PopupManager.openNode(this.node, null, 'Prefabs/pop/tipsBox1', 10, (node) => {
                            let handle = node.getComponent('TipsBox1');
                            handle.onShow('用户协议地址已经复制，请前往网页黏贴地址打开');
                        })
                    }
                })
            }
            else {

                PopupManager.loadPrococol('用户协议', url);
            }


        }

        else if (name == 'grzx_ysxy') {
            console.log('隐私协议');
            let url = LLWConfing.LoginUrl + '/user/private1000.html';
            if (LLWConfing.AppFrom == pb.AppFrom.WeChatMinProgram) {
                LLWSDK.getSDK().onCopyText(url, (flag) => {
                    if (flag) {
                        PopupManager.openNode(this.node, null, 'Prefabs/pop/tipsBox1', 10, (node) => {
                            let handle = node.getComponent('TipsBox1');
                            handle.onShow('隐私协议地址已经复制，请前往网页黏贴地址打开');
                        })
                    }
                })
            }
            else {

                PopupManager.loadPrococol('隐私协议', url);
            }
        }

    }
}
