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
function 