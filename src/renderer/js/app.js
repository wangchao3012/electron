// const electron = require('electron')
// const os = require('os')


var app = (function (document, undefined) {
    var $ = function () { };
    $.version = '1.5.0';
    $.appType = 1; //1-开发；2-测试；3-生产  
    $.debug = true;
    $.log = function (arg) {
        $.debug && console.log(arg);
    };
    $.defaultToken = 'E07657CD6002B363';
    $.post = function (par) {
        console.log('par', JSON.stringify(par))
        // electron.shell.showItemInFolder(os.homedir())
    }
    /**
     * 兼容 AMD 模块
     **/
    if (typeof define === 'function' && define.amd) {
        define('app', [], function () {
            return $;
        });
    }
    return $;
})(document);
(function ($, jq, doc, win) {
    // document.querySelectorAll('.y-tabs > li > a').addEventListener('click', function () {
    //     console.log('11');
    // })();
    // $.tabs = function () {

    //     jq('.y-tabs > li > a').click(function () {
    //         let el = jq(this);
    //         // debugger
    //         el.parent().parent().children('.active').removeClass('active');
    //         el.parent().addClass('active');
    //     });
    // }

})(app, jQuery, document, window);
// y - tabs
(function ($, doc, win) {
    window.addEventListener(('orientationchange' in window ? 'orientationchange' : 'resize'), (function () {

        function c() {
            var d = document.documentElement;
            var cw = d.clientWidth || 750;
            d.style.fontSize = (20 * (cw / 375)) > 40 ? 40 + 'px' : (20 * (cw / 375)) + 'px';
            console.log(d.style.fontSize)
        }

        c();
        return c;
    })(), false);
})(app, document, window);


window.app = app;
export default app;