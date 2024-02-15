var links = [
    "https://media.gq.com/photos/642edca939287411fefa2f9e/master/pass/Barbie-Film-still-HEADER.jpg",
    "https://phantom-marca.unidadeditorial.es/e5ccdae8cc34f20b67fe86a4bf89b70c/resize/828/f/jpg/assets/multimedia/imagenes/2023/06/11/16864964021772.jpg",
    "https://i.redd.it/r13jv0b5767a1.jpg"
        ];
var captions = ["Alan", "Katniss", "Pinkie Pie"];

// Initialize the gallery with the initial images and captions
$.each(links, function(index, value) {
    $("#here").append("<div class='image-container'><img src='" + value + "'>" + "<figcaption>" + captions[index] + "</figcaption></div>");
        }); //used online resources

$(".add").click(function(event) {
    let userLINK = $(".picture-url").val(); //makes pic input field to userlink
    let userCaption = $(".capt").val(); //makes caption input to usercaption
    links.push(userLINK); //adds the user submission to array
    captions.push(userCaption);//adds user submission to array
    $("#here").append("<div class='image-container'><img src='" + userLINK + "'>" + "<figcaption>" + userCaption + "</figcaption></div>"); //displays the img and caption using figcaption and the user caption & links
    if (userLINK === "" || userCaption === "") {
        alert("Please input an image link and caption!");
          event.preventDefault();//this not working
}//alerts user to put both field value
    $('.picture-url, .capt').val(''); //makes input field empty after submission
        });

        $(".remove").click(function() {
            $(".gallery .image-container:last-child").remove();
        });//removes last element in array
   