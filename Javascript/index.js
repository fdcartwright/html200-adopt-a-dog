let dogsTotal = 0.00

function runningTotal(amount) {
    dogsTotal += amount;
    $('span.cart-total:eq(0)').html(dogsTotal);
}

function dogDetails(name, breed, cost) {
    alert('This is ' + name + ', ' + 'it is a ' + breed + ', ' + 'and costs ' + cost + ' to adopt.');
}

// home page js

$(".dog-house").find("img").hover(
    function() {
      $(this).addClass("hover");
    }, function() {
      $(this).removeClass("hover");
    }
  );

  // dog page js

  $( ".dog-house2" ).find("img").hover(
    function() {
      $(this).addClass("hover");
    }, function() {
      $(this).removeClass("hover");
    }
  );

