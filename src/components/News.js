import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

export default class News extends Component {
  static defaultProps = {
    country: "us",
    category: "general",
    heading: "General"
  };
  static propTypes = {
    country: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
  };

  constructor() {
    super();
    this.state = {
      articles: [ ],
      page: 1,
      loading: true,
      totalResults: 0
    };
  }
  async updateNews(){
    this.props.setProgress(10)
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=f920c3d013c4482dab81e12d71f2d8ca&pageSize=${this.props.PageSize}`;
    let data = await fetch(url);
    this.props.setProgress(30)
    let parsedData = await data.json();
    this.props.setProgress(70)

    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading: false,
    });
    this.props.setProgress(100)
  }
  async componentDidMount() {
    //render method paxi run hunxa..
    this.updateNews()
  }
  fetchMoreData = async() => {
    this.setState({page: this.state.page +1})
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&page=${this.state.page}&apiKey=f920c3d013c4482dab81e12d71f2d8ca&pageSize=${this.props.PageSize}`;
    let data = await fetch(url);
    let parsedData = await data.json();

    this.setState({
      articles: this.state.articles.concat(parsedData.articles),
      totalResults: parsedData.totalResults,
    });
  };

  

  render() {
    return (
      <div className="container my-4">
        <center>
          <h1 style={{fontFamily:"cursive", borderBottom:"2px groove red "}}>KhabaRia Top {this.props.heading} News</h1>
        </center>

        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length !== this.state.totalResults}
          loader={<Spinner/>}
        >
        <div className="row my-4">
          {this.state.loading && <Spinner />}
          {
            this.state.articles.map((element) => {
              return (
                <div className="col-md-4" key={element.url}>
                  <NewsItem
                    title={element.title}
                    description={element.description}
                    ImageUrl={
                      element.urlToImage
                        ? element.urlToImage
                        : "https://www.cnet.com/a/img/FjAUu7etG9736ssg2FZqfIA5ZWE=/1200x630/left/top/2021/08/20/436c4c30-dd8d-4a6a-b7d8-734a1171698b/tesla-ai-day-00000.jpg"
                    }
                    NewsUrl={element.url} author={element.author} date ={element.publishedAt} source={element.source.name} 
                  />
                </div>
              );
            })}
        </div>
        </InfiniteScroll>
      </div>
    );
  }
}
