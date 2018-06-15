var myApp = angular.module('myApp', []);
myApp.controller('empctrl', function ($scope, $http)
{
    $scope.emps = ""
    $http.get("/Index/Getemp")
    .then(function (data) {
        alert(data.data);
        $scope.emps = data.data;
      
    }, function (result) {
        //some error
        console.log(result);
    });

});