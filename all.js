$(function() {

  var duration = 500;
  var $images = $('#images p');

  // images 第一張圖片
  $images.filter(':nth-child(1)')
    .on('mouseover', function() {

      $(this).find('strong, span').stop(true).animate({
        opacity: 1,
      }, duration);

    })
    .on('mouseout', function() {

      $(this).find('strong, span').stop(true).animate({
        opacity: 0,
      }, duration);

    });

  // images 第二張圖片
  $images.filter(':nth-child(2)')
    .on('mouseover', function() {

      $(this).find('strong').stop(true).animate({
        opacity: 1,
        left: '0%'
      }, duration);

      $(this).find('span').stop(true).animate({
        opacity: 1
      }, duration);

    })
    .on('mouseout', function() {

      $(this).find('strong').stop(true).animate({
        opacity: 0,
        left: '-200%'
      }, duration);

      $(this).find('span').stop(true).animate({
        opacity: 0
      }, duration);

    });

  // images 第三張圖片
  $images.filter(':nth-child(3)')
    .on('mouseover', function() {

      $(this).find('strong').stop(true).animate({
        bottom: '0px'
      }, duration);

      $(this).find('span').stop(true).animate({
        opacity: 1
      }, duration);

      $(this).find('img').stop(true).animate({
        top: '-20px'
      }, duration * 1.5);
    })
    .on('mouseout', function() {

      $(this).find('strong').stop(true).animate({
        bottom: '-80px'
      }, duration);

      $(this).find('span').stop(true).animate({
        opacity: 0
      }, duration);

      $(this).find('img').stop(true).animate({
        top: '0px'
      }, duration);
    });
});