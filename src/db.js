import Dexie from "dexie";

const db = new Dexie("UrlBox");
db.version(1).stores({
  links: "++id,title,link,color,tags",
  tags: "++id,title",
});
export default db;
