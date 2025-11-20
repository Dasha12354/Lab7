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
  const reviewBox = $("#reviews");
  const newReviewsBtn = $("#newReviewsBtn");

  async function loadReview() {
    reviewBox.html("Загрузка...").fadeIn();
    try {
      const res = await fetch("https://dummyjson.com/quotes/random");
      const data = await res.json();
      reviewBox.html(`
        <p style="font-size:22px; font-style:italic; margin:20px 0;">
          "${data.quote}"
        </p>
        <p style="text-align:right; font-weight:bold;">— ${data.author}</p>
      `).hide().fadeIn(800);
    } catch {
      reviewBox.html("Ошибка загрузки...").css("color", "red");
    }
  }

  newReviewsBtn.on('click', loadReview);
  loadReview();

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
