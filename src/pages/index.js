import React from "react";
import Layout from "../layout/defaultLayout";
import PageHeader from "../components/pageHeader/pageHeader";
import Container from "../components/container/container";
import LinkInput from "../components/linkInput/linkInput";
import LisItem from "../components/listItem/listItem";
import axios from "axios";
class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [1, 2, 3],
    };
  }

  handlSearch = (searchTerm) => {
    console.log(searchTerm);
    var api = `https://api.stackexchange.com/2.2/search?pagesize=5&order=desc&sort=activity&intitle=${searchTerm}%20pass&answers=5&site=stackoverflow&filter=withbody`;
    axios.get(api).then((res) => {
      console.log(res.data);
      this.setState({ data: res.data.items });
    });
  };

  render() {
    return (
      <Layout>
        <PageHeader title={"URL"} heroTitle={"Box"} />
        <Container>
          <div className="search">
            <LinkInput onChange={this.handlSearch} />
          </div>
          <div className="search-result">
            {this.state.data.length > 0 ? (
              <>
                {this.state.data.map((info, index) => {
                  return (
                    <LisItem
                      platform={"< Link >"}
                      title={"Job Link"}
                      tags={["React", "javascript"]}
                    />
                  );
                })}
              </>
            ) : (
              <LisItem
                platform={"< Link >"}
                title={"Job Link"}
                tags={["React", "javascript"]}
              />
            )}
          </div>
        </Container>
      </Layout>
    );
  }
}

export default Index;
