function removeUnicode(input) {
    var signedChars = "àảãáạăằẳẵắặâầẩẫấậđèẻẽéẹêềểễếệìỉĩíịòỏõóọôồổỗốộơờởỡớợùủũúụưừửữứựỳỷỹýỵÀẢÃÁẠĂẰẲẴẮẶÂẦẨẪẤẬĐÈẺẼÉẸÊỀỂỄẾỆÌỈĨÍỊÒỎÕÓỌÔỒỔỖỐỘƠỜỞỠỚỢÙỦŨÚỤƯỪỬỮỨỰỲỶỸÝỴ";
    var unsignedChars = "aaaaaaaaaaaaaaaaadeeeeeeeeeeeiiiiiooooooooooooooooouuuuuuuuuuuyyyyyAAAAAAAAAAAAAAAAADEEEEEEEEEEEIIIIIOOOOOOOOOOOOOOOOOUUUUUUUUUUUYYYYY";
    var pattern = new RegExp("[" + signedChars + "]", "g");
    var output = input.replace(pattern, function (m, key, value) {
        return unsignedChars.charAt(signedChars.indexOf(m));
    });
    return output;
}

function initSearch() {
    $("#search_home").keyup(function () {
        console.log("keyup");
        var keyword = $("#search_home").val().trim().toLowerCase();
        var keyword1 = removeUnicode(keyword).toLowerCase();
        console.log("keyword=" + keyword + " keyword1=" + keyword1);
        $(".subject-item").each(function () {
            var text = $(this).find("a").text().toLowerCase();
            var text1 = removeUnicode(text).toLowerCase();
            if (text == "" || text.includes(keyword) || text.includes(keyword1)
                    || text1.includes(keyword) || text1.includes(keyword1)) {
                $(this).show();
            } else {
                $(this).hide();
            }
        })
    })
    $("#search_home").focus();
}
setTimeout(initSearch(), 2000);