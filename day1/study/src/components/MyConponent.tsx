import React from 'react'



class MyComponent extends React.Component<{name : number}>{
    static defaultProps = {
        name : -999
    };

    render(){
    return(<div>몇번 누르심 ? <i>{this.props.name}</i></div>);
    }
}




export default MyComponent;