import PaymentAdapter from './PaymentAdapter';

class PayPalAdapter implements PaymentAdapter {
  async processPayment(amount: number, token: string): Promise<any> {
    console.log(`Procesando pago de $${amount} con PayPal...`);
    // Simulación de procesamiento de pago con PayPal
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          status: 'success',
          transactionId: 'paypal_txn_1234567890',
          token: token
        });
      }, 3000);
    });
  }

  async refundPayment(transactionId: string): Promise<any> {
    console.log(`Procesando reembolso de PayPal para la transacción ${transactionId}...`);
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          status: 'success',
          refundId: 'paypal_refund_0987654321',
        });
      }, 2000);
    });
  }
}

export default PayPalAdapter;