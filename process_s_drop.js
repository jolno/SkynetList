const fs = require("fs").promises;

(async () => {

const fileContents = await fs.readFile("data.txt","utf8");
  
const filtered = fileContents.replaceAll(";", "");
  
await fs.writeFile("sdrop.txt", filtered, "utf8");
  
})();

