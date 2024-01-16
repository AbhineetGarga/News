import React, { Component } from 'react'

export class Newsitem extends Component {
  render() {
   let {title, desc, imgUrl, newsUrl, date, author} = this.props;
    return (

      <div>
      <div className="card my-3" style={{width: "288px;"}}>
  <img src={!imgUrl?"https://media.cnn.com/api/v1/images/stellar/prod/230116101340-file-darius-miles.jpg?c=16x9&q=w_800,c_fill":imgUrl} className="card-img-top" alt="/"/>
  <div className="card-body ">

    <strong>Reporter: {!author?"Annonimous":author}</strong>
    <h5 className="card-title"> {!title?"California storms: Record rainfall and more snow, but end of \"parade of storms\" is in sight - CBS News":title}</h5>
    <p className="card-text">{!desc?"Hundreds of emergency personnel on Monday resumed searching for four missing people following a deadly plane crash in Nepal that has once again highlighted the dangers of air travel in a country often referred to as one of the riskiest places to fly."
    :desc}</p>
    <p className="card-text"><small className="text-muted mx-3">By <strong>{!author?"Annonimous":author} </strong> on 
         {new Date(date).toGMTString()}
  </small></p>
    <a  href={newsUrl} target="_blank"  rel="noreferrer" className="btn btn-dark btn-sm">Read More</a>
  </div>
</div>
     </div>
 
    )
  }
}

export default Newsitem
