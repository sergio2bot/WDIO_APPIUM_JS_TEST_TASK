Feature: Test task

@Android 
Scenario: User logs in enters and tries to bid
Given the user is on the main page
When the user clicks on the Sign in link
And the user enters "koranetssergey@gmail.com" in the "Email" field on Login Page
Then the user sees "koranetssergey@gmail.com" in the "Email" field on Login Page
And the user enters "Ch0r25$t" in the "Password" field on Login Page
And the user clicks on the Sign in button on Login Page
When the user clicks on the "Markets" on the bottom menu of Ideas Hub page
And the user clicks on the first pair of currencies
And the user clicks on the "Sell" on the ForexPairTrading page
And the user clicks on How much to invest field
And the user enters amount "1" into Amount field
And the user clicks on the Confirm button
Then the user sees "Ooops, something went wrong" text is present in pop up message
And the user sees "Wait a sec and try again" text is present in pop up message
When the user clicks on "Got it" button
When the user clicks on the Back button in the header
And the user clicks on the Profile icon in the header
And the user clicks on the Logout button on the User Profile page
Then the user sees Create Account button is available on the IdeasHub page

