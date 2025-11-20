$(document).ready(function() {
  console.log("jQuery запущен! Лаба 7 работает!");

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
    const target = $($(this).attr('href'));
    $('html, body').animate({
      scrollTop: target.offset().top - 80
    }, 800);
  });

  // AJAX — цитата (работает 100%)
  $('#loadQuote').click(function() {
    $.get('https://api.quotable.io/random')
      .done(function(data) {
        $('#quoteText').text('«' + data.content + '»').hide().fadeIn(800);
        $('#quoteAuthor').text('— ' + data.author).hide().fadeIn(1200);
      })
      .fail(function() {
        $('#quoteText').text('Ошибка загрузки... Попробуй ещё раз');
      });
  });

  // Динамическая галерея (12 красивых фото)
  const photos = [
    {url: "https://picsum.photos/400/300?random=1", category: "nature"},
    {url: "https://picsum.photos/400/300?random=2", category: "art"},
    {url: "https://picsum.photos/400/300?random=3", category: "nature"},
    {url: "https://picsum.photos/400/300?random=4", category: "art"},
    {url: "https://picsum.photos/400/300?random=5", category: "nature"},
    {url: "https://picsum.photos/400/300?random=6", category: "art"},
    {url: "https://picsum.photos/400/300?random=7", category: "nature"},
    {url: "https://picsum.photos/400/300?random=8", category: "art"},
    {url: "https://picsum.photos/400/300?random=9", category: "nature"},
    {url: "https://picsum.photos/400/300?random=10", category: "art"},
    {url: "https://picsum.photos/400/300?random=11", category: "nature"},
    {url: "https://picsum.photos/400/300?random=12", category: "art"}
  ];

  photos.forEach(photo => {
    const img = $('<img>').attr('src', photo.url).attr('data-category', photo.category);
    $('#photoGallery').append(img);
  });

  // Фильтры галереи
  $('.gallery-filters button').click(function() {
    $('.gallery-filters button').removeClass('active');
    $(this).addClass('active');
    const filter = $(this).data('filter');

    if (filter === 'all') {
      $('#photoGallery img').fadeIn(500);
    } else {
      $('#photoGallery img').each(function() {
        if ($(this).data('category') === filter) {
          $(this).fadeIn(500);
        } else {
          $(this).fadeOut(500);
        }
      });
    }
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
