$(function() {

    //Плавная прокрутка до якоря
    $(".anchor_link").click(function(){
                var _href = $(this).attr("href");
                $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
                return false;
        });

    //заявка на аудит
    $("#auditForm").submit(function() {
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "https://tls.media/mail.php",
			data: th.serialize()
		}).done(function() {
			alert("Спасибо, мы скоро свяжемся с Вами!");
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});

    //Подписка на рассылку
    $("#mailSubscription").submit(function() {
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "https://tls.media/mail.php",
			data: th.serialize()
		}).done(function() {
			alert("Спасибо, мы скоро свяжемся с Вами!");
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});

});
