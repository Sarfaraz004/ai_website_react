import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

const faqItems: FAQItem[] = [
  {
    question: 'How fast can I publish a site?',
    answer: 'With CodePup AI, you can have a fully functional website ready in minutes. Simply describe what you want, and our AI will generate a complete site with content, images, and styling. You can publish immediately or customize further before going live.'
  },
  {
    question: 'Can I use my own domain?',
    answer: 'Yes! Pro and Agency plans include custom domain support. You can connect your existing domain or purchase a new one directly through CodePup. We handle all the technical setup including SSL certificates for secure connections.'
  },
  {
    question: 'Does CodePup optimize images automatically?',
    answer: 'Absolutely! CodePup automatically optimizes all images for web performance. We compress, resize, and serve images in modern formats like WebP, ensuring your site loads quickly on all devices without compromising quality.'
  },
  {
    question: 'Do I need coding knowledge to use CodePup?',
    answer: 'Not at all! CodePup is designed for everyone. Our AI handles all the technical work. However, if you do know code, you can access and customize the underlying HTML, CSS, and JavaScript for advanced modifications.'
  },
  {
    question: 'Can I export my website code?',
    answer: 'Yes! With Pro and Agency plans, you can export your complete website code at any time. This gives you full ownership and the freedom to host your site anywhere you choose.'
  },
  {
    question: 'What kind of websites can I build?',
    answer: 'CodePup can build virtually any type of website: portfolios, landing pages, e-commerce stores, blogs, business sites, and more. Our AI understands different industries and creates sites optimized for your specific needs.'
  },
  {
    question: 'Is there a limit to how many edits I can make?',
    answer: 'No limits! You can make unlimited edits and regenerations with our AI. Experiment freely until your site is perfect. All plans include unlimited revisions and updates.'
  },
  {
    question: 'How does the AI know what I want?',
    answer: 'Our AI is trained on millions of websites and design patterns. Simply describe your business, style preferences, and goals in plain English. The more detail you provide, the better the result. You can refine the output with follow-up instructions.'
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Got questions? We've got answers. Find everything you need to know about CodePup AI.
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqItems.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden transition-all duration-300 hover:shadow-md"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left gap-4 hover:bg-gray-50 transition-colors"
                aria-expanded={openIndex === index}
              >
                <span className="text-lg font-semibold text-gray-900 pr-4">
                  {item.question}
                </span>
                <ChevronDown
                  className={`w-6 h-6 text-blue-600 flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-96' : 'max-h-0'
                }`}
              >
                <div className="px-6 pb-5 text-gray-600 leading-relaxed">
                  {item.answer}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">Still have questions?</p>
          <button className="text-blue-600 font-semibold hover:text-blue-700 underline underline-offset-4 transition-colors">
            Contact our support team
          </button>
        </div>
      </div>
    </section>
  );
}
