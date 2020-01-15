import React from "react";


interface TodoSearchBarParam{
    keyword : string ,
    onChange  : any,
    onKeyDown : any,
}

class TodoSearchBar extends React.Component<TodoSearchBarParam>{
    

    render(){
        return(
            <div>
              <input type="text" name='searchBar'
                value={this.props.keyword} 
                onChange={this.props.onChange} 
                onKeyDown={this.props.onKeyDown} />
            </div>
        )
    }
}


export default TodoSearchBar