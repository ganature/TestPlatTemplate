function show_validate_msg(elem,status,msg){
	$(elem).parent().removeClass("has-success has-error");
	$(elem).next('span').text("");
	if(status=='success'){
		$(elem).parent().addClass("has-success");
		$(elem).next('span').text(msg);
	}else if(status=='erroe'){
		$(elem).parent().addClass('has-error');
		$(elem).next('span').text(msg);
	})
	
	}
$(function () {
        $('form').bootstrapValidator({

　　　　　　　　message: 'This value is not valid',
            　feedbackIcons: {
                　　　　　　　　valid: 'glyphicon glyphicon-ok',
                　　　　　　　　invalid: 'glyphicon glyphicon-remove',
                　　　　　　　　validating: 'glyphicon glyphicon-refresh'
            　　　　　　　　   },
            fields: {
                project_name: {
                    message: '项目名称验证失败',
                    validators: {
                        notEmpty: {
                            message: '项目名称不能为空'
                        },
						stringLength: {
                            min: 6,
                            max: 18,
                            message: '项目名称长度必须在6到18位之间'
                        },
                        regexp: {
                            regexp: /^[a-zA-Z0-9_]+$/,
                            message: '项目名称只能包含大写、小写、数字和下划线'
                        }
                    }
                },
                project_detail: {
                    validators: {
                        notEmpty: {
                            message: '邮箱地址不能为空'
                        }
                    }
                },
				project_remark: {
					validators: {
						notEmpty: {
							message: '邮箱地址不能为空'
						}
					}
				}
            }
        });
    });