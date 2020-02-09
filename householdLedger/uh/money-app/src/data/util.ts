
function toMoneyFormat(number : number){
    let numberStr : string = number.toString();
    let numberArr = numberStr.split('').reverse();
    let returnArr = [];


    for(let i = 0 ; i <numberArr.length ; ++i){
        if(i%3 ==0 && (i !== numberArr.length-1, i!==0 )){
            returnArr.push(',');
        }
        returnArr.push(numberArr[i]);
    }

    return returnArr.reverse().join('');
}


function toFiexd () {

}

export const util = {
    toMoneyFormat,
    toFiexd,
}
