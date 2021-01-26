import '../style/article.css';
const { Link } = require("react-router-dom");





function Article({ article }) {

    return (
        <div className="articleCard">
            {article && article.name ? (

                <Link className="link" to={`/article/${article.id}`} >
                  <div >
                        {/* condition */}
                        <img src={'/images/covers/' + article.cover + '.jpg'} className="image"></img>
                        <h4 className="name"> {article.name}</h4>

                    
                    
                </div>

                </Link>

              
            ) : (
                    <p className="text-danger">No article available</p>
                )
            }

        </div>

    );
}

export default Article;
