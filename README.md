# Git Hub Search APP

This project helps to find to search the Git Hub Member details and navigate to their repossitory
easily.

Git Hub API https://api.github.com/users/{user} rest endpoint is being used to fetch the Git Hub User details.

![alt text](https://github.com/Surendirababu/GitHubSearchApp/tree/master/src/assets/GitHubSearchApp.PNG)

The Git Hub has provided rate limit to access their API.But we can register the APP as OUTH2 Applications 
for your account which will generate the client ID and client secret.Use the client Id and Secret in the  API as https://api.github.com/users/{user}?client_id=XXXX&client_secret=YYYY to use the user details.

For More info ![alt text](https://developer.github.com/v3/rate_limit)/