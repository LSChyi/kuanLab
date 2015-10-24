angular.module('modify', [])
    .controller('modifyCtrl', function($scope, $http) {
        $scope.members = [];
        $scope.about = {};

        $scope.init_modify = function() {
            $('.menu .item').tab();
        }

        $scope.retrieve_members = function() {
            $http.get('data/members.html')
                .success(function(res) {
                    $scope.members = res;
                })
                .error(function() {
                    alert("取得成員資料錯誤發生, 請聯絡管理員")
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
                case 'about':
                    link.setAttribute("download", "about.html");
                    var about = angular.copy($scope.about);
                    about.teacher.resume.experience = about.teacher.resume.experience.split("\n");
                    about.teacher.resume.speciality = about.teacher.resume.speciality.split("\n");
                    about.teacher.resume.course = about.teacher.resume.course.split("\n");
                    about.teacher.resume.research = about.teacher.resume.research.split("\n");
                    content += angular.toJson(about);
                    break;
            }

            var encodedUri = encodeURI(content);
            link.setAttribute("href", encodedUri);
            link.click();
        }

        $scope.retrieve_about = function() {
            $http.get('data/about.html')
                .success(function(res) {
                    $scope.about = res;
                    $scope.about.teacher.resume.experience = $scope.about.teacher.resume.experience.toString().replace(/,/g, "\n");
                    $scope.about.teacher.resume.speciality = $scope.about.teacher.resume.speciality.toString().replace(/,/g, "\n");
                    $scope.about.teacher.resume.course = $scope.about.teacher.resume.course.toString().replace(/,/g, "\n");
                    $scope.about.teacher.resume.research = $scope.about.teacher.resume.research.toString().replace(/,/g, "\n");
                })
                .error(function() {
                    alert("去得about頁面資料發生錯誤，請聯絡管理員")
                })
        }
    })
