(function() {
  var app = angular.module('hats', [])

  .controller('HatController', function() {
    this.products = hats;
  })

  .controller("TabController", function() {
    this.tab = 1;

    this.isSet= function(checkTab) {
      return this.tab === checkTab;
    };

    this.setTab = function(onTab) {
      this.tab = onTab;
    };
  })

  .controller('PictureController', function(){
    this.current = 0;

    this.setCurrent = function(imageNumber){
      this.current = imageNumber || 0;
    };
  })
  .controller('ReviewController', function() {
    this.review = {};

    this.addReview = function(product) {
      product.reviews.push(this.review);
      this.review.createdOn = Date.now();
      this.review = {};
    };
  });

  var hats = [{
      name: 'Black Leather Strap Hat',
      summary: "This hat is carefully crafted with a visually stunning leather strap.",
      release: "April 1, 2015",
      material: "Leather",
      ranking: "Worldwide Ranking: #1",
      price: "170.00",
      image: [
        "../Images/blackhat.jpg"
      ],
      reviews: [{
        stars: 5,
        body: "This hat is simply fantastic. Oliver has somehow outdone himself, yet again. How do you it Mr. Chen!?!",
        author: "paichunma@uml.com",
        createdOn: 1430055641017
      }, {
        stars: 5,
        body: "Words cannnot describe how happy I am with this product. Thank you Ochen Fashion.",
        author: "morrisjschwartz@college.com",
        createdOn: 1430055641017
      }]
    }, {
      name: 'Beach White Hat',
      summary: "A truly beautiful hat, perfect for the beach or a sunny day.",
      release: "April 15, 2015",
      material: "Cotton",
      ranking: "Worldwide Ranking: #2",
      price: "150.00",
      image: [
        "../Images/whitehat.jpg"
      ]
    }, {
      name: 'Pink Forest Hat',
      summary: "A colorful hat, it evokes the 'farmer's daughter' feel.",
      release: "April 15, 2015",
      material: "Straw",
      ranking: "Worldwide Ranking: #3",
      price: "110.00",
      image: [
        "../Images/pinkhat.jpg"
      ],
      reviews: [{
        stars: 5,
        body: "This hat is simply fantastic. Oliver has somehow outdone himself, yet again. How do you it Mr. Chen!?!",
        author: "paichunma@uml.com",
        createdOn: 1430055641017
      }, {
        stars: 5,
        body: "Words cannnot describe how happy I am with this product. Thank you Ochen Fashion.",
        author: "morrisjschwartz@college.com",
        createdOn: 1430055641017
      }]
    },{
      name: 'Leaf Hat',
      summary: "A unique hat that will make you feel at home in the wilderness.",
      release: "April 15, 2015",
      material: "Leaves",
      ranking: "Worldwide Ranking: #4",
      price: "120.00",
      image: [
        "../Images/leafhat.jpg"
      ],
      reviews: [{
        stars: 5,
        body: "This hat is simply fantastic. Oliver has somehow outdone himself, yet again. How do you it Mr. Chen!?!",
        author: "paichunma@uml.com",
        createdOn: 1430055641017
      }, {
        stars: 5,
        body: "Words cannnot describe how happy I am with this product. Thank you Ochen Fashion.",
        author: "morrisjschwartz@college.com",
        createdOn: 1430055641017
      }]
    },{
      name: 'Feather Hat',
      summary: "A very  popular and chic hat in New York at the moment.",
      release: "April 15, 2015",
      material: "Cotton",
      ranking: "Worldwide Ranking: #5",
      price: "125.00",
      image: [
        "../Images/featherhat.jpg"
      ],
      reviews: [{
        stars: 5,
        body: "This hat is simply fantastic. Oliver has somehow outdone himself, yet again. How do you it Mr. Chen!?!",
        author: "paichunma@uml.com",
        createdOn: 1430055641017
      }, {
        stars: 5,
        body: "Words cannnot describe how happy I am with this product. Thank you Ochen Fashion.",
        author: "morrisjschwartz@college.com",
        createdOn: 1430055641017
      }]
    },
  ];
})();