var res = $(".dropdown-menu");
$('[rel^="m"]').on("click", funk);

$(document).click(function(e) {
  if ($(e.target).closest(res).length || $(e.target).closest('.categories__knop').length) return;
  res.fadeOut(100);
  // e.stopPropagation();
});

function funk(){
  var link = $(this).attr('rel'),
      el = $('.dropdown-menu.'+link);
  if(el.css("display") == "none"){
    res.hide();
    el.fadeIn(100);
  }
  else{
    el.fadeOut(100);
  }
}