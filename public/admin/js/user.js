$(function() {

    // 当前页
    var currentPage = 1;
    // 一页多少条
    var pageSize = 5;
  
    // 1. 一进入页面, 进行渲染
    render();
  
    function render() {
      // 发送请求, 获取表格渲染的数据
      $.ajax({
        type: "get",
        url: "/user/queryUser",
        data: {
          page: currentPage,
          pageSize: pageSize
        },
        success: function( info ) {
          var htmlStr = template( "tpl", info );
          $('.ds-main tbody').html( htmlStr );
  
  
          // 配置分页
          $('#paginator').bootstrapPaginator({
            // 指定bootstrap版本
            bootstrapMajorVersion: 3,
            // 当前页
            currentPage: info.page,
            // 总页数
            totalPages: Math.ceil( info.total / info.size ),
  
            // 当页面被点击时触发
            onPageClicked: function( a, b, c, page ) {
              // page 当前点击的页码
              currentPage = page;
              // 调用 render 重新渲染页面
              render();
            }
          });
  
        }
      });
    }
 

  $('.ds-main tbody').on('click','.btn', function () {
    $('#userModal').modal("show");
    var id = $(this).parent().data('id')
    var isDelete = $(this).hasClass('btn-success') ? 1 : 0
    $('#submitBtn').off('click').on('click', function () {
      $.ajax({
        type:'post',
        url:'/user/updateUser',
        data:{
          id:id,
          isDelete:isDelete
        },
        dataType:'json',
        success: function (info) {
          if (info.success) {
            $('#userModal').modal("hide");
            render()
          }
          if (info.error) {
            alert('操作失败,请稍后尝试!')
          }
        }
      })
    })
  })
  
})