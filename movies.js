$(function(){
  //add event listener for when submit is clicked
  $("form").on("submit", function(e){
    e.preventDefault();
    let title = $("#title").val();
    let rating = $("#rating").val();
    $("#movie_list").append(`<div class="movie"></div>`);
    $("#movie_list .movie").last().append(`<div>${title}</div>`, `<div>${rating}</div>`, `<button>Delete</button>`);
  });

  $("#movie_list").on("click", "button", function(e){
    $(e.target).closest(".movie").remove();
  });

});