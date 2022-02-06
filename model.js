window.onload = function(){

    var $tableElements = document.getElementsByTagName('td');
    //順番を制御するための変数
    let order = true; //trueは黒（先行）
    let othelloWhte = '◯';
    let othelloBlack = '●';
    let othelloColor = othelloBlack;
  
    //tableの全てにclickイベントを付与する
    for (let $i=0; $i < $tableElements.length; $i++) {
      $tableElements[$i].addEventListener('click', function(){
        //配列に変換する
        let tableElements = [].slice.call($tableElements);
        //クリックした位置の取得
        let index = tableElements.indexOf(this);
        putOthello(index);
        changeOrder();
      });
    }
  
    function putOthello(index) {
      $tableElements[index].innerHTML = othelloColor;
    }
    //順番の判別する
    function changeOrder() {
      if (order) {
        othelloColor = othelloWhte;
        order = false;
      } else {
        othelloColor = othelloBlack;
        order = true;
      }
    }
  }
  