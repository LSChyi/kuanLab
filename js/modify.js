angular.module('modify', [])
    .controller('modifyCtrl', function($scope, $http) {
        $scope.members = [];
        
        $scope.retrieve_data = function() {
            $http.get('data/members.html')
                .success(function(res) {
                    $scope.members = res;
                })
                .error(function() {
                    alert("錯誤發生, 請聯絡管理員")
                })
        }

        $scope.add_member = function() {
            $scope.members.push({
                name: "",
                img: ""
            })
        }

        $scope.delete_member = function(member) {
            var index = $scope.members.indexOf(member);
            $scope.members.splice(index, 1);
        }

        $scope.output = function(type) {
            var content = "data:text/csv;charset=utf-8,";
            var link = document.createElement("a");
            switch (type) {
                case 'members':
                    link.setAttribute("download", "members.html");
                    content += angular.toJson($scope.members);
                    break;
            }

            var encodedUri = encodeURI(content);
            link.setAttribute("href", encodedUri);
            link.click();
        }
    })
