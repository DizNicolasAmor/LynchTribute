
$(document).ready(function() {


  var backgroundID = 1, 
      footerActive = false, 
      biographyActive = false, 
      bestMoviesActive = false, 
      quizActive = false;

  function reset(){
    //close modal 
    if(biographyActive){
      biographyActive = false;
      $("#background").animate({opacity: "1"}, 500);
      $('#biographySection').fadeOut('slow');
    }
    if(bestMoviesActive){
      bestMoviesActive = false;
      $("#background").animate({opacity: "1"}, 500);
      $('#bestMoviesSection').fadeOut('slow');
    }
    if(quizActive){
      quizActive = false;
      $("#background").animate({opacity: "1"}, 500);
      $('#quizSection').fadeOut('slow');
    }
    //reset footer animations
    if(footerActive){
      footerActive = false;
      $('footer').animate({height: '-=20%'}, 800);
      $('#footerIcons').animate({marginLeft: '-=20%'}, "slow");
      $('#footerText').animate({fontSize: '1em', marginRight: '-=20%', }, "slow");
    }
  }


  //intro
  $('#backgroundImage').hide().fadeIn(5200);


  /* I want <navbar> to collapse when I click, but if the <navbar> 
is displayed along on a large screen, simply do nothing. */
  $(".navbar-collapse").collapse('hide');

  $('.navbar-collapse a').click(function(){
    $(".navbar-collapse").collapse('hide');
  });


  //brand -> change background
  $('.navbar-brand').click(function(){
    backgroundID++;
    if(backgroundID > 4) backgroundID = 1;
    $('#homeText').fadeOut('slow');
    $('#backgroundImage').fadeOut(800, function(){
      if( backgroundID === 3 ) {
        $(this).css('background', ' url("images/background' + backgroundID + '.jpg") no-repeat right').fadeIn(800);        
      }
      else  $(this).css('background', ' url("images/background' + backgroundID + '.jpg") no-repeat center center').fadeIn(800);
    });
  });


  //  *** MENU BUTTONS ***
    //biography
  $('#biography').click(function(){
    if(!biographyActive){
      reset();
      biographyActive = true;
      $("#background").animate({opacity: "0.5"}, 500);
      $('#biographyTitle').hide();
      $('#biographyBody').hide();
      $('#biographySection').show('slow', function(){
        $('#biographyTitle').slideDown(1200, function(){
          $('#biographyBody').slideDown(1200);
        });
      });
      $('.close').click(function(){
        reset()
      });
    }
  });
    //bestMovies
  $('#bestMovies').click(function(){
    if(!bestMoviesActive){
      reset();
      bestMoviesActive = true;
      $("#background").animate({opacity: "0.5"}, 500);
      $('#bestMoviesTitle').hide();
      $('#bestMoviesBody').hide();
      $('#bestMoviesSection').show('slow', function(){
        $('#bestMoviesTitle').slideDown(1200, function(){
          $('#bestMoviesBody').slideDown(1200);
        });
      });
      $('.close').click(function(){
        reset()
      });
    }
  });
    //quiz
  $('#quiz').click(function(){
    if(!quizActive){
      reset();
      quizActive = true;
      $("#background").animate({opacity: "0.5"}, 500);
      $('#quizTitle').hide();
      $('#quizBody').hide();
      $('#quizSection').show('slow', function(){
        $('#quizTitle').slideDown(1200, function(){
          $('#quizBody').show();
        });
      });
      $('.close').click(function(){
        reset()
      });
    }
  });
    //moreInfo -> footer
  $('#moreInfo').click(function(){
    if(!footerActive){
      reset();
      footerActive = true;
      $('footer').animate({height: '+=20%'}, 800);
      $('#footerIcons').animate({marginLeft: '+=20%'}, "slow");
      $('#footerText').animate({fontSize: '1.5em', marginRight: '+=20%', }, "slow");      
    }
    else{
      reset();
    }
  });

  
  //videoclips slider
  var slider = $('#slider'),
      
      moveSlider = function() {
        slider.animate({
          marginLeft:'-'+200+'%'
        } ,700, function(){
          $('#slider .slider__section:first').insertAfter('#slider .slider__section:last');
          slider.css('margin-left', '-'+100+'%');
        });
      }

  $('#slider .slider__section:first').insertAfter('#slider .slider__section:last');
  slider.css('margin-left', '-'+100+'%');
  
  $('#next').on('click',function() {
    moveSlider();
  });
  
});
