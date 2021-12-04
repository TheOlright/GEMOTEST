$(document).on('mouseup', function (e){ // событие клика по веб-документу
  var popup = $(".info-beep-banner_viber"); // тут указываем ID элемента
  if (!popup.is(e.target) // если клик был не по нашему блоку
    && popup.has(e.target).length === 0) { // и не по его дочерним элементам
    popup.hide(); // скрываем его
  }
});

$(document).on('click', '.banner-close', function (e) {
  $(this).closest(".info-beep-banner_viber").hide();
});

$(document).on('click', '.viber-link', function (e) {
  var menu = $('.messenger-links');
  $(".info-beep-banner_viber").show();
  if ($(window).width() <= '767'){
    $('#ib-button-messaging').css('visibility', 'hidden');
    $('#ib-button-messaging').css('opacity', '0');
    menu.removeClass('show');
  }
});

$(document).ready(function () {
  if ($('.direct-item__name').length === 0 && $('.direct-item__icon').length !== 0) {
      $('.info-block--learning-detail').hide().closest('.content__column--info').css('width', 0);
      $('.content__column--base').css('width', '100%');
  }
});

$(document).ready(function() {
  $('.date_mask').focusout(function() {
    const date_input_value = $(this).val();
    if ((date_input_value.indexOf('д') > -1) || (date_input_value.indexOf('м') > -1) || (date_input_value.indexOf('г') > -1)) {
      $(this).closest('.date-input-item').addClass('no_filled');
    } else {
      $(this).closest('.date-input-item').removeClass('no_filled');
    }
  });
});


$(document).ready(function() {
  $('.textarea_required textarea').focus(function () {
    $(this).closest('.textarea_required').addClass('ds_focus');
  });
  $('label[for="question-commercial-question"]').html("Вид коммерческого предложения" + `<span class="nfeedback-required">*</span>`);
  $('label[for="question-results-question"]').html("Вопрос" + `<span class="nfeedback-required">*</span>`);
});

