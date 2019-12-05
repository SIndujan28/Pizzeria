const AWS=require('aws-sdk')
const docClient=new AWS.DynamoDB.DocumentClient()

function updateDeliveryStatus(request) {
    if(!request.deliveryId || !request.deliveryStatus) 
     throw new Error("Status and delivery ID is required")
    
    return docClient.update({
        TableName: 'pizza-orders',
        Key: {
            orderId:request.deliveryId
        },
        UpdateExpression:"set orderStatus = :s",
        ExpressionAttributeValues:{
            ':s':request.deliveryStatus
        }
    }).promise()
    .then(() => {
        return {}
             }
        )
}

module.exports=updateDeliveryStatus