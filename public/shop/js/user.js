
$(function () {
    $.ajax({
      type:'get',
      url:'/user/queryUserMessage',
      success: function (info) {
          console.log(info)
        if (info.error === 400) {
            location.href = 'login.html'
        }else{
            var htmlstr = template('userchange',info)
            $('.xuanranli').html(htmlstr)
        }
      }
    })





    $('#logout').click(function () {
        $.ajax({
            type:'get',
            url:'/user/logout',
            success: function () {
                location.href = 'login.html'
            }
        })
    })
})