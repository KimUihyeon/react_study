import React from 'react'




interface Temp{
    name : number,
    handleUpclick : any
}


class MyComponent extends React.Component<Temp>{
    static defaultProps = {
        name : -999
    };



    render(){
    return(
        <div>
            <div>몇번 누르심 ? <i>{this.props.name}</i></div>
            <div>
                <button onClick={this.props.handleUpclick}>+</button>
            </div>
        </div>);
    }
}




export default MyComponent;