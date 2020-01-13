import React from 'react'


interface PropsFunction{
    upClick : any,
    downClick : any,
}

class Arrowbox extends React.Component<PropsFunction>{
    render(){
        return(
        <div>
            <button value="위로" onClick={this.props.upClick}>+</button>
            <button value="아래로" onClick={this.props.downClick}>-</button>
        </div>
        );
    }
}

export default Arrowbox