$(function () {
    $('#loginBtn').click(function () {

        var username = $('#username').val()
        var password = $('#password').val()
        if ( username.trim() === "" ) {
            mui.toast("请输入用户名");
            return;
          }
          if ( password.trim() === "" ) {
            mui.toast("请输入密码");
            return;
          }
        $.ajax({
            type:'post',
            url:'/user/login',
            data:{
                username:username,
                password:password
            },
            dataType:'json',
            success: function (info) {
              if (info.error === 403){
                mui.toast("用户名或者密码错误");
                return;
              }
              if (info.success) {
                  if (location.href.indexOf('retUrl') > -1) {
                    var returl = location.search.replace('?retUrl=',"")
                    location.href = returl
                  }else{
                    location.href = 'user.html'
                  }
                
              }
            }
           
        })
    })
})