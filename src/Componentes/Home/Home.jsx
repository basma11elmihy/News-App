import Axios  from 'axios'
import React, { useEffect, useState } from 'react'
import $ from 'jquery'
import imageTemp from '../../logo.svg'

export default function Home() {

  let [news, updateNews] = useState([]);

  useEffect(() => {
    getNews("Apple");
  } , []);


  async function getNews(query){
    let {data} = await Axios.get(`https://newsapi.org/v2/everything?q=${query}&from=2023-02-28&sortBy=publishedAt&apiKey=094b5fccf1b2415780ff7c6bf432b25b`);

    updateNews(data.articles);

  }
  function seeMore(index){
    $('#seeMoreEl' + index).html(" "+news[index].description?.split(" ").splice(10,).join(" ")).removeClass('text-info')
  }

  function changeCat(){
    let query = $('#select').val();
    getNews(query);
  }
  return (
    <div>
      {news.length > 0 ?
      <div className='row g-3'>
              <div className='m-5 w-100'>
              <select id = "select" onChange={changeCat} className='w-50 form-select'>
                <option value='bitcoin'>Apple</option>
                <option value='apple'>Bitcoin</option>
                <option value='tesla'>Tesla</option>
                <option value='google'>Google</option>
                <option value='ai'>AI</option>
                
              </select>
              </div>

      {news.map(   (el,index) => {
        return <div key={index} className='col-md-3'>
        <div className='border border-danger rounded'>
          <img src={el.urlToImage ? el.urlToImage : imageTemp} className='w-100 immg'/>
          <div className='p-3'>
          <h5>{el.title}</h5>
          <p className='text-muted'>
            <span>
            {el.description?.split(" ").splice(0,10).join(" ")}
            </span>

            <span id={'seeMoreEl' + index} onClick={() => seeMore(index) } className='text-info'>
              See More
            </span>
          </p>
          </div>
        </div>
      </div>
      }    )}
    </div> : <div className='vh-100 d-flex justify-content-center align-items-center'>
      <i className='fa-solid fa-spinner fa-spin fa-4x'></i>
      </div>}
    </div>
  )
}
