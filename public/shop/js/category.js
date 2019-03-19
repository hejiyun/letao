

$(function () {

  $.ajax({
      type:'get',
      url:'/category/queryTopCategory',
      dataType:'json',
      success: function (info) {
          var htmlstr = template('fl',info)
          $('.changebg').html(htmlstr)
      }
  })

  
  $.ajax({
    type:'get',
    url:'/category/querySecondCategory',
    dataType:'json',
    data:{
        id: 1
    },
    success: function (info) {
   
            var htmlstr = template('secondfl',info)
            $('.xuanran').html(htmlstr)
    }
})
 
  $('.changebg').on('click','a',function () {
    $(this).addClass("current").parent().siblings().find("a").removeClass("current");
    var id = $(this).data("id");
    $.ajax({
        type:'get',
        url:'/category/querySecondCategory',
        dataType:'json',
        data:{
            id:id
        },
        success: function (info) {
                var htmlstr = template('secondfl',info)
                $('.xuanran').html(htmlstr)
        }
    })
})
})