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
    type : string;
    amount : number;
    createDate : Date;
}


export class Money implements IMoney{
    id: number;   
    title: string;
    type : string;
    amount: number;
    createDate : Date;

    constructor(id = 0, title, amount, type = '지출'){
        this.id = id;
        this.title = title;
        this.type = type;
        this.amount = amount;
        this.createDate = new Date(Date.now());
    }
}