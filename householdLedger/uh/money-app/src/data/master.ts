import { IMenuItem , IMoney, IPayment } from "../interfacies";
import { PaymentTypes } from '../data/enums';


export const PaymentMaster = (): IPayment[]=>  {

    let defaultCardDatas : IPayment[] = [
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


    let cardDatas : IPayment[] = [
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

    return [...defaultCardDatas,...cardDatas];
}

export class MaterData {
    menuItems : IMenuItem[];
    moneyItems : IMoney[];


    constructor(){
        this.menuItems = this.getMenuItems();
        this.moneyItems = this.getMoneys();
        console.log('MaterData constructor')
    }

    getMenuItems = () : IMenuItem[] =>{
        let menus :IMenuItem[] = [
            {
                id : 0,
                name : 'menu1',
                icon : '',
                active : true,
                url : '/main'
            },
            {
                id : 1,
                name : 'menu2',
                icon : '',
                active : true,
                url : '/form'
            },
            {
                id : 2,
                name : 'menu3',
                icon : '',
                active : true,
                url : '/setting'
            },
            {
                id : 4,
                name : 'menu4',
                icon : '',
                active : true,
                url : '/c'
            },
        ];
        return menus;
    }


    getMoneys = () : IMoney[] =>{
        let moneys : IMoney[] = [];

        for(let i = 0; i< 30 ; i++){
            let type = Math.floor(Math.random() * 2) === 0 ? '지출' : '수입';
            let amount = Math.floor( Math.random() * 1000 ) * Math.pow(10 , Math.floor( Math.random() * 3 ) + 3);
            
            let prefix = type === '지출' ? '쓴' : '번';

            let money : IMoney = {
                id : i, 
                title : `${prefix} 돈${i}`,
                createDate : new Date(),
                category : '',
                paymentType : null,
                type, 
                amount
            };
            moneys.push(money);
        }
        return moneys;
    }
}