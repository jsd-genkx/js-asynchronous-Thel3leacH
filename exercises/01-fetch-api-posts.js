
/* TODO-01: Create a function named fetchPostsThen */
// const fetchPostsThen = () => {
//     const endpoint = 'https://dummyjson.com/posts';
//     fetch(endpoint)
//         .then((response) => {
//             // console.log(response)
//             if ((!response.ok)) {
//                 throw new Error("Failed to get posts");
//             }
//             return response.json();
//         })
//         .then((data) => {
//             console.log(data.posts[0].reactions)
//         })
//         .catch((error) => {
//             console.log("Error occurred",error)
//         });
// }

/*
         Use fetch('https://dummyjson.com/posts')
         Use .then() to convert response to JSON
         Use another .then() to log the posts data
         Use .catch() to handle errors
*/

/* TODO-02: Export fetchPostsThen and test it in main.js */
export const fetchPostsThen = () => {
    const endpoint = 'https://dummyjson.com/posts';
    fetch(endpoint)
        .then((response) => {
            // console.log(response)
            if ((!response.ok)) {
                throw new Error("Failed to get posts");
            }
            return response.json();
        })
        .then((data) => {
            console.log(data.posts[0].reactions)
        })
        .catch((error) => {
            console.log("Error occurred",error)
        });
}

// fetchPostsThen();
