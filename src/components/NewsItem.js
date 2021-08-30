import React, { Component } from "react";

export default class NewsItem extends Component {
  render() {
    let { title, description, ImageUrl, NewsUrl, author, date, source} = this.props;
    return (
      <div>
        <div className="col container my-4">
          <div className="card h-100">
            <img src={ImageUrl} className="card-img-top" alt="..." />
            <div style={{display:"flex",justifyContent:"flex-end",position:"absolute",right:"0"}}>
            <span className="badge rounded-pill bg-danger">
              {source}
            </span>
            </div>
              
            <div className="card-body">
              <h5 className="card-title">{title}</h5>
              <p className="card-text">{description}</p>
              <p className="card-text">
                <small className="text-muted">
                  By {author ? author : "Unknown"} on{" "}
                  {new Date(date).toGMTString()}
                </small>
              </p>
              <a
                href={NewsUrl}
                target="_blank"
                className="btn btn-sm" style={{borderRadius:"30px",backgroundColor:"#50AE2F", color:"white"}}
              >
                Read More
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
