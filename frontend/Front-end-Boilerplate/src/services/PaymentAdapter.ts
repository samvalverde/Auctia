interface PaymentAdapter {

    processPayment(amount: number, token: string): Promise<any>;
    refundPayment(transactionId: string): Promise<any>;
    
}

export default PaymentAdapter;