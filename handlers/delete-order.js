const AWS=require('aws-sdk')
const docClient=new AWS.DynamoDB.DocumentClient()
const rp=require('minimal-request-promise')

function deleteOrder(orderId) {
    if (!orderId) {
        throw new Error('To cancel pizza order,please specify order id')
    }
    return docClient.get({
        TableName:'pizza-orders',
        Key:{
            orderId:orderId
        }
    }).promise()
    .then(result => result.Item)
    .then(item => {
        if( item.orderStatus !== "pending") {
            throw new Error("Order has started processing,cannot delete order now")
        }
        return rp.delete(`https://some-like-it-hot.effortless-serverless.com/delivery/${orderId}`,{
            headers:{
                "Content-type":"application/json",
                "Authorization":"aunt-marias-pizzeria-1234567890"
            }
        })
    })
    .then(() => {
        return docClient.delete({
            TableName: "pizza-orders",
            Key:{
                orderId:orderId
            }
        }).promise()
    })
    .then((result) => {
        console.log("Order is deleted",result)
        return result
    })
    .catch((deleteError) => {
        console.log('Oops,order is not deleted :( ',deleteError)
        throw deleteError
    })
}

module.exports=deleteOrder