## URL Shortner Service

- API is written using nodejs with express
- Client is written using reactjs

### Short URL Service

We are storing URL code and related information in mongodb

- Storing non relational json data related to URLs
- Unique code validation is added using a mongo plugin to prevent accidential short-code conflicts
- Please refer to the .env.sample for connection information

We are using `nanoid` package to generate collision free unique IDs with length of 10

- with id with length 10 gurantee collision free for 17 years when 1000 IDs generated per hour [calculator](https://zelark.github.io/nano-id-cc/)
- length 10 ensure less complexed urls while ensuring uniqueness
- API is doing url format validations, exprect to have `http[s]://domainname.topleveldomain/.....`

### Short URL Client

We are using reactjs to create URL shortner client application

- Project is generated using `create-react-app`
- Redux store is configured to maintain application state
- Axios is used for network calls
- Proxy is configured for development time to proxy network calls to development service

### Deployment

Docker file is created for deploying soluiton as a docker container

- Frontend is configured to be served by express server

You can find the deployed application using heroku [here](https://young-beyond-93590.herokuapp.com)

### Unit tests for server code

Add unit tests for server side code.
Please update environment variables for testing database.

```
TEST_DBHOST=
TEST_DBUSER=
TEST_DBPASS=
```
