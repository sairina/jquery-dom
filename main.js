

$(function() {
    console.log("Let's get ready to party with jQuery!");
    $("article img").addClass("image-center");
    // $("article p").last().remove();
    $("article p:last-child").remove();
    $("#title").css("font-size", Math.floor(Math.random() * Math.floor(100)));
    let newLi = "<li>This list is the bestest!!</li>";
    $("ol").append(newLi);
    let apology = "<p>Sorry that the list ever existed...</p>";
    $("aside").empty().append(apology);
    let red = $("#red").val()
    let blue = $("#blue").val();
    let green = $("#green").val();
    $("body").css("background-color", `rgb(${red},${green},${blue})`)

    $("#form").on("change", "input", function(e){
        let target = e.target;
        let color = target.getAttribute("id");
        let value = target.value;
        if(color === 'red') {
            red = value;
        } else if(color === "blue") {
            blue = value;
        } else if(color === "green") {
            green = value;
        }
        $("body").css("background-color", `rgb(${red},${green},${blue})`);
    })

    $("img").on("click", function(e){
        $(e.target).remove();
    })

})

