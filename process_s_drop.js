const fs = require("fs").promises;

(async () => {

const file = await fs.readFile("data.txt","utf8");

const filtered = file.replaceAll(/ ;.*/g, "");
  
await fs.writeFile("sdrop.txt", filtered, "utf8");
  
})();

