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
  var hasIrishBook = false;
  var hasSamsonsKey = false;
  var hasSamsonsLockbox = false;

  $('#next-btn').on('click', function(){
    var $nextBtn = $('#next-btn');
    var currentContentID = $nextBtn.data('sceneId');

    hideEverything();

    var nextContentID = parseInt(currentContentID) + 1;
    $('.back-btn').data('sceneId', nextContentID);
    loadContent('#scene-' + nextContentID);
    $nextBtn.data('sceneId', nextContentID);
  });

  $('.scene-btn').on('click', function(){
    hideEverything();

    var $that = $(this);
    $that.addClass('visited');
    if (!$that.hasClass('sidebar-btn')) {
      $('.back-btn').data('sceneId', $that.data('sceneId'));
    }

    loadContent('#scene-' + $that.data('sceneId'));
  })

  $('#set-character-name-btn').on('click', function(){
    var characterName = $('#character-name').val();
    $('.character-name').html(characterName);
    $('#scene-1').hide();
    $('#scene-2').show();
    $('#next-btn').show();
    $('#next-btn').data('sceneId', "2");
    $('#scene-2-btns').show();
  });

  $('[data-scene-id="samsons-wardrobe"]').on('click', function(){
    hasSamsonsLockbox = true;
    console.log("test")
    if (hasSamsonsKey) {
      $('[data-scene-id="samsons-box-use-key"]').show();
    }
  });
  $('[data-scene-id="samsons-desk"]').on('click', function(){
    hasSamsonsKey = true;
    if (hasSamsonsLockbox) {
      $('[data-scene-id="samsons-box-use-key"]').show();
    }
  });

  $('[data-scene-id="library-cipher-book"]').on('click', function(){
    hasCipherBook = true;
    $('#cipher-book-btn').show();
  });
  $('[data-scene-id="library-irish-book"]').on('click', function(){
    hasIrishBook = true;
    $('#irish-book-btn').show();
  });
  $('[data-scene-id="boyds-papers"]').on('click', function(){
    hasBoydsPapers = true;
    $('#boyds-papers-btn').show();
  });

  $('[data-scene-id="samsons-lockbox-keycode"]').on('click', function(){
    var enteredKeycode = $('#samsons-lockbox-keycode').val();
    hideEverything();
    if (enteredKeycode.toLowerCase() === 'delilah') {
      loadContent('#scene-samsons-lockbox-keycode-right');
      $('#samsons-diary-btn').show();
    } else {
      loadContent('#scene-samsons-lockbox-keycode-wrong');
    }
  });

})



// when the user hits next, show the div with id content-{chapter-number} where chapter-number is
// a data attribute on the button indicating which chapter we're on, set after this button is clicked

// for content that always goes to the same place - i.e. rooms and characters, the content id loaded
// is specified by a data attribute

// for option buttons, they also specify where they go to - that is which content id to load

// the action bar has all the buttons, grouped by content id, so when the content is loaded, the custom buttons are loaded
// if there are no custom buttons, then the default next button is loaded
