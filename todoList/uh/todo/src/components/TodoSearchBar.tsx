import React from "react";
import '../styles/App.css';


interface TodoSearchBarParam{
    keyword : string ,
    onChange  : any,
    onKeyDown : any,
}

class TodoSearchBar extends React.Component<TodoSearchBarParam>{
    

    render(){
        return(
            <div>
              <input type="text" name='searchBar' className='input search-input'
                value={this.props.keyword} 
                onChange={this.props.onChange} 
                onKeyDown={this.props.onKeyDown} />
            </div>
        )
    }
}


export default TodoSearchBar