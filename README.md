
##Getting started
run npm install

##Enviroment variables


####MONGODB_URI
mongo db uri - required

####MONGODB_TEST_URI
test mongo db uri - required to run tests - may be the same as MONGODB_URI

####MOCK
Key for enabling the mock repositories - not required

####NODE_VERBOSE
Key for activating log verbose mode, logging bodies of requests and responses to console - not required

####NODE_ENV
Indicates the environment - not required

you can also create a file called simply .env on the root of your project with these variables, as following.

#####.env file
```
MONGODB_URI='mongodb://127.0.0.1:27017/customers'
MONGODB_URI_TEST='mongodb://127.0.0.1:27017/customers_test'
# MOCK='false'
NODE_VERBOSE='false'
```

###commands
**npm run lint** - executes lint and fixes the code under basic lint patterns
**npm run build** - transpiles the code into dist folder
**npm run dev** - runs code in dev mode (ts-node-dev)
**npm run test** - runs tests under the test folder
**npm start** - builds and executes the builded code