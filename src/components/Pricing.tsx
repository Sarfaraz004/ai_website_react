import { Check } from 'lucide-react';

interface PricingTier {
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  highlighted: boolean;
  cta: string;
}

const pricingTiers: PricingTier[] = [
  {
    name: 'Starter Pack',
    price: '₹1000',
    period: 'per month',
    description: 'Perfect for trying out CodePup',
    features: [
      '200 AI credits',
      'Basic code generator',
      'Standard processing speed',
      'CodePup branding',
      'Community support'
    ],
    highlighted: false,
    cta: 'Get started'
  },
  {
    name: 'Professional Pack',
    price: '₹1999',
    period: 'per month',
    description: 'For serious developers and teams',
    features: [
      '450 AI credits',
      'Premium code generation',
      '24/7 Priority support',
      'Ultra-fast processing',
      'Advanced optimization',
      'Custom templates',
      'Remove CodePup branding'
    ],
    highlighted: true,
    cta: 'Start free trial'
  },
  {
    name: 'Agency Pack',
    price: '₹2999',
    period: 'per month',
    description: 'Maximum value for heavy usage',
    features: [
      '700 AI credits',
      'Unlimited code generation',
      'Dedicated support team',
      'Lightning-fast processing',
      'Custom AI models',
      'Team collaboration',
      'Analytics dashboard'
    ],
    highlighted: false,
    cta: 'Contact sales'
  }
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Choose the perfect plan for your needs. All plans include our powerful AI engine.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {pricingTiers.map((tier) => (
            <div
              key={tier.name}
              className={`relative rounded-3xl p-8 transition-all duration-300 ${
                tier.highlighted
                  ? 'bg-gradient-to-br from-blue-600 to-blue-700 text-white shadow-2xl scale-105 md:scale-110'
                  : 'bg-gray-50 hover:shadow-xl border border-gray-200'
              }`}
            >
              {tier.highlighted && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-yellow-400 text-gray-900 px-4 py-1 rounded-full text-sm font-bold">
                  Most Popular
                </div>
              )}

              <div className="mb-6">
                <h3 className={`text-2xl font-bold mb-2 ${tier.highlighted ? 'text-white' : 'text-gray-900'}`}>
                  {tier.name}
                </h3>
                <p className={`text-sm ${tier.highlighted ? 'text-white/80' : 'text-gray-600'}`}>
                  {tier.description}
                </p>
              </div>

              <div className="mb-6">
                <div className="flex items-baseline gap-2">
                  <span className={`text-5xl font-bold ${tier.highlighted ? 'text-white' : 'text-gray-900'}`}>
                    {tier.price}
                  </span>
                  {tier.period && (
                    <span className={`text-lg ${tier.highlighted ? 'text-white/70' : 'text-gray-500'}`}>
                      /{tier.period}
                    </span>
                  )}
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {tier.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Check className={`w-5 h-5 flex-shrink-0 mt-0.5 ${
                      tier.highlighted ? 'text-white' : 'text-blue-600'
                    }`} />
                    <span className={tier.highlighted ? 'text-white/90' : 'text-gray-600'}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <button
                className={`w-full py-4 rounded-xl font-semibold text-lg transition-all duration-300 ${
                  tier.highlighted
                    ? 'bg-white text-blue-600 hover:bg-blue-50 shadow-lg hover:shadow-xl'
                    : 'bg-blue-600 text-white hover:bg-blue-700 hover:shadow-lg'
                }`}
              >
                {tier.cta}
              </button>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600">
            All plans include 14-day free trial. No credit card required.
          </p>
        </div>
      </div>
    </section>
  );
}
