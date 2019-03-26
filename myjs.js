
	$(".nav li").on("click", function() {
      $(".nav li").removeClass("active");
      $(this).addClass("active");
    });



    function navbar_movment(event)
	{
        	$(event.data.param1).slideToggle("fast");
        /*	$(event.data.param2).slideUp("fast");
        	$(event.data.param3).slideUp("fast");
        	$(event.data.param4).slideUp("fast"); */
	};
