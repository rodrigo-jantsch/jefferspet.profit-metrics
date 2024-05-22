/* eslint-disable @typescript-eslint/camelcase */
import { canUseDOM } from 'vtex.render-runtime'
import { PixelMessage } from './typings/events'

export function handleEvents(e: PixelMessage) {
  switch (e.data.eventName) {
    case 'vtex:orderPlacedTracked':
    case 'vtex:orderPlaced': {
      const data = e.data
      const pid = window.profitMetrics.pid
      console.log(data)

      if(!pid)
        return

      const date = new Date(data.transactionDate);
      const unixTimestamp = Math.floor(date.getTime() / 1000);

      const transformedItems = data.transactionProducts.map(item =>({
        sku: item.sku,
        qty: item.quantity,
        priceExVat: item.sellingPrice
      }))

      const requestData = {
        id: data.orderGroup,
        ts: unixTimestamp,
        orderEmail: data.visitorContactInfo[0],
        customerPhone: data.visitorContactPhone,
        shippingMethod: data.transactionShippingMethod[0].selectedSla,
        shippingCountry: data.visitorAddressCountry,
        shippingZipcode: data.visitorAddressPostalCode,
        paymentMethod: data.transactionPaymentType[0].paymentSystemName,
        currency: data.transactionCurrency,
        priceShippingExVat: data.transactionShipping,
        priceTotalExVat: data.transactionSubtotal,
        priceTotalInclVat: data.transactionTotal,
        products: transformedItems,
      };
      console.log(requestData)

      /* Sends Data to profitmetrics. -- CORS Issue being found*/
      fetch('https://my.profitmetrics.io/l.php?v=3uh&pid='+pid+'&o=' + encodeURIComponent(JSON.stringify(requestData)), {
        method: 'GET',
      })
      .catch(error => {
        console.error('There was a problem with the request:', error);
      });
      if(data.visitorContactInfo[0])
          window.profitMetrics.setEmail(data.visitorContactInfo[0])

      return
    }
    default: {
      return
    }
  }
}

if (canUseDOM) {
  window.addEventListener('message', handleEvents)
}
