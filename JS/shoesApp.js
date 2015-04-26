(function() {
  angular.module('shoes', [])
    .controller('ShoeController', function() {
    this.products = [{
      name: 'Dazzling Blues',
      summary: "The Dazzling Blues are great shoes.",
      release: "April 10, 2015",
      material: "Leather",
      ranking: "Worldwide Ranking: #1",
      price: "320.00",
      image: [
        "../Images/blueshoes.jpg"
      ],
      reviews: [{
        stars: 5,
        body: "These shoes are simply fantastic. Oliver has somehow outdone himself, yet again. How do you it Mr. Chen!?!",
        author: "paichunma@uml.com",
        createdOn: 1430055641017
      }, {
        stars: 5,
        body: "Words cannnot describe how happy I am with this product. Thank you Ochen Fashion.",
        author: "morrisjschwartz@college.com",
        createdOn: 1430055641017
      }]
    }, {
      name: 'Silky Black Smooths',
      summary: "The Smooths will make you look and feel stunning.",
      release: "April 10, 2015",
      material: "Leather",
      ranking: "Worldwide Ranking: #2",
      price: "150.00",
      image: [
        "../Images/blackshoes.jpg"
      ],
      reviews: [{
        stars: 5,
        body: "These shoes are simply fantastic. Oliver has somehow outdone himself, yet again. How do you it Mr. Chen!?!",
        author: "paichunma@uml.com",
        createdOn: 1430055641017
      }, {
        stars: 5,
        body: "Words cannnot describe how happy I am with this product. Thank you Ochen Fashion.",
        author: "morrisjschwartz@college.com",
        createdOn: 1430055641017
      }]
    }, {
      name: 'Golden Heels',
      summary: "The Golden Heels are comprised largely of real gold.",
      release: "April 10, 2015",
      material: "Leather",
      ranking: "Worldwide Ranking: #3",
      price: "220.00",
      image: [
        "../Images/goldshoes.jpg"
      ],
      reviews: [{
        stars: 5,
        body: "These shoes are simply fantastic. Oliver has somehow outdone himself, yet again. How do you it Mr. Chen!?!",
        author: "paichunma@uml.com",
        createdOn: 1430055641017
      }, {
        stars: 5,
        body: "Words cannnot describe how happy I am with this product. Thank you Ochen Fashion.",
        author: "morrisjschwartz@college.com",
        createdOn: 1430055641017
      }]
    },{
      name: 'Party Bright Stilettos',
      summary: "The Party Bright Stilettos are good for a wild night out in the city.",
      release: "April 10, 2015",
      material: "Leather",
      ranking: "Worldwide Ranking: #4",
      price: "130.00",
      image: [
        "../Images/whiteshoes.jpg"
      ],
      reviews: [{
        stars: 5,
        body: "These shoes are simply fantastic. Oliver has somehow outdone himself, yet again. How do you it Mr. Chen!?!",
        author: "paichunma@uml.com",
        createdOn: 1430055641017
      }, {
        stars: 5,
        body: "Words cannnot describe how happy I am with this product. Thank you Ochen Fashion.",
        author: "morrisjschwartz@college.com",
        createdOn: 1430055641017
      }]
    },{
      name: 'Classy Cicinnati Reds',
      summary: "The Classy Cincinnati Reds are perfect for any occasion, and provide a chic look.",
      release: "April 10, 2015",
      material: "Leather",
      ranking: "Worldwide Ranking: #5",
      price: "200.00",
      image: [
        "../Images/redshoes.jpg"
      ],
      reviews: [{
        stars: 5,
        body: "These shoes are simply fantastic. Oliver has somehow outdone himself, yet again. How do you it Mr. Chen!?!",
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
  })
  .controller("TabController", function() {
    this.tab = 1;

    this.isSet= function(checkTab) {
      return this.tab === checkTab;
    };

    this.setTab = function(onTab) {
      this.tab = onTab;
    };
  }).controller('PictureController', function(){
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
})();