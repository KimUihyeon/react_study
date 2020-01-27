
export interface IMenuItem{
    id : number,
    active : boolean,
    name : string,
    icon : string,
}


export class MenuItem implements IMenuItem{
    id: number;    
    active: boolean;
    name: string;
    icon: string;
    constructor(id,name,icon){
        this.id = id;
        this.name = name;
        this.icon = icon;
        this.active = false;
    }
}