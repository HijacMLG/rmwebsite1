// components/CreditCardsSection.jsx
import React from 'react';

export default function CreditCardsSection() {
  const icons = [
    'wallet.svg',
    'braintree_paypal.svg',
    'neopay_swedbank.svg',
    'neopay_seb.svg',
    'checkout.svg',
    'neopay_luminor.svg',
    'neopay_revolut.svg',
    'checkout_apple_pay.svg',
    'checkout_google_pay.svg',
    'paysera_paysera.svg',
  ];

  return (
    <section id="credit-cards" className="bg-white py-12">
      <div className="max-w-7xl mx-auto px-4">
        <ul className="flex flex-wrap justify-center items-center gap-6">
          {icons.map((icon) => (
            <li key={icon}>
              <img
                src={`https://assets.eneba.games/payments/v1/color/${icon}`}
                alt=""
                loading="lazy"
                className="h-8 md:h-10"
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
