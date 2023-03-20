let Timer = function (this: TimerFunc) {
  let _this = this; //現在のthisを退避
  _this.timer = 0;

  //1000ミリ秒間隔でtimerプロパティをインクリメント
  setInterval(function () {
    _this.timer++;
  }, 1000);
};

let TimerArrow = function (this: TimerFunc) {
  this.timer = 0;
  setInterval(() => {
    this.timer++;
  }, 1000);
};
type TimerFunc = {
  timer: number;
  setInterval(): void;
};
