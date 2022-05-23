
import LoadUtils from "./LoadUtils";
import LocalStorageUtils from "./LocalStorageUtils"

export default {

    audioMaps: null,

    effectVolume: 0,

    musicVolume: 0,

    /**
     * 
     */
    getAudioVolume() {
        let musicVolume = LocalStorageUtils.getItem('MUSICVOLUME');
        this.musicVolume = musicVolume ? parseFloat(musicVolume) : 1;

        let effectVolume = LocalStorageUtils.getItem("EFFECTVOLUME");
        this.effectVolume = effectVolume ? parseFloat(effectVolume) : 1;
    },

    /**
     * 
     * @param url 
     */
    loadAudios(url) {
        this.audioMaps = new Map();

        LoadUtils.loadDir(url).then((clips) => {
            clips.forEach(element => {
                this.audioMaps.set(element.name, element);
            });
        }, (err) => {
            console.log('loadAudios:' + err);
        })
    },

    /**
     * 
     * @param str 
     * @param loop 
     * @returns 
     */
    playMusic(str, loop) {
        if (this.audioMaps.has(str)) {
            cc.audioEngine.playMusic(this.audioMaps.get(str), loop);
            return;
        }
        console.log('AudioUtils playMusic not ' + str);
    },

    pauseMusic() {
        cc.audioEngine.pauseMusic();
    },

    resumeMusic() {
        cc.audioEngine.resumeMusic();
    },

    setMusicVolume(val) {
        this.musicVolume = val;
        cc.audioEngine.setMusicVolume(val);
        localStorage.setItem('MUSICVOLUME', val);
    },

    playEffect(str, loop) {
        if (this.audioMaps.has(str)) {
            cc.audioEngine.playEffect(this.audioMaps.get(str), loop);
            return;
        }
        console.log('audiomaps not ' + str);
    },

    pauseEffect(str) {
        cc.audioEngine.pauseEffect(str);
    },

    resumeEffect(str) {
        cc.audioEngine.resumeEffect(str);
    },

    setEffectVolume(val) {
        this.effectVolume = val;
        cc.audioEngine.setEffectsVolume(val);
        localStorage.setItem('EFFECTVOLUME', val);
    }

}