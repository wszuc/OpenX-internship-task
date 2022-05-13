# OpenX - software testing internship tasks

## First task
The first task required testing a function that <i>finds the length of the longest substring without repeating characters in the given string</i>. 
Firstly, I wrote a simple function, <i>strlng</i>, that achieves this goal. It takes a string of characters as an input and returns the longest, unique substring. 
Secondly, I came up with these test cases: 
<ul><li>it should pass all the sample tests from the task description,</li>
<li>it should work for all characters (letters, numbers, punctuation marks) and be case insensitive,</li>
<li>should return 0 for an empty string,</li>
<li>should treat whitespaces as valid characters,</li>
<li>should accept only string data type as an input</li>
</ul>
To test my function I used <i>Jest</i> testing library - I'm a big fan of it because of its simplicity. 
During the testing phase it turned out my function had a few bugs but after a quick debugging session I managed to correct it and pass all the tests. 

## Second task
The second task was an interesting challenge for me. It was about testing the correctness of a simple login form. As in the previous task, I started with writing some test cases:
<ul><li>user can log in successfully using the correct credentials,</li>
<li>user cannot log in using incorrect (or blank) credentials,</li>
<li>form denies access when the user types in unusual input, such as emojis, non-visible characters, regional alphabet characters,</li>
<li>form denies access when malicious input is entered (SQL injection prevention)</li></ul>
The method I chose was end to end testing using <i>Cypress</i> framework. I used it for the first time and I can already see how powerful this framework is. I especially liked the graphic interface that opens in a separate browser window. 

## Technical information
As package manager I used <i>npm</i>. All dependencies are listed in <i>package.json</i> file. 
Files for the first task are placed in <i>Task 1</i> folder. <i>str-lng.js</i> contains the function code and <i>str-lng.test.js</i> contains test cases for <i>Jest</i>.
As the second task was solved using <i>Cypress</i>, test cases are located at <i>cypress/integration/login-form.spec.js</i>.

## Last words

Thank you for reviewing my application! Have you any questions about the task or my projects, feel free to contact me! My email is wiktor.szuca@gmail.com

Wiktor Szuca




