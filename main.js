var a = 0;
var b = 0;
var multi;
var project = false;

function persp() {
    if (b == 0) {
        $(".nav__ul").css("padding-top","7%");
        $(".nav__list").css("width","75%").css("height","100%");
        $(".project1").css("transform","rotateX(-20deg)");
        $(".project2").css("transform","rotateX(-20deg) translate3d(0,-90%,0)");
        $(".project3").css("transform","rotateX(-20deg) translate3d(0,-180%,0)");
        $(".project3").css("transform","rotateX(-20deg) translate3d(0,-90%,0)");
        
        $(".cheader h1").css("top","10px").css("font-size","35px");
        b++;
        multi = true;
        project = false;  
    }
    else{
        if(project){
            b = 0;
            persp();
        }else{
            nopersp();
            b = 0;
            multi = false;    
        }
    }
}

function nopersp(){
    $(".nav__ul").css("padding-top","0");
    $(".nav__list").css("width","100%");
    $(".project1").css("transform","rotateX(0deg)");
    $(".project2").css("transform","rotateX(0deg) translate3d(0,0%,0)");
    $(".project3").css("transform","rotateX(0deg) translate3d(0,0%,0)");
    $(".project4").css("transform","rotateX(0deg) translate3d(0,0%,0)");
    $(".cheader h1").css("vertical-align","middle").css("font-size","45px");
    closer();
    multi = false;
}

$(document).ready(function(){

    var element;    
    $(".more").click(function(e){
        var c = $(this).attr("data-attr");

        e.preventDefault;

        if(e.target.id == "imenu")
            return;

        $(".more").hide();
        $('.closebutton').hide();

        if(c == "primo"){  
            $(".paper1").css("top","0%");
        }
        else if(c == "secondo"){
            $(".paper2").css("top","0%");
        }
        else if(c == "terzo"){
            $(".paper3").css("top","0%");
        }
        else if(c == "quatre"){
            $(".paper3").css("top","0%");
        }
    });


    $(".nav__list").click(function(e){
        var a = $(this).attr("data-attr");

        e.preventDefault;

        if(e.target.id == "imenu")
            return;
        if(e.target.id == "more1")
            return;

        if(multi){
            project = true;    
            nopersp();
        }
        
        $('.closebutton').show();
        $(".more").show();

        if(a == "primo"){  
            $("#project1").css('height', '100%');
            more = document.getElementById("more1");
        }
        else if(a == "secondo"){
            $("#project2").css('height', '100%');
            $("#project1").css('height','0%');
            more = document.getElementById("more2");
        }
        else if (a=="terzo"){
            $("#project3").css('height', '100%');
            $("#project2").css('height', '0%');
            $("#project1").css('height','0%');
            more = document.getElementById("more3");
        }   else{
            $("#project3").css('height', '100%');
            $("#project3").css('height', '100%');
            $("#project2").css('height', '0%');
            $("#project1").css('height','0%');
            more = document.getElementById("more3");
        }
        more.classList.remove("bounceanimation");
        more.offsetWidth = more.offsetWidth;
        more.classList.add("bounceanimation");

    });

});

function closer(){
    $(".more").show();
    $('.closebutton').show();
    $(".ctesto").css('top','110%');
}

function closewindow(){
    $('.closebutton').hide();
    $(".more").hide();
    $(".nav__list").css("height","20%");
    $(".ctesto").css('top','110%');
}

window.onpopstate = function(e){
    if(e.state){
        document.getElementById("content").innerHTML = e.state.html;
        document.title = e.state.pageTitle;
    }
};

(function($){
    // variables
    elementWidth = $('ul').width(),
    containerWidth = $('nav').width(),
    difference = elementWidth-containerWidth,
    finalWidth = difference * 1.5,
    element = $('ul');
    
    // active on click
    $('li').on('click', function(){
      $('li').removeClass('active');
      $(this).addClass('active');
    });
    
  })(jQuery);