angular.module('modify', [ '720kb.datepicker', 'myDropdown' ])
    .controller('modifyCtrl', function($scope, $http) {
        $scope.home = {};
        $scope.members = [];
        $scope.courses = [];
        $scope.about = {};
        $scope.publications = [];
        $scope.projects = [];

        $scope.init_modify = function() {
            $('.menu .item').tab();
            $('.ui.dropdown').dropdown();
            $scope.retrieve_about();
            $scope.retrieve_members();
            $scope.retrieve_courses();
            $scope.retrieve_home();
            $scope.retrieve_publication();
            $scope.retrieve_project();
        }

        $scope.retrieve_home = function() {
            $http.get('data/home.html')
                .success(function(res) {
                    $scope.home = res;
                })
                .error(function() {
                    alert("取得首頁資料錯誤發生, 請聯絡管理員");
                })
        }

        $scope.retrieve_members = function() {
            $http.get('data/members.html')
                .success(function(res) {
                    $scope.members = res;
                })
                .error(function() {
                    alert("取得成員資料錯誤發生, 請聯絡管理員");
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
                case 'home':
                    link.setAttribute("download", "home.html");
                    content += angular.toJson($scope.home);
                    break;
                case 'members':
                    link.setAttribute("download", "members.html");
                    content += angular.toJson($scope.members);
                    break;
                case 'about':
                    link.setAttribute("download", "about.html");
                    var about = angular.copy($scope.about);
                    about.teacher.resume.experience = about.teacher.resume.experience.split("\n");
                    about.teacher.resume.speciality = about.teacher.resume.speciality.split("\n");
                    about.teacher.resume.research = about.teacher.resume.research.split("\n");
                    content += angular.toJson(about);
                    break;
                case 'courses':
                    link.setAttribute("download", "courses.html");
                    content += angular.toJson($scope.courses);
                    break;
                case 'publications':
                    link.setAttribute("download", "publication.html")
                    var publications = angular.copy($scope.publications);
                    for(var i = 0; i < publications.length; ++i) {
                        for(var j = 0; j < publications[i].sub_categories.length; ++j) {
                            publications[i].sub_categories[j].content = publications[i].sub_categories[j].content.split("\n");
                        }
                    }
                    content += angular.toJson(publications);
                    break;
                case 'projects':
                    link.setAttribute("download", "projects.html")
                    content += angular.toJson($scope.projects);
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
                    $scope.about.teacher.resume.research = $scope.about.teacher.resume.research.toString().replace(/,/g, "\n");
                })
                .error(function() {
                    alert("取得about頁面資料發生錯誤，請聯絡管理員");
                })
        }

        $scope.retrieve_courses = function() {
            $http.get('data/courses.html')
                .success(function(res) {
                    $scope.courses = res;
                })
                .error(function() {
                    alert("取得about頁面資料發生錯誤，請聯絡管理員");
                })
        }

        $scope.add_course = function() {
            $scope.courses.push({
                name: "",
                description: ""
            })
        }

        $scope.delete_course = function(course) {
            var index = $scope.courses.indexOf(course);
            $scope.courses.splice(index, 1);
        }

        $scope.retrieve_publication = function() {
            $http.get('data/publication.html')
                .success(function(res) {
                    $scope.publications = res;
                    for(var i = 0; i < $scope.publications.length; ++i) {
                        for(var j = 0; j < $scope.publications[i].sub_categories.length; ++j) {
                            $scope.publications[i].sub_categories[j].content = $scope.publications[i].sub_categories[j].content.join(";").replace(/;/g, "\n");
                        }
                    }
                })
                .error(function() {
                    alert('取得著作失敗，請聯絡管理員');
                })
        }

        $scope.add_publication_category = function() {
            $scope.publications.push({
                type: "",
                sub_categories: []
            });
        }

        $scope.delete_publication_category = function(category) {
            var index = $scope.publications.indexOf(category);
            $scope.publications.splice(index, 1);
        }

        $scope.add_publication_sub_category = function(category) {
            category.sub_categories.push({});
        }

        $scope.delete_publication_sub_category = function(sub_categories, sub_category) {
            var index = sub_categories.indexOf(sub_category);
            sub_categories.splice(index, 1);
        }

        $scope.retrieve_project = function() {
            $http.get('data/projects.html')
                .success(function(res) {
                    $scope.projects = res;
                })
                .error(function() {
                    alert('取得專案資料錯誤，請聯絡管理員');
                })
        }

        $scope.add_project = function() {
            $scope.projects.push({});
        }

        $scope.delete_project = function(project) {
            var index = $scope.projects.indexOf(project);
            $scope.projects.splice(index, 1);
        }
    })
