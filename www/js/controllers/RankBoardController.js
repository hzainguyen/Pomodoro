module.controller('RankBoardController', function($scope, $rootScope) {
  ons.ready(function() {
    // Init code here
  });
  $scope.list_ranks = [
    {
      rank: '1',
      name: 'Nguyễn Lê Hải',
      address: 'Thanh Hóa',
      avatar: 'image/rank-1.jpg',
      phone_number: '01676824296',
      gmail: 'haithangtho@gmail.com'
    },
    {
      rank: '2',
      name: 'Nguyễn Van A',
      address: 'TP. Hồ Chí Minh',
      avatar: 'image/rank-2.jpg',
      phone_number: '01676824296',
      gmail: 'aaa@gmail.com'
    },
    {
      rank: '3',
      name: 'Nguyễn Van B',
      address: 'Hải Dương',
      avatar: 'image/rank-3.jpg',
      phone_number: '01676824296',
      gmail: 'bbb@gmail.com'
    },
    {
      rank: '4',
      name: 'Nguyễn Văn C',
      address: 'Vĩnh Phúc',
      avatar: 'image/rank-1.jpg',
      phone_number: '01676824296',
      gmail: 'ccc@gmail.com'
    },
    {
      rank: '5',
      name: 'Nguyễn Van D',
      address: 'Hải Phòng',
      avatar: 'image/rank-2.jpg',
      phone_number: '01676824296',
      gmail: 'ddd@gmail.com'
    },
    {
      rank: '6',
      name: 'Nguyễn Quốc Khánh',
      address: 'Đà Nẵng',
      avatar: 'image/rank-3.jpg',
      phone_number: '01676824296',
      gmail: 'ddd@gmail.com'
    },
    {
      rank: '7',
      name: 'Nguyễn Thùy Linh',
      address: 'Nha Trang',
      avatar: 'image/rank-1.jpg',
      phone_number: '01676824296',
      gmail: 'ddd@gmail.com'
    },
    {
      rank: '8',
      name: 'Nguyễn Xuân Đức',
      address: 'TP. Hồ Chí Minh',
      avatar: 'image/rank-2.jpg',
      phone_number: '01676824296',
      gmail: 'ddd@gmail.com'
    },
    {
      rank: '9',
      name: 'Nguyễn Thanh Tùng',
      address: 'Thái Bình',
      avatar: 'image/rank-3.jpg',
      phone_number: '01676824296',
      gmail: 'ddd@gmail.com'
    },
    {
      rank: '10',
      name: 'Nguyễn Văn Z',
      address: 'Thái Bình',
      avatar: 'image/rank-1.jpg',
      phone_number: '01676824296',
      gmail: 'ddd@gmail.com'
    }
  ];

  // $scope.current_people = 0;
  $scope.show_detail = function(index){
    $rootScope.current_people = index;
  }

  $scope.list_private_rank = [
    {
      name: "Rank Group 1",
      number_member: '4'
    },
    {
      name: 'Rank Group 2',
      number_member: '3'
    }
  ];
});
