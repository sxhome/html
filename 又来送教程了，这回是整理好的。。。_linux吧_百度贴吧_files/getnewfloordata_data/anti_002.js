define('common/anti', function (require) {
    return {
        init: function (element, signtime) {
            signtime = parseInt(signtime, 10);
            if (signtime) {
                var anti = new Anti(element);
                anti.bind();
                anti.setTimesign(signtime);
            }
        }
    };
});