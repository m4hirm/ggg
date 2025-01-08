import React from 'react';
import { TrendingUp, BookOpen, Signal, Globe, Target, Gem, ArrowRight, Users } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-6xl font-bold mb-8 glow text-green-400">
              Master Crypto Trading
            </h1>
            <p className="text-xl mb-12 text-gray-300">
              Join our expert community and learn proven strategies for successful cryptocurrency trading
            </p>
            <button className="bg-green-400 text-black font-bold py-4 px-8 rounded-full hover:bg-green-300 transition duration-300 text-lg neon-border">
              Start Learning Now
            </button>
          </div>
          
          {/* Animated Globe */}
          <div className="mt-16 relative">
            <img 
              src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80"
              alt="Digital Globe"
              className="rounded-xl mx-auto opacity-80 hover:opacity-100 transition-opacity duration-300"
            />
            <div className="absolute top-1/4 left-1/4 transform -translate-y-1/2 floating delay-100">
              <div className="text-green-400 text-4xl font-bold">₿</div>
            </div>
            <div className="absolute top-1/3 right-1/4 transform -translate-y-1/2 floating delay-300">
              <div className="text-green-400 text-4xl font-bold">Ξ</div>
            </div>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="bg-black/50 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16 text-green-400 glow">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <FeatureCard 
              icon={<BookOpen className="text-green-400" size={32} />}
              title="Crypto Beginner Class"
              description="Comprehensive course covering crypto fundamentals, technical analysis, and trading strategies"
              image="https://images.unsplash.com/photo-1516245834210-c4c142787335?auto=format&fit=crop&w=800&q=80"
            />
            <FeatureCard 
              icon={<Signal className="text-green-400" size={32} />}
              title="Premium Signal Group"
              description="Receive real-time trading signals and market analysis from our expert traders"
              image="https://images.unsplash.com/photo-1642790106117-e829e14a795f?auto=format&fit=crop&w=800&q=80"
            />
            <FeatureCard 
              icon={<TrendingUp className="text-green-400" size={32} />}
              title="Trading Handbook"
              description="In-depth guide with proven strategies, risk management techniques, and market insights"
              image="https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=800&q=80"
            />
          </div>
        </div>
      </div>

      {/* Specialization Section */}
      <div className="py-24 bg-gradient-to-b from-black to-black/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-8 text-green-400 glow">
            Finding the Next 10x Gems
          </h2>
          <p className="text-xl mb-12 text-gray-300 max-w-3xl mx-auto">
            We specialize in discovering high-potential cryptocurrencies before they explode in value. Our expert team analyzes market trends, project fundamentals, and technical indicators to identify the most promising opportunities.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
            <StatCard icon={<Target />} title="Strategic Analysis" value="Fundamental Research" />
            <StatCard icon={<Users />} title="Community" value="Expert Network" />
            <StatCard icon={<Globe />} title="Market Coverage" value="Global Research" />
            <StatCard icon={<Gem />} title="Success Rate" value="Verified Calls" />
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-8 text-green-400 glow">
            Ready to Transform Your Trading?
          </h2>
          <p className="text-xl mb-12 text-gray-300">
            Join our community of successful traders and start your journey today
          </p>
          <button className="group bg-green-400 text-black font-bold py-4 px-8 rounded-full hover:bg-green-300 transition duration-300 flex items-center mx-auto neon-border">
            Get Started 
            <ArrowRight className="ml-2 group-hover:translate-x-2 transition-transform" />
          </button>
        </div>
      </div>
    </div>
  );
}

function FeatureCard({ icon, title, description, image }) {
  return (
    <div className="p-8 rounded-2xl bg-black border border-green-400/30 hover:border-green-400 transition duration-300">
      <img src={image} alt={title} className="w-full h-48 object-cover rounded-lg mb-6" />
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-bold mb-4 text-green-400">{title}</h3>
      <p className="text-gray-300">{description}</p>
    </div>
  );
}

function StatCard({ icon, title, value }) {
  return (
    <div className="p-6 rounded-xl bg-black/50 border border-green-400/30 hover:border-green-400 transition duration-300">
      <div className="text-green-400 mb-4">{icon}</div>
      <h4 className="text-lg font-bold text-green-400">{title}</h4>
      <p className="text-gray-300 mt-2">{value}</p>
    </div>
  );
}

export default App;