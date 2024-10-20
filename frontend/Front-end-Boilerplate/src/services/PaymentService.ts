import PaymentAdapter from './PaymentAdapter';
import StripeAdapter from './StripeAdapter';
import PayPalAdapter from './PayPalAdapter'; 
// En el futuro podría agregar más adaptadores para otros métodos de pago.

class PaymentService {
  private adapter: PaymentAdapter;

  constructor(paymentMethod: 'stripe' | 'paypal' = 'stripe') {
    if (paymentMethod === 'stripe') {
      this.adapter = new StripeAdapter();
    } else if (paymentMethod === 'paypal') {
        this.adapter = new PayPalAdapter();
    } else {
        throw new Error('Método de pago no válido');
    }
  }

  processPayment(amount: number, token: string): Promise<any> {
    return this.adapter.processPayment(amount, token);
  }

  refundPayment(transactionId: string): Promise<any> {
    return this.adapter.refundPayment(transactionId);
  }
}

export default PaymentService;
