                              //Portfolio background scroll change lightness
var i = 0;
var backColor = [0,60,180,270,105];
$(window).scroll(changeBackground);

//change Background color when click on Portfolio title
$(document).ready(function(){
$("#scrollP").click(function(){
  console.log(i+"hello");
  if(i==4){
  i = 0;
}else{
  i++;
}
$("#portfolio").css('background', 'hsl(' + backColor[i] + ', 25%, '+ (53) + '%)');
})
});


  function changeBackground(){
   var hT = $('#scrollP').offset().top,
       hH = $('#scrollP').outerHeight(),
       sP = $('#portfolio').outerHeight(true),
       wH = $(window).height(),
       wS = $(this).scrollTop();
    console.log((hT-wH) , wS, sP, wH);
    console.log(wS-(hT+hH-wH));

    var chanColor = wS-(hT+hH-wH);

    if (chanColor > 0 ){
        $("#portfolio").css('background', 'hsl(' + backColor[i] + ', 25%, '+ (32+chanColor*100/2500) + '%)');
      }
    }

    $(document).ready(function(){
      var a=1;
      var b =$("#skillList li");
    $("#qualificationsTitle").click(function(){
      if(a==1){
      b.css('background-color','#2A2428');
      a=0;
    }else if(a==0){
      b.css('background-color','#d46007');
      a=1;
    }
    })
  });



                      //Changing images in 'about me' section when click on the 'about me' title
$(document).ready(function(){
  var b=0;
  $("#aboutTitle").click(function(){
    if(b==0){
    $("#aboutMePhoto").attr("src","portfolios/Pictures/profile2.jpg");
    b=1;
  }else if(b==1){
    $("#aboutMePhoto").attr("src","portfolios/Pictures/profile3.jpg");
    b=2;
  }else if(b==2){
    $("#aboutMePhoto").attr("src","portfolios/Pictures/profile.jpg");
    b=0;
  }
});
})
                      //first thing the <body> load to display the 'Hallo!'
function promptbox(){
var z = $('#introMsg');
z.css({"color":"#d46007"});
z.hide().html("Hello!").fadeIn(2000)
// ,function()
// {
// z.delay(450).css("transform","scale(1) rotate(0deg) translate(0px, 0px) skew(30deg, 0deg)").show(1, function(){
// z.css("transform","scale(1) rotate(0deg) translate(0px, 0px) skew(0deg, 0deg)")
//
}
var track = true;
$().ready(()=>{
  $("#spanContact").click(()=>{
    if(track == true){
    $("#contact").css({'background':'url("portfolios/Pictures/forest-floor-rural-explorer-oWS_3i0Y5sI-unsplash.jpg") center center / cover no-repeat fixed'})
    track = false;
    }else{
    $("#contact").css({'background':'url("portfolios/Pictures/green-and-black-tree-trunk.jpg") center center / cover no-repeat fixed'})
    track = true;
   }
  })
})
                     //Changing the backgound image in Contact section, pictures from pixabay
/*
var pixabay = "https://pixabay.com/api/?key=12040377-45b013ff230c3a769c85e1664&q=flowers&image_type=photo&pretty=true&per_page=150";



$.getJSON(pixabay,
function(data){
  let numHits = data.hits.length;
  var imageUrl = data.hits[Math.floor(Math.random()*50)].largeImageURL;
  console.log(numHits);
  console.log("testing")
  $(document).ready(function(){
    $("#contact").css({'background':'url('+imageUrl+') no-repeat center','background-size':'cover','background-attachment':'fixed'});

    //$("#contact").error(function(){$("#contact").css({'background': 'url("portfolio/Pictures/default-flowers.jpg") center center / cover no-repeat fixed'})});


    $("span").click(function(){
      imageUrl = data.hits[Math.floor(Math.random()*150)].largeImageURL;
      $("#contact").css({'background':'url('+imageUrl+') no-repeat center','background-size':'cover','background-attachment':'fixed'});
    })
    //how can to work in errors?


  });
}
)
*/
               //changing the affect on the Nav Button
$(document).ready(function(){
  $("#navButton").mouseover(function(){
    $(".c").css("display","block");
    $("#navb").css("display","none");
  })
    $(".c").mouseout(function(){
      $("#navb").css("display","block");
      $(".c").css("display","none");
    })
    $(".c").hover(function(){
      $(this).css("background", "rgba(212,96,7,.5)");}, function(){
        $(this).css("background", "rgba(0,0,0,.5)");
      }
    )
});
                  //click link in about me
$(function(){
  $("#click").hover(function(){
    $('#aboutTitle').css("font-weight", "bolder");},
    function(){$('#aboutTitle').css("font-weight", "initial");})
  })

$(document).ready(function(){
  if($('html').scrollTop() < 20){
    $(".c").css("display","block");
    $("#navb").css("display","none");
  }
  $(document).scroll(function(){
    if($('html').scrollTop() > 20){
    $(".c").css("display","none");
    $("#navb").css("display","block");
    }
  })
});



                //Adding animate scroll to links
$(document).ready(function(){
  // Add smooth scrolling to all links
  $("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){

        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
});

        //Changing the display when hover on the 'Note' and the portfolio pictures
 $(document).ready(function(){



                          // Portfolio 6 begin
  $("#morInfo_6").hover(function(){
    $('#div6 h4').html("In this assignment I create a site to generate the "
                      + "user fortune based on the user inputs.  I challenged myself to create a "
                      + "button that give a random fortune.  Give it a try!")
                      .css({"opacity":"1", "padding":"25px 20px 0px","text-align":"justify", "font-size":"1.0em"})

  $("#overlay6").css("background","rgba(0,0,0,.8)")
  }, function(){
  $("#overlay6").css("background","rgba(0,0,0,0)")
  $('#div6 h4').html("").css("opacity","0")
  }
  )
  //testicon
  $("#testicon6").hover(function(){
    $("#overlay6").css({'background':'black url(portfolios/Pictures/Github4.png) no-repeat center','background-size':'contain','opacity':'.8'});
    console.log("hello");
  }, function(){
    $("#overlay6").css({'background':'rgba(0,0,0,0)','opacity':'1'});
  })

  $("#overlay6").hover(function(){
  $('#overlay6').css("background","rgba(0,0,0,.8)")
  $('#div6 h4').html("Fortune Teller").css({"opacity":"1", "padding-top":"60px", "text-align":"center", "font-size":"2em"})

  }, function(){
  $('#overlay6').css("background","rgba(0,0,0,0)")
  $('.overdiv h4').css("opacity","0")
  })
                        // Portfolio 5 begin
$("#morInfo_5").hover(function(){
$('#div5 h4').html("In this assignment, I altered a site that was given and integrated "
            + "to a specific theme. I choose fruit as my theme because it important to eat healthy. I enjoyed the vintage fruit arts that I found.")
.css({"opacity":"1", "padding":"25px 20px 0px","text-align":"justify", "font-size":"1.0em"})

$("#overlay5").css("background","rgba(0,0,0,.8)")
}, function(){
$("#overlay5").css("background","rgba(0,0,0,0)")
$('#div5 h4').html("").css("opacity","0")
})
//testicon
$("#testicon5").hover(function(){
  $("#overlay5").css({'background':'black url(portfolios/Pictures/Github4.png) no-repeat center','background-size':'contain','opacity':'.8'});
  console.log("hello");
}, function(){
  $("#overlay5").css({'background':'rgba(0,0,0,0)','opacity':'1'});
})
$("#overlay5").hover(function(){
$('#overlay5').css("background","rgba(0,0,0,.8)")
$('#div5 h4').html("Midterm Project").css({"opacity":"1", "padding-top":"60px", "text-align":"center", "font-size":"2em"})

}, function(){
$('#overlay5').css("background","rgba(0,0,0,0)")
$('.overdiv h4').css("opacity","0")
})

                            // Portfolio 4 begin
$("#morInfo_4").hover(function(){
$('#div4 h4').html("In this assignment, I create a site to have the user inputs the number of each grocery to place in the cart and then calculate the total amount."
                  + " I challenged myself to put it to a table and display the total of each item.")
                  .css({"opacity":"1", "padding":"25px 20px 0px","text-align":"justify", "font-size":"1.0em"})

$("#overlay4").css("background","rgba(0,0,0,.8)")
}, function(){
$("#overlay4").css("background","rgba(0,0,0,0)")
$('#div4 h4').html("").css("opacity","0")
}
)
$("#overlay4").hover(function(){
$('#overlay4').css("background","rgba(0,0,0,.8)")
$('#div4 h4').html("Cart to Party").css({"opacity":"1", "padding-top":"60px", "text-align":"center", "font-size":"2em"})

}, function(){
$('#overlay4').css("background","rgba(0,0,0,0)")
$('.overdiv h4').css("opacity","0")
})
//testicon
$("#testicon4").hover(function(){
  $("#overlay4").css({'background':'black url(portfolios/Pictures/Github4.png) no-repeat center','background-size':'contain','opacity':'.8'});
  console.log("hello");
}, function(){
  $("#overlay4").css({'background':'rgba(0,0,0,0)','opacity':'1'});
})
                  // Portfolio 3 begin
$("#morInfo_3").hover(function(){
$('#div3 h4').html("This site animates an orange square to move, "
+"change opacity, size and shape.  I challenged myself to utilize the JQuery to "
+"animate with random movements, colors, background colors, borders and opacities.  Let’s go random! ")
.css({"opacity":"1", "padding":"25px 20px 0px","text-align":"justify", "font-size":"1.0em"})

$("#overlay3").css("background","rgba(0,0,0,.8)")
}, function(){
$("#overlay3").css("background","rgba(0,0,0,0)")
$('#div3 h4').html("").css("opacity","0")
}
)
$("#overlay3").hover(function(){
$('#overlay3').css("background","rgba(0,0,0,.8)")
$('#div3 h4').html("JQuery Animation").css({"opacity":"1", "padding-top":"60px", "text-align":"center", "font-size":"2em"})

}, function(){
$('#overlay3').css("background","rgba(0,0,0,0)")
$('.overdiv h4').css("opacity","0")
})
//testicon
$("#testicon3").hover(function(){
  $("#overlay3").css({'background':'black url(portfolios/Pictures/Github4.png) no-repeat center','background-size':'contain','opacity':'.8'});
  console.log("hello");
}, function(){
  $("#overlay3").css({'background':'rgba(0,0,0,0)','opacity':'1'});
})
                         // Portfolio 2 begin
$("#morInfo_2").hover(function(){
$('#div2 h4').html("This assignment asked to create a form to check rather "
              + "the user inputted credit card number is valid or not.  I challenged myself "
              + "to include an expiration date check and display all the "
              + "reasons why the credit card is invalid when it’s not valid. ")
              .css({"opacity":"1", "padding":"25px 20px 0px","text-align":"justify", "font-size":"1.0em"})

$("#overlay2").css("background","rgba(0,0,0,.8)")
}, function(){
$("#overlay2").css("background","rgba(0,0,0,0)")
$('#div2 h4').html("").css("opacity","0")
}
)
$("#overlay2").hover(function(){
$('#overlay2').css("background","rgba(0,0,0,.8)")
$('#div2 h4').html("Valid Credit Card").css({"opacity":"1", "padding-top":"60px", "text-align":"center", "font-size":"2em"})

}, function(){
$('#overlay2').css("background","rgba(0,0,0,0)")
$('.overdiv h4').css("opacity","0")
})
//testicon
$("#testicon2").hover(function(){
  $("#overlay2").css({'background':'black url(portfolios/Pictures/Github4.png) no-repeat center','background-size':'contain','opacity':'.8'});
  console.log("hello");
}, function(){
  $("#overlay2").css({'background':'rgba(0,0,0,0)','opacity':'1'});
})
// Portfolio 1 begin
$("#morInfo_1").hover(function(){
$('#div1 h4').html("Over the weekend, I created this functioning Wheel of Fortune game. The object "
            + "of this game is the user guesses the word on the screen by keying in a char on every turn. "
            + "This project is a such challenge where I had to incorporate CSS, "
            + "JavaScript & JQuery to create the elements of the game.").css({"opacity":"1", "padding":"25px 20px 0px","text-align":"justify", "font-size":"1.0em"})

$("#overlay1").css("background","rgba(0,0,0,.8)")
}, function(){
$("#overlay1").css("background","rgba(0,0,0,0)")
$('#div1 h4').html("").css("opacity","0")
}
)
$("#overlay1").hover(function(){
$('#overlay1').css("background","rgba(0,0,0,.8)")
$('#div1 h4').html("Wheel of Fortune").css({"opacity":"1", "padding-top":"60px", "text-align":"center", "font-size":"2em"})

}, function(){
$('#overlay1').css("background","rgba(0,0,0,0)")
$('.overdiv h4').css("opacity","0")
})
//testicon
$("#testicon1").hover(function(){
  $("#overlay1").css({'background':'black url(portfolios/Pictures/Github4.png) no-repeat center','background-size':'contain','opacity':'.8'});
  console.log("hello");
}, function(){
  $("#overlay1").css({'background':'rgba(0,0,0,0)','opacity':'1'});
})
// Portfolio 7 begin
$("#morInfo_7").hover(function(){
$('#div7 h4').html("This is the final project in Javascript class where my team and I created a restaurant"
                  + " review site with an awesome logo.  This an ongoing project to add more functions such as integrating with a server,"
                  + " write reviews, an admin page to add new and update restaurants.").css({"opacity":"1", "padding":"25px 20px 0px","text-align":"justify", "font-size":"1.0em"})

$("#overlay7").css("background","rgba(0,0,0,.8)")
}, function(){
$("#overlay7").css("background","rgba(0,0,0,0)")
$('#div7 h4').html("").css("opacity","0")
}
)
$("#overlay7").hover(function(){
$('#overlay7').css("background","rgba(0,0,0,.8)")
$('#div7 h4').html("Restaurant Review").css({"opacity":"1", "padding-top":"60px", "text-align":"center", "font-size":"2em"})

}, function(){
$('#overlay7').css("background","rgba(0,0,0,0)")
$('.overdiv h4').css("opacity","0")
})
//testicon
$("#testicon7").hover(function(){
  $("#overlay7").css({'background':'black url(portfolios/Pictures/Github4.png) no-repeat center','background-size':'contain','opacity':'.8'});
  console.log("hello");
}, function(){
  $("#overlay7").css({'background':'rgba(0,0,0,0)','opacity':'1'});
})
//profestional site
//W1
$("#overlayW1").hover(function(){
$('#overlayW1').css("background","rgba(0,0,0,.8)")
$('#divW1 h4').html("Used Wordpress").css({"opacity":"1", "padding-top":"60px", "text-align":"center", "font-size":"2em"})

}, function(){
$('#overlayW1').css("background","rgba(0,0,0,0)")
$('.overdiv h4').css("opacity","0")
})


});


var timer = null;
window.addEventListener('scroll', function() {
console.log("hello");
    if(timer !== null) {
        clearTimeout(timer);
        document.getElementById("navButton").style.display = "";
    }
    timer = setTimeout(function() {
      const c = document.querySelector('.c').style.display;
      console.log(c);
        if(document.querySelector(".c").style.display != "block")
          document.getElementById("navButton").style.display = "none";

    }, 2000);
}, false);
