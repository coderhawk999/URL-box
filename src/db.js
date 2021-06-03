  
import Dexie from 'dexie';

const db = new Dexie('UrlBox');
db.version(1).stores({ links: '++id,title,link' });

export default db;