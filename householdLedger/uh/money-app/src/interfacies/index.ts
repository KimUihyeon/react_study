export interface IMenuItem{
    id : number,
    active : boolean,
    name : string,
    icon : string,
    url : string
}


export interface IMoney{
    id : number;
    title : string;
    type : string;
    amount : number;
    createDate : Date ;
}

export interface Type {
    id : number,
    
}

export interface ICategory {
    id : number ;   
}

export interface ICard{
    id : number;
    cardNumber : number[],
    bankName : string,
}
