
$(document).ready(function(){

    //메뉴
    let menu = $('#menu_mobile_side ul li');
    let menupc = $('#menu_pc ul li');

    menu.hover(function(){
        $(this).find('ul').stop().slideDown();
    }, function(){
        $(this).find('ul').stop().slideUp();
    });
    menu.click(function(){
        $(this).find('ul').slideToggle();
    });
    $('#menu_mobile_top span').click(function(){
        $('#menu_mobile_side').toggle();
    });
    menupc.hover(function(){
        $(this).find('ul').stop().slideDown();
    }, function(){
        $(this).find('ul').stop().slideUp();
    });

    //section1 슬라이드
    let slide = $('#section1 ul li');
    let slidebtn = $('#section1 .slidebtn span');
    let current = 0;
    let intervalId;

    slidebtn.click(function(){
        var idx = $(this).index();

        if(idx != current) {
            slide.eq(current).animate({left:`-100%`});
            slide.eq(idx).css({left:'100%'}).animate({left:0});
            current=idx;
            slidebtn.text('○').eq(idx).text('●')
        }
    });
    timer();
    $('#section1').hover(function(){
            clearInterval(intervalId)
        }, function(){
            timer();
    });
    function timer(){
        intervalId = setInterval(function(){
            let i = current+1;
            if (i == slide.length) {i = 0}
            slidebtn.eq(i).trigger('click');
        }, 3000);
    }

    //배경 위치
    $('#wrap').mousemove(function(e){
        //console.log(e.pageX);
        var posX = e.clientX;
        var posY = e.clientY;

        if ( $(document).innerWidth() >= 1200 ){
            $('#section2 .left').css({
                backgroundPositionX:-20-(posX/30),
                backgroundPositionY:-30-(posY/30),
            });
            $('#section4 .left').css({
                backgroundPositionX:-20-(posX/30),
                backgroundPositionY:-20-(posY/30)
            });
        } else {
            $('#section2 .left').css({
                backgroundPositionX:'center',
                backgroundPositionY:'center',
            });
            $('#section4 .left').css({
                backgroundPositionX:'center',
                backgroundPositionY:'center'
            });
        }
    });

    $('#section4 .right .cl0').hover(function(){
        $('#section4 .left').css({
            backgroundImage:`url('img/cont/cl0.png')`
        });
    });
    $('#section4 .right .cl1 h4').hover(function(){
        $('#section4 .left').css({
            backgroundImage:`url('img/cont/cl1.png')`
        });
    }, function(){
        $('#section4 .left').css({
            backgroundImage:`url('img/cont/cl0.png')`
        });
    });
    $('#section4 .right .cl2 h4').hover(function(){
        $('#section4 .left').css({
            backgroundImage:`url('img/cont/cl2.png')`
        });
    }, function(){
        $('#section4 .left').css({
            backgroundImage:`url('img/cont/cl0.png')`
        });
    });


});