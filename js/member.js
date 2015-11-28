angular.module('member', [])
    .controller('memberCtrl', function($scope, $http) {
        $scope.visiting_scholars = [];
        $scope.post_docs = [];
        $scope.doctors = [];
        $scope.masters = [];
        $scope.assistants = [];
        $scope.formers = [];
        $scope.none = [];

        $scope.init_member = function() {
            $http.get('data/members.dat')
                .success(function(res) {
                    for(var i = 0; i < res.length; ++i) {
                        switch (res[i].title) {
                            case '訪問學者':
                                $scope.visiting_scholars.push(res[i]);
                                break;
                            case '博士後研究員':
                                $scope.post_docs.push(res[i]);
                                break;
                            case '博士生':
                                $scope.doctors.push(res[i]);
                                break;
                            case '碩士生':
                                $scope.masters.push(res[i]);
                                break;
                            case '專任助理':
                                $scope.assistants.push(res[i]);
                                break;
                            case '畢業成員':
                                $scope.formers.push(res[i]);
                                break;
                            default:
                                $scope.none.push(res[i]);
                        }
                    }
                })
                .error(function() {
                    alert("發生錯誤，請聯絡管理人");
                })
        }
    })