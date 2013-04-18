//count pages
$.fn.counts = function(options){
    //defaultOptions
    options = $.extend({
        minusClass: 'minus',
        minimum: 1
    },options);

    var inputCol = $(this);
    //click arrows
    $(inputCol).parent().find('a').click(function () {
      if($(this).hasClass(options.minusClass)){
      if($(inputCol).val() >=options.minimum){
      var count = parseInt($(inputCol).val()) - 1;
      count = count < options.minimum ? options.minimum : count;
      }
      else{
      $(inputCol).val(options.minimum-1);
        var count = parseInt($(inputCol).val()) - 1;
      count = count < options.minimum ? options.minimum : count;
      }
      }
      else{
            if($(inputCol).val() >=options.minimum){
            var count = parseInt($(inputCol).val()) + 1;
            }
            else{ $(inputCol).val(options.minimum-1);
               var count = parseInt($(inputCol).val()) + 1;
            }
      }
      $(inputCol).val(count);
      $(inputCol).change();
      return false;
    });
    //test string and up/down function
    $(this).keydown(function(e){
          if($(this).val().length <=0){ $(this).validationEngine('hide'); }
          //only string - block keys
          if( e.which!=8 && e.which!=45 && e.which==46 && e.which!=0 && (e.which<37 || e.which>57) && e.which!=96 && e.which!=97 && e.which!=98 && e.which!=99 && e.which!=100 && e.which!=101 && e.which!=102 && e.which!=103 && e.which!=104 && e.which!=105){
                return false;
          }

          var key, keyChar;
          if(!e) var e = window.e;
          if (e.keyCode) key = e.keyCode;
          else if(e.which) key = e.which;

          //chenge value of keyboard up/down
          if(key==38 || key==39 || (e.which<48 || e.which>57) && e.which!=96 && e.which!=97 && e.which!=98 && e.which!=99 && e.which!=100 && e.which!=101 && e.which!=102 && e.which!=103 && e.which!=104 && e.which!=105){
          //if key DOWN
          if(key==40 || key==37){
                  if($(this).val() >=options.minimum){
                      var count = parseInt($(this).val()) - 1;
                      count = count < options.minimum ? options.minimum : count;
                  }
                  else{
                     $(this).val(options.minimum-1);
                    var count = parseInt($(this).val()) + 1;
                  }
               }
          //if key UP
          else{
                  if($(this).val() >=options.minimum){
                      var count = parseInt($(this).val()) + 1;
                  }
                  else{
                    $(this).val(options.minimum-1);
                    var count = parseInt($(this).val()) + 1;
                  }
              }
          $(this).val(count);
          }
    });
//end function counts
}
$('#sources-choose').counts();
