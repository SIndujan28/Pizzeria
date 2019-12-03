const AWS=require('aws-sdk')
const docClient=new AWS.DynamoDB.DocumentClient()

function deleteOrder(orderId) {
    if (!orderId) {
        throw new Error('To cancel pizza order,please specify order id')
    }
    return docClient.delete({
        TableName:'pizza-orders',
        Key:{
            orderId:orderId
        }
    }).promise()
    .then(result => console.log('Order is deleted!',result))
    .catch((deleteError) => {
        console.log('Oops,order is not deleted :( ',deleteError)
        throw deleteError
    })
}

module.exports=deleteOrder