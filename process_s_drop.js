const fs = require("fs").promises;
import fetch from 'node-fetch';

const response = await fetch('https://www.spamhaus.org/drop/drop.txt');
const body = await response.text();

const filtered = response.replaceAll(;.*, "");

await fs.writeFile(sdrop.txt, filtered, "utf8);
