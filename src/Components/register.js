import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { Component } from 'react';





class Register extends Component {

    constructor() {
      super()
  
      this.state = {
        name : '' ,
        age  : ''
       
  
  
      }
    }
  
     addStudent = ()=>{

        if(this.state.name != '' && this.state.age !='') {
            this.props.addStudent(this.state.name , this.state.age)
        } else {
              alert('please enter empty fields ') 
        }
      ////////////////

        this.setState ({
            name : '' ,
            age : ''
        })

       

        
    }

  render () {
    return (

        <Form  style={{width : "75%" , marginLeft :"15%" ,marginTop : "2%"  }} onSubmit ={(e)=>{
            e.preventDefault()
            this.addStudent()
           


        }}>
            <Form.Group controlId="name">
             
                <Form.Control type="text" placeholder="name"  autoComplete="off" value= {this.state.name}  onChange={(e) => { this.setState({name : e.target.value}) }}/>
         
            </Form.Group>

            <Form.Group controlId="age">
             
                <Form.Control type="number" placeholder="Age" value= {this.state.age}  onChange={(e) => {this.setState({age : e.target.value}) }} />
            </Form.Group>
           
            <Button variant="secondary" type="submit">  Add </Button>
        </Form>
    );

  }




}

export default Register;