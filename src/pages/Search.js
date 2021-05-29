import React from "react";
import Layout from "../layout/defaultLayout";
import PageHeader from "../components/pageHeader/pageHeader";
import Container from "../components/container/container";
import SearchBar from "../components/searchBar/searchBar";
import SearchCard from "../components/listItem/listItem";
import axios from "axios";
class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }

  handlSearch = (searchTerm) => {
    console.log(searchTerm);
    var api = `https://api.stackexchange.com/2.2/search/advanced?pagesize=5&order=desc&sort=activity&q=${searchTerm}%20pass&answers=5&site=stackoverflow`;
    axios.get(api).then((res) => {
      console.log(res.data);
      this.setState({ data: res.data.items });
    });
  };

  render() {
    return (
      <Layout>
        <PageHeader title={"Dev"} heroTitle={"Search"} />
        <Container>
          <div className="search">
            <SearchBar
              onChange={(e) => {
                this.handlSearch(e.target.value);
              }}
            />
          </div>
          <div className="search-result">
            {this.state.data.length > 0 ? (
              <>
                {this.state.data.map((info, index) => {
                  return (
                    <SearchCard
                      platform={"StackOverflow"}
                      title={
                        info.title
                      }
                      tags={info.tags}
                      description={
                        "Most organizations use cloud services in one way or another to run their workloads. In this session, we will see how we can get started on our journey in the vast domain of Cloud Security. Along with an interesting interaction to instil a deeper understanding of the fundamentals of working with the cloud, Madhu will share his experiences too."
                      }
                    />
                  );
                })}
              </>
            ) : (
              <div>"Loading"</div>
            )}
          </div>
        </Container>
      </Layout>
    );
  }
}

export default Search;
