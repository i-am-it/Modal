$(document).ready(()=>{

	$(".modal").hide()
	$(".btn-mod").click(()=>{
		$(".modal").show()
		$(".modal").css("display","block")
	})
	$(".close").click(()=>{
		$(".modal").hide()
	})
	$(window).click((event)=>{
		if (event.target.id == "modal") {
       $(".modal").hide()
    }
	})
})