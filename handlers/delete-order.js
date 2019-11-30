function deleteOrder(id) {
    if (!id) {
        throw new Error('To cancel pizza order,please specify order id')
    }
    return {}
}

module.exports=deleteOrder