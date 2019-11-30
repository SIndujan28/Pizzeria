function updateOrder(id,order) {
    if( !id || !order) {
        throw new Error('Order Id and update object must be specified to update the order')
    }
    return {
        message:`Order ${id} was successfully updated`
    }
}

module.exports=updateOrder