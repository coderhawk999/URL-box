import React from "react";
import Layout from "../layout/defaultLayout";
import PageHeader from "../components/pageHeader/pageHeader";
import Container from "../components/container/container";
import LinkInput from "../components/linkInput/linkInput";
import LisItem from "../components/listItem/listItem";
import db from "../db";
class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      links: [],
    };
    this.handleAddLinks = this.handleAddLinks.bind(this);
    this.handleDeleteLinks = this.handleDeleteLinks.bind(this);
  }
  componentDidMount() {
    db.table("links")
      .toArray()
      .then((links) => {
        this.setState({ links });
      });
  }
  handleAddLinks(title, link) {
    const link_obj = {
      title,
      link,
    };
    db.table("links")
      .add(link_obj)
      .then((id) => {
        const newList = [
          ...this.state.links,
          Object.assign({}, link_obj, { id }),
        ];
        this.setState({ links: newList });
      });
  }
  handleDeleteLinks(id) {
    db.table("links")
      .delete(id)
      .then(() => {
        const newList = this.state.links.filter((link) => link.id !== id);
        this.setState({ links: newList });
      });
  }
  render() {
    return (
      <Layout>
        <PageHeader title={"URL"} heroTitle={"Box"} />
        <Container>
          <div className="search">
            <LinkInput onAdd={this.handleAddLinks} />
          </div>
          <div className="search-result">
            {this.state.links.length > 0 ? (
              <>
                {this.state.links.map((info, index) => {
                  return (
                    <LisItem
                      handleDeleteLinks={this.handleDeleteLinks}
                      key={info.id}
                      id={info.id}
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