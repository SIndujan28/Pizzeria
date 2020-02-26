# Pizzeria
Serverless API developed using claudia.js that can be deployed in AWS lambda with ease.API has all the essential features for a pizzeria shop.

## List of features for initial API
  * Listing all pizzas
  * Retrieving the pizza orders
  * Creating a pizza order
  * Updating pizza order
  * Canceling a pizza order
  * Add/Update image of pizza in S3
  * Connect to external delivery system and get notified of the status
## Technology used
1. Nodejs
2. Claudia-api-builder
3. DynamoDB
4. Lambda

## Getting started

 ### Prerequisites
1. Install Nodejs using this [guide](https://nodejs.org/en/download/).
2. Install [npm](https://www.npmjs.com/get-npm) or [yarn](https://classic.yarnpkg.com/en/docs/install/#debian-stable)
3. AWS account with access to IAM and Lambda.
4. Install claudia.js using 
```
npm claudia -g
```
5. Create an AWS profile with IAM full access, Lambda full access and API Gateway Administrator privileges.
6. Add the keys to your .aws/credentials file.

### Steps to reproduce locally
  1. Clone this repository
```bash
     git clone git@github.com:SIndujan28/Pizzeria.git
```
  2. Run the following command to install all the neccessary modules.
```
     npm install
```
  or
```
    yarn install
```

  3. Finally run this command and the rest will be taken care of by claudia.
```bash
    claudia create
```
  4. To update the handler function,run
  ```
    claudia update
  ```

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
[MIT](https://choosealicense.com/licenses/mit/)
