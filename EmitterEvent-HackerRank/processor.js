const EventEmitter = require('events');
const Stock = require('./stock-list.json');

class OrderProcessor extends EventEmitter {
    constructor() {
        super();
        this.stock = Stock;
    }

    placeOrder(orderData) {
        OrderProcessor.EventEmitte

        this.emit('PROCESSING_STARTED', orderData.orderNumber);
        const items = orderData.lineItems;
        let noError = true;

        if ( items && items.length > 0) {

            for (const item of items) {
                const { itemId, quantity } = item;
                const stock = this.stock.find(i => (i.id === itemId && i.stock >= quantity));

                if (!stock) {
                    this.emit('PROCESSING_FAILED', {
                        orderNumber: orderData.orderNumber,
                        itemId: itemId,
                        reason: 'INSUFFICIENT_STOCK'
                    })
                    noError = false;
                }
            }

            if (noError) this.emit('PROCESSING_SUCCESS', orderData.orderNumber);

        } else {
            this.emit('PROCESSING_FAILED', {
                orderNumber: orderData.orderNumber,
                reason: 'LINEITEMS_EMPTY'
            })
        }        
    }
}

module.exports = OrderProcessor;