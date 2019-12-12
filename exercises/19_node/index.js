const input = process.argv[2],
    url = require('url'),
    querystring = require('querystring'),
    { protocol, host, hostname, port, pathname, query } = url.parse(input),
    queryObj = querystring.parse(query),
    queryArr = Object.entries(queryObj);

logUrlParts();

function logUrlParts() {
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
}
