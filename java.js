function generateHtml(current, previous) {
  var html =
    '<p class="col-5 col-md-12 _time"  >' +
    current +
    'hrs</p> <div class="col-7 col-md-12 time-rang align-self-center  text-md-start text-end ps-0 " > Last Week-' +
    previous +
    "hrs </div>";

  return html;
}

$.getJSON("data.json", (data) => {
  var work = data[0].timeframes;
  var play = data[1].timeframes;
  var study = data[2].timeframes;
  var exersice = data[3].timeframes;
  var social = data[4].timeframes;
  var selfcare = data[5].timeframes;

  $(".bb").click(() => {
    var id = event.target.id;
    $(".bb").each((i, element) => {
      var x = $(element).attr("id");

      if (x === id) {
        $("#" + x).addClass("active");
        console.log(x);
      } else {
        $("#" + x).removeClass("active");
      }
    });

    time(id);
  });

  function Caller(title, frame, status) {
    var call = title + "." + frame + "." + status;
    return eval(call);
  }

  function time(range) {
    var current_work = Caller("work", range, "current");

    var current_play = Caller("play", range, "current");
    var current_study = Caller("study", range, "current");
    var current_exercise = Caller("exersice", range, "current");
    var current_social = Caller("social", range, "current");
    var current_selfcare = Caller("selfcare", range, "current");

    var perv_work = Caller("work", range, "previous");
    var perv_play = Caller("play", range, "previous");
    var perv_study = Caller("study", range, "previous");
    var perv_exercise = Caller("exersice", range, "previous");
    var perv_social = Caller("social", range, "previous");
    var perv_selfcare = Caller("selfcare", range, "previous");

    $("#w_time").html(generateHtml(current_work, perv_work));
    $("#p_time").html(generateHtml(current_play, perv_play));
    $("#st_time").html(generateHtml(current_study, perv_study));
    $("#s_time").html(generateHtml(current_social, perv_social));
    $("#sc_time").html(generateHtml(current_selfcare, perv_selfcare));
    $("#e_time").html(generateHtml(current_exercise, perv_exercise));
  }
});
