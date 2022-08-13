$(function(){

    //1p-모바일-메뉴클릭
    $('.btn_menu').on('click', function(){
        $(this).toggleClass('active');
        $('.navigation').toggleClass('active').stop().slideToggle();
    });

    //1p-모바일-검색창 키다운
    $('header .search input').on('keydown', function(){
        $(this).addClass('active');
    });

    //1p-모바일-검색창 키업
    $('header .search input').on('blur keyup', function(){ //blur ~ 포커싱 잃었을 때
        var value = $(this).val(); //변수만듬
        if(value == ""){ //값이 없을 때
            $(this).removeClass('active'); //포커싱 잃었을 때 액티브 한 것을 지움
        }
    });

    //2p-웹-사진클릭
    //var img = $('.detail_info .list img') //img 전역변수 선언
    //img.on('click', imgInfo) //img클릭했을 때 imgInfo함수 실행시킴

    $('.detail_info .list img').click(imgInfo); //img클릭했을 때 imgInfo함수 실행시킴

    function imgInfo(){ //함수선언
        var src = $(this).attr('src'); //src속성 전연변수 선언
        var alt = $(this).attr('alt'); //alt속성 전역변수 선언
        var thumb = $('.thumbnail'); //썸네일 전역변수 선언
        thumb.attr('src', src).attr('alt', alt); //썸네일에 src변수에 src값 넣어줌, 썸네일 alt변수에 alt값 넣어줌
    }

    //2p-모바일
    $(window).on('resize load', resize) //윈도우 리사이즈되거나 로드(모바일에서 바로 켰을 때) 됐을 때 resize함수 실행시킴

    function resize(){ //함수선언
        var winWidth = $(window).width(); //윈도우 가로길이
        const WINDOW_SIZE = 1199;
        if(winWidth < WINDOW_SIZE){ //윈도우 가로 1199보다 작을 때 (모바일 버전)
            var img = $('.thumbnail'); // .thumbnail변수 선언
            var li = $('.detail_info .list li'); // .detail_info .list li 변수 선언
            var imgWid = img.width(); // .thumbnail 가로길이
            var imgHig = imgWid / 2; // .thumbnail 가로길이 / 2
            img.css('height', imgWid); // .thumbnail의 가로길이와 세로길이 같게
            li.find('img').css('height', imgHig - 4.225); //.detail_info .list li 자손 중 img에 .thumbnail의 가로길이 / 2 의 값으로 나타내면서 가로길이와 세로길이 같게 (4.225는 리스트사진의 패딩값을 빼줌)
            $('.detail_info .more span').removeClass('hide'); // 해당클래스 .hide 속성지움
        }else{ //웹버전
            $('.thumbnail').removeAttr('style'); // 해당클래스 스타일속성 제거
            $('.detail_info .list li img').removeAttr('style'); //해당클래스 스타일속성 제거
            $('.detail_info .more span').addClass('hide'); //해당클래스 .hide 속성 살림
        }
    }

});