# express-js-server-book-api
### Problem 
- go to https://www.mockaroo.com/ and download a sample books json which has following fields author book name pages published year and download a json of 100 items - Create an Express application which handles below apis 
- get '/' this will return all the users  post '/books' 
- - pass an user to it and it will append it to the end of the books data and return it, ensure you take in all required parameters  
- get '/books/:id' - this will return user with a specific id  
- patch '/books/:id' - pass a different author and published year only and update those on the book that matched the id, respond back with the updated book  
- delete '/books/:id' - delete the book that matched the id, respond back with  use router  use middlewares, cors etc  
- Add a middleware that adds logs all the method, url, response add a middleware that will add the request time to the response, sample response is proided below 
### Note when you are returning an array it should be outside the array for e.g :- 
```js
{   "request_time": "time stamp", "data": [] // this is your books array } 
for single book returned it should be like 
{   "request_time": "time stamp", "data": {} // this will have your book } 
```
- go to https://www.mockaroo.com/ and download a sample books json which has following fields
- author
- book name
- pages
#### published year and download a json of 100 items
#### Create an Express application which handles below apis
- get '/' this will return all the users

- post '/books' - pass an user to it and it will append it to the end of the books data and return it, ensure you take in all required parameters

- get '/books/:id' - this will return user with a specific id

- patch '/books/:id' - pass a different author and published year only and update those on the book that matched the id, respond back with the updated book

- delete '/books/:id' - delete the book that matched the id, respond back with

#### use router

#### use middlewares, cors etc

- Add a middleware that adds
- logs all the method, url, response
- add a middleware that will add the request time to the response, sample response is proided below
### Note
### when you are returning an array it should be outside the array for e.g :-
```js
{
  "request_time": "time stamp",
"data": [] // this is your books array }
for single book returned it should be like {
  "request_time": "time stamp",
"data": {} // this will have your book } 
```
