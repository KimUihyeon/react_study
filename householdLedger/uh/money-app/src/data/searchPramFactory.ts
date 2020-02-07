import urlTypePrams from '../data/urlTypePrams'



export default function searchPramFactory({type} : any){
    return {
        date : getDateRage(type)
    }
}



const getDateRage = ({type}: any) : Date[] =>{
    let startDate : Date = new Date();
    let endDate : Date = new Date();

    switch(type){
        case urlTypePrams[urlTypePrams.month] : {
            return []
        }
        case urlTypePrams[urlTypePrams.today] : {
            startDate = new Date();
            endDate = new Date();
            return [startDate, endDate ];
        }
        default : {
            return []
        }
    }
}