# Pizzeria

## List of features for initial API
..* Listing all pizzas
..* Retrieving the pizza orders
..* Creating a pizza order
..* Updating pizza order
..* Canceling a pizza order

... Since these features are small and simple,it is implemented in a single lambda function for nw
aws logs \
filter-log-events \
--log-group-name=/aws/lambda/pizzeria \
--query='events[0].message' \
--region=ap-southeast-1 \
--output=text
ap-southeast-1_aXJTOCPAL
muu9tipac98lmjein1t84oqn5

aws cognito-idp create-user-pool-client \
--user-pool-id ap-southeast-1_aXJTOCPAL \
--client-name PizzeriaClient \
--no-generate-secret \
--query UserPoolClient.ClientId \
--output text