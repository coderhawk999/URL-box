import db from "./db";

class Store {
  constructor() {
    this.GetTags = this.GetTags.bind(this);
  }

  GetTags() {
    return db.table("tags")
  }

  AddTag = (title) => {
    const tag_obj = {
      title,
    };
    db.table("tags")
      .add(tag_obj)
      .then((id) => {
        console.log(id);
        const allTags = this.GetTags() || [];
        console.log(allTags);
        return id
        // const newList = [...allTags, Object.assign({}, tag_obj, { id })];
      })
      .catch((err) => console.log(err));
  };
}

var store = new Store();
export { store };
