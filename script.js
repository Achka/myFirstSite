$(document).ready(function () {
  var modal;
  var images = $('.modal-image');

  (function ($) {
    for (var i = 0; i < images.length; i++) {
      $(images[i]).click(function () {
        console.log($(this));
        modal = $(this).next();
        modal.css("display", "block");
        modal.find(".modal-content").attr("src", $(this).attr("src"));
        modal.find(".caption").html($(this).attr("alt"));
        //captionText.innerHTML = this.alt;
      });
    }
  })(jQuery);


  $('.close').click(function () {
    modal.css("display", "none");
  });
});
