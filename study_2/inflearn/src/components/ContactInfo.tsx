import React, { Component } from "react";
import Member from "../datas/Datas";


class ContactInfo extends React.Component<{Member : Member, onClick : any}> {

    
    static defaultProps = {
        Member : new Member(),
    }

    constructor(props : any){
        super(props);
    }

    render() {
        return (
            <div onClick={this.props.onClick}> {this.props.Member.name}  ||  {this.props.Member.tel}</div>
        )
    }
}


export default ContactInfo