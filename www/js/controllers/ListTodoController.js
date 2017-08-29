module.controller('ListTodoController', function($scope, $rootScope) {
  ons.ready(function() {
    // Init code here
  });
  $scope.list_todo_pending = [
    {
      id: '1',
      name: 'Write 1000 words for WIP',
      category: 'Learning',
      note: 'None',
      highlight: '0',
      priority: '0',
      created_at: '2:20, Tuesday'
    },
    {
      id: '2',
      name: 'Create invoices',
      category: 'Learning',
      note: 'None',
      highlight: '0',
      priority: '0',
      created_at: '2:20, Tuesday'
    },
    {
      id: '3',
      name: 'Choose blog post topics for Oct 7th and 9th',
      category: 'Learning',
      note: 'None',
      highlight: '0',
      priority: '0',
      created_at: '2:20, Tuesday'
    },
    {
      id: '4',
      name: 'Sand table - current refurbishing project',
      category: 'Learning',
      note: 'None',
      highlight: '0',
      priority: '0',
      created_at: '2:20, Tuesday'
    },
    {
      id: '5',
      name: 'Prep for lunch',
      category: 'Learning',
      note: 'None',
      highlight: '0',
      priority: '0',
      created_at: '2:20, Tuesday'
    },
    {
      id: '6',
      name: 'Create three new products for website shop',
      category: 'Learning',
      note: 'None',
      highlight: '0',
      priority: '0',
      created_at: '2:20, Tuesday'
    },
    {
      id: '7',
      name: 'Write article',
      category: 'Learning',
      note: 'None',
      highlight: '0',
      priority: '0',
      created_at: '2:20, Tuesday'
    },
    {
      id: '8',
      name: 'Take books to library',
      category: 'Learning',
      note: 'None',
      highlight: '0',
      priority: '0',
      created_at: '2:20, Tuesday'
    },
    {
      id: '9',
      name: 'Choose blog post topics for Oct 7th and 9th',
      category: 'Learning',
      note: 'None',
      highlight: '0',
      priority: '0',
      created_at: '2:20, Tuesday'
    },
    {
      id: '10',
      name: 'Write 1000 words for WIP',
      category: 'Learning',
      note: 'None',
      highlight: '0',
      priority: '0',
      created_at: '2:20, Tuesday'
    }
  ];
  $scope.list_todo_completed = [
    {
      id: '1',
      name: 'Design business cards',
      category: 'Work',
      note: 'None',
      highlight: '0',
      priority: '0',
      created_at: '2:20, Tuesday'
    },
    {
      id: '2',
      name: 'Prepare presentation for lecture',
      category: 'Work',
      note: 'None',
      highlight: '0',
      priority: '0',
      created_at: '2:20, Tuesday'
    },
    {
      id: '3',
      name: 'Write an article about creating habits',
      category: 'Work',
      note: 'None',
      highlight: '0',
      priority: '0',
      created_at: '2:20, Tuesday'
    }
  ];
  $scope.show_detail = function(index){
    $rootScope.current_todo = index;
  }


  $scope.pending = true;


  $scope.amination_right = function($event){
    angular.element($event.target).addClass('hide-children');
    angular.element($event.target).addClass('animation-swipe-right');
  }

  $scope.start = true;
  $scope.progress = 0;
  $scope.timer_start = function(){
    $scope.start = false;
    var second_down = 60;
    // var progress = 0;
    var minute_down = 24;
    $scope.time_down = setInterval(function(){
        second_down--;
        if(second_down == 0){
          minute_down--;
          second_down = 59;
        }
        $scope.progress++;
        if(second_down < 10){
          $('.second').text('0' + second_down);
        } else {
          $('.second').text(second_down);
        }
        $('.minute').text(minute_down);
        if($scope.progress % 15 == 0){
          $('.second').parent().parent().removeClass('p' +($scope.progress/15 -1)).addClass('p'+$scope.progress/15);
        }
    },1000);
  }
  var timer_abandon = function(){
    clearInterval($scope.time_down);
    $('.second').text('00');
    $('.minute').text('25');
    $('.second').parent().parent().removeClass('p' +($scope.progress/15));
  }

  $scope.confirm_abandon = function(material) {
    var mod = material ? 'material' : undefined;
    ons.notification.confirm({
      message: 'You are currently in a pomo, do you really want to abandon?',
      modifier: mod,
      callback: function(idx) {
        switch (idx) {
          case 0:
            // ons.notification.alert({
            //   message: 'You pressed "Cancel".',
            //   modifier: mod
            // });
            break;
          case 1:
            timer_abandon();
            break;
        }
      }
    });
  }

  if(localStorage.getItem("list_todo_pending") != null){
      $scope.list_todo_pending = JSON.parse(localStorage.getItem("list_todo_pending"));
  }
  if(localStorage.getItem("list_todo_completed") != null){
      $scope.list_todo_completed = JSON.parse(localStorage.getItem("list_todo_completed"));
  }
  // localStorage.clear();

  $scope.save_todo = function(app){
    if($('#title-input').val() == ''){
      ons.notification.alert({
        message: 'You must provide todo title',
        modifier: 'material'
      });
    } else {
      var d = new Date();
      // new Date($.now())
      var data = {
        id: $scope.list_todo_pending.length + 1,
        name: $('#title-input').val(),
        category: $('#category-input').val(),
        note: $('#description-input').val(),
        highlight: $('#inner-highlight-input').is(":checked") ? '1' : '0',
        priority: $('#inner-urgent-input').is(":checked") ? '1' : '0',
        created_at: d.getHours() + ":" + d.getMinutes() + ", " + d.getDate() + "-" + d.getMonth()
      };
      // console.log(data);
      $scope.list_todo_pending.unshift(data);
      var strJSON = JSON.stringify($scope.list_todo_pending);
      localStorage.setItem("list_todo_pending", strJSON);
      app.load('home.html');
    }
  }
  $scope.confirm = function(material,dlg,app) {
    var mod = material ? 'material' : undefined;
    ons.notification.confirm({
      message: 'Are you sure you want to delete?',
      modifier: mod,
      callback: function(idx) {
        switch (idx) {
          case 0:
            // ons.notification.alert({
            //   message: 'You pressed "Cancel".',
            //   modifier: mod
            // });
            break;
          case 1:
            // $scope.dialogs[dlg].hide();
            $scope.list_todo_pending.splice($rootScope.current_todo,1);
            var strJSON = JSON.stringify($scope.list_todo_pending);
            localStorage.setItem("list_todo_pending", strJSON);
            // window.location.reload();
            app.load('home.html');
            break;
        }
      }
    });
  }
  $scope.update_todo = function(app){
    if($('#title-input').val() == ''){
      ons.notification.alert({
        message: 'You must provide todo title',
        modifier: 'material'
      });
    } else {
      var d = new Date();
      // new Date($.now())
      var data = {
        id: $scope.list_todo_pending.length + 1,
        name: $('#title-input').val(),
        category: $('#category-input').val(),
        note: $('#description-input').val(),
        highlight: $('#inner-highlight-input').is(":checked") ? '1' : '0',
        priority: $('#inner-urgent-input').is(":checked") ? '1' : '0',
        created_at: d.getHours() + ":" + d.getMinutes() + ", " + d.getDate() + "-" + d.getMonth()
      };
      // console.log(data);
      $scope.list_todo_pending[$rootScope.current_todo] = data;
      var strJSON = JSON.stringify($scope.list_todo_pending);
      localStorage.setItem("list_todo_pending", strJSON);
      app.load('home.html');
    }
  }
  $scope.change_complete_todo = function(app){
    $scope.list_todo_completed.unshift($scope.list_todo_pending[$rootScope.current_todo]);
    var strJSON_1 = JSON.stringify($scope.list_todo_completed);
    localStorage.setItem("list_todo_completed", strJSON_1);

    $scope.list_todo_pending.splice($rootScope.current_todo,1);
    var strJSON_2 = JSON.stringify($scope.list_todo_pending);
    localStorage.setItem("list_todo_pending", strJSON_2);
    app.load('home.html');
  }
  $scope.loadPage = function(){
    window.location.reload();
  }

  $scope.dialogs = {};

  $scope.show = function(dlg,index) {
    if (!$scope.dialogs[dlg]) {
      ons.createDialog(dlg, {parentScope: $scope}).then(function(dialog) {
        $scope.dialogs[dlg] = dialog;
        dialog.show();
      });
    } else {
      $scope.dialogs[dlg].show();
    }
    $rootScope.current_todo = index;
  }
  $scope.hide = function(dlg){
    $scope.dialogs[dlg].hide();
  }
});
