"use strict";
{
    // Destructuring In Typescript
    const user = {
        id: 123,
        name: {
            first: "John",
            last: "Doe",
        },
        address: "123 Main St, City, Country",
        contact: 100000,
    };
    const { contact, name: { last: LastName }, } = user;
    const friendList = ["Alice", "Bob", "Charlie", "David", "Eve", "Frank"];
    const [, , charlieData, ...rest] = friendList;
}
