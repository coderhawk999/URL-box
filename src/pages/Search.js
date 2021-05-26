import React from "react";
import Layout from "../layout/defaultLayout";
import PageHeader from "../components/pageHeader/pageHeader";
import Container from "../components/container/container";
import SearchBar from "../components/searchBar/searchBar";
class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Layout>
        <PageHeader title={"Dev"} heroTitle={"Search"} />
        <Container>
          <div className="search">
            <SearchBar />
          </div>
        </Container>
      </Layout>
    );
  }
}

export default Search;
