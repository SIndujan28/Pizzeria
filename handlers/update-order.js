const AWS=require('aws-sdk')
const docClient=new AWS.DynamoDB.DocumentClient()

function updateOrder(orderId,options) {
    if( !orderId || !options.pizza || !options.address) {
        throw new Error('Order Id and update object must be specified to update the order')
    }
    return docClient.get({
        TableName:'pizza-orders',
        Key:{
            orderId:orderId
        }
    }).promise()
    .then((result) => result.Item)
    .then(item => {
        if (item.orderStatus !== "pending") {
            throw new Error("order has started processing, cannot update now :(")
        }
    })
    .then(() => {
        return docClient.update({
            TableName:'pizza-orders',
            Key:{
                orderId:orderId
            },
            UpdateExpression: 'set pizza = :p, address = :a',
            ExpressionAttributeValues:{
                ':p':options.pizza,
                ':a':options.address
            },
            ReturnValues:"ALL_NEW"
        }).promise()
        .then((result) => {
            console.log('Order is updated!', result)
            return result.Attributes
        })
    })
    .catch((updateError) => {
        console.log(`Oops, order is not updated :(`, updateError)
        throw updateError
    })
}

module.exports=updateOrder