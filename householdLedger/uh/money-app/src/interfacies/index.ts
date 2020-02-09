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
    category : string,
    paymentType : IPayment | undefined | null,
    createDate : Date ;
}

export interface Type {
    id : number,
    
}

export interface ICategory {
    id : number ;   
    tihle : string,
}

export interface ICard{
    id : number;
    cardNumber : number[],
    bankName : string,
}


export interface IPayment extends ICard{
    type : string ,
}