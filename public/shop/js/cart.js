$(function () {

    $.ajax({
        type:'get',
        url:'/cart/queryCart',
        dataType:'json',
        success: function (info) {
            if (info.error === 400) {
              location.href = "login.html?retUrl=" + location.href;
              return;      
            }
            var htmlstr = template('gwc',{arr:info})
            $('.mui-table-view').html(htmlstr)
        }
    })
})