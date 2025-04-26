// components/FooterSection.jsx
import React from 'react';

export default function FooterSection() {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="xpGMZc max-w-7xl mx-auto px-6 py-8 flex flex-col md:flex-row md:justify-between">
        <div className="Khz2Vx flex flex-wrap gap-8">
          <ul className="space-y-2">
            <li><span className="LygbJr font-bold">About Eneba</span></li>
            <li><a className="UxlV7h" href="/about-us">About us</a></li>
            <li><a className="UxlV7h" href="/contacts">Contact us</a></li>
            <li>
              <a
                className="UxlV7h"
                href="https://jobs.eu.lever.co/eneba"
                target="_blank"
                rel="noreferrer noopener"
              >
                Careers
              </a>
            </li>
          </ul>
          <ul className="space-y-2">
            <li><span className="LygbJr font-bold">Buy</span></li>
            <li><a className="UxlV7h" href="/support/article/how-to-buy-on-eneba">How to buy</a></li>
            <li><a className="UxlV7h" href="/collections">Collections</a></li>
            <li><a className="UxlV7h" href="/enebium">Loyalty program</a></li>
          </ul>
          <ul className="space-y-2">
            <li><span className="LygbJr font-bold">Help</span></li>
            <li><a className="UxlV7h" href="/support">FAQ</a></li>
            <li><a className="UxlV7h" href="/support/activation-guides">How to activate game</a></li>
            <li><a className="UxlV7h" href="/support">Create a ticket</a></li>
            <li><a className="UxlV7h" href="/support/article/refund-after-product-purchase">Return policy</a></li>
          </ul>
          <ul className="space-y-2">
            <li><span className="LygbJr font-bold">Community</span></li>
            <li>
              <a
                className="UxlV7h"
                href="https://www.eneba.com/hub/"
                target="_blank"
                rel="noreferrer noopener"
              >
                Gaming news
              </a>
            </li>
            <li><a className="UxlV7h" href="/giveaways">Giveaways</a></li>
            <li><a className="UxlV7h" href="/become-affiliate">Become affiliate</a></li>
          </ul>
          <ul className="space-y-2">
            <li><span className="LygbJr font-bold">Business</span></li>
            <li>
              <a className="jhj9zO w6wAha font-medium" href="/sell-with-eneba">
                Sell on Eneba
              </a>
            </li>
          </ul>
        </div>

        <div className="gvyDFJ mt-8 md:mt-0 flex flex-col space-y-6">
          <div>
            <span className="LygbJr font-bold block mb-2">Follow us</span>
            <ul className="flex space-x-4">
              {/* Facebook */}
              <li>
                <a title="Facebook" href="https://www.facebook.com/enebaglobal/" target="_blank" rel="noreferrer noopener">
                  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 11 23">
                    <path fill="#fff" d="M6.87 7.87h3.8l-.26 3.21H6.87v11.15H2.39V11.08H0v-3.2h2.39V5.72c0-.95.03-2.42.77-3.33.78-.96 1.86-1.61 3.7-1.61 3.02 0 4.3.4 4.3.4l-.6 3.28s-1-.26-1.93-.26c-.93 0-1.76.3-1.76 1.17v2.5z"/>
                  </svg>
                </a>
              </li>
              {/* Twitter */}
              <li>
                <a title="Twitter" href="https://twitter.com/eneba_games" target="_blank" rel="noreferrer noopener">
                  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 23 18">
                    <path fill="#fff" d="M20.65 4.75l.01.57c0 5.8-4.6 12.47-13.02 12.47-2.58 0-4.98-.72-7.01-1.97A9.44 9.44 0 0 0 7.4 14c-2-.03-3.69-1.3-4.27-3.03a4.78 4.78 0 0 0 2.07-.08 4.44 4.44 0 0 1-3.67-4.3v-.05a4.9 4.9 0 0 0 2.07.55 4.34 4.34 0 0 1-2.04-3.65c0-.8.23-1.56.62-2.2a13.19 13.19 0 0 0 9.43 4.57 4.22 4.22 0 0 1-.11-1A4.48 4.48 0 0 1 16.07.43c1.32 0 2.5.53 3.34 1.38a9.42 9.42 0 0 0 2.9-1.06 4.44 4.44 0 0 1-2 2.43c.92-.11 1.8-.35 2.62-.7a9.1 9.1 0 0 1-2.28 2.27z"/>
                  </svg>
                </a>
              </li>
              {/* Instagram */}
              <li>
                <a title="Instagram" href="https://www.instagram.com/enebagames/" target="_blank" rel="noreferrer noopener">
                  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 26 24">
                    <path fill="#fff" d="M16.83 11.91c0-1.58-1-3-2.51-3.61a4.2 4.2 0 0 0-4.44.84A3.8 3.8 0 0 0 9 13.41a4.08 4.08 0 0 0 3.76 2.42 4 4 0 0 0 4.07-3.92zm-1.63 5.68a6.57 6.57 0 0 1-6.96-1.33 5.97 5.97 0 0 1-1.38-6.7 6.4 6.4 0 0 1 5.9-3.8 6.28 6.28 0 0 1 6.39 6.15 6.15 6.15 0 0 1-3.95 5.68zm7.68-5.68l-.08-5a4.8 4.8 0 0 0-4.84-4.65l-5.2-.08-5.2.08a4.8 4.8 0 0 0-4.84 4.65l-.08 5 .08 5a4.8 4.8 0 0 0 4.84 4.66l5.2.08 5.2-.08a4.8 4.8 0 0 0 4.84-4.66zm2.32 0v.02l-.08 5.02A7.07 7.07 0 0 1 18 23.8l-5.24.07h-.02l-5.22-.07A7.07 7.07 0 0 1 .4 16.95l-.08-5.04v-.01L.4 6.88A7.07 7.07 0 0 1 7.52.03l5.24-.08h.02L18 .03a7.07 7.07 0 0 1 7.12 6.85zm-4.57-6.25c0 .56-.35 1.07-.9 1.28-.53.22-1.15.1-1.56-.3-.41-.4-.54-.99-.31-1.5.22-.52.75-.86 1.33-.86.8 0 1.44.62 1.44 1.38z"/>
                  </svg>
                </a>
              </li>
              {/* Discord */}
              <li>
                <a title="Discord" href="https://discord.gg/J8w8R4U3jD" target="_blank" rel="noreferrer noopener">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width="28" height="28">
                    <path fill="#fff" d="M297.22 243.2c0 15.62-11.52 28.42-26.12 28.42-14.33 0-26.1-12.8-26.1-28.42s11.51-28.42 26.12-28.42c14.6 0 26.12 12.8 26.12 28.42zm-119.56-28.42c-14.59 0-26.1 12.8-26.1 28.42s11.77 28.42 26.1 28.42c14.6 0 26.12-12.8 26.12-28.42.25-15.62-11.52-28.42-26.12-28.42zM448 52.74V512c-64.5-57-43.87-38.13-118.78-107.78l13.56 47.36H52.48C23.55 451.58 0 428.03 0 398.85V52.74C0 23.55 23.55 0 52.48 0h343.04C424.45 0 448 23.55 448 52.74zm-72.96 242.68c0-82.43-36.86-149.24-36.86-149.24-36.87-27.65-71.94-26.88-71.94-26.88l-3.58 4.1c43.52 13.3 63.74 32.5 63.74 32.5-60.81-33.33-132.24-33.33-191.23-7.42-9.47 4.35-15.1 7.42-15.1 7.42s21.24-20.22 67.32-33.53l-2.56-3.07s-35.07-.77-71.93 26.88c0 0-36.87 66.81-36.87 149.24 0 0 21.5 37.12 78.08 38.92 0 0 9.47-11.52 17.15-21.25-32.5-9.73-44.8-30.21-44.8-30.21 3.77 2.64 9.98 6.05 10.5 6.4 43.21 24.2 104.59 32.13 159.74 8.96a146.5 146.5 0 0 0 29.44-15.1s-12.8 20.99-46.33 30.46c7.68 9.73 16.9 20.74 16.9 20.74 56.57-1.8 78.33-38.92 78.33-38.92z"/>
                  </svg>
                </a>
              </li>
            </ul>
          </div>

          <div>
            <span className="LygbJr font-bold block mb-2">See our reviews on</span>
            <div
              className="C6fuvp trustpilot-widget"
              data-locale="en"
              data-template-id="53aa8807dec7e10d38f59f32"
              data-businessunit-id="5bb45f34e5793500017408eb"
              data-style-height="110px"
              data-style-width="100%"
              data-theme="dark"
              data-review-languages="en"
              data-stars="4,5"
            >
              <iframe
                title="Customer reviews powered by Trustpilot"
                loading="auto"
                src="https://widget.trustpilot.com/trustboxes/53aa8807dec7e10d38f59f32/index.html?templateId=53aa8807dec7e10d38f59f32&businessunitId=5bb45f34e5793500017408eb#locale=en&styleHeight=110px&styleWidth=100%25&theme=dark&reviewLanguages=en&stars=4%2C5"
                style={{ width: '100%', height: '110px', border: 'none', display: 'block', overflow: 'hidden' }}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="oqXzx5 bg-gray-700 px-6 py-8">
        <div className="CYs3Uq max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between">
          <div className="VxcW1C text-lg font-bold mb-4 md:mb-0">Get personalized game deals</div>
          <form className="ZyecaY flex space-x-2 mb-4 md:mb-0">
            <input
              aria-label="Enter your email"
              required
              type="email"
              name="email"
              placeholder="Enter your email"
              autoCorrect="off"
              className="px-4 py-2 rounded"
            />
            <button className="w6wAha bg-blue-600 px-4 py-2 rounded font-medium" type="submit">
              <span>Subscribe</span>
            </button>
          </form>
          <button
            className="IrsXHn w6wAha flex items-center space-x-2 bg-gray-600 px-4 py-2 rounded"
            title="Settings"
            aria-label="Settings"
            type="button"
          >
            <img
              src="https://static.eneba.games/flags/lang/v2/latvia.svg"
              alt="latvia"
              width="16"
              height="16"
            />
            <span>
              <span>English EU</span>
              <span className="hpg3x5 ml-2">EUR</span>
            </span>
          </button>
        </div>
        <p className="pjiWUe text-center text-sm mt-4 text-gray-300">
          You can unsubscribe at any time. Visit <a href="/privacy-policy" className="underline">Privacy notice</a> for more information
        </p>
      </div>

      <div className="px-6 py-4 text-center text-sm bg-gray-800 text-gray-400">
        <p className="TDjv64">
          © 2025 Eneba. All Rights Reserved. JSC “Helis play”, Gyneju St. 4-333, Vilnius, Lithuania. <a href="/terms-and-conditions" className="underline">Terms and Conditions</a>, <a href="/privacy-policy" className="underline">Privacy notice</a>, <button className="underline">Cookie preferences</button>.
        </p>
      </div>
    </footer>
  );
}
