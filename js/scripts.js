var text = "DJ, Spyn Dat Shyt";
var backNow = "Bring it Back Now";
$(function() {
  $("#beatDrop").click(function() {
    $("#story").toggle();
    $("#blanks").toggle();
    change();
    var singNounInput = $("input#singNoun").val();
    var plurNounInput = $("input#plurNoun").val();
    var verbInput = $("input#verb").val();
    var bodyPartInput = $("input#bodyPart").val();
    var plurNoun2Input = $("input#plurNoun2").val();
    var plurNoun3Input = $("input#plurNoun3").val();
    var singNoun2Input = $("input#singNoun2").val();
    var thingInput = $("input#thing").val();
    var bodyPart2Input = $("input#bodyPart2").val();

    $(".singNoun").text(singNounInput);
    $(".plurNoun").text(plurNounInput);
    $(".verb").text(verbInput);
    $(".bodyPart").text(bodyPartInput);
    $(".plurNoun2").text(plurNoun2Input);
    $(".plurNoun").text(plurNoun3Input);
    $(".singNoun2").text(singNoun2Input);
    $(".thing").text(thingInput);
    $(".bodyPart2").text(bodyPart2Input);
  });

  function change() {
    if ($("#beatDrop").text() ==='DJ, Spyn Dat Shyt') {
      $("#beatDrop").text('Bring it Back Now, Y\'all');
    }
    else {
      $("#beatDrop").text('DJ, Spyn Dat Shyt');
    }
  };
});
