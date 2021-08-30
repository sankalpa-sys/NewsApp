import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import React, { Component } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
import LoadingBar from 'react-top-loading-bar'

export default class App extends Component {
  pageSize = 15
  state = {
    progress:0
  }
  setProgress = (progress) => {
    this.setState({progress: progress})
  }
  render() {
    return (
      <div>
        <Router>
          <Navbar />
          <LoadingBar height= {2}
            color='#f11946'
            progress={this.state.progress}
            
      />
          <Switch>
            <Route exact path="/">
              <News setProgress={this.setProgress} key="general" PageSize={this.pageSize} category="general" heading="General" />
            </Route>
            <Route exact path="/business">
              <News setProgress={this.setProgress} key="business" PageSize={this.pageSize} category="business" heading="Business" />
            </Route>
            <Route exact path="/entertainment">
              <News setProgress={this.setProgress} key="entertainment" PageSize={this.pageSize} category="entertainment" heading="Entertainment" />
            </Route>
            <Route exact path="/health">
              <News setProgress={this.setProgress} key="health" PageSize={this.pageSize} category="health" country="in" heading="Health" />
            </Route>
            <Route exact path="/science">
              <News setProgress={this.setProgress} key="science" PageSize={this.pageSize} category="science" heading="Science" />
            </Route>
            <Route exact path="/sports">
              <News setProgress={this.setProgress} key="sports" PageSize={this.pageSize} category="sports" heading="Sports" />
            </Route>
            <Route exact path="/technology">
              <News setProgress={this.setProgress} key="technology" PageSize={this.pageSize} category="technology" heading="Technology" />
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}
