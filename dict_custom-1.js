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