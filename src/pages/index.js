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
      tags: [],
      edit: false,
    };
    this.handleAddLinks = this.handleAddLinks.bind(this);
    this.handleUpdateLinks = this.handleUpdateLinks.bind(this);
    this.handleDeleteLinks = this.handleDeleteLinks.bind(this);
    this.handleTagsFilter = this.handleTagsFilter.bind(this);
    this.clearFilter = this.clearFilter.bind(this);
    this.getLinks = this.getLinks.bind(this);
    this.SearchLink = this.SearchLink.bind(this);
  }
  componentDidMount() {
    this.getLinks();
  }
  SearchLink = (query) => {
    if (query.length === 0) {
      if (this.state.tags.length > 0) {
        let filterTagsId = this.state.tags.map((info) => {
          return info.id;
        });
        this.handleTagsFilter(filterTagsId, this.state.tags);
        return;
      }
      this.getLinks();
      return;
    }
    var patt = new RegExp("^" + query);
    var newList = this.state.links.filter((tag) =>
      tag.title.toLowerCase().includes(query.toLowerCase())
    );
    this.setState({ links: newList });
  };
  getLinks = () => {
    db.table("links")
      .toArray()
      .then((links) => {
        this.setState({ links });
      });
  };
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
  handleTagsFilter(filterTags, appliedTags) {
    if (appliedTags.length === 0) {
      this.getLinks();
      this.setState({ tags: [] });
      return;
    }
    db.table("links")
      .toArray()
      .then((links) => {
        let new_list = links.filter((info, index) => {
          let filterTagsIds = info.tags.map((tag) => {
            return tag.id;
          });
          let result = filterTags.filter((value) =>
            filterTagsIds.includes(value)
          );
          if (result.length > 0) return true;
          else return false;
        });
        this.setState({ links: new_list, tags: appliedTags });
      });
  }

  handleUpdateLinks(title, link, color, tags, id) {
    const link_obj = {
      title,
      link,
      color,
      tags,
    };
    db.table("links")
      .update(id, link_obj)
      .then((res) => {
        this.getLinks();
      });
  }
  clearFilter() {
    db.table("links")
      .toArray()
      .then((links) => {
        this.setState({ links, tags: [] });
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
              AppliedTags={this.state.tags}
            />
          </div>
          <ToolBar tags={this.state.tags} onSearch={this.SearchLink} />
          <div className="search-result">
            {this.state.links.length > 0 ? (
              <>
                {this.state.links.map((info, index) => {
                  return (
                    <LisItem
                      handleDeleteLinks={this.handleDeleteLinks}
                      setEdit={(state) => {
                        this.setState({ edit: state });
                      }}
                      edit={this.state.edit}
                      link={info.link}
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
              <div className="link-not-found">
                <p
                  style={{
                    fontSize: "1.7rem",
                    color: "#8f8f8f",
                    fontWeight: "700",
                  }}
                >
                  Click on Add URL to add a new URL to box
                </p>
              </div>
            )}
          </div>
        </Container>
      </Layout>
    );
  }
}

export default Index;
