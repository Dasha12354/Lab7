$(document).ready(function() {
  console.log("jQuery готов! Лаба 7 — огонь!");

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

  // Плавная прокрутка
  $('nav a').click(function(e) {
    e.preventDefault();
    $('html, body').animate({
      scrollTop: $($(this).attr('href')).offset().top - 80
    }, 800);
  });

  // Цитаты — РАБОТАЕТ НА 100%
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
        $('#quote-text').text('Ошибка загрузки...');
      });
  });

  // Галерея — 12 красивых фото
  const images = [];
  for (let i = 1; i <= 12; i++) {
    images.push(`https://picsum.photos/600/400?random=${i}`);
  }
  images.forEach(src => {
    $('<img>').attr('src', src).appendTo('#gallery');
  });

  // jQuery UI
  $('#draggable').draggable();
  $('#datepicker').datepicker({
    dateFormat: 'dd.mm.yy',
    changeMonth: true,
    changeYear: true
  });

  // Загрузить цитату при старте
  $('#loadQuote').click();
});
