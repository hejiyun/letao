
$(function () {
    $.ajax({
        type:'get',
        url:'/product/queryProduct',
        data:{
            proName:'匡威三星标1970s converse复刻 142334c 144757c三星标黑色高帮',
            page: 1,
            pagesize:10,
        },
        dataType: 'json',
        success: function (info) {
           var htmlstr = template('searchchange',info)
           $('.changelis').html(htmlstr)
        }
    })
    $('.ss-px').on('click','a', function () {
        $(this).addClass('current').siblings().removeClass('current')
    })
    
})