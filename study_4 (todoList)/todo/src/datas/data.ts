
// interface Task {
//     id : number ,
//     complate : boolean,
//     taskName : string,
//     createDate : Date
// }

export default class Todo {
    id: number;
    complate: boolean;
    title : string;
    createDate: Date;

    constructor(title : string, createDate : Date){
        this.complate = false;
        this.title = title;
        this.createDate = createDate;
        this.id = 0;
    }
}