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