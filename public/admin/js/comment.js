$('.icon_logout').on('click', function() {
    // 让模态框显示
    $('#logoutModal').modal("show");
  })
  $('.icon_menu').click(function() {
    $('.ds-cbl').toggleClass("hidemenu");
    $('.ds-main').toggleClass("hidemenu");
    $('.ds-topbar').toggleClass("hidemenu");
  });
  $('.category').click(function () {
    $('.ds-lb>ul>li:last-child').toggleClass('mt_80')
    $('.child').toggleClass('xs')
  })

  $(' .modal-footer #logoutBtn').click( function () {
    $.ajax({
      type:'get',
      url:'/employee/employeeLogout',
      success: function (info) {
        location.href = 'longin.html'
      }
    })
  })

  if (location.href.indexOf('login.html' === -1)) {
    $.ajax({
      type:'get',
      url:'/employee/checkRootLogin',
      success: function (info) {
        if (info.err === 400) {
          location.href = 'login.html'
        }
        if(info.success) {
          console.log('欢迎登陆')
        }
      } 
    })
  }