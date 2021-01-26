import '../style/header.css';
import { useState, useEffect } from 'react'
const { Link } = require("react-router-dom");





function ArticleDetails({ match }) {
  console.log(match.params.id, "prop");

  let [artistInfo, setArtistInfo] = useState({})

  const baseURL = "http://localhost:3000/artists"


  useEffect(() => {

    fetch(`${baseURL}/${match.params.id}`)
      .then((response) => {
        return response.json()
      })
      .then(data => {
        console.log(data)
        setArtistInfo(data)  // artistInfo = data
      })
      .catch((err) => {
        console.log(err)
      })


  }, []) // for only one time





  return (
    <div>
      {artistInfo.name ? (
        <div className="d-flex flex-column align-items-center">
          <img src={'/images/covers/' + artistInfo.cover + '.jpg'} width='200px' height='200px' ></img>
          <h4 className="name-details  mt-3">{artistInfo.name}</h4>
          <p className="bio">{artistInfo.bio}</p>

          <div className="d-flex  flex-wrap album mt-3">
             {artistInfo.albums.map ((album)=>{

               return ( <img src={'/images/albums/' + album.cover + '.jpg'}  width ="50%" height="300px"></img>)
              

             })

             }

          </div>

          <Link className="link btn" to ={'/'} > Back To Home </Link>
        </div>
      ) : (
          <div>
            <p>info not found</p>

          </div>

        )

      }

    </div>

  );
}

export default ArticleDetails;
