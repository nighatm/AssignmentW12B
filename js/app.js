function sendTweet() {
    let tweetTitle = document.getElementById("title-input").value;
    let tweetBody = document.getElementById("body-input").value;
    console.log(tweetTitle);
    console.log(tweetBody);
    let tweetData = {
        title: tweetTitle,
        body: tweetBody,
        userId: 1
    }
    let ajax = new XMLHttpRequest();
    ajax.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 201) {

            let newTweet = JSON.parse(this.responseText);
            let getTweet = newTweet.body;
            document.getElementById("tweet-message").innerHTML = "Your Message " + getTweet + " has been successfully received";
        }
        else if (this.readyState != 4) {
            document.getElementById("tweet-message").innerHTML = "Loading";
        }
        else {
            document.getElementById("tweet-message").innerHTML = "Something Went Wrong!";
        }

    }
    ajax.open("POST", "https://jsonplaceholder.typicode.com/posts", true);
    ajax.setRequestHeader("Content-Type", "application/json");
    ajax.send(JSON.stringify(tweetData));

}
let tweetButton = document.getElementById("tweet-sbumit");
tweetButton.addEventListener("click", sendTweet);

//PATCH
function updateTweet() {

    let ajax = new XMLHttpRequest();
    ajax.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            console.log(JSON.parse(this.responseText));
        }
        else if (this.readyState != 4) {
            console.log("Updating..")
        }
        else {
            console.log("Something Went Wrong!")
        }
    }
    ajax.open("PATCH", "https://jsonplaceholder.typicode.com/posts/1", true);
    ajax.setRequestHeader("Content-Type", "application/json");
    ajax.send();
}
updateTweet();

//DELETE
function deleteTweet() {
    let ajax = new XMLHttpRequest();
    ajax.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            console.log(JSON.parse(this.responseText));
        }
        else if (this.readyState != 4) {
            console.log("Deleting...")
        }
        else {
            console.log("Something Went Wrong!")
        }
    }
    ajax.open("DELETE", "https://jsonplaceholder.typicode.com/posts/1", true);
    ajax.setRequestHeader("Content-Type", "application/json");
    ajax.send();

}
deleteTweet();

//GET
function getTweet() {
    let ajax = new XMLHttpRequest();
    ajax.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            let tweets = JSON.parse(this.responseText);
            console.log(tweets);

            for (index = 0; index < tweets.length; index++) {

                let showTitles = tweets[index].title;
                let showTweets = tweets[index].body;

                document.getElementById("show-titles").innerHTML += "<h4>" + "Title:   " + showTitles + "</h4>";
                document.getElementById("show-titles").innerHTML += "<p>" + "Tweet:     " + "<br>" + showTweets + "</p>";
            }
        }
        else if (this.readyState != 4) {
            console.log("GEtting the Tweets..")
        }
        else {
            console.log("Something Went Wrong!")
        }
    }
    ajax.open("GET", "https://jsonplaceholder.typicode.com/posts", true);
    ajax.setRequestHeader("Content-Type", "application/json");
    ajax.send();
}
getTweet();