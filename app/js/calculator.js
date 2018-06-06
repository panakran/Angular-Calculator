import '../../node_modules/angular-material/angular-material.css';
import '../../app/css/calculator.css';
const template = require('raw-loader!../../app/html/calculator.html');
var app = angular.module('calculator', ['ngMaterial'])
        .directive('calculator', function () {
            return {
                restrict: 'E',
                template: template,
                        controller: 'CalculatorCtrl',
                scope: true
            };
        })
        .controller('CalculatorCtrl', ['$scope', function ($scope) {
                $scope.result = "";
                $scope.calc = "";

                $scope.calcButtons = [

                    {
                        row: [{buttonClass: 'md-raised', content: '7', func: pressed}, {buttonClass: 'md-raised', content: '8', func: pressed}, {buttonClass: 'md-raised', content: '9', func: pressed}, {buttonClass: 'md-raised', content: '*', func: pressed}]
                    },
                    {
                        row: [{buttonClass: 'md-raised', content: '4', func: pressed}, {buttonClass: 'md-raised', content: '5', func: pressed}, {buttonClass: 'md-raised', content: '6', func: pressed}, {buttonClass: 'md-raised', content: '/', func: pressed}]
                    },
                    {
                        row: [{buttonClass: 'md-raised', content: '1', func: pressed}, {buttonClass: 'md-raised', content: '2', func: pressed}, {buttonClass: 'md-raised', content: '3', func: pressed}, {buttonClass: 'md-raised', content: '-', func: pressed}]
                    },
                    {
                        row: [{buttonClass: 'md-raised', content: '0', func: pressed}, {buttonClass: 'md-raised', content: '.', func: pressed}, {buttonClass: 'md-raised', content: 'C', func: clear}, {buttonClass: 'md-raised', content: '+', func: pressed}]
                    }
                ];
                function pressed(char) {

                    if ($scope.calc.endsWith("+") || $scope.calc.endsWith("-") || $scope.calc.endsWith("/") || $scope.calc.endsWith("*")) {
                        if (char >= "0" && char <= "9") {

                            $scope.calc = $scope.calc + char;
                            $scope.result = eval($scope.calc);

                        }
                    } else {
                        $scope.calc = $scope.calc + char;
                        $scope.result = eval($scope.calc);
                    }
                }

                function clear() {
                    $scope.calc = "";
                    $scope.result = "";
                }

            }])
        .service('CalcService', function () {
            this.operation = function (A, operator, B) {

                switch (operator) {
                    case '+':
                        result = A * 1 + B * 1;
                        break;
                    case '-':
                        result = A - B;
                        break;
                    case '/':
                        result = A / B;
                        break;
                    case '*':
                        result = A * B;
                        break;
                }
                return result;
            }
        });