const url = require("url");

const myUrl = new URL("http://mywebsite.com/hello.html?id=100&status=active");

// Serialized URL
console.log(myUrl.href);
console.log(myUrl.toString());

// Host (root domain)
console.log(myUrl.host);
//Host Name
// Host name does not get  port, Host does
console.log(myUrl.hostname);

// Pathname
console.log(myUrl.pathname);

// Serialized Query (give everyting after the question mark)
console.log(myUrl.search);
// Params object
console.log(myUrl.searchParams);

// Add param
myUrl.searchParams.append("abc", "123");
console.log(myUrl.searchParams);
console.log(myUrl.search);

//Loop through params
myUrl.searchParams.forEach((value, name) => console.log(`${name} : ${value}`));
