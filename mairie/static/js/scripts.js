$(document).ready(function () {

    //disable auto complete on contact us page
    if ($("#contact_form_page_section")) {
        $('form').attr('autocomplete', 'off');
        $('input').attr('autocomplete', 'off');
    }

    //Notification Icon start
    var container = document.getElementById('eventsContainer');
    var holidays = document.getElementsByClassName('holidayCount');
    var topNews = document.getElementsByClassName('topNewsCount');

    if (topNews.length !== 0 || holidays.length !== 0) {
        container.style.display = "block";
    }

    $('#notif_dropdown')
        .on('shown.bs.dropdown', function () {
            $('#notif_icon').removeClass('fa-bell').addClass('fa-times');
            $("#notif_icon").attr("title", "Close")
        })
        .on('hidden.bs.dropdown', function () {
            $('#notif_icon').removeClass('fa-times').addClass('fa-bell');
            $("#notif_icon").attr("title", "Trending Events")
        })
    //Notification Icon End

    $(function () {
        $('#navbarSupportedContent')
            .on('shown.bs.collapse', function () {
                $('#navbar-hamburger').addClass('hidden');
                $('#navbar-close').removeClass('hidden');
            })
            .on('hidden.bs.collapse', function () {
                $('#navbar-hamburger').removeClass('hidden');
                $('#navbar-close').addClass('hidden');
            });

    });
      // Clients carousel (uses the Owl Carousel library)
  $(".clients-carousel").owlCarousel({
    autoplay: true,
    dots: true,
    loop: true,
    responsive: {
      0: {
        items: 2
      },
      768: {
        items: 4
      },
      900: {
        items: 6
      }
    }
  });

    // Carousel on news
    $('#carousel-news').owlCarousel({
        center: true,
        loop: true,
        margin: 0,
        autoplay: true,
        autoplayTimeout: 10000,
        nav: true,
        navContainer: ['.main-content .custom-nav'],
        navText: [
            '<i class="fas fa-chevron-left txt_subtitle txt_black upd_ctrl prev"></i>',
            '<i class="fas fa-chevron-right txt_subtitle txt_black upd_ctrl next"></i>',
        ],
        navClass: [
            'owl-prev',
            'owl-next'
        ],
        dots: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 3
            }
        }
    });

    // Carousel on twitter
    $('#carousel-twitter').owlCarousel({
        center: true,
        loop: true,
        margin: 0,
        autoplay: true,
        autoplayTimeout: 10000,
        nav: true,
        navContainer: ['.main-content-twitter .custom-nav-twitter'],
        navText: [
            '<i class="fas fa-chevron-left txt_subtitle txt_black upd_ctrl prev"></i>',
            '<i class="fas fa-chevron-right txt_subtitle txt_black upd_ctrl next"></i>',
        ],
        navClass: [
            'owl-prev',
            'owl-next'
        ],
        dots: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 3
            }
        }
    });
});

$('.qa_annonce').vTicker({
    speed: 1E3,
    pause: 4E3,
    animation: "slide",
    mousePause: true,
    showItems: 2,
    direction: 'up'
  });

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
    scrollFunction()
};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("backToTop").style.display = "block";
    } else {
        document.getElementById("backToTop").style.display = "none";
    }
}

function tweetcarousel() {
    var currenttweet = 1;
    var lasttweet = totaltweets;
    var tweetheight = new Array();
    var totalheight  = 0;
    var sliderheight = feedheight;
   
    for (var i=1; i<=totaltweets; i++) {
        tweetheight[i] = parseInt($('#t'+i).css('height')) + parseInt($('#t'+i).css('padding-top')) + parseInt($('#t'+i).css('padding-bottom'));
        if (slideinitial == false) {
            sliderheight = 0;
        }
        if (i > 1) {
   
            $('#t'+i).css('top', tweetheight[i-1] + totalheight + sliderheight);
            $('#t'+i).animate({'top':tweetheight[i-1]+ totalheight}, slidetime);
            totalheight += tweetheight[i-1];
        } else {
            $('#t'+i).css('top', sliderheight);
            $('#t'+i).animate({'top':0}, slidetime);
        }
    }
    totalheight += tweetheight[totaltweets];
   
    setInterval(scrolltweets, pausetime);
   
    function scrolltweets() {
        var currentheight = 0;
        //totalheight = 0;
        for (var i=0; i<tweetshift; i++) {
            var nexttweet = currenttweet+i;
            if (nexttweet > totaltweets) {
                nexttweet -= totaltweets;
            }
            console.log(nexttweet + " "+ currenttweet);
            currentheight += tweetheight[nexttweet];
        }
   
        for (var i=1; i<=totaltweets; i++) {
            $('#t'+i).animate({'top': (parseInt($('#t'+i).css('top'))-currentheight) }, slidetime, function(){
   
                var animatedid = parseInt($(this).attr('id').substr(1,2));
   
                if (animatedid==totaltweets) {
                    for (j=1; j<=totaltweets; j++) {
                        if (parseInt($('#t'+j).css('top')) < -50) {
                            var toppos = parseInt($('#t'+lasttweet).css('top')) + tweetheight[lasttweet];
                            $('#t'+j).css('top', toppos);
                            lasttweet = j;
   
                            if (currenttweet >= totaltweets) {
                                var newcurrent = currenttweet - totaltweets + 1;
                                currenttweet = newcurrent;
                            } else {
                                currenttweet++;
                            };
                        }
                    }                             
   
                }
            });
        }
     }
  }
  tweetcarousel();

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    window.scroll({
        top: 0,
        left: 0,
        behavior: 'smooth'
    });
}


new WOW().init();

$(document).on('click', function () {
    $('.collapse').collapse('hide');
});

if (document.getElementById('h') != null) {
    function run(interval, frames) {
      var int = 1;
  
      function func() {
        document.getElementById('h').id = "b" + int;
        int++;
        if (int === frames) { int = 1; }
      }
  
      var swap = window.setInterval(func, interval);
    }
  
  
    run(1000, 10); //milliseconds, frames
  }
