(function() {
  var app = angular.module('dresses', []);

  app.controller('DressController', function() {
    this.products = dresses;
  });

  app.controller("TabController", function() {
    this.tab = 1;

    this.isSet= function(checkTab) {
      return this.tab === checkTab;
    };

    this.setTab = function(onTab) {
      this.tab = onTab;
    };
  });

  app.controller('PictureController', function(){
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

  var dresses = [{
      name: 'Black Mamba Dress',
      summary: "This is the favorite dress of many basketball wives.",
      release: "April 1, 2015",
      material: "Ramie",
      ranking: "Worldwide Ranking: #1",
      price: "240.00",
      image: [
        "../Images/blackdress.jpg"
      ],
      reviews: [{
        stars: 5,
        body: "This dress is simply fantastic. Oliver has somehow outdone himself, yet again. How do you it Mr. Chen!?!",
        author: "paichunma@uml.com",
        createdOn: 1430055641017
      }, {
        stars: 5,
        body: "Words cannnot describe how happy I am with this product. Thank you Ochen Fashion.",
        author: "morrisjschwartz@college.com",
        createdOn: 1430055641017
      }]
    }, {
      name: 'Ocean White Dress',
      summary: "This dress is truly beautiful, and reminiscent of the ocean.",
      release: "April 1, 2015",
      material: "Silk",
      ranking: "Worldwide Ranking: #2",
      price: "330.00",
      image: [
        "../Images/whitedress.jpg"
      ],
      reviews: [{
        stars: 5,
        body: "This dress is simply fantastic. Oliver has somehow outdone himself, yet again. How do you it Mr. Chen!?!",
        author: "paichunma@uml.com",
        createdOn: 1430055641017
      }, {
        stars: 5,
        body: "Words cannnot describe how happy I am with this product. Thank you Ochen Fashion.",
        author: "morrisjschwartz@college.com",
        createdOn: 1430055641017
      }]
    }, {
      name: 'Party Pink Dress',
      summary: "The pink dress is perfect for a party when you want to really stand out.",
      release: "April 1, 2015",
      material: "Cotton",
      ranking: "Worldwide Ranking: #3",
      price: "300.00",
      image: [
        "../Images/pinkdress.jpg"
      ],
      reviews: [{
        stars: 5,
        body: "This dress is simply fantastic. Oliver has somehow outdone himself, yet again. How do you it Mr. Chen!?!",
        author: "paichunma@uml.com",
        createdOn: 1430055641017
      }, {
        stars: 5,
        body: "Words cannnot describe how happy I am with this product. Thank you Ochen Fashion.",
        author: "morrisjschwartz@college.com",
        createdOn: 1430055641017
      }]
    },{
      name: 'Penn Station Purple Dress',
      summary: "Oliver came up with the design for this dress at Penn Station, hence the name.",
      release: "April 1, 2015",
      material: "Wool",
      ranking: "Worldwide Ranking: #4",
      price: "400.00",
      image: [
        "../Images/purpledress.jpg"
      ],
      reviews: [{
        stars: 5,
        body: "This dress is simply fantastic. Oliver has somehow outdone himself, yet again. How do you it Mr. Chen!?!",
        author: "paichunma@uml.com",
        createdOn: 1430055641017
      }, {
        stars: 5,
        body: "Words cannnot describe how happy I am with this product. Thank you Ochen Fashion.",
        author: "morrisjschwartz@college.com",
        createdOn: 1430055641017
      }]
    },{
      name: 'Baruch City Blue Dress',
      summary: "This dress is especially popular among ladies in the Flatiron District of NYC.",
      release: "April 1, 2015",
      material: "Silk",
      field: "Computer Technology",
      ranking: "Worldwide Ranking: #5",
      price: "550.00",
      image: [
        "../Images/bluedress.jpg"
      ],
      reviews: [{
        stars: 5,
        body: "This dress is simply fantastic. Oliver has somehow outdone himself, yet again. How do you it Mr. Chen!?!",
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