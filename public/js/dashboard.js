$(document).ready(function()
	{
		$("#clickme").click(function()
			{
				$(".wrapper").slideToggle("3000").toggleClass("deactive");
			});
	});