$(function () {
    var productId = getSearch('productId')
    $.ajax({
        type:'get',
        url:'/product/queryProductDetail',
        data: {id:productId},
        dataType:'json',
        success: function (info) {
           var htmlstr = template('xuanran11',info)
          $("#xuanranchange").html(htmlstr)
        }
    })
})