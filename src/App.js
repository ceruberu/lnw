import React, { Component, Fragment } from "react";
import { Route, Switch } from "react-router-dom";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faSearch } from "@fortawesome/free-solid-svg-icons";

import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";
import Guide from "./pages/Guide";
import GuideHero from "./pages/GuideHero";
import GuidePost from "./pages/GuidePost";
import Community from "./pages/Community";
import CommunityPost from "./pages/CommunityPost";
import CommunityWrite from "./pages/CommunityWrite";

import "./App.css";
import "./classX1.css";

const AUTH_QUERY = gql`
  query {
    me {
      _id
      nickname
    }
  }
`;

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      sidebar: false
    };

    this.handleClose = this.handleClose.bind(this);
    this.handlePropagation = this.handlePropagation.bind(this);
  }

  handleClose() {
    this.setState({ sidebar: false });
  }

  handlePropagation(e) {
    e.stopPropagation();
  }

  render() {
    return (
      <Query query={AUTH_QUERY}>
        {({ loading, error, data }) => (
          <Fragment>
            {this.state.sidebar ? (
              <Sidebar
                loading={loading}
                error={error}
                data={data}
                handleClose={this.handleClose}
                handlePropagation={this.handlePropagation}
              />
            ) : null}
            <div className="App">
              <header className="appHeader">
                <div
                  className="headerIcon"
                  onClick={() => {
                    this.setState({ sidebar: true });
                  }}
                >
                  <FontAwesomeIcon icon={faBars} />
                </div>
                <div className="gameLogo">ROV</div>
                <div className="headerIcon">
                  <FontAwesomeIcon icon={faSearch} />
                </div>
              </header>
              <main className="appMain">
                <Switch>
                  <Route path="/" exact component={Home} />
                  <Route path="/guide" exact component={Guide} />
                  <Route path="/guide/hero/:heroName" component={GuideHero} />
                  <Route path="/guide/post/:postId" component={GuidePost} />
                  <Route
                    path="/community/post/:postId"
                    component={CommunityPost}
                  />
                  <Route path="/community/write" component={CommunityWrite} />
                  <Route path="/community" component={Community} />

                </Switch>
              </main>
            </div>
          </Fragment>
        )}
      </Query>
    );
  }
}

export default App;
