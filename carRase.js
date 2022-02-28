var car = {
  fuel: Math.ceil(Math.random() * 10 + 10), //연료
  power: Math.ceil(Math.random() * 3 + 20), //연비
  moved: 0,
  run: function () {
    var km = Math.ceil(Math.random() * 6);
    var wasteFuel = km / this.power;
    if (this.fuel < wasteFuel) {
      console.log('이동 불가');
      return;
    }
    this.fuel -= wasteFuel;
    this.moved += km;
    console.log(km + 'km 이동 (총 ' + this.moved + 'km)');
  },
};

//위의 코드를 클로저로 보호해주자!
var createCar = function () {
  var fuel = Math.ceil(Math.random() * 10 + 10);
  var power = Math.ceil(Math.random() * 3 + 20);
  var moved = 0;
  return {
    //객체를 리턴
    get moved() {
      return moved;
    },
    run: function () {
      var km = Math.ceil(Math.random() * 6);
      var wasteFuel = km / this.power;
      if (this.fuel < wasteFuel) {
        console.log('이동 불가');
        return;
      }
      fuel -= wasteFuel;
      moved += km;
      console.log(
        km + 'km 이동 (총 ' + this.moved + 'km). 남은 연료 : ' + fuel
      );
    },
  };
};
var car = createCar();
