(function(document){

// Aliases
var sin = Math.sin,
    cos = Math.cos,
    PI = Math.PI;


// Geometric proof
// Constants
var SQUARE_SIZE = 200,
    SQUARE_CENTER = SQUARE_SIZE / 2,
    OUTER_COLOR = '#111',
    INNER_COLOR = '#7BB';
    
// Variables
var s = Snap('#geometric'),
    outer_rect = s.rect(0,0,SQUARE_SIZE, SQUARE_SIZE),
    inner_rect = s.rect(0,0,SQUARE_SIZE, SQUARE_SIZE),
    slider = document.querySelector("#geo_slider");


s.attr('width', SQUARE_SIZE);
s.attr('height', SQUARE_SIZE);
outer_rect.attr('fill', OUTER_COLOR);
inner_rect.attr('fill', INNER_COLOR);


// Probably want to set up a matrix or tstr that does:
// Rotate 0, Scale, Rotate
function update () {
  var angle = slider.value * PI;
      scale = 1 / (sin(angle) + cos(angle)),
      tstr  = 'S' + scale + ' ' + scale +
              'R' + Snap.deg(angle);

  // console.log(tstr);
  inner_rect.transform(tstr);
}

slider.oninput = update;
slider.onchange = update;
update();

})(document);