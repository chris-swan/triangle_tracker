var triangle = function(sideOne, sideTwo, sideThree) {
  if (sideOne <= (sideTwo + sideThree) && sideTwo <= (sideThree + sideOne) && sideThree <=(sideOne + sideTwo)) {
    if (sideOne===sideTwo && sideTwo==sideThree){
      return "equilateral triangle";
        } else if (sideOne===sideTwo || sideOne===sideThree || sideThree===sideTwo) {
          return "isosceles";
    } else {
        return "scalene";
    }
  } else {
    return "These sides do not make a triangle.";
  }
};

$(document).ready(function(){
  $("form#triangle").submit(function(event){

    var sideOne = parseInt($("input#sideOne").val());
    var sideTwo = parseInt($("input#sideTwo").val());
    var sideThree = parseInt($("input#sideThree").val());
    var result = triangle(sideOne, sideTwo, sideThree);

    console.log(sideOne, sideTwo, sideThree, result);

    $("input#sideOne").val("");
    $("input#sideTwo").val("");
    $("input#sideThree").val("");

    $("#result").text(result).show();
    event.preventDefault();
  });
});
