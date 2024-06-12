
var width;
var height;
var title = "#hot sports girl";
var author = "Théïa Flynn"
var speed = 1000;

var paragraphs = ["도승타입 The kind of girl to do her jogging in a miniskirt. Her best attack is always some kind of sadistic blockage. See her wonder where your dick went. A gust of wind, a flash and it was gone. My room is such a mess. Always have to hide all my books before leaving the house. It gets tiring. #hot sports girl on my mind. Predatory to me exactly, but not worse than small girls with power drills. To be fair, I’m just longing for the perfect switch scenario. Some kind of terrible harmony. Together, me and #hot sports girl, drinking every drop of sweat we manage to squeeze out of her dress", 
"At work now. Honest girl suit. Fold it neatly every night just wait. If you want to know, my sheets are a big source of achievement. In the dark I whisper, ah #hot sports girl you wipe me out me again. The big eyes have watered, a sting in all of her follicles. She gives her most defiant stare. Triceps and thighs harder than any I’d ever touched before. Heels two big mallets. Kind of embarrassed to say but fuck my tongue", 
"Went to a bash in said suit. Huge guys all over. Bam #hot sports girl spot. Tower girl smashes her fist. Let’s look into each others’ eyes, be my maid I’ll be yours! Pulls out a hockey stick so you know you’re done for. She headlocks you, you push up against her a couple of times and you guys are good again. I feel like a virgin when she smiles at me. Girl puppy. On Sunday you’re so riled up you’re on reddit again. Dreamed of her there’s that too. Basking in the sexual undercurrent that every image you ever knew of her holds. Don’t you just love #hot sports girl"];

var word_index = 0;



$("#container").on("click", "td", function(){
  var randNote = Math.floor(Math.random() * notes.length);
  synth.triggerAttackRelease(notes[randNote], "32n");

  let el = this;
  $("td").removeClass("largeCell");
  $(el).addClass("largeCell");
  setTimeout(function(){
    $(el).get(0).scrollIntoView({behavior: "smooth", block: "center", inline: "center"})
    let left = $(el).offset().left;
    let top = $(el).offset().top;
    let w = $(el).width();
    let h = $(el).height();

    let tableTop = $(el).closest("table").offset().top;

    $("#x1").css({
      top: tableTop - 12.5,
      left: left - 12.5
    });
    $("#x2").css({
      top: tableTop - 12.5,
      left: left + w + 25
    });
    $("#y1").css({
      top: top - 12.5,
      left: "12.5px"
    });
    $("#y2").css({
      top: top + h + 25,
      left: "12.5px"
    });
  }, 250);
});

$(".indicator").click(function(){
  $("td").removeClass("largeCell");
  $(".indicator").css({
    "left": "25px",
    "top": "125px"
  });
});

function displayTitle(title, author){
  $("#title").html(title + "<br>by " + author);
}

function setupText(){
  var numCols = 4;
  paragraphs.forEach(function(p, index){
    let newTable = $(`<table><tbody id='table-${index}'></tbody></table>`);
    words = p.split(".");
    numRows = Math.ceil(words.length/numCols);
    console.log(numRows);

    for(let i = 0; i < numRows; i++){
      let newRow = $("<tr></tr>");
      for(let j = 0; j < numCols; j++){
        let newCell = $("<td></td>");

        if(i*numCols + j < words.length){
          newCell.text(words[i*numCols + j] + ".");
        } else {
          newCell.text("ʕ•́ᴥ•̀ʔっ♡");
        }

        newRow.append(newCell);

      }
      newTable.append(newRow);
    }
    $("#container").append($("<hr>"));
    $("#container").append(newTable);
    $("#container").append($("<hr>"));
  });
  $("#title").css({
    "font-size": "3rem"
  });
}

