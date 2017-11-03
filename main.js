
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
  

  //quiz
  var result = 0,
      count = 0,
      questions = [
        { 
          q: '1) Who is the main FBI agent in <i>Twin Peaks: Fire Walk with Me</i>?',
          a: 'Dale Cooper.',
          option1: 'Fred Madison.',
          option2: 'Dick Laurent.', 
          option3: 'Betty Elms.'
        }, 
        {
          q: '2) Which character does Bill Pullman play in <i>Lost Highway</i>?',
          a: 'Fred Madison.',
          option1: 'Pete Dayton.',
          option2: 'Leland.', 
          option3: 'Jeffrey Beaumont.'
        },
        {
          q: '3) Which instrument does the protagonist of <i>Lost Highway</i> play?',
          a: 'Saxophone.',
          option1: 'Piano.',
          option2: 'Violin.', 
          option3: 'Guitar.'
        },
        {
          q: '4) Who is the character that has amnesia at the begining of <i>Mulholland Drive</i>?',
          a: ' Rita Hayworth.',
          option1: 'Naomi Watts.',
          option2: 'Laura Palmer.', 
          option3: 'Betty Elms.'
        },
        { 
          q: '5) Who sees Cooper and the Man from Another Place in a dream in the Black Lodge?',
          a: 'Laura Palmer.',
          option1: 'Patricia Arquette.',
          option2: 'Rita Hayworth.', 
          option3: 'Dorothy Vallens.'
        }, 
        {
          q: '6) Who composed the music of most of David Lynch movies?',
          a: 'Angelo Badalamenti.',
          option1: 'David Lynch.',
          option2: 'Kyle MacLachlan.', 
          option3: 'Robert Engels.'
        },
        {
          q: "7) Which is the Lynch's earliest work?",
          a: 'Eraserhead.',
          option1: 'Inland Empire.',
          option2: 'Blue Velvet.', 
          option3: 'Mulholland Drive.'
        },
        {
          q: "8) Which is the Lynch's latest work?",
          a: 'Inland Empire.',
          option1: 'Eraserhead.',
          option2: 'Mulholland Drive.',
          option3: 'Lost Highway.'
        },
        {
          q: '9) Where was David Lynch born?',
          a: 'Montanna.',
          option1: 'California.',
          option2: 'London.', 
          option3: 'New York.'
        },
        {
          q: "10) Which is Dale Cooper's favorite drink?",
          a: 'Coffee.',
          option1: 'Beer.',
          option2: 'Wine.', 
          option3: 'Water.'
        }];

  $('#question').html(questions[count].q);
  $('#option1').html('<input type="radio" name="lynch" value="true">'+questions[count].a);
  $('#option2').html('<input type="radio" name="lynch" value="false">'+questions[count].option1);
  $('#option3').html('<input type="radio" name="lynch" value="false">'+questions[count].option2);
  $('#option4').html('<input type="radio" name="lynch" value="false">'+questions[count].option3);

  $('#submit').click(function(){
    var selected = $('input:checked').val();

    count++;
    if(selected === 'true')  result++;

    //reset quiz
    if( count > 10 ){
      count = 0;
      result = 0;
      $('#submit').html('Submit');
    }

    //auxiliar function used in next questios
    var options = [1, 2, 3, 4],
        shuffledOptions = [];

    Array.prototype.shuffle = function() {
      var input = this;

      for (var i = input.length-1; i >=0; i--) {
       
        var randomIndex = Math.floor(Math.random()*(i+1)); 
        var itemAtIndex = input[randomIndex]; 
           
        input[randomIndex] = input[i]; 
        input[i] = itemAtIndex;
      }
      return input;
    }
   
    //next question
    if( count < 10){
      shuffledOptions = options.shuffle();

      $('#question').html(questions[count].q);
      $('#option' + shuffledOptions[0]).html('<input type="radio" name="lynch" value="true">'+questions[count].a);
      $('#option' + shuffledOptions[1]).html('<input type="radio" name="lynch" value="false">'+questions[count].option1);
      $('#option' + shuffledOptions[2]).html('<input type="radio" name="lynch" value="false">'+questions[count].option2);
      $('#option' + shuffledOptions[3]).html('<input type="radio" name="lynch" value="false">'+questions[count].option3);
    }

    //show result
    else if( count = 10){
      if(result < 4 )  $('#question').html('Your result is: ' + result + '/10 <br><br> You should look more of his movies.');
      else if(result < 9)  $('#question').html('Your result is: ' + result + '/10 <br><br> Well done!');
      else  $('#question').html('Your result is: ' + result + '/10 <br><br> You are a Lynchclopedia!');

      $('#option1').html('');
      $('#option2').html('');
      $('#option3').html('');
      $('#option4').html('');
      $('#submit').html('Play again?');
    }

    });

});