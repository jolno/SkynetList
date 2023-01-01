const fs = require("fs");
const https = require("https");

const file = fs.createWriteStream("data.txt");

https.get("https://www.spamhaus.org/drop/drop.txt", response => {
  var stream = response.pipe(file);

  stream.on("finish", function() {
    console.log("done");
  });
});

const filtered = file.replaceAll(";", "");

await fs.writeFile(sdrop.txt, filtered, "utf8);
