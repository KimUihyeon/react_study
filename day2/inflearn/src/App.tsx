import React from 'react';
import logo from './logo.svg';
import Member , { database } from "./datas/Datas";
import ContactInfo from "./components/ContactInfo";
import ContactDetail from "./components/ContactDetail";
import './App.css';


class App extends React.Component {

  state : {
    selectedKey : number
    Members : Member[]
  }

  constructor(props : any){
    super(props);
    this.state = {
      selectedKey : -1,
      Members : database.getMemberList()
    }
  }


  handleClick = (key : number)=>{
    console.log(key);
    this.setState({
      selectedKey : key
    });
  }


  render(){

    const mapToComponents = (members : Member[]) =>{
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
          {mapToComponents(this.state.Members)}
        </div>
        <div>
          {this.state.selectedKey}
        </div>
        <hr></hr>
        <div>
          <ContactDetail Member={findMember(this.state.selectedKey)} IsSelected={this.state.selectedKey !== -1} ></ContactDetail>
        </div>
      </div>
    )
  }
}


export default App;
