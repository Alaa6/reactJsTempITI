import logo from './logo.svg';
import './App.css';
import Header from './Components/Header'
import { Component } from 'react';
import DB from './db.json';

import NewsList from './Components/newsList'
import Students from './Components/student'
import Register from './Components/register'


class App extends Component {

  constructor() {
    super()

    this.state = {
      /// day 1 
      // i: 0,
      // value: 'Alaa Ashraf',


      // day 2
      //filteredList: DB ,

      db: DB.students,
      newDB : DB.students
     


    }
  }



  // day 2


  // filteredList = (keyword) => {
  //   this.state.db.posts.filter(item => {
  //     let filtered = item.title.toLowerCase().includes(keyword.toLowerCase())
  //   })


  //   this.setState((state) => {
  //     state.filteredList = state.db.posts.filter(item => {
  //       return item.title.toLowerCase().includes(keyword.toLowerCase())
  //     })

  //     return state;

  //   })

  // }



  addStudent =(_name , _age) =>{

    // this.state.db.push({name : _name, age : _age}) 
    // this.setState ({
    //   newDB : this.state.db
    // })

    this.setState((state) => {
      state.newDB.push({name : _name, age : _age}) 
          return state;
    
        })



   

  }





  render() {

   
    

    const images = [

      { src: './images/slider/4.jpg' },
      { src: './images/slider/1.jpg' },
      { src: './images/slider/3.jpg' },
      { src: './images/slider/bg.jpg' },
      { src: './images/slider/bg.png' },
      { src: './images/slider/camp.jpg' }

    ]


    const styles = {
      'display': 'block',
      'width': '70%',
      'height': '200px',
      'margin': '10px',
      'margin-left': '14%'
    }

    //// day 1 

    // let next = () => {

    //   if (this.state.i < images.length - 1) {
    //     this.setState({
    //       i: this.state.i + 1

    //     })

    //   } else {
    //     this.setState({
    //       i: images.length - 1

    //     })

    //   }

    // }

    // let prev = () => {

    //   if (this.state.i >= 1) {
    //     this.setState({
    //       i: this.state.i - 1

    //     })

    //   } else
    //     this.setState({
    //       i: 0

    //     })
    // }


    // let slide = () => {

    //   console.log(images.length);
    //   console.log(this.state.i);


    //   setInterval(() => {



    //     if (this.state.i >= images.length - 1) {
    //       this.setState({
    //         i: 0

    //       })

    //     }
    //     else {

    //       this.setState({
    //         i: this.state.i + 1

    //       })

    //     }

    //   }, 1000)
    // }


    ///////////////////////////////



    return (
      <div >

        {/* <h1>Day 1 </h1> */}
        {/* task 1 */}
        {/* <img src={images[this.state.i].src} alt="" style={styles}></img>

        <div style={{ 'margin-left': '42%' }}>
          <input type='button' value='next' onClick={next}></input>
          <input type='button' value='slide' onClick={slide}></input>
          <input type='button' value='prev' onClick={prev}></input>
        </div> */}

        {/* task 2 */}

        {/* <section style={{ 'margin-top': '30px' }} className="ml-3">
          <input type="text" value={this.state.value} onChange={(e) => {this.setState({value : e.target.value}) }}></input>
          <input type="button" value="change" onClick={() => { this.setState({value : 'test'})}}></input>
          <p>{this.state.value}</p>


        </section> */}

        {/* <h1>Day 2 </h1> */}

        {/* <Header  onKeywordChange = {this.filteredList} ></Header>
        <NewsList  list ={this.state.db} > </NewsList> */}

    


         <Register addStudent ={this.addStudent} ></Register>
         <Students list={this.state.newDB} ></Students>
          
       







      </div>
    );

  }

}

export default App;
