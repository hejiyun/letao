$(function () {
    $("#searchBtn").on('click', function () {
        var key = $('#searchpro').val()
        if (key.trim() === '') {
            mui.toast("搜索内容不能为空");
        }
        var retUrl = 'proName='+key
        console.log(retUrl)
       location.href = 'searchList.html?'+retUrl
    })
    
})