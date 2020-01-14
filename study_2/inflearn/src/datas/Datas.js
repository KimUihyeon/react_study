class Member {
    constructor(name , tel , address){
        this.name = name;
        this.tel = tel;
        this.address = address;
        this.key = 0 ;
    }
}

class Database {

    getMemberList(){
        let members = [];

        for(let i =0 ;i < 10 ; i++){
            let member = new Member(`name ${i}` , `010-0000-000${i}` , `주소 ${i}`);
            member.key = i;
            members.push(member);
        }

        return members;
    }
}



export const database = new Database();
export default Member;