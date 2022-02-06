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
            console.log(NowlatticeElements);
            console.log(index);
            //console.log(latticeElements[32].innerHTML);
            //console.log(latticeElements[32].innerHTML=='');
            console.log(othelloColor);
            putOthello(index);
            changeOthello(index);
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

    function changeOthello(index){
        let leftSideNum  = Math.floor(index/8)*8;
        let rightSideNum = leftSideNum+7;
        let upSideNum    = index%8;
        let downSideNum  = upSideNum+56;

        let leftOthello  =latticeElements[index-1].innerHTML;
        let rightOthello =latticeElements[index+1].innerHTML;
        let upOthello    =latticeElements[index-8].innerHTML;
        let downOthello  =latticeElements[index+8].innerHTML;

        //左の処理
        if(leftOthello!=othelloColor && leftOthello!=''){
            for(let i=2; index-i>=leftSideNum; i++){
                if(latticeElements[index-i].innerHTML==othelloColor){
                    const NowNum=index-i;
                    for(let j=1; index-j>NowNum;j++){
                        putOthello(index-j);
                    }
                }
            }
        }
        //右の処理
        if(rightOthello!=othelloColor && rightOthello!=''){
            for(let i=2; index+i<=rightSideNum; i++){
                if(latticeElements[index+i].innerHTML==othelloColor){
                    const NowNum=index+i;
                    for(let j=1; index+j<NowNum;j++){
                        putOthello(index+j);
                    }
                }
            }
        }
        //上の処理
        if(upOthello!=othelloColor && upOthello!=''){
            for(let i=2; index-i*8>=upSideNum; i++){
                if(latticeElements[index-i*8].innerHTML==othelloColor){
                    const NowNum=index-i*8;
                    for(let j=1; index-j*8>NowNum;j++){
                        putOthello(index-j*8);
                    }
                }
            }
        }
        //下の処理
        if(downOthello!=othelloColor && downOthello!=''){
            for(let i=2; index+i*8<=downSideNum; i++){
                if(latticeElements[index+i*8].innerHTML==othelloColor){
                    const NowNum=index+i*8;
                    for(let j=1; index+j*8<NowNum;j++){
                        putOthello(index+j*8);
                    }
                }
            }
        }

    }
}