import React from "react";
import Member from '../datas/Datas';


class ContactDetail extends React.Component<{Member : Member, IsSelected : boolean}>{

    static defaultProps = {
        Member : new Member(),
        IsSelected : false,
    }

    constructor(props : any ){
        super(props);
    }

    render(){
        
        const dateialComponent = (
            <div>
                <h2>선택한 맴버</h2>
                <div>
                    <div>{this.props.Member.key}</div>
                    <div>{this.props.Member.name}</div>
                    <div>{this.props.Member.tel}</div>
                    <div>{this.props.Member.address}</div>
                </div>
            </div>
        );
        const notSelectedComponent = (

            <div>
                <h2>선택한 맴버 없음</h2>
                <div></div>
            </div>
        );

        return (
            <div>
                <div>
                    <div>{this.props.IsSelected ? dateialComponent : notSelectedComponent} </div>
                </div>
            </div>
        )
    }
}


export default ContactDetail;