$(document).ready(function(){
    $('#check').hide();
    $('#paypal').hide();
    $('.modifyOrder').hide();
    $('.cancelOrder').hide();
    $('.checkOrder').hide();
    $('.shipping').hide();
    
    $('.shippingButton').click(function(){
      $('.shipping').slideToggle();
    });
    
    $('.newOrderButton').click(function(){
      $('.placeOrder').slideToggle();
    });
    $('.modifyOrderButton').click(function(){
      $('.modifyOrder').slideToggle();
    });
    $('.checkOrderButton').click(function(){
      $('.checkOrder').slideToggle();
    });
    $('.cancelOrderButton').click(function(){
      $('.cancelOrder').slideToggle();
    });
    
    
    $('.submitPayment').click(function(){
      alert("Submitted! Check email for confirmation and your unique order number.");
    });
    $('.submitOrderModification').click(function(){
      alert("The order modification has been submitted. Check your email for confirmation.");
    });
    $('.submitOrderStatus').click(function(){
      alert("Check your email for the status/ shipping status of your order.");
    });
    
    $('.submitOrderCancellation').click(function(){
      alert("Check your email for confirmation of your cancellation.");
    });
    
    $('#bestoption').change(function(){
        if($('#bestoption').val() == 'card') {
		      $('#check').hide();
        	$('#paypal').hide();
		      $('#card').show();
        } else if ($('#bestoption').val() =='check') {
          $('#paypal').hide();
        	$('#card').hide();
		      $('#check').show();
	      } else if ($('#bestoption').val() =='paypal') {
          $('#check').hide();
        	$('#card').hide();
		      $('#paypal').show();
	      }
     });
});