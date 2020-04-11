function hideEverything(){
  $('.text-content').hide();
  $('.actions-footer div').hide();
  $('#next-btn').hide();
}

function loadCustomBtns($newContent){
  if ($newContent.data('customBtns')) {
    $('#next-btn').hide();
    $('#' + $newContent.data('customBtns')).show();
  }

  if ($newContent.hasClass('show-next-btn')) {
    $('#next-btn').show();
  }

}

function loadContent(id){
  $(id).show();
  var $newContent = $(id);

  loadCustomBtns($newContent);
  console.log(id);

}

$(document).ready(function(){
  $('body').on('click', '#next-btn', function(){
    var $nextBtn = $('#next-btn');
    var currentContentID = $nextBtn.data('sceneId');

    hideEverything();

    var nextContentID = parseInt(currentContentID) + 1;
    $('.back-btn').data('sceneId', nextContentID);
    loadContent('#scene-' + nextContentID);
    $nextBtn.data('sceneId', nextContentID);
    // $('#back-btn').data('back-ref', '#content-' + currentContentID);
  });

  $('body').on('click', '.scene-btn', function(){
    hideEverything();

    var $that = $(this);
    // $('.back-btn').data('sceneId', $that.data('sceneId'));
    loadContent('#scene-' + $that.data('sceneId'));
    // $('#back-btn').data('back-ref', '#scene-' + $that.data('sceneId'));
  })

  // $('body').on('click', '#back-btn', function(){
  //   console.log($(this).data('backRef'));
  //   hideEverything();
  //   loadContent($(this).data('backRef'));
  // })

  $('body').on('click', '#set-character-name-btn', function(){
    var characterName = $('#character-name').val();
    $('.character-name').html(characterName);
    $('#scene-1').hide();
    $('#scene-2').show();
    $('#next-btn').show();
    $('#next-btn').data('sceneId', "2");
    $('#scene-2-btns').show();
    // $('#back-btn').show();
    // $('#back-btn').data('backRef', '#content-1');
  });

})



// when the user hits next, show the div with id content-{chapter-number} where chapter-number is
// a data attribute on the button indicating which chapter we're on, set after this button is clicked

// for content that always goes to the same place - i.e. rooms and characters, the content id loaded
// is specified by a data attribute

// for option buttons, they also specify where they go to - that is which content id to load

// the action bar has all the buttons, grouped by content id, so when the content is loaded, the custom buttons are loaded
// if there are no custom buttons, then the default next button is loaded
