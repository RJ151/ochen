function CartController($scope) {
    $scope.form = {
        products: [{
            quantity: 1,
            size: 8,
            name: 'Black Mamba Dress',
            cost: 240.00
        },
        {
            quantity: 1,
            size: 7.5,
            name: 'Dazzling Blues',
            cost: 320.00
        },
        {
            quantity: 1,
            size: 7.5,
            name: 'Beach White Hat',
            cost: 150.00
        }
        ]
    };

    $scope.addProduct = function () {
        $scope.form.products.push({
            quantity: 1,
            size: 8,
            name: 'Baruch City Blue Dress',
            cost: 550.00
        });
    },

    $scope.removeProduct = function (index) {
        $scope.form.products.splice(index, 1);
    },

    $scope.total = function () {
        var total = 0;
        angular.forEach($scope.form.products, function (product) {
            total += product.quantity * product.cost;
        });

        return total;
    };
}

/* For account creation */
function validateCtrl($scope) {
    $scope.user = 'Enter user name';
    $scope.email = '';
}