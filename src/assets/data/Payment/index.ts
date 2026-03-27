export interface PaymentData {
  caption: string;
  title: string;
  upiId: string;
  payeeName: string;
  description: string;
  instructions: string[];
}

export const PaymentConfig: PaymentData = {
  caption: "Quick & Secure Payments",
  title: "Pay via UPI",
  upiId: "axemytax@upi",
  payeeName: "AxeMyTax",
  description:
    "Scan the QR code below with any UPI app (Google Pay, PhonePe, Paytm, etc.) to make a payment.",
  instructions: [
    "Open any UPI payment app on your phone",
    "Scan the QR code displayed below",
    "Enter the amount and complete the payment",
    "Share the payment confirmation with us for reference",
  ],
};
