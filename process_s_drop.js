const fs = require("fs");
const fsp = require("fs").promises;
const https = require("https");

const file = fs.createWriteStream("data.txt");

https.get("https://www.spamhaus.org/drop/drop.txt", response => {
  var stream = response.pipe(file);

  stream.on("finish", function() {
    console.log("done");
  });
});

(async () => {

const fileContents = await fs.readFile("data.txt","utf8");
  
const filtered = await fileContents.replaceAll(";", "");
  
await fsp.writeFile("sdrop.txt", filtered, "utf8");
  
})();

