import React from 'react';
import logo from './logo.svg';
import Member , { database } from "./datas/Datas";
import ContactInfo from "./components/ContactInfo";
import ContactDetail from "./components/ContactDetail";
import './App.css';


class App extends React.Component {

  state : {
    searchKeyword: string,
    addKeyword: string,
    selectedKey : number,
    Members : Member[]
  }

  constructor(props : any){
    super(props);
    this.state = {
      addKeyword: '',
      searchKeyword : '',
      selectedKey : -1,
      Members : database.getMemberList()
    }
  }

  

  handleSearchKeywordChange = (e : any)=>{

    this.setState({
      ...this.state, 
      searchKeyword : e.target.value,
    })

  }


  handleAddKeywordChange = (e : any) =>{

    this.setState({
      addKeyword : e.target.value
    })
  }

  handleRemoveMemberClick = (e : any , key :number)=>{
    if(key !== -1 ){
      console.log(key);
      let Members = this.state.Members.slice(key,1);
      console.log(Members)
      this.setState({
        Members : Members
      })

    }
  }

  handleEnterKeyPress = (e : any)=>{
    if(this.state.addKeyword !== '' && e.keyCode == 13){
      let lastData = [...this.state.Members].reverse()[0];
      let newName = this.state.addKeyword;

      let newMember = new Member(newName,'1','new Address');
      newMember.key =lastData.key +1;
      
      this.setState({
        addKeyword : '',
        Members : this.state.Members.concat(newMember),
      })
      e.target.value= '';
    }
  }

  handleClick = (key : number)=>{
    this.setState({
      selectedKey : key
    });
  }


  render(){

    const mapToComponents = (members : Member[]) =>{

      members.sort();
      members = members.filter((member)=>{
        return member.name.indexOf(this.state.searchKeyword) > -1;
      })
      return members.map((member : Member ,i : any)=>{
        return (
          <ContactInfo  Member={member} onClick={()=>this.handleClick(member.key)}></ContactInfo>
        )
      })
    }

    const findMember = (key : number) =>{
      let selectedMember = this.state.Members.filter((member)=>member.key === key )[0];
      return  selectedMember;
    }

    return(
      <div>
        <div>
          <label>검색 : </label><input onChange={(e)=>(this.handleSearchKeywordChange(e))} ></input>
        </div>
        <div>
          <label>추가 : </label><input onChange={(e)=>(this.handleAddKeywordChange(e))} onKeyDown={(e)=>this.handleEnterKeyPress(e)} ></input>
        </div>
        <div>
          {mapToComponents(this.state.Members)}
        </div>
        <hr></hr>
        <div>
          <ContactDetail 
            Member={findMember(this.state.selectedKey)}
            IsSelected={this.state.selectedKey !== -1} 
            OnRemove={this.handleRemoveMemberClick}></ContactDetail>
        </div>
      </div>
    )
  }
}


export default App;
