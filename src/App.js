import React, { Component } from 'react';
import './App.css';
import Employee from './Employee';
import axios from 'axios';



class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      employee: []
     }
}
  componentWillMount() {
    this.getData()
  }

  getData = () => {
    axios.get('http://dummy.restapiexample.com/api/v1/employees')
    .then(
      response=>{
        this.setState({employee: response.data.data})
        console.log(this.state.employee);
    }, error=>{
        console.error(error);
    }
    )
  }
  getEmployee = () => {
    console.log("hii");
    return this.state.employee.map(emp => {
      return (
        <Employee
        key = {emp.id}
        id = {emp.id}
        name = {emp.employee_name}
        salary = {emp.employee_salary}
        age = {emp.employee_age}
        ></Employee>
      )
    })
  }
  render() {
  return (
    <div className="App">
    <table border="1">
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Salary</th>
          <th>Age</th>
        </tr>
      </thead>
      <tbody>
        {this.getEmployee()}
      </tbody>
    </table>
    </div>
  );
  }
}

export default App;
