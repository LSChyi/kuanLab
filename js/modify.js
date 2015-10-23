angular.module('modify', [])
    .controller('modifyCtrl', function($scope) {
        $scope.members = [{
            name: '劉冠妤',
            img: 'img/kuan.jpg'
        }];

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
