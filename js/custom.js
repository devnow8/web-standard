
        //라이트 박스
        $(".lightgallery").lightGallery({
            thumbnail : false,
            autoplay: true,
            pause: 2000
        });

        //윈도우 팝업
        $(".window").click(function(e){
            e.preventDefault();
            window.open("popup.html", "popup01", "width=800, height=500, left=50, right=50, top=50, scrollbars=0, toolbar=0, menubar=0");
        })


        //레이어 팝업
        $(".layer").click(function(e){
            e.preventDefault();
            //$("#layer").css("display","block");
            $("#layer").show();
            $("#layer").fadeIn(100);
        })
        $("#layer .close").click(function(e){
            e.preventDefault();
            //$("#layer").css("display","block");
            $("#layer").hide();
            $("#layer").fadeOut(100);
        })


        //탭메뉴
        var $tab_list = $(".tab_menu");
        $tab_list.find("ul ul").hide();
        $tab_list.find("li.active > ul").show();

        function tabMenu(e){
            e.preventDefault();
            var $this = $(this);
            $this.next("ul").show().parent("li").addClass("active").siblings("li").removeClass("active").find("ul").hide();
        }
        $tab_list.find("ul>li>a").click(tabMenu).focus(tabMenu);


        //배너
        $(".ban").slick({
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 3,
            autoplay: true,
            dots: true
        });

        //갤러리
        $(".gallery_img").slick({
            arrows: false,
            fade: true,
            autoplay: true,
            autoplaySpeed: 2000
        });

        $(".play").click(function(){
            $(".gallery_img").slick("slickPlay");
        })

        $(".pause").click(function(){
            $(".gallery_img").slick("slickPause");
        })

        $(".prev").click(function(){
            $(".gallery_img").slick("slickPrev");
        })

        $(".next").click(function(){
            $(".gallery_img").slick("slickNext");
        })


        //버튼 클릭시 전체 메뉴 보이게.
        $(".tit .btn").click(function(e){
            e.preventDefault();
            //$("#cont_nav").css("display","block");
            //$("#cont_nav").show();
            //$("#cont_nav").fadeIn();
            //$("#cont_nav").slideDown();
            $("#cont_nav").toggle();
            //$("#cont_nav").fadetoggle();
            //$("#cont_nav").slidtoggle();
            $(this).toggleClass("on");
        });
