$(document).ready(function(){
	$(".txt-spc textarea").focus();
	$("button.btn-send").click(function(){
		if($(".txt-spc textarea").val().length > 1){
			$(".txt-area").append("<div class=message><span>"+$(".txt-spc textarea").val()+"</span></div>");
			$(".txt-spc textarea").val("");
			$(".txt-spc textarea").focus();
		}else{
			alert("enter some text");
		}
	});
	

	$(window).focus(function() {            
                document.title = "Whatsapp Messenger";
           
        }).blur(function() {            
            document.title = "Sweety texted you";
        });
        $(window).on("orientationchange",function(){
	  alert("The orientation has changed!");
	});
});
