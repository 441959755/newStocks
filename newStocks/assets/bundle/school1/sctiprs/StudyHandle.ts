import SchoolBundle from "../../../sctiprs/hall/SchoolBundle";
import EventCfg from "../../../sctiprs/utils/EventCfg";
import GlobalEvent from "../../../sctiprs/utils/GlobalEvent";

const { ccclass, property } = cc._decorator;

@ccclass
export default class StudyHandle extends cc.Component {

    @property(cc.Label)
    title: cc.Label = null;

    @property(cc.PageView)
    pageView: cc.PageView = null;

    @property(cc.Node)
    content: cc.Node = null;

    @property(cc.Node)
    page: cc.Node = null;

    asset = null;

    flag = 0;

    onLoad() {
        this.pageView.node.on('scroll-to-right', () => {
            if (SchoolBundle.studyBar >= 4) {
                return;
            }

            this.flag = 0;

            GlobalEvent.emit(EventCfg.SHOWLOADING);
            SchoolBundle.studyBar = parseInt(SchoolBundle.studyBar) + 1;

            if (SchoolBundle.studyBar > SchoolBundle.studyHisBar) {
                SchoolBundle.studyHisBar = SchoolBundle.studyBar;
                GlobalEvent.emit('UPDATESCHOOLUI');
                GlobalEvent.emit('saveStudyProgress', 0);
            }

            this.node.active = false;
            GlobalEvent.emit('OPENCURSTUDYBAR');
            GlobalEvent.emit(EventCfg.HIDELOADING);
        })

        this.pageView.node.on('scroll-to-left', () => {
            if (SchoolBundle.studyBar <= 1) {
                return;
            }

            this.flag = 1;
            GlobalEvent.emit(EventCfg.SHOWLOADING);
            SchoolBundle.studyBar = parseInt(SchoolBundle.studyBar) - 1;;
            this.node.active = false;
            GlobalEvent.emit('OPENCURSTUDYBAR');
            GlobalEvent.emit(EventCfg.HIDELOADING);
        })
    }

    onShow(data, Imgs, data1?) {
        this.asset = Imgs;
        let pagesData = data.list[SchoolBundle.studyBar - 1].pages[0].contents;
        let pages = this.content.children;

        pagesData.forEach((el, index) => {
            let node = null;
            if (pages[index]) {
                node = pages[index];
            }
            node = cc.instantiate(this.page);
            this.pageView && (this.pageView.addPage(node))
            node.setPosition(0, 0);
            node.width = this.pageView.node.children[0].width;
            node.getComponent('PageHandle').onShowUI(el, Imgs);
        });

        if (this.flag) {
            this.flag = 0;
            this.pageView && (this.pageView.scrollToPage(this.pageView.getPages().length - 1, 0.01))
        }
        this.title.string = data.list[SchoolBundle.studyBar - 1].title;
    }


    onDisable() {
        // this.content.removeAllChildren();
        this.pageView && (this.pageView.removeAllPages())
    }



    onBtnClick(event, curData) {
        let name = event.target.name;
        if (name == 'btn_black') {
            this.node.active = false;
        }

    }
}
