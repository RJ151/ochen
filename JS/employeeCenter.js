$(document).ready(function(){
    $('.allOptions').hide();
    $('#check').hide();
    $('.modifyOrder').hide();
    $('.cancelOrder').hide();
    $('.placeOrder').hide();
    $('.shipping').hide();

    $('.allOptionsButton').click(function(){
      alert("You are now logged in.");
      $('.allOptions').show();
    });
    $('.shippingButton').click(function(){
      $('.shipping').slideToggle();
    });

    $('.newOrderButton').click(function(){
      $('.placeOrder').slideToggle();
    });
    $('.modifyOrderButton').click(function(){
      $('.modifyOrder').slideToggle();
    });

    $('.cancelOrderButton').click(function(){
      $('.cancelOrder').slideToggle();
    });

    $('.submitPayment').click(function(){
      alert("The order has been submitted.");
    });
    $('.submitOrderModification').click(function(){
      alert("The order has been modified.");
    });

    $('.submitOrderCancellation').click(function(){
      alert("The order has been cancelled.");
    });

    $('#bestoption').change(function(){
        if($('#bestoption').val() == 'card') {
		      $('#check').hide();
		      $('#card').show();
        } else if ($('#bestoption').val() =='check') {
        	$('#card').hide();
		      $('#check').show();
	      }
     });
});
