let input = process.argv[2];

const url = require('url');
const querystring = require('querystring');

let { protocol, host, hostname, port, pathname, query } = url.parse(input);
let queryObj = querystring.parse(query);
let queryArr = Object.entries(queryObj);

console.log('the protocol is', protocol);
console.log('the host is', host);
console.log('the hostname is', hostname);
console.log('the port is ', port);
console.log('the pathname is', pathname);
console.log('the query is', query);

if (query) {
    for (const i in queryArr) {
        console.log(
            `the value of the ${queryArr[i][0]} parameter is ${queryArr[i][1]}`
        );
    }
}
