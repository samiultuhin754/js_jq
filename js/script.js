
// jquery start
$( ".p1" ).bind( "click", function( event ) {
  var str = "( " + event.pageX + ", " + event.pageY + " )";
  $( ".s1" ).text( "Click happened! " + str );
});
$( ".p1" ).bind( "dblclick", function() {
  $( ".s1" ).text( "Double-click happened in " + this.nodeName );
});
$( "p1" ).bind( "mouseenter mouseleave", function( event ) {
  $( this ).toggleClass( "over" );
});

// ;;;;;;;;
$( ".p2" ).click(function() {
  $( this ).slideUp();
});

// event.data start
var logDiv = $( "#log" );
 
for ( var i = 0; i < 5; i++ ) {
  $( ".b_1" ).eq( i ).on( "click", { value: i }, function( event ) {
    var msgs = [
      ".b_1 = " + $( this ).index(),
      "event.data.value = " + event.data.value,
      "i = " + i
    ];
    logDiv.append( msgs.join( ", " ) + "<br>" );
  });
}
// event.isImmediatePropagationStopped
function immediatePropStopped( event ) {
  var msg = "";
  if ( event.isImmediatePropagationStopped() ) {
    msg = "called";
  } else {
    msg = "not called";
  }
  $( "#stop-log" ).append( "<div>" + msg + "</div>" );
}
 
$( ".b_2" ).click(function( event ) {
  immediatePropStopped( event );
  event.stopImmediatePropagation();
  immediatePropStopped( event );
});
// event.namespace
$( ".p3" ).on( "test.something", function( event ) {
  alert( event.namespace );
});
$( ".b_3" ).click(function( event ) {
  $( ".p3" ).trigger( "test.something" );
});
// event.pageY
var last, diff;
$( ".d_1" ).click(function( event ) {
  if ( last ) {
    diff = event.timeStamp - last;
    $( ".d_1" ).append( "time since last event: " + diff + "<br>" );
  } else {
    $( ".d_1" ).append( "Click again.<br>" );
  }
  last = event.timeStamp;
});
// hover
$( "li" ).hover(
  function() {
    $( this ).append( $( "<span> ***</span>" ) );
  }, function() {
    $( this ).find( "span" ).last().remove();
  }
);
 
$( ".fade" ).hover(function() {
  $( this ).fadeOut( 100 );
  $( this ).fadeIn( 500 );
});


$( ".p4" )
  .mouseup(function() {
    $( this ).append( "<span style='color:#f00;'>Mouse up.</span>" );
  })
  .mousedown(function() {
    $( this ).append( "<span style='color:#00f;'>Mouse down.</span>" );
  });


  var i = 0;
$( ".overout" )
  .mouseover(function() {
    $( ".p5", this ).first().text( "mouse over" );
    $( ".p5", this ).last().text( ++i );
  })
  .mouseout(function() {
    $( ".p5", this ).first().text( "mouse out" );
  });
 
var n = 0;
$( ".enterleave" )
  .mouseenter(function() {
    $( ".p5", this ).first().text( "mouse enter" );
    $( ".p5", this ).last().text( ++n );
  })
  .mouseleave(function() {
    $( ".p5", this ).first().text( "mouse leave" );
  });


function flash() {
  $( "div" ).show().fadeOut( "slow" );
}
$( "#bind" ).click(function() {
  $( "body" )
    .on( "click", "#theone", flash )
    .find( "#theone" )
      .text( "Can Click!" );
});
$( "#unbind" ).click(function() {
  $( "body" )
    .off( "click", "#theone", flash )
    .find( "#theone" )
      .text( "Does nothing..." );
});

var n = 0;
$( ".dv" ).one( "click", function() {
  var index = $( ".dv" ).index( this );
  $( this ).css({
    borderStyle: "inset",
    cursor: "auto"
  });
  $( ".p7" ).text( "Div at index #" + index + " clicked." +
    " That's " + (++n) + " total clicks." );
});



$( ".p8" ).clone().appendTo( document.body );
$( ".p8" ).clone().appendTo( document.body );
$( ".p8" ).clone().appendTo( document.body );
$( window ).scroll(function() {
  $( ".sp1" ).css( "display", "inline" ).fadeOut( "slow" );
});



$( "form" ).submit(function( event ) {
  if ( $( "input" ).first().val() === "correct" ) {
    $( ".sp2" ).text( "Validated..." ).show();
    return;
  }
 
  $( ".sp2" ).text( "Not valid!" ).show().fadeOut( 1000 );
  event.preventDefault();
});


// jquery  ui  start
$( ".div_1" ).click(function() {
  $( this ).addClass( "big-blue", 1000, "easeOutBounce" );
});



$( document ).click(function() {
  $( "#toggle" ).toggle( "blind" );
});



$( "#toggle1" ).click(function() {
  $( "#elem" ).animate({
    color: "green",
    backgroundColor: "rgb( 20, 20, 20 )"
  });
});



var clippings = [
  {
    top: 10,
    right: 50,
    bottom: 50,
    left: 5
  },
  {
    top: 0,
    right: 150,
    bottom: 150,
    left: 0
  }
];
var index = 1;
var box = $( ".clipped" ).cssClip( clippings[ 0 ] );
 
$( document ).click(function() {
  box.animate( {
    clip: clippings[ index++ % 2 ]
  }, 2000 );
});


$( document ).click(function() {
  $( "#toggle2" ).toggle( "fold" );
});


$.effects.define( "fade", "toggle", function( options, done ) {
  var show = options.mode === "show";
 
  $( this )
    .css( "opacity", show ? 0 : 1 )
    .animate( {
      opacity: show ? 1 : 0
    }, {
      queue: false,
      duration: options.duration,
      easing: options.easing,
      complete: done
    } );
} );
 


$( document ).on( "click", function() {
  $( ".elem" ).toggle( "fade" );
} );




$( ".red,.green" ).click(function() {
  var i = 1 - $( ".red,.green" ).index( this );
  $( this ).effect( "transfer", { to: $( ".red,.green" ).eq( i ) }, 1000 );
});



$( "#draggable" ).draggable();


$( "#resizable" ).resizable();



$("#sortable").sortable();


$( ":focusable" ).css( "border-color", "red" );


 
$( document ).tooltip();



$( "#tabs" ).tabs();


$( "#spinner" ).spinner()


$( "#slider" ).slider();


$( "#speed" ).selectmenu();


$( "#progressbar" ).progressbar({
  value: false
});
