$(document).ready(function() {
  console.log("Ready");
  $.get("https://lit-fortress-6467.herokuapp.com/object", function(data) {
    // console.log(data)
    var albumObj = {};
    var albumArr = data["results"];
    var artArr = [];
    var artistArr = [];
    var titleArr = [];
    // console.log(albumArr)
    for (var i = 0; i < albumArr.length; i++) {
      albumObj["artist"] = albumArr[i]["artist"];
      albumObj["title"] = albumArr[i]["title"];
      albumObj["art"] = albumArr[i]["cover_art"];

      artArr.push(albumObj.art);
      artistArr.push(albumObj.artist);
      titleArr.push(albumObj.title);

      // console.log(albumArr)
      // console.log(albumObj)
      // console.log(artArr)

      var randArt1 = artArr[Math.floor(Math.random()*artArr.length)];
      var randArt2 = artArr[Math.floor(Math.random()*artArr.length)];
      var randArt3 = artArr[Math.floor(Math.random()*artArr.length)];

      if (randArt1 === randArt2 || randArt2 === randArt3 || randArt1 === randArt3) {
        randArt1 = artArr[Math.floor(Math.random()*artArr.length)];
        randArt2 = artArr[Math.floor(Math.random()*artArr.length)];
        randArt3 = artArr[Math.floor(Math.random()*artArr.length)];
      }

      $(".0").attr("src", "images/" + artArr[0]);
      $(".1").attr("src", "images/" + artArr[1]);
      $(".2").attr("src", "images/" + artArr[2]);
      $(".3").attr("src", "images/" + artArr[3]);
      $(".4").attr("src", "images/" + artArr[4]);
      // console.log(albumObj)
    }
    $(".0").click(function() {
      $(".selected").append(`<ul></ul>`);
      $(".selected").append(`<li class="albumInfo">${artistArr[0] + ": " + titleArr[0]}</li>`);

    })
    $(".1").click(function() {
      $(".selected").append(`<ul></ul>`);
      $(".selected").append(`<li class="albumInfo">${artistArr[1] + ": " + titleArr[1]}</li>`);

    })
    $(".2").click(function() {
      $(".selected").append(`<ul></ul>`);
      $(".selected").append(`<li class="albumInfo">${artistArr[2] + ": " + titleArr[2]}</li>`);

    })
    $(".3").click(function() {
      $(".selected").append(`<ul></ul>`);
      $(".selected").append(`<li class="albumInfo">${artistArr[3] + ": " + titleArr[3]}</li>`);

    })
    $(".4").click(function() {
      $(".selected").append(`<ul></ul>`);
      $(".selected").append(`<li class="albumInfo">${artistArr[4] + ": " + titleArr[4]}</li>`);

    })
    $(".clear").click(function() {
      $(".selected").text("")
    })
    $(".first").attr("src", "images/" + randArt1);
    $(".second").attr("src", "images/" + randArt2);
    $(".third").attr("src", "images/" + randArt3);
  })
})
