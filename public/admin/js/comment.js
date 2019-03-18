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