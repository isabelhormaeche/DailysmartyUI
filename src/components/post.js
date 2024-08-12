import React, { Component } from 'react';
import AnimateHeight from 'react-animate-height';

class Post extends Component {

    constructor(props) {
      super(props)

      this.state = {
          height: 0
      }
   }


// Pretty Film Link Names

   getNameForFilmLink(str) {

    var n = str.lastIndexOf('/', str.length - 2); // Encuentra el penúltimo '/', ejemplo: "https://swapi.dev/api/films/1/", 
    var link = str.substring(str.indexOf("film"), n + 2); // Obtiene el substring desde "films" hasta el último '/'
    // Sumo 2 para incluir el nº y el penúltimo "/" , ejemplo sale:  films/1
   
    return link;
  }



  renderTopics() {
         // let topics = this.props.associated_topics.map((topic, index) => {
         //   return <span className="post-topic" key={index}>{topic}</span>
      let topics = this.props.films.map((film, index) => {
      //return <span className="post-topic" key={index}>{film}</span>
      
      //return <a href={film}>{film}</a>
      return <a href={film}>{this.getNameForFilmLink(film)}</a> // prettify  film links
    })
      return topics;
  }

  // ....................Pretty Post Link Names................ 

  // Versión usando........ DailySmarty API:

  //getNameForPostLink(str) {

    // var n = str.lastIndexOf('/');
    // var link = str.substring(n + 1, str.length);

    // if((n+1) == str.length) {
    //     link = str.slice(0, n);
    //     n = link.lastIndexOf('/');
    //     link = str.substring(n + 1, str.length - 1);
    // }    

    // if(link.includes('.html')) {
    //     link = link.substring(0, link.length - 5);
    // }
    // if(link.includes('.htm')) {
    //     link = link.substring(0, link.length - 4);
    // }

    //return link;
//}


 // Versión usando.......... Star wars API, donde los links terminan en formatostarship/XX/:

 getNameForPostLink(str) {

  var n = str.lastIndexOf('/', str.length - 2); // Encuentra el penúltimo '/', ejemplo: "https://swapi.dev/api/starships/48/"
  
  var link = str.substring(str.indexOf("starships"), n + 3); // Obtiene el substring desde "starships" hasta el último '/'
  // Sumo 3 para incluir el nº y el penúltimo "/" , ejemplo sale:  starships/48
 
  return link;
}

  renderLinks() {
    // Cambio "post_links" por "starships" de mi  swapi API
      //let links = this.props.post_links.map((post_link, index) => {
      let links = this.props.starships.map((starship, index) => {
          return (
              <div className="post-link" key={index}>
                  <div className="post-link__box"></div>
                  <div className="post-link__link">
                      {/* <a href={post_links.link_url}>Useful Link #{index + 1}</a> */}
                      {/* <a href={post_link.link_url}>{this.getNameForPostLink(post_link.link_url)}</a> */}
                      
                      {/* <a href={starship}> Useful Starship Link #{index + 1}</a> */}
                      <a href={starship}>{this.getNameForPostLink(starship)}</a>
                  </div>
              </div>
          )

      })

      if(links == 0) {
        return <div className="no-content">No Post Links</div>
    }
      return links;
  }

  render() {
    if(this.props.type == 'recent') {
      return (
        <li className="recent-post">
          <div className="recent-post__title">
              {/* {this.props.title} ---> lo cambio por "name" de people de Swapi*/}
              {this.props.name}
          </div>
          <div className="recent-post__topics">
              {this.renderTopics()}
          </div>
        </li>
      )
    } else if(this.props.type == 'result') {
        return (
          <li className="result-post"
            onMouseEnter={() => this.setState({ height: 70})}
            //onMouseEnter={() => this.setState({ height: 160})}
            onMouseLeave={() => this.setState({ height: 0 })}
            >
            <div className="result-post__topics">
                {this.renderTopics()}
            </div>
            <div className="result-post__title">
              <a href={this.props.url}>
              {this.props.name}
              </a>
            </div>
            <AnimateHeight
            duration={500}
            height={this.state.height}
            >
            <div className="result-post__links">
                {this.renderLinks()}
            </div>
            </AnimateHeight>
          </li>
        )
    }

  }
}
export default Post;