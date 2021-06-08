import React from "react";
import Layout from "../layout/defaultLayout";
import PageHeader from "../components/pageHeader/pageHeader";
import Container from "../components/container/container";
import LinkInput from "../components/linkInput/linkInput";
import LisItem from "../components/listItem/listItem";
import ToolBar from "../components/toolBar/toolBar";
import db from "../db";
class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      links: [],
    };
    this.handleAddLinks = this.handleAddLinks.bind(this);
    this.handleDeleteLinks = this.handleDeleteLinks.bind(this);
    this.handleTagsFilter = this.handleTagsFilter.bind(this);
    this.clearFilter = this.clearFilter.bind(this)
  }
  componentDidMount() {
    db.table("links")
      .toArray()
      .then((links) => {
        this.setState({ links });
        console.log(links);
      });
  }
  handleAddLinks(title, link, color, tags) {
    const link_obj = {
      title,
      link,
      color,
      tags,
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
  handleTagsFilter(filterTags) {
    console.log(filterTags);
    let new_list = this.state.links.filter((info, index) => {
      let filterTagsIds = info.tags.map((tag) => {
        return tag.id;
      });
      let result = filterTags.filter((value) => filterTagsIds.includes(value));
      if (result.length > 0) return true;
    });
    this.setState({ links: new_list });
  }

  clearFilter() {
    console.log("test")
    db.table("links")
      .toArray()
      .then((links) => {
        this.setState({ links });
        console.log(links);
      });
  }
  render() {
    return (
      <Layout>
        <PageHeader title={"URL"} heroTitle={"Box"} />
        <Container>
          <div className="search">
            <LinkInput
              onAdd={this.handleAddLinks}
              handleTagsFilter={this.handleTagsFilter}
              clearFilter={this.clearFilter}
            />
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
                      color={info.color}
                      type={"< Link >"}
                      title={info.title}
                      tags={info.tags}
                    />
                  );
                })}
              </>
            ) : (
              ""
            )}
          </div>
        </Container>
      </Layout>
    );
  }
}

export default Index;
