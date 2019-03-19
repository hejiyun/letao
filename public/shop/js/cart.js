$(function () {
  function render () {

 
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
    }
    render()


    $('#gwul').on('click', '.btn_delete', function () {
        var id = $(this).data('id')
        $.ajax({
            type:'get',
            url:'/cart/deleteCart',
            data:{id:id},
            dataType:'json',
            success: function () {
                render()
            }
        })
    })
})