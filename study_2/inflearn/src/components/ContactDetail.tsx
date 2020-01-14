import React from "react";
import Member from '../datas/Datas';


class ContactDetail extends React.Component<{Member : Member, IsSelected : boolean , OnRemove: any}>{

    static defaultProps = {
        Member : new Member(),
        IsSelected : false,
        OnRemove : () => console.log(`error`),
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

                <div>
                    <button onClick={(e)=>{return this.props.OnRemove(e,this.props.Member.key)}}>삭제</button>
                    <button onClick={this.props.OnRemove}>수정</button>
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