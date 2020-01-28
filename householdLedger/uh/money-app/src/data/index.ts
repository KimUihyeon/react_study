import { MenuItem, IMenuItem } from "../interfacies";

let instance;

class MaterData {
    menuItems : IMenuItem[]

    constructor(){
        this.menuItems = this.getMenuItems()
    }

    getMenuItems = () : IMenuItem[] =>{
        let menus :IMenuItem[] = [];
        menus.push(new MenuItem(0,'menu1','/main',''));
        menus.push(new MenuItem(1,'menu2','/form',''));
        menus.push(new MenuItem(2,'menu3','/setting',''));
        menus.push(new MenuItem(3,'menu4','/c',''));
        return menus;
    }
}


if (instance === undefined || instance === null){
    instance = new MaterData()
}

export let masterData = instance;