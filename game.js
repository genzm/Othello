window.onload=function(){

    const othelloWhite='⚪';
    const othelloBlack='⚫';

    let order=true; //順番 今回はtrueなら黒
    let   othelloColor=othelloBlack; //現在の順番の色
    let   latticeElements=document.getElementsByTagName('td'); //盤要素

    //盤にクリックイベントを作成
    for(let i=0; i < latticeElements.length; i++) {
        latticeElements[i].addEventListener('click', function(){
            let NowlatticeElements=[].slice.call(latticeElements); //latticeElementsを配列にする
            let index=NowlatticeElements.indexOf(this);
            putOthello(index);
            changeOrder();
        })
    }

    function putOthello(index) {
        latticeElements[index].innerHTML=othelloColor;
    }

    function changeOrder(){
        if(order){
            othelloColor=othelloWhite;
            order=false;
        }
        else{
            othelloColor=othelloBlack;
            order=true;
        }
    }
}