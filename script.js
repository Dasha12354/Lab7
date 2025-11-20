$(document).ready(function() {
  console.log("jQuery готов! Лаба 7 стартует!");

  // === ТЕМА (переключатель) ===
  $('#themeToggle').click(function() {
    $('body').toggleClass('dark');
    $(this).text($('body').hasClass('dark') ? '☀️ Светлая тема' : '🌙 Тёмная тема');
  });

  // === Задача A: Вкладки на jQuery ===
  $('.tab-btn').click(function() {
    $('.tab-btn').removeClass('active');
    $(this).addClass('active');
    $('.tab-content').removeClass('active');
    $('#' + $(this).data('tab')).addClass('active');
  });

  // === Задача B: Плавная прокрутка (jQuery vs Vanilla) ===
  $('nav a').click(function(e) {
    e.preventDefault();
    const target = $($(this).attr('href'));
    // jQuery способ:
    $('html, body').animate({ scrollTop: target.offset().top - 80 }, 800);
    
    // А можно и так (Vanilla — одна строка!):
    // document.querySelector(this.getAttribute('href')).scrollIntoView({ behavior: 'smooth' });
  });

  // === Задача C: AJAX цитата ===
  $('#loadQuote').click(function() {
    $.get('https://api.quotable.io/random')
      .done(function(data) {
        $('#quote p').text('«' + data.content + '»');
        $('#quote').append('<cite>— ' + data.author + '</cite>');
      });
  });

  // === Задача D: jQuery UI ===
  $('#draggable').draggable();
  $('#datepicker').datepicker({
    dateFormat: 'dd.mm.yy',
    changeMonth: true,
    changeYear: true
  });
});