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

const filtered = await file.replaceAll(";", "");
  
await fsp.writeFile("sdrop.txt", filtered, "utf8");
  
})();

