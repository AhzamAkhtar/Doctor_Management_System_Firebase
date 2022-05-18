import React, { useEffect, useState } from "react";
import Spinner from "./Spinner";
import "./index.css"
const News = () => {
  const [queary, setquery] = useState("health");
  const [country, setcountry] = useState("in");
  //const [lang, setlang] = useState("en");
  const [article, setarticle] = useState([]);
  const [spin, setspin] = useState(false);
  useEffect(() => {
    const gnewsapi = async () => {
      setspin(true);
      let url = `https://newsapi.org/v2/top-headlines?country=${country}&category=${queary}&apiKey=097575c06ecd4bc4b550fae79a2bd131`;
      //const url = `https://gnews.io/api/v4/search?q=example&token=a3bd46c42dd12ae35906909a6c7b3556&q=${queary}`;
      //const url = `https://gnews.io/api/v4/top-headlines?&token=67aa0b3f7dcb0f10b24c54e1a2b7c4f8
      //&country=${country}&lang=${lang}&topic=${queary}`;
      //const url="https://api.nytimes.com/svc/topstories/v2/arts.json?api-key=dlVR6N3WDcWAVYW05GQ5KmKlajpBJ0ck"
      const response = await fetch(url);
      const resJson = await response.json();
      setspin(false);
      console.log(resJson.articles);
      {
        setarticle(resJson.articles);
      }
    };
    gnewsapi();
  }, [queary, country]);
  return (
    <>
      <div className="main_news" style={{marginTop:"9rem"}}>
        <h1 className="text-center">Whats Happening In Health Sector Around the Globe !</h1>
      
      <div>
        <div className="container my-3">
          {spin ? (
            <Spinner />
          ) : (
            <>
              <div className="row" style={{border:"2px"}}>
                {article.map((item, index) => {
                  return (
                    <>
                      <div className="col-md-3 my-6">
                        <img
                          src={!item.urlToImage?"https://picsum.photos/seed/picsum/251/350":item.urlToImage}
                          class="card-img-top"
                          alt="..."
                        />
                        <div class="card-body">
                          <h5 class="card-title">{item.title}</h5>
                          <p class="card-text">{item.description}</p>
                          <button class="btn btn-info" onClick={(event)=>{
                            event.preventDefault()
                            window.open(item.url)
                          }}>Read Full Article</button>
                        </div>
                      </div>
                    </>
                  );
                })}
              </div>
            </>
          )}
        </div>
      </div>
      </div>
    </>
  );
};
export default News;
