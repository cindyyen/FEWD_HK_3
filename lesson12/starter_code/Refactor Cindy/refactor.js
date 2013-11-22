// 1
$("body").append("The instructor for this course is William Neely. William has a degree in Physics from Southwestern College.</p>");


// when you want to reuse something in js, always make it a variable

var firstName = "William";
var lastName = "Neely";

var context = "<img src='Will.jpg' alt=" + firstName + "\'s picture'>" +
              "The instructor for this course is William Neely." +
              "William has a degree in Physics from Southwestern College.</p>";
$("body").append(context);


// 2
$("#container>ol").prepend("<li>Milk</li>");
$("#container>ol").prepend("<li>Cookies</li>");
$("#container>ol").prepend("<li>Sugar</li>");
$("#container>ol").prepend("<li>Bananas</li>");
$("#container>ol").prepend("<li>Gatorade</li>");



// 3
$("#container").css("width","960px");
$("#container").css("background","red");
$("#container").css("color","purple");
$("#main").css("width","960px");
$("#main").css("background","red");
$("#main").css("color","purple");


$("container, #main").css({
	"width"; "960px",
	"background"; "red",
	"color"; "purple"
});


// 4
$("input").css("width","200px")
$("input").attr("placeholder","My placeholder");
$("input").before("<label>My input</label>");

$("input").css("width","200px")
.attr("placeholder","My placeholder)
.before("<label>My input</label>")



