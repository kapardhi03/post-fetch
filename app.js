document.addEventListener('DOMContentLoaded', function() {
    const tweetForm = document.getElementById("tweetForm");
    const tweetText = document.getElementById("tweetText");
    const response = document.getElementById("response");

    tweetForm.addEventListener("submit", function(event) {
        event.preventDefault();
        const tweet = tweetText.value; // Use 'value' instead of 'ariaValueMax'

        fetch("https://one00x-data-analysis.onrender.com/posts", {
                method: "POST",
                headers: {
                    "content-type": "application/json",
                    "Accept": "application/json",
                },
                body: JSON.stringify({ post: { content: tweet } }),
            })
            .then((response) => {
                console.log(response);
                if (response.ok) return response.json();
                else throw new Error(`HTTP error! Tweet posting failed status:${response.status}`);
            })
            .then(data => {
                console.log(data);
                response.innerText = `Tweet posted successfully! TweetID: ${data.id}`;
            })
            .catch(error => {
                response.innerText = `Error: ${error.message}`;
            });
    });
});