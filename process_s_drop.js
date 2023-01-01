const fs = require("fs").promises;

(async () => {

const file = await fs.readFile("data.txt","utf8");

const regex = /;(.*);

const filtered = file.replaceAll(regex, "");
  
await fs.writeFile("sdrop.txt", filtered, "utf8");
  
})();

