$(function(){
$("#vegas").vegas({
  delay:5000,
  slides:[
    { src:'./images/BN-1.jpg' },
    { src:'./images/BN-2.jpg' },
    { src:'./images/BN-4.jpg'},
    { src:'./images/BN-5.jpg'}
  ],
  transition : 'zoomOut'
});
})

$(function() {

$('#dg-container').gallery({autoplay	:	true});

});

jQuery(document).ready(function($) {

	var owl = $('.owl-carousel'); // used in our bussines and  moment

	var owl2 = $('.owl-carousel-2'); // used in Services

	var owl3 = $('.owl-carousel-3');

	var owl4 = $('.owl-carousel-4');

	owl.owlCarousel({

		loop: true,

        items: 1,

		nav:true,

		dots:true,

        smartSpeed:450,

		autoplay:true,

		autoplayTimeout:5000,

		margin:0,

		responsive:{

		320:{items:1},

		480:{items:1},

		600:{items:1},			

		960:{items:1},

		1200:{items:1}

		

				  		

		}

	});

	owl2.owlCarousel({

		loop:true,

		nav:false,

		dots:false,

		smartSpeed:450,

		autoplay:true,

		autoplayTimeout:5000,

		margin:30,

		responsive:{

		320:{items:1},

		480:{items:1},

		600:{items:1},			

		960:{items:1},

		1200:{items:1}

		}

	});

	

owl3.owlCarousel({

		loop:true,

		nav:false,

		dots:false,

		smartSpeed:450,

		autoplay:true,

		autoplayTimeout:5000,

		margin:30,

		responsive:{

		320:{items:1},

		480:{items:1},

		600:{items:2},			

		960:{items:3},

		1200:{items:4}

		}

	});

	

	owl4.owlCarousel({

		loop:true,

		nav:false,

		dots:false,

		smartSpeed:450,

		autoplay:true,

		autoplayTimeout:5000,

		margin:30,

		responsive:{

		320:{items:1},

		480:{items:1},

		600:{items:2},			

		960:{items:3},

		1200:{items:4}

		}

	});

});