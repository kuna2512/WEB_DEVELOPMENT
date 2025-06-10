/*
I/O heavy operation :- In JavaScript, I/O heavy 
operations refer to tasks that involve reading 
from or writing to external resources, like files, 
databases, or network requests. These operations can 
be time-consuming and can potentially block the 
execution of your code if not handled properly.

Examples of I/O heavy operations:
1. File system operations: Reading or writing files to disk.
2. Network requests: Fetching data from an API or sending data to a server.
3. Database operations: Querying or updating a database.
*/

const fs = require("fs");

try {
    const contents = fs.readFileSync("a.txt", "utf-8"); // Use absolute path for clarity
    console.log(contents);
} catch (err) {
    console.error("Error reading file:", err.message);
}

var user = {
    age: 22,
    name: "kunal",
    calculateAge: function () {
        return 10;
    }
};
console.log(user.calculateAge());

// 32 minutes.