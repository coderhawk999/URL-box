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
    var api = `https://api.stackexchange.com/2.2/similar?pagesize=5&order=desc&sort=activity&title=${searchTerm}%20pass&answers=5&site=stackoverflow&filter=withbody`;
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
                      title={info.title}
                      info={info}
                      tags={info.tags}
                      description={info.body}
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
