
$(function () {

   var key = getSearch('proName')
   $('#searchget').val(key) 
   var prames = {}
   prames.proName = $('#searchget').val()
   prames.page = 1
   prames.pagesize = 100

    $.ajax({
        type:'get',
        url:'/product/queryProduct',
        data: prames,
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