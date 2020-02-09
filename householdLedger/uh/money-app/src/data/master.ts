import { IMenuItem , IMoney, IPayment } from "../interfacies";
import { PaymentTypes } from '../data/enums';

export const Categories = ['교육비','커피값','라이센스비용','적금','월세','통신비'];

class PaymentMasterFactory {
    defaultCardDatas : IPayment[] = [
        {
            id : -2,
            type : PaymentTypes[PaymentTypes.NONE],
            bankName : '전체보기',
            cardNumber : [], 
        },
        {
            id : -1,
            type : PaymentTypes[PaymentTypes.현금],
            bankName : '현금',
            cardNumber : [], 
        },
    ]
    
    cardDatas : IPayment[] = [
        {
            id : 1,
            type : PaymentTypes[PaymentTypes.카드],
            bankName : '우리은행 체크카드',
            cardNumber : [3444,1245,1234,5458], 
        },
        {
            id : 2,
            type : PaymentTypes[PaymentTypes.카드],
            bankName : '카카오뱅크',
            cardNumber : [6862,6990,1234,5888], 
        }
    ]
}



export const PaymentMaster = (): IPayment[]=>  {
    let a = new PaymentMasterFactory();
    return [...a.defaultCardDatas, ...a.cardDatas];
}


export class MaterData {
    moneyItems : IMoney[];


    constructor(){
        this.moneyItems = this.getMoneys().sort((a,b)=>a.createDate < b.createDate ? -1 : 0 );
    }

    getMoneys = () : IMoney[] =>{
        let moneys : IMoney[] = [];

        for(let i = 0; i< 30 ; i++){
            let type = Math.floor(Math.random() * 2) === 0 ? '지출' : '수입';
            let amount = Math.floor( Math.random() * 1000 ) * Math.pow(10 , Math.floor( Math.random() * 3 ) + 3);
            let category = Categories[Math.floor(Math.random() * Categories.length)];
            let paymentType = PaymentMaster().filter(t=>t.bankName.indexOf('전체') === -1)[Math.floor(Math.random() * 3)];  

            let nowDate = new Date;
            let createDate = new Date(`${nowDate.getFullYear()}-${nowDate.getMonth()+1}-${nowDate.getDate() - Math.floor(Math.random() * 3)}`);

            let prefix = type === '지출' ? '쓴' : '번';

            let money : IMoney = {
                id : i, 
                title : `${prefix} 돈${i}`,
                createDate,
                category,
                paymentType,
                type, 
                amount
            };
            moneys.push(money);
        }
        return moneys;
    }
}