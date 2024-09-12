$(document).ready(function () {
  let $header = $("header");
  let $navNode = $(".navNode");
  let $main = $("main");

  $navNode.on("click", function (e) {
    e.preventDefault();
    let $target = $(this).attr("href").replace("#", "");
    let $content = $(this).attr("href");

    $navNode.each(function () {
      let $others = $(this).attr("href");

      $main.find($others).each(function () {
        if ($(this).attr("id") !== $target) {
          $(this).hide();

          let $othersWrapper = $others.replace("#", "");

          $header.find("." + $othersWrapper).hide();
        }
      });
    });

    $main.find($content).show();

    $header.attr("class", $target);

    $header.find("." + $target).fadeIn();

    
    setTimeout(() => {
      $("html, body").animate({ scrollTop: 0 }, "slow");
    }, 100);
  });

  function hideInitialSections() {
    $navNode.each(function () {
      let $others = $(this).attr("href");

      $main.find($others).each(function () {
        if ($(this).attr("id") !== "home") {
          $(this).hide();
        }
      });
    });
  }

  hideInitialSections();
});
