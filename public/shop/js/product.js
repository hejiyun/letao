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
    
    var num 
     
    $('#xuanranchange').on('click','#btn-minus', function () {
        num= $('#changenum').val()
        maxnum = $('#maxnum').text()
        if (num === '') {
            mui.toast("请输入想购买的数量");
            return
        }
        if (num <= 1) {
            mui.toast("数量不能小于1");
            return
        }
        if (num >= parseInt(maxnum)) {
            mui.toast("超过库存上限");
            return
        }
        num--
        $('#changenum').val(num)

    })
    $('#xuanranchange').on('click','#btn-add', function () {
        num= $('#changenum').val()
        maxnum = $('#maxnum').text()
        if (num === '') {
            mui.toast("请输入想购买的数量");
            return
        }
        if (num < 0) {
            mui.toast("数量不能小于1");
            return
        }
        if (num >= parseInt(maxnum)) {
            mui.toast("超过库存上限");
            return
        }
         num++
         $('#changenum').val(num)

    })

    $('#xuanranchange').on('click','.ch-size', function () {
        $(this).addClass('current').siblings().removeClass('current')

    })

    $('#addcartBtn').click(function () {
      var num= $('#changenum').val()
      var size = $('.ch-size.current').text()
      $.ajax({
          type:'post',
          url:'/cart/addCart',
          data:{
              num:num,
              size:size,
              productId:productId
          },
          dataType:'json',
          success: function () {
              
              location.href = 'cart.html'
          }
      })

    })

})