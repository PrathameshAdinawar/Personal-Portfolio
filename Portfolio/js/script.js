(function() {
    $( "#button1" ).click(function() {
      $( "#button1" ).addClass( "onclic", 250, validate);
    });
  
    function validate() {
      setTimeout(function() {
        $( "#button1" ).removeClass( ".onclic" );
        $( "#button1" ).addClass( ".validate", 450, callback );
      }, 2250 );
    }
      function callback() {
        setTimeout(function() {
          $( "#button1" ).removeClass( ".validate" );
        }, 1250 );
      }
    });