import React,{useEffect,useState} from "react";
import YouTube from "react-youtube";
import "./RowPost.css";
import { imageUrl, API_KEY } from "../../constants/constants";
import axios from "../../axios";
function RowPost(props) {
  console.log(props.url);
  const [movies, setMovies] = useState([])
  const [urlId, setuidId] = useState('')
  useEffect(() => {
    axios.get(props.url).then((response)=>{
      console.log(response.data);
      setMovies(response.data.results)
    })
  }, [])

  const opts = {
    height: '500',
    width: '100%',
    playerVars: {
      autoplay: 1,
    },
  };

  const handleMovie=(id)=>{
    axios.get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then((response)=>{
      console.log(response);
      if(response.data.results.length!==0){
        setuidId(response.data.results[0])
      }else{
        console.log('Empty');
      }
    })
  }
  
  return (
    <div className="row">
      <h2>{props.title}</h2>
      <div className="posters">
        {
          movies.map((obj)=>
          <img onClick={()=>handleMovie(obj.id)}
          className={props.isSmall ? "smallPoster" : "poster"}
          src={`${imageUrl+obj.backdrop_path}`}
          alt="poster"
        />
          )
        }

      </div>
      { urlId && <YouTube opts={opts} videoId={urlId.key}/> }
     
    </div>
  );
}

export default RowPost;
