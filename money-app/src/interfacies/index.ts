/**
 * 작성자 : 김의현
 * 작성일시 : 2020.02.05
 */


export interface IMenuItem{
    id : number,
    active : boolean,
    name : string,
    icon : string,
    url : string
}


export interface IMoney{
    id : number;

    /**
     * title : string
     * 가계부 이름
     */
    title : string;
    
    /**
     * type : string
     * ('지출','수입')
     */
    type : string;   

    /**
     * amount : number 
     * (사용한돈) -> 원 
     */
    amount : number;

    /**
     * category : String 
     * (교통비, 학원비, 통신비 ..)
     * 사용한 항목
     */
    category : string,

    /**
     * paymentType : IPayment Object Type 
     * (현금, 카드)
     */
    paymentType? : IPayment | undefined | null,

    /**
     * createDate : Date
     * 생성일
     */
    createDate : Date;

    /**
     * 사용일  (현재 미 사용중)
     */
    useDate? : Date | undefined;
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