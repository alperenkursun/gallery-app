$("#full").hide();

$("#citimg img,#natimg img").mouseenter(function () {
  $(this).css("box-shadow", "10px 10px 5px #888");
});

$("#citimg img,#natimg img").mouseleave(function () {
  $(this).css("box-shadow", "0px 0px 0px #fff");
});

$("i.fa-solid.fa-xmark").click(function () {
  $("#full").fadeOut("slow");
  setTimeout(function () {
    $("#bot").html("");
  }, 500);
});

var imgsrc;
$("#natimg img,#citimg img").click(function () {
  $("#full").fadeIn("slow");
  $("#display").attr("src", $(this).attr("src"));
  var srcc = $(this).attr("src").substring(0, 5);
  var value = 0;
  $("#bot").each(function () {
    if (srcc == "img/n") {
      imgsrc = "n";

      for (let i = 0; i < 3; i++) {
        value++;
        $(this).append(
          "<div class='col-2'><img id=" +
            value +
            " src='img/natureimages/nature" +
            value +
            ".jpg' onclick=imgdisplay(src,id)></div>"
        );
      }
    }
    if (srcc == "img/c") {
      imgsrc = "c";
      for (let i = 0; i < 5; i++) {
        value++;
        $(this).append(
          "<div class='col-2'><img id=" +
            value +
            " src='img/cityimages/city" +
            value +
            ".jpg' onclick=imgdisplay(src,id)></div>"
        );
      }
    }
  });

  for (let i = 1; i < 6; i++) {
    $(`#${i}`).css(`opacity`, `0.3`);
    if ($(this).attr("src") == $(`#${i}`).attr("src")) {
      $(`#${i}`).css(`opacity`, `1.0`);
      if (imgsrc == "c") {
        $("#mid h1").text(`City-${i}`);
      }
      if (imgsrc == "n") {
        $("#mid h1").text(`Nature-${i}`);
      }
    }
  }
});

$("i.fa-solid.fa-chevron-right").on("click", function () {
  var length = $("#display").attr("src").length;
  var valuee = $("#display")
    .attr("src")
    .substring(length - 5, length - 4);
  valuee = parseInt(valuee);
  var valueee = valuee + 1;
  if (imgsrc == "c") {
    if (valueee == 6) {
      valueee = 1;
    }
  }
  if (imgsrc == "n") {
    if (valueee == 4) {
      valueee = 1;
    }
  }

  $("#display").attr("src", $("#display").attr("src").replace(valuee, valueee));
  if (imgsrc == "c") {
    $("#mid h1").text(`City-${valueee}`);
  }
  if (imgsrc == "n") {
    $("#mid h1").text(`Nature-${valueee}`);
  }
  $(`#${valuee}`).css("opacity", "0.3");
  $(`#${valueee}`).css("opacity", "1.0");
});

$("i.fa-solid.fa-chevron-left").on("click", function () {
  var length = $("#display").attr("src").length;
  var valuee = $("#display")
    .attr("src")
    .substring(length - 5, length - 4);
  valuee = parseInt(valuee);
  var valueee = valuee - 1;

  if (imgsrc == "c") {
    if (valueee == 0) {
      valueee = 5;
    }
  }

  if (imgsrc == "n") {
    if (valueee == 0) {
      valueee = 3;
    }
  }

  -$("#display").attr(
    "src",
    $("#display").attr("src").replace(valuee, valueee)
  );
  if (imgsrc == "c") {
    $("#mid h1").text(`City-${valueee}`);
  }
  if (imgsrc == "n") {
    $("#mid h1").text(`Nature-${valueee}`);
  }
  $(`#${valuee}`).css("opacity", "0.3");
  $(`#${valueee}`).css("opacity", "1.0");
});

function imgdisplay(srccc, iddd) {
  if (imgsrc == "c") {
    $("#mid h1").text(`City-${iddd}`);
  }
  if (imgsrc == "n") {
    $("#mid h1").text(`Nature-${iddd}`);
  }
  $("#display").attr("src", srccc);
  for (let i = 1; i < 6; i++) {
    $(`#${i}`).css(`opacity`, `0.3`);
  }
  $(`#${iddd}`).css(`opacity`, `1.0`);
}
