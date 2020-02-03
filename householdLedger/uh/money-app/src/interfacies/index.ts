export interface IMenuItem{
    id : number,
    active : boolean,
    name : string,
    icon : string,
    url : string
}


export class MenuItem implements IMenuItem{
    id: number;    
    active: boolean;
    name: string;
    icon: string;
    url : string;
    constructor(id,name,url,icon){
        this.id = id;
        this.name = name;
        this.icon = icon;
        this.active = false;
        this.url = url;
    }
}

///-----

export interface IMoney{
    id : number;
    title : string;
    price : number;
}


export class Money implements IMoney{
    id: number;   
    title: string;
    price: number;

    constructor(id = 0,title,price){
        this.id = id;
        this.title = title;
        this.price = price;
    }
}