import '../style/header.css' ;
import { Component } from 'react';
import Article from './article';
const { Link } = require("react-router-dom");

 


class Home extends Component {

  constructor (){
    super () 
    this.state = {

      articles : []

    }

    this.baseURL = "http://localhost:3000/artists"
  }

  renderArticles =()=>{

    const {articles} = this.state

    return  (
      <div className="d-flex flex-column align-items-center ">
        {articles && articles.length > 0 ? (
          articles.map ((article)=>{
            return <Article key={article.id} article={article}/>

          })
        ) : (
          <p className="text-danger">No articles available</p>
        )
      }

      </div>
    )

    

  }

  render (){
    return (
      <div>
           {this.renderArticles()}
      </div>
  
    );

  }

  componentDidMount () {
    fetch(this.baseURL,{method:'GET'})
        .then((response)=>{
            
            if(response.status == 200)
              return response.json()
           
                
        })
        .then((data)=>{
           
             this.setState({articles:data})
        })
        .catch((err)=>{
            console.log(err ,"sdf")
        })
  }
 
}

export default Home;
