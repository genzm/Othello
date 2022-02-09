window.onload=function(){

    const othelloWhite='⚪';
    const othelloBlack='⚫';

    let   order=true; //順番 今回はtrueなら黒
    let   othelloColor=othelloBlack; //現在の順番の色
    let   latticeElements=document.getElementsByTagName('td'); //盤要素
    let   displayedState=document.getElementById('nowState');
    let   NumbersMessage=document.getElementById('Numbers');
    let   gameState=document.getElementById('WinOrNot');



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
            tellWin();
            changeOrder();
            console.log(othelloColor);

            displayedState.innerText=othelloColor;
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
        //0で初期化
        let leftOthello  =0;
        let rightOthello =0;
        let upOthello    =0;
        let downOthello  =0;    

        //4つ端の処理
        if(index==0){
            leftOthello  =latticeElements[index].innerHTML;
            rightOthello =latticeElements[index+1].innerHTML;
            upOthello    =latticeElements[index].innerHTML;
            downOthello  =latticeElements[index+8].innerHTML;
        }
        else if(index==7){
            leftOthello  =latticeElements[index-1].innerHTML;
            rightOthello =latticeElements[index].innerHTML;
            upOthello    =latticeElements[index].innerHTML;
            downOthello  =latticeElements[index+8].innerHTML;
        }
        else if(index==56){
            leftOthello  =latticeElements[index].innerHTML;
            rightOthello =latticeElements[index+1].innerHTML;
            upOthello    =latticeElements[index-8].innerHTML;
            downOthello  =latticeElements[index].innerHTML;
        }
        else if(index==63){
            leftOthello  =latticeElements[index-1].innerHTML;
            rightOthello =latticeElements[index].innerHTML;
            upOthello    =latticeElements[index-8].innerHTML;
            downOthello  =latticeElements[index].innerHTML;
        }
        //端辺処理
        else if(index%8==0){ //左端にあった場合
            leftOthello  =latticeElements[index].innerHTML;
            rightOthello =latticeElements[index+1].innerHTML;
            upOthello    =latticeElements[index-8].innerHTML;
            downOthello  =latticeElements[index+8].innerHTML;    
    
        }
        else if(index%8==7){ 
            rightOthello =latticeElements[index+1].innerHTML;
            leftOthello  =latticeElements[index-1].innerHTML;
            upOthello    =latticeElements[index-8].innerHTML;
            downOthello  =latticeElements[index+8].innerHTML;    
    
        }
        else if(index<8){
            upOthello    =latticeElements[index].innerHTML;
            leftOthello  =latticeElements[index-1].innerHTML;
            rightOthello =latticeElements[index+1].innerHTML;
            downOthello  =latticeElements[index+8].innerHTML;    
    
        }
        else if(index>55){
            downOthello  =latticeElements[index].innerHTML;
            leftOthello  =latticeElements[index-1].innerHTML;
            rightOthello =latticeElements[index+1].innerHTML;
            upOthello    =latticeElements[index-8].innerHTML;
       
        }
        //それ以外の普通のやつ
        else{
            leftOthello  =latticeElements[index-1].innerHTML;
            rightOthello =latticeElements[index+1].innerHTML;
            upOthello    =latticeElements[index-8].innerHTML;
            downOthello  =latticeElements[index+8].innerHTML;
        }

        console.log(leftSideNum);
        console.log(rightSideNum);
        console.log(upSideNum);
        console.log(downSideNum);
        console.log("leftothello is %s", leftOthello);
        console.log("rightothello is %s", rightOthello);
        console.log("upothello is %s", upOthello);
        console.log("downothello is %s", downOthello);


        //左の処理
        if(leftOthello!=othelloColor && leftOthello!=''){
            for(let i=2; index-i>=leftSideNum; i++){
                if(latticeElements[index-i].innerHTML==''){
                    break; //空白をひっくり返さない
                }
                else if(latticeElements[index-i].innerHTML==othelloColor){
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
                if(latticeElements[index+i].innerHTML==''){
                    break; //空白をひっくり返さない
                }
                else if(latticeElements[index+i].innerHTML==othelloColor){
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
                if(latticeElements[index-i*8].innerHTML==''){
                    break; //空白をひっくり返さない
                }
                else if(latticeElements[index-i*8].innerHTML==othelloColor){
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
                if(latticeElements[index+i*8].innerHTML==''){
                    break; //空白をひっくり返さない
                }
                else if(latticeElements[index+i*8].innerHTML==othelloColor){
                    const NowNum=index+i*8;
                    for(let j=1; index+j*8<NowNum;j++){
                        putOthello(index+j*8);
                    }
                }
            }
        }
    }

    function tellWin(){
        let KuhakuNumber=0;
        let BlackNumber=0;
        let WhiteNumber=0;
        for(let i=0; i<64; i++){
            if(latticeElements[i].innerHTML==''){
                KuhakuNumber++;
            }
            if(latticeElements[i].innerHTML=='⚫'){
                BlackNumber++;
            }
            if(latticeElements[i].innerHTML=='⚪'){
                WhiteNumber++;
            }
        }
        NumbersMessage.innerText='⚫ is'+ BlackNumber+ "⚪ is "+WhiteNumber+"Blank is "+KuhakuNumber;
        if(KuhakuNumber==0){
            if(BlackNumber>WhiteNumber){
                gameState.innerText='Black is Win!';
            }
            if(WhiteNumber>BlackNumber){
                gameState.innerText='White is Win!';
            }
            if(BlackNumber==WhiteNumber){
                gameState.innerText='50-50!';
            }
        }
        else{
            gameState.innerText='Still is Not Finished!'
        }
    }
}