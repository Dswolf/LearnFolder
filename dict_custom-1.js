// Js Read-------------------------
document.write('<script src="//ajax.googleapis.com/ajax/libs/jquery/2.0.0/jquery.min.js"></script>');

var $show = $('#show');
$.ajax({
    type: "post",
    data: {
        "method": "read",
        "query": "New",
    },
    // 填入網路應用程式網址
    url: "https://script.google.com/macros/s/AKfycbxBcSeU_pTMYwJPcGvW5zN_lo01GFD0trsq_mSnNuV1Hs6BozU/exec", // 填入網路應用程式網址
    success: function (e) {
        //alert(e);
        $show.text('@' + e + '@');
    }
});

// Js Read End-------------------------

_custom_dict = [
    ["可以開始開始", 15, "n"],
];



// 引用設定檔案，以下不用變更
if (typeof (define) === "function") {
    define(function (require) {
        return _custom_dict;
    });
}
else {
    module.exports = _custom_dict;
}