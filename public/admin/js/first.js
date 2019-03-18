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
  
  

  
    // 3. 通过校验插件, 添加校验功能
    $("#form").bootstrapValidator({
  
      // 配置图标
      feedbackIcons:    {
        valid: 'glyphicon glyphicon-ok',
        invalid: 'glyphicon glyphicon-remove',
        validating: 'glyphicon glyphicon-refresh'
      },
  
      // 校验的字段
      fields: {
        categoryName: {
          // 校验规则
          validators: {
            // 非空检验
            notEmpty: {
              // 提示信息
              message: "请输入一级分类名称"
            }
          }
        }
      }
    })
})