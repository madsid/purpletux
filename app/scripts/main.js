// jshint devel:true
$(document).ready(function () {

    var downDirectionUp = true;
    var events = $('#events').offset().top;

    init();

    function init() {
        $('.purpletux-home').css({ 'height': $(window).height() + 'px' });

        $(window).load(function () {
            $('#home-text').css({ 'opacity': '1' , 'margin-top':'0' });
        });

        arrowDownAnimation();
        scrollEvents();
        clickEvents();

    }

    function clickEvents() {
        $('.fa-icons a').click(function () {
            switch ($(this)[0].id) {
                case "users": $('#events-display p')[0].innerHTML = "we create events that amazes all the people involved in events. our first priority is to make the clents event success and we are very committed to it. our extremly talented team of event planners will work closely with our clients to make that possible. we build relationships and trust to enable success."; break;
                default: $('#events-display p')[0].innerHTML = "test"; break;
            }
        });
    }

    function arrowDownAnimation() {
        setInterval(function () {
            if (downDirectionUp) {
                $('#down-icon img').css({ 'bottom': '13px' });
                downDirectionUp = false;
            }
            else {
                $('#down-icon img').css({ 'bottom': '7px' });
                downDirectionUp = true;
            }
        }, 500);
    }

    $(window).resize(function () {
        $('.purpletux-home').css({ 'height': $(window).height() + 'px' });
    });


    $(window).scroll(function () {
        scrollEvents();
    });

    function scrollEvents() {
        if ($(window).scrollTop() > 5) {
            $('.navbar-purpletux').css({ "background-color": '#8d189f', 'padding-top': '3px', 'opacity': '0.94' });
        }
        if ($(window).scrollTop() < 5) {
            $('.navbar-purpletux').css({ "background-color": 'transparent', 'padding-top': '3%', 'opacity': '1' });
        }
        
        //console.log( $(window).scrollTop() +' scroll-processed '+ events + ' and ' +$('#events').height()+ ' window ' + $(window).height() / 50);
        
        if ($(window).scrollTop() > (events - $(window).height() / 2.8) && (events + $('#events').height() -200) > $(window).scrollTop()  ) {
            $('.fa-icons').css({ 'opacity': '1' });
        }
        else {
            $('.fa-icons').css({ 'opacity': '0' });
        }

    }
    
    $('.submit').click(function(event){
        event.preventDefault();
        
        var data = {
            name: $('#inputName').val(),
            email: $('#inputEmail').val(),
            contact: $('#inputContact').val(),
            message: $('#message').val(),
            send: true,
        };
        
        $.post( "mail.php", data)
        .done(function() {
            alert( "Thanks! We will get back to you soon!!" );
        })
        .fail(function() {
            alert( "Sorry something went wrong please try again!" );
        })
        .always(function() {
            //alert( "finished" );
        });
        
    })

    
});