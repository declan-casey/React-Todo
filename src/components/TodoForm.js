import React from 'react'

class ListForm extends React.Component {
    constructor(){
        super();
        this.state = {
          inputValue : ""
        }
      }
    
      handleChanges = e => {
        this.setState({
          inputValue: e.target.value
        });
      };

      handleSubmit = (e) => {
          e.preventDefault();
          this.props.handleChoreAdd(this.state.inputValue);
          this.setState({
              inputValue:""
          });
          console.log(this.props.chores)
      }

      render(){
          return(
        <form onSubmit = {this.handleSubmit}>
            <input value = {this.state.inputValue} onChange = {this.handleChanges} type = "text" name = "b" placeholder = "Add Chore..."></input>
            <button>Add</button>
        </form>
          )
      }
}

export default ListForm;