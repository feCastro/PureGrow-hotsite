$(document).ready(function () {
  let $header = $('header');
  let $navNode = $('.navNode');
  let $main = $('main');

  // console.log($nav)
  // console.log($navNode)
  $navNode.each(function () {
    let $others = $(this).attr('href');
    // console.log('$others: ', $others);
    // console.log($main.find($others));

    $main.find($others).each(function () {
      if ($(this).attr('id') !== 'home') {
        // console.log('diferente:', $(this));
        $(this).hide();
      };
    })
  });


  $navNode.on('click', function (e) {
    e.preventDefault();
    let $target = $(this).attr('href').replace('#', '');
    let $content = $(this).attr('href');

    $navNode.each(function () {
      let $others = $(this).attr('href');

      $main.find($others).each(function () {
        if ($(this).attr('id') !== $target) {
          // console.log('diferente:', $(this));
          $(this).hide();

          let $othersWrapper = $others.replace('#', '');

          $header.find('.'+$othersWrapper).hide();
        };
      })
    });


    $main.find($content).show();

    $header.attr('class', $target);

    $header.find('.'+$target).fadeIn();
    // let $target = $(this).attr('href').replace('#', '');
    // console.log($target);
  });

});