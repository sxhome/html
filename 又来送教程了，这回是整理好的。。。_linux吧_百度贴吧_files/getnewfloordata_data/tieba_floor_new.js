define('tieba_floor_new', function (require, exports) {
    var anti = require('common/anti');
    var listContent = {
            onChangeClick: function () {
                $('.change-batch').on('click', function () {
                    var elements = $('.edu-content');
                    var curElement = $('.current-content');
                    var curIndex = curElement.index();
                    curElement.removeClass('current-content');
                    if (curIndex < elements.length - 1) {
                        elements.eq(curIndex + 1).addClass('current-content');
                    } else {
                        elements.eq(0).addClass('current-content');
                    }
                });
            }
        };
    exports.init = function (signtime) {
        anti.init($('.main-content')[0], signtime);
        listContent.onChangeClick();
    };
});