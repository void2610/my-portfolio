export default function Contact() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-primary mb-8">Contact</h1>
      
      <div className="grid md:grid-cols-2 gap-12">
        <div>
          <h2 className="text-2xl font-semibold text-primary mb-6">Get in Touch</h2>
          <p className="text-secondary mb-8">
            お仕事のご依頼やご質問がございましたら、お気軽にお問い合わせください。
          </p>
          
          <div className="space-y-4">
            <div className="flex items-center">
              <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                <span className="text-blue-600 text-sm">@</span>
              </div>
              <span className="text-secondary">Email: contact@example.com</span>
            </div>
            
            <div className="flex items-center">
              <div className="w-6 h-6 bg-gray-100 rounded-full flex items-center justify-center mr-4">
                <span className="text-gray-600 text-sm">#</span>
              </div>
              <span className="text-secondary">GitHub: @void2610</span>
            </div>
            
            <div className="flex items-center">
              <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                <span className="text-blue-600 text-sm">X</span>
              </div>
              <span className="text-secondary">Twitter: @void2610</span>
            </div>
          </div>
        </div>
        
        <div>
          <h2 className="text-2xl font-semibold text-primary mb-6">Send a Message</h2>
          <form className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-secondary mb-1">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full px-3 py-2 border border-primary rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-surface text-primary"
                placeholder="Your name"
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-secondary mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-3 py-2 border border-primary rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-surface text-primary"
                placeholder="your@email.com"
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-secondary mb-1">
                Message
              </label>
              <textarea
                id="message"
                rows={4}
                className="w-full px-3 py-2 border border-primary rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-surface text-primary"
                placeholder="Your message..."
              ></textarea>
            </div>
            
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors font-medium"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}