import React from "react";
import Layout from "../layout/defaultLayout";
import PageHeader from "../components/pageHeader/pageHeader";
import Container from "../components/container/container";
import LinkInput from "../components/linkInput/linkInput";
import LisItem from "../components/listItem/listItem";
class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }

  handleData = (data) => {
    this.setState({ data: [...this.state.data, data] });
  };
  render() {
    return (
      <Layout>
        <PageHeader title={"URL"} heroTitle={"Box"} />
        <Container>
          <div className="search">
            <LinkInput onAdd={this.handleData} />
          </div>
          <div className="search-result">
            {this.state.data.length > 0 ? (
              <>
                {this.state.data.map((info, index) => {
                  return (
                    <LisItem
                      type={"< Link >"}
                      title={info.title}
                      tags={["React", "javascript"]}
                    />
                  );
                })}
              </>
            ) : (
              <LisItem
                type={"< Link >"}
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
