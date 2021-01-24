import '../style/newList.css';


function newsList(props) {

    let list = props.list.posts.map ((item)=>{

        return (<div className= 'body'>
            <h2 className="title"> {item.title}</h2>
            <p >{item.body}</p>
        
        </div>)

    })

    return (
      <div >{list} </div>
    );
  }
  
  export default newsList;