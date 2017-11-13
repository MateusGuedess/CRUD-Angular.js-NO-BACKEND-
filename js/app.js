var mercado = angular.module("mercado", []);

mercado.controller("mercadoController", function($scope) {

    console.log("Working!!");

    $scope.novoItem = {};

    $scope.itemClicado = {};

    $scope.itens = [
        {item: "Arroz", quantidade: "1", marca: "Camil"},
        {item: "Fejão", quantidade: "1", marca: "Pantera"}
    ]

    $scope.salvarItem = function(){
        $scope.itens.push($scope.novoItem);
        $scope.novoItem = {};
    }

    $scope.selecionarItem = function(item){
        console.log(item);
        $scope.itemClicado = item;
    }

    $scope.deletarItem = function(){
        console.log($scope.itens.indexOf($scope.itemClicado));
        $scope.itens.splice($scope.itens.indexOf($scope.itemClicado), 1);
    }

});