import { useState } from 'react';
import { Search, X, ExternalLink } from 'lucide-react';

interface GalleryItem {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
}

const galleryItems: GalleryItem[] = [
  {
    id: 1,
    title: 'Modern E-Commerce',
    category: 'Online Store',
    image: 'https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Beautiful e-commerce site with seamless checkout experience'
  },
  {
    id: 2,
    title: 'Portfolio Studio',
    category: 'Creative Portfolio',
    image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Stunning portfolio showcasing creative work'
  },
  {
    id: 3,
    title: 'Restaurant Hub',
    category: 'Food & Dining',
    image: 'https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Elegant restaurant website with online reservations'
  },
  {
    id: 4,
    title: 'Tech Startup',
    category: 'SaaS Landing',
    image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Clean SaaS landing page with conversion focus'
  },
  {
    id: 5,
    title: 'Fitness Pro',
    category: 'Health & Wellness',
    image: 'https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Dynamic fitness website with class bookings'
  },
  {
    id: 6,
    title: 'Agency Collective',
    category: 'Digital Agency',
    image: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Professional agency site showcasing services'
  }
];

export default function Gallery(onSearch?: (query: string) => void) {
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);
  const [query, setQuery] = useState("");

  const handleChange = (e) => {
    const value = e.target.value;
    setQuery(value);
    if (onSearch) onSearch(value);
  };


  return (
    <section id="gallery" className="py-20 bg-gray-50 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-float-slow"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl animate-float-delayed"></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Built with CodePup AI
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            See what our users have created. From e-commerce to portfolios, every site is unique.
          </p>
        </div>

        <div className="w-full flex justify-center mt-8 mb-12">
  <div className="relative w-full max-w-xl">
    <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
    <input
      type="text"
      value={query}
      onChange={handleChange}
      placeholder="Search by name, description, creator, or tags..."
      className="w-full pl-12 pr-12 py-4 rounded-3xl border border-gray-300 
                 focus:border-blue-500 focus:ring-2 focus:ring-blue-300 
                 outline-none text-gray-700 placeholder-gray-400 
                 shadow-md hover:shadow-lg transition-all duration-300"
    />
    {query && (
      <button
        onClick={() => setQuery('')}
        className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
      >
        <X className="w-5 h-5" />
      </button>
    )}
  </div>
</div>


        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryItems.map((item, index) => (
            <div
              key={item.id}
              onClick={() => setSelectedItem(item)}
              className="group cursor-pointer bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-500 hover:-translate-y-3 animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative aspect-video overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 to-blue-500/0 group-hover:from-blue-500/10 group-hover:to-purple-500/10 transition-all duration-500 z-10"></div>
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-125 group-hover:rotate-2 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20">
                  <div className="absolute bottom-4 left-4 right-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <ExternalLink className="w-6 h-6 text-white mb-2 animate-bounce-subtle" />
                    <p className="text-white text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                      Click to preview
                    </p>
                  </div>
                </div>
                <div className="absolute top-4 right-4 bg-blue-500 text-white px-3 py-1 rounded-full text-xs font-semibold opacity-0 group-hover:opacity-100 transform scale-0 group-hover:scale-100 transition-all duration-300 z-30">
                  View
                </div>
              </div>
              <div className="p-6">
                <span className="text-sm font-medium text-blue-600 uppercase tracking-wide">
                  {item.category}
                </span>
                <h3 className="text-xl font-bold text-gray-900 mt-2 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedItem && (
        <div
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setSelectedItem(null)}
        >
          <div
            className="bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-auto shadow-2xl animate-scale-in"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="sticky top-0 bg-white border-b border-gray-200 p-4 flex items-center justify-between z-10">
              <div>
                <h3 className="text-2xl font-bold text-gray-900">{selectedItem.title}</h3>
                <span className="text-sm text-blue-600 font-medium">{selectedItem.category}</span>
              </div>
              <button
                onClick={() => setSelectedItem(null)}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                aria-label="Close modal"
              >
                <X className="w-6 h-6 text-gray-600" />
              </button>
            </div>
            <div className="p-8">
              <img
                src={selectedItem.image}
                alt={selectedItem.title}
                className="w-full rounded-xl shadow-lg mb-6"
              />
              <p className="text-lg text-gray-700 mb-6">{selectedItem.description}</p>
              <button className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-4 rounded-xl font-semibold text-lg hover:shadow-xl hover:shadow-blue-500/50 transition-all duration-300 hover:scale-105">
                Use this template
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
