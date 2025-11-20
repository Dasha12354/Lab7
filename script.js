$(document).ready(function() {

  // Тёмная тема
  $('#themeToggle').click(function() {
    $('body').toggleClass('dark');
    $(this).text($('body').hasClass('dark') ? 'Светлая тема' : 'Тёмная тема');
  });

  // Вкладки
  $('.tab-btn').click(function() {
    $('.tab-btn').removeClass('active');
    $(this).addClass('active');
    $('.tab-content').removeClass('active');
    $('#' + $(this).data('tab')).addClass('active');
  });

  // Плавная прокрутка (Задача B — обязательно!)
  $('nav a').click(function(e) {
    e.preventDefault();
    const target = $($(this).attr('href'));
    $('html, body').animate({
      scrollTop: target.offset().top - 80
    }, 900);
  });

  // AJAX — цитата
  $('#loadQuote').click(function() {
    $.get('https://api.quotable.io/random')
      .done(function(data) {
        $('#quote-text').fadeOut(300, function() {
          $(this).text('«' + data.content + '»').fadeIn(600);
        });
        $('#quote-author').fadeOut(300, function() {
          $(this).text('— ' + data.author).fadeIn(800);
        });
      })
      .fail(function() {
        $('#quote-text').text('Не удалось загрузить цитату');
      });
  });

  // Галерея — 12 фоток
  for (let i = 1; i <= 12; i++) {
    $('<img>').attr('src', `https://picsum.photos/600/400?random=${i}`)
              .appendTo('#photoGallery');
  }

  // jQuery UI
  $('#draggable').draggable();
  $('#datepicker').datepicker({
    dateFormat: 'dd.mm.yy',
    changeMonth: true,
    changeYear: true,
    yearRange: "1950:2025"
  });

  // Автозагрузка цитаты
  $('#loadQuote').click();
});
