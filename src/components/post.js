import React, { Component } from 'react';

class Post extends Component {

    renderTopics() {
        // let topics = this.props.associated_topics.map((topic, index) => {
        //   return <span className="post-topic" key={index}>{topic}</span>
          let topics = this.props.films.map((film, index) => {
            return <span className="post-topic" key={index}>{film}</span>
      })
        return topics;
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
                      <a href={starship}> Useful Starship Link #{index + 1}</a>
                  </div>
              </div>
          )

      })
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
          <li className="result-post">
            <div className="result-post__topics">
                {this.renderTopics()}
            </div>
            <div className="result-post__title">
            {/* {this.props.title} en Swapi api es "name" */}
            {this.props.name}
            </div>
            <div className="result-post__links">
                {this.renderLinks()}
            </div>
          </li>
        )
    }

  }
}
export default Post;