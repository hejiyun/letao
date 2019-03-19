$(function() {

    // 当前页
    var currentPage = 1;
    // 每页多少条
    var pageSize = 5;
  
    // 1. 一进入页面就渲染页面
    render();
  
    function render() {
  
      $.ajax({
        url: "/category/queryTopCategoryPaging",
        type: "get",
        data: {
          page: currentPage,
          pageSize: pageSize
        },
        success: function( info ) {
          console.log( info );
          // 结合模板进行渲染
          var htmlStr = template( "userTpl", info );
          $('.ds-main tbody').html( htmlStr );
  
          // 分页初始化
          $('#paginator').bootstrapPaginator({
            // 版本号
            bootstrapMajorVersion: 3,
            // 当前页
            currentPage: info.page,
            // 总页数
            totalPages: Math.ceil( info.total / info.size ),
  
            // 给页码添加点击事件
            onPageClicked: function( a, b, c, page ) {
              // 将选中的页码更新到 currentPage
              currentPage = page;
              // 重新渲染
              render();
            }
          })
        }
      })
  
    }
  
    $('#addBtn').on('click', function () {
    $('#addModal').modal("show");
  })

    $("#form").bootstrapValidator({
      feedbackIcons:    {
        valid: 'glyphicon glyphicon-ok',
        invalid: 'glyphicon glyphicon-remove',
        validating: 'glyphicon glyphicon-refresh'
      },
      fields: {
        categoryName: {
          validators: {
            notEmpty: {
              message: "请输入一级分类名称"
            }
          }
        }
      }
    })
 $('#form').on("success.form.bv", function (e) {
  e.preventDefault();
  console.log(2)
   $.ajax({
     type:'post',
     url:'/category/addTopCategory',
     data:$('#form').serialize(),
     success: function (info) {
       if (info.success) {
        $('#addModal').modal("hide");
        currentPage = 1;
        render();
        $('#form').data("bootstrapValidator").resetForm( true );
       }
     }
   })
 })



})



