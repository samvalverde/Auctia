import PaymentAdapter from './PaymentAdapter';

class StripeAdapter implements PaymentAdapter {
  async processPayment(amount: number, token: string): Promise<any> {
    console.log(`Procesando pago de $${amount} con Stripe usando el token: ${token}`);

    // Simulación del procesamiento de pago con Stripe
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          success: true,
          message: `Pago procesado con Stripe por $${amount}`,
        });
      }, 2000);
    });
  }

  async refundPayment(transactionId: string): Promise<any> {
    console.log(`Reembolsando pago con Stripe para la transacción: ${transactionId}`);

    // Simulación del reembolso con Stripe
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          success: true,
          message: `Reembolso procesado con Stripe para la transacción: ${transactionId}`,
        });
      }, 2000);
    });
  }
}

export default StripeAdapter;
