import LLWConfing from "../config/LLWConfing";

export default class LLLog {

    public static reConsole() {
        //window.Number.toFixed = (n, fixed) => ~~(Math.pow(10, fixed) * n) / Math.pow(10, fixed);
        if (!LLWConfing.ISLOG) { return }

        window.console = (function (origConsole) {

            if (!window.console)
                console = {};

            //  origConsole && origConsole.log
            return {
                log: function () {
                    origConsole.log(arguments[0]);
                },

                info: function () {
                    origConsole.info(arguments[0]);
                },

                warn: function () {
                    origConsole.warn(arguments[0]);
                },

                error: function () {
                    origConsole.error(arguments[0]);
                },

                time: function () {
                    origConsole.time(arguments[0]);
                },

                timeEnd: function () {
                    origConsole.timeEnd(arguments[0]);
                },

                // assert: function () {
                //     origConsole.assert(arguments[0]);
                // },

            }

        }(window.console))
    }
}