async function getPost() {
    try {
        console.log("Fetching post...");

        let response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
        let data = await response.json();   // parse JSON

        console.log("Post received:");
        console.log(data);
    } catch (error) {
        console.error("Error:", error);
    }
}

getPost();
