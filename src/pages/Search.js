import React from "react";
import Layout from "../layout/defaultLayout";
import PageHeader from "../components/pageHeader/pageHeader";
import Container from "../components/container/container";
import SearchBar from "../components/searchBar/searchBar";
import SearchCard from "../components/listItem/listItem";
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
          <div className="search-result">
            <SearchCard
              platform={"StackOverflow"}
              title={"Getting Started with Your Journey into Cloud Security"}
              tags={"React"}
              description={
                "Most organizations use cloud services in one way or another to run their workloads. In this session, we will see how we can get started on our journey in the vast domain of Cloud Security. Along with an interesting interaction to instil a deeper understanding of the fundamentals of working with the cloud, Madhu will share his experiences too."
              }
            />
            <SearchCard
              platform={"StackOverflow"}
              title={"Getting Started with Your Journey into Cloud Security"}
              tags={"React"}
              description={
                "Most organizations use cloud services in one way or another to run their workloads. In this session, we will see how we can get started on our journey in the vast domain of Cloud Security. Along with an interesting interaction to instil a deeper understanding of the fundamentals of working with the cloud, Madhu will share his experiences too."
              }
            />
          </div>
        </Container>
      </Layout>
    );
  }
}

export default Search;
