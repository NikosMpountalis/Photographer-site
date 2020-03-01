// ANIMATE SMOOTH SCROLLING //
  $('#view-work').on('click' , function(event){
    const images = $('#images').position().top;

    $('html, body').animate(
        {
          scrollTop: images
        },
        1500
    );
});