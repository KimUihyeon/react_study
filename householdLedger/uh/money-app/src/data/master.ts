import { MenuItem, IMenuItem , IMoney ,Money } from "../interfacies";


export class MaterData {
    menuItems : IMenuItem[];
    moneyItems : IMoney[];

    constructor(){
        this.menuItems = this.getMenuItems();
        this.moneyItems = this.getMoneys();
        console.log('MaterData constructor')
    }

    getMenuItems = () : IMenuItem[] =>{
        let menus :IMenuItem[] = [];
        menus.push(new MenuItem(0,'menu1','/main',''));
        menus.push(new MenuItem(1,'menu2','/form',''));
        menus.push(new MenuItem(2,'menu3','/setting',''));
        menus.push(new MenuItem(3,'menu4','/c',''));
        return menus;
    }


    getMoneys = () : IMoney[] =>{
        let moneys : IMoney[] = [];

        for(let i = 0; i< 30 ; i++){
            let type = Math.floor(Math.random() * 2) === 0 ? '지출' : '수입';
            let price = Math.floor( Math.random() * 1000 ) * Math.pow(10 , Math.floor( Math.random() * 3 ) + 3);
            
            let prefix = type === '지출' ? '쓴' : '번';
            let money: Money = new Money(i, `${prefix} 돈${i}` , price, type);
            moneys.push(money);
        }
        return moneys;
    }
}