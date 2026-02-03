import React, { useState, useEffect } from 'react';
import { LineChart, Line, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Sun, Zap, TrendingUp, Leaf, Battery, Award, ArrowRight, Menu, X, BarChart3, Users, Target, Sprout, Wind, CloudRain } from 'lucide-react';

// Eco-Nature Theme: Forest greens + Earth tones
const EnerXApp = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [activeTab, setActiveTab] = useState('overview');
  const [aiRecommendations, setAiRecommendations] = useState([]);
  const [isLoadingAI, setIsLoadingAI] = useState(false);

  // Mock data for solar generation (24 hours)
  const solarData = [
    { time: '00:00', kwh: 0 },
    { time: '03:00', kwh: 0 },
    { time: '06:00', kwh: 0.5 },
    { time: '09:00', kwh: 2.8 },
    { time: '12:00', kwh: 4.5 },
    { time: '15:00', kwh: 3.9 },
    { time: '18:00', kwh: 1.2 },
    { time: '21:00', kwh: 0 },
  ];

  // Mock data for carbon savings over time
  const carbonData = [
    { month: 'Jan', saved: 120 },
    { month: 'Feb', saved: 145 },
    { month: 'Mar', saved: 168 },
    { month: 'Apr', saved: 192 },
    { month: 'May', saved: 215 },
    { month: 'Jun', saved: 234 },
  ];

  // User stats
  const userStats = {
    todayGeneration: 18.5,
    monthGeneration: 487,
    carbonSaved: 234,
    treesEquivalent: 11,
    rank: 'Top 15%',
    streak: 47
  };

  // Simulate AI recommendation generation
  const generateAIRecommendations = async () => {
    setIsLoadingAI(true);
    
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    const recommendations = [
      {
        id: 1,
        title: "Peak Generation Window Optimization",
        description: "Your solar panels generate maximum power between 11 AM - 2 PM. Schedule high-energy tasks like washing machines, dishwashers, and EV charging during this window to maximize self-consumption.",
        impact: "Save ₹450/month",
        priority: "high",
        icon: Sun
      },
      {
        id: 2,
        title: "Battery Storage Opportunity",
        description: "You're currently exporting 35% of generated power to the grid. Installing a 5kWh battery system could increase your self-consumption from 65% to 92%, improving ROI by 23%.",
        impact: "₹850/month additional savings",
        priority: "medium",
        icon: Battery
      },
      {
        id: 3,
        title: "Weather-Adaptive Energy Planning",
        description: "Forecast shows cloudy conditions next Tuesday-Thursday. Pre-charge devices and complete energy-intensive tasks on Monday to maintain efficiency during low-generation days.",
        impact: "Maintain 90%+ efficiency",
        priority: "medium",
        icon: CloudRain
      },
      {
        id: 4,
        title: "Grid-Export Timing Strategy",
        description: "Your area has peak grid demand from 6-9 PM. If you add battery storage, exporting during these hours could earn 40% higher feed-in tariffs compared to midday export.",
        impact: "Potential ₹320/month extra revenue",
        priority: "low",
        icon: Zap
      },
      {
        id: 5,
        title: "Panel Cleaning Recommendation",
        description: "Generation efficiency has dropped 8% over the last 3 weeks, likely due to dust accumulation. A panel cleaning could restore full capacity—typically showing improvement within 24 hours.",
        impact: "Restore 8% generation capacity",
        priority: "high",
        icon: Target
      }
    ];
    
    setAiRecommendations(recommendations);
    setIsLoadingAI(false);
  };

  useEffect(() => {
    if (isLoggedIn && activeTab === 'recommendations') {
      generateAIRecommendations();
    }
  }, [isLoggedIn, activeTab]);

  // Landing Page Component
  const LandingPage = () => (
    <div className="min-h-screen bg-gradient-to-br from-forest-dark via-forest-medium to-forest-dark relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
        <div className="absolute top-20 left-10 text-6xl opacity-10 animate-float">🌿</div>
        <div className="absolute top-40 right-20 text-5xl opacity-10 animate-float" style={{animationDelay: '1s'}}>🍃</div>
        <div className="absolute bottom-40 left-1/4 text-7xl opacity-10 animate-float" style={{animationDelay: '2s'}}>🌱</div>
        <div className="absolute bottom-20 right-1/3 text-5xl opacity-10 animate-float" style={{animationDelay: '3s'}}>🌾</div>
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-forest-dark/90 backdrop-blur-xl border-b border-moss/20 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-gradient-to-br from-moss to-leaf rounded-2xl flex items-center justify-center shadow-glow-green">
              <Sprout className="w-7 h-7 text-forest-dark" strokeWidth={2.5} />
            </div>
            <span className="text-3xl font-bold font-display bg-gradient-to-r from-mint to-leaf bg-clip-text text-transparent">
              EnerX
            </span>
          </div>
          
          <div className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-sand hover:text-mint transition-colors font-medium">Features</a>
            <a href="#how-it-works" className="text-sand hover:text-mint transition-colors font-medium">How It Works</a>
            <a href="#impact" className="text-sand hover:text-mint transition-colors font-medium">Impact</a>
            <button 
              onClick={() => setIsLoggedIn(true)}
              className="px-6 py-3 bg-gradient-to-r from-moss to-leaf text-forest-dark font-bold rounded-full hover:shadow-glow-green transition-all transform hover:scale-105"
            >
              Get Started →
            </button>
          </div>

          <button className="md:hidden text-sand" onClick={() => setShowMobileMenu(!showMobileMenu)}>
            {showMobileMenu ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {showMobileMenu && (
          <div className="md:hidden bg-forest-medium/95 backdrop-blur-xl border-t border-moss/20 px-6 py-4 space-y-4">
            <a href="#features" className="block text-sand hover:text-mint py-2">Features</a>
            <a href="#how-it-works" className="block text-sand hover:text-mint py-2">How It Works</a>
            <a href="#impact" className="block text-sand hover:text-mint py-2">Impact</a>
            <button 
              onClick={() => setIsLoggedIn(true)}
              className="w-full px-6 py-3 bg-gradient-to-r from-moss to-leaf text-forest-dark font-bold rounded-full"
            >
              Get Started
            </button>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <div className="pt-32 pb-20 px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 px-5 py-2 bg-moss/10 border border-leaf/30 rounded-full backdrop-blur-sm">
                <div className="w-2 h-2 bg-leaf rounded-full animate-pulse-eco"></div>
                <span className="text-sm text-white font-medium">🌍 Making Renewable Energy Visible & Valuable</span>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold font-display leading-tight">
                <span className="text-white">
                  Track, Trade &
                </span>
                <br />
                <span className="text-sand">
                  Transform Energy
                </span>
              </h1>
              
              <p className="text-xl text-sand/80 leading-relaxed">
                India's first digital layer for renewable energy accounting. Measure your carbon impact, get AI-powered recommendations, and contribute to climate goals—<span className="text-white font-semibold">without changing infrastructure</span>.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={() => setIsLoggedIn(true)}
                  className="group px-8 py-4 bg-gradient-to-r from-moss to-leaf text-forest-dark font-bold rounded-full hover:shadow-glow-green transition-all flex items-center justify-center gap-2 transform hover:scale-105"
                >
                  Start Free Trial
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="px-8 py-4 bg-forest-light/50 text-mint font-semibold rounded-full border border-moss/30 hover:bg-forest-light/70 transition-all backdrop-blur-sm">
                  Watch Demo
                </button>
              </div>

              <div className="flex items-center gap-8 pt-4">
                <div>
                  <div className="text-3xl font-bold text-white">2,847</div>
                  <div className="text-sm text-sand/70">Active Users</div>
                </div>
                <div className="w-px h-12 bg-moss/30"></div>
                <div>
                  <div className="text-3xl font-bold text-white">1.2M+</div>
                  <div className="text-sm text-sand/70">kWh Tracked</div>
                </div>
                <div className="w-px h-12 bg-moss/30"></div>
                <div>
                  <div className="text-3xl font-bold text-white">547 tons</div>
                  <div className="text-sm text-sand/70">CO₂ Offset</div>
                </div>
              </div>
            </div>

            {/* Hero Visual - Improved Design */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-moss/30 to-leaf/30 rounded-3xl blur-3xl"></div>
              <div className="relative card-organic p-8 shadow-organic-lg">
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <span className="text-white text-sm font-medium">Today's Generation</span>
                    <div className="flex items-center gap-2 px-3 py-1 bg-moss/20 rounded-full">
                      <div className="w-2 h-2 bg-leaf rounded-full animate-pulse"></div>
                      <span className="text-white text-xs font-semibold">Live</span>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="text-6xl font-bold text-white">18.5 <span className="text-3xl text-sand/70">kWh</span></div>
                    <div className="flex items-center gap-2 text-white">
                      <TrendingUp className="w-5 h-5" />
                      <span className="font-semibold">+12% vs yesterday</span>
                    </div>
                  </div>

                  <div className="h-48 bg-forest-dark/30 rounded-2xl p-4 border border-moss/20">
                    <ResponsiveContainer width="100%" height="100%">
                      <AreaChart data={solarData}>
                        <defs>
                          <linearGradient id="heroGradient" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#90c695" stopOpacity={0.4}/>
                            <stop offset="95%" stopColor="#90c695" stopOpacity={0}/>
                          </linearGradient>
                        </defs>
                        <CartesianGrid strokeDasharray="3 3" stroke="#567d46" opacity={0.2} />
                        <XAxis dataKey="time" stroke="#8ba888" fontSize={12} />
                        <YAxis stroke="#8ba888" fontSize={12} />
                        <Tooltip 
                          contentStyle={{ 
                            backgroundColor: '#2d5016', 
                            border: '1px solid #90c695',
                            borderRadius: '12px',
                            color: '#e8dcc4'
                          }} 
                        />
                        <Area 
                          type="monotone" 
                          dataKey="kwh" 
                          stroke="#90c695" 
                          strokeWidth={3}
                          fill="url(#heroGradient)" 
                        />
                      </AreaChart>
                    </ResponsiveContainer>
                  </div>

                  <div className="grid grid-cols-3 gap-4 pt-4 border-t border-moss/20">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-white">8.9kg</div>
                      <div className="text-xs text-sand/60 mt-1">CO₂ Saved</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-white">₹124</div>
                      <div className="text-xs text-sand/60 mt-1">Money Saved</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-white">92%</div>
                      <div className="text-xs text-sand/60 mt-1">Efficiency</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div id="features" className="py-20 px-6 bg-forest-medium/30 backdrop-blur-sm relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-display text-white mb-4">
              Why <span className="text-leaf">EnerX</span>?
            </h2>
            <p className="text-xl text-sand/80 max-w-2xl mx-auto">The UPI of renewable energy—making green power measurable, auditable, and actionable</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: BarChart3,
                title: "Real-Time Tracking",
                description: "Monitor every kilowatt-hour of renewable energy generated and consumed with precision unit-level accounting.",
                gradient: "from-moss to-leaf"
              },
              {
                icon: Leaf,
                title: "Carbon Impact Ledger",
                description: "Auditable, time-stamped carbon savings that meet international ESG reporting standards for businesses.",
                gradient: "from-leaf to-mint"
              },
              {
                icon: Target,
                title: "AI Recommendations",
                description: "Smart insights to optimize your energy usage, increase self-consumption, and maximize ROI on solar investments.",
                gradient: "from-earth-clay to-sand"
              }
            ].map((feature, idx) => (
              <div key={idx} className="group card-organic p-8 hover:shadow-organic-lg">
                <div className={`w-16 h-16 bg-gradient-to-br ${feature.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg`}>
                  <feature.icon className="w-8 h-8 text-forest-dark" strokeWidth={2.5} />
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-sand/80 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* How It Works */}
      <div id="how-it-works" className="py-20 px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-display text-white mb-4">
              Simple. Powerful. <span className="text-leaf">Zero Infrastructure Change.</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            {[
              { step: "01", title: "Connect Your Solar", desc: "Link your rooftop solar system—we integrate with all major inverter brands", icon: Zap },
              { step: "02", title: "AI Analyzes Data", desc: "Our engine tracks generation patterns, carbon impact, and optimization opportunities", icon: Target },
              { step: "03", title: "Get Insights & Save", desc: "Receive personalized recommendations and verifiable carbon credits", icon: TrendingUp }
            ].map((item, idx) => (
              <div key={idx} className="relative">
                <div className="text-8xl font-bold text-moss/10 mb-4">{item.step}</div>
                <div className="card-organic p-6 -mt-12">
                  <div className="w-14 h-14 bg-gradient-to-br from-moss to-leaf rounded-xl flex items-center justify-center mb-4 shadow-glow-green">
                    <item.icon className="w-7 h-7 text-forest-dark" strokeWidth={2.5} />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">{item.title}</h3>
                  <p className="text-sand/80">{item.desc}</p>
                </div>
                {idx < 2 && (
                  <div className="hidden md:block absolute top-32 -right-6 w-12 h-px bg-gradient-to-r from-moss to-transparent"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20 px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center card-organic p-12">
          <Sprout className="w-16 h-16 text-leaf mx-auto mb-6" />
          <h2 className="text-4xl md:text-5xl font-bold font-display text-white mb-6">
            Ready to Make Your Energy Visible?
          </h2>
          <p className="text-xl text-sand/80 mb-8">
            Join 2,800+ users already tracking their renewable impact
          </p>
          <button 
            onClick={() => setIsLoggedIn(true)}
            className="group px-10 py-5 bg-gradient-to-r from-moss to-leaf text-forest-dark font-bold text-lg rounded-full hover:shadow-glow-green transition-all inline-flex items-center gap-3 transform hover:scale-105"
          >
            Start Your Free Trial
            <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-moss/20 py-8 px-6 relative z-10">
        <div className="max-w-7xl mx-auto text-center text-sand/70 text-sm">
          <p>© 2026 EnerX. Making renewable energy measurable, tradable, and valuable. 🌱</p>
        </div>
      </footer>
    </div>
  );

  // Dashboard Component
  const Dashboard = () => (
    <div className="min-h-screen bg-gradient-to-br from-forest-dark via-forest-medium to-forest-dark">
      {/* Top Navigation */}
      <nav className="bg-forest-dark/90 backdrop-blur-xl border-b border-moss/20 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-gradient-to-br from-moss to-leaf rounded-2xl flex items-center justify-center shadow-glow-green">
              <Sprout className="w-7 h-7 text-forest-dark" strokeWidth={2.5} />
            </div>
            <span className="text-3xl font-bold font-display bg-gradient-to-r from-mint to-leaf bg-clip-text text-transparent">
              EnerX
            </span>
          </div>

          <div className="flex items-center gap-4">
            <div className="hidden md:flex items-center gap-2 px-4 py-2 bg-moss/10 border border-leaf/20 rounded-full backdrop-blur-sm">
              <Award className="w-5 h-5 text-leaf" />
              <span className="text-sm text-mint font-medium">{userStats.rank} in your region</span>
            </div>
            <button 
              onClick={() => setIsLoggedIn(false)}
              className="px-4 py-2 text-sage hover:text-sand transition-colors"
            >
              Logout
            </button>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="max-w-7xl mx-auto px-6 flex gap-8 border-t border-moss/10">
          {[
            { id: 'overview', label: 'Overview', icon: BarChart3 },
            { id: 'recommendations', label: 'AI Recommendations', icon: Target }
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-4 py-3 border-b-2 transition-all ${
                activeTab === tab.id 
                  ? 'border-leaf text-leaf' 
                  : 'border-transparent text-sage hover:text-mint'
              }`}
            >
              <tab.icon className="w-4 h-4" />
              <span className="font-medium">{tab.label}</span>
            </button>
          ))}
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-6 py-8">
        {activeTab === 'overview' ? (
          <>
            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              {[
                {
                  label: "Today's Generation",
                  value: `${userStats.todayGeneration} kWh`,
                  change: "+12%",
                  icon: Sun,
                  gradient: "from-earth-clay to-sand"
                },
                {
                  label: "This Month",
                  value: `${userStats.monthGeneration} kWh`,
                  change: "+8%",
                  icon: Zap,
                  gradient: "from-moss to-leaf"
                },
                {
                  label: "Carbon Saved",
                  value: `${userStats.carbonSaved} kg CO₂`,
                  change: "MTD",
                  icon: Leaf,
                  gradient: "from-leaf to-mint"
                },
                {
                  label: "Trees Equivalent",
                  value: userStats.treesEquivalent,
                  change: `${userStats.streak} day streak`,
                  icon: Sprout,
                  gradient: "from-mint to-sage"
                }
              ].map((stat, idx) => (
                <div key={idx} className="card-organic p-6 hover:shadow-organic-lg group">
                  <div className="flex items-start justify-between mb-4">
                    <span className="text-sand/70 text-sm font-medium">{stat.label}</span>
                    <div className={`w-12 h-12 bg-gradient-to-br ${stat.gradient} rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform`}>
                      <stat.icon className="w-6 h-6 text-forest-dark" strokeWidth={2.5} />
                    </div>
                  </div>
                  <div className="text-4xl font-bold text-white mb-2">{stat.value}</div>
                  <div className="text-sm text-white font-medium">{stat.change}</div>
                </div>
              ))}
            </div>

            {/* Charts Row */}
            <div className="grid lg:grid-cols-2 gap-6 mb-8">
              {/* Solar Generation Chart */}
              <div className="card-organic p-6">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-bold text-white">Today's Solar Generation</h3>
                  <select className="px-3 py-2 bg-forest-dark/50 border border-moss/20 rounded-xl text-sm text-white focus:outline-none focus:border-leaf transition-colors">
                    <option>Today</option>
                    <option>Yesterday</option>
                    <option>Last 7 Days</option>
                  </select>
                </div>
                <div className="h-64 bg-forest-dark/30 rounded-2xl p-4 border border-moss/10">
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={solarData}>
                      <defs>
                        <linearGradient id="solarGrad" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="#90c695" stopOpacity={0.5}/>
                          <stop offset="95%" stopColor="#90c695" stopOpacity={0}/>
                        </linearGradient>
                      </defs>
                      <CartesianGrid strokeDasharray="3 3" stroke="#567d46" opacity={0.2} />
                      <XAxis dataKey="time" stroke="#8ba888" />
                      <YAxis stroke="#8ba888" />
                      <Tooltip 
                        contentStyle={{ 
                          backgroundColor: '#2d5016', 
                          border: '1px solid #90c695',
                          borderRadius: '12px',
                          color: '#e8dcc4'
                        }} 
                      />
                      <Area 
                        type="monotone" 
                        dataKey="kwh" 
                        stroke="#90c695" 
                        strokeWidth={3}
                        fill="url(#solarGrad)" 
                      />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
              </div>

              {/* Carbon Savings Chart */}
              <div className="card-organic p-6">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-bold text-white">Carbon Savings Trend</h3>
                  <select className="px-3 py-2 bg-forest-dark/50 border border-moss/20 rounded-xl text-sm text-white focus:outline-none focus:border-leaf transition-colors">
                    <option>Last 6 Months</option>
                    <option>This Year</option>
                    <option>All Time</option>
                  </select>
                </div>
                <div className="h-64 bg-forest-dark/30 rounded-2xl p-4 border border-moss/10">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={carbonData}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#567d46" opacity={0.2} />
                      <XAxis dataKey="month" stroke="#8ba888" />
                      <YAxis stroke="#8ba888" />
                      <Tooltip 
                        contentStyle={{ 
                          backgroundColor: '#2d5016', 
                          border: '1px solid #90c695',
                          borderRadius: '12px',
                          color: '#e8dcc4'
                        }} 
                      />
                      <Line 
                        type="monotone" 
                        dataKey="saved" 
                        stroke="#90c695" 
                        strokeWidth={3}
                        dot={{ fill: '#90c695', r: 6 }}
                        activeDot={{ r: 8 }}
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="card-organic p-6">
              <h3 className="text-xl font-bold text-white mb-6">Quick Actions</h3>
              <div className="grid md:grid-cols-3 gap-4">
                <button className="p-6 bg-forest-dark/40 hover:bg-forest-light/30 border border-moss/20 rounded-2xl text-left transition-all group">
                  <div className="text-leaf mb-3 group-hover:scale-110 transition-transform">
                    <BarChart3 className="w-7 h-7" />
                  </div>
                  <div className="text-white font-semibold mb-1">Download Report</div>
                  <div className="text-sand/70 text-sm">Get monthly carbon impact PDF</div>
                </button>
                
                <button 
                  onClick={() => setActiveTab('recommendations')}
                  className="p-6 bg-gradient-to-br from-moss/20 to-leaf/10 hover:from-moss/30 hover:to-leaf/20 border border-leaf/30 rounded-2xl text-left transition-all group"
                >
                  <div className="text-leaf mb-3 group-hover:scale-110 transition-transform">
                    <Target className="w-7 h-7" />
                  </div>
                  <div className="text-white font-semibold mb-1">AI Recommendations</div>
                  <div className="text-sand/70 text-sm">Optimize your energy usage</div>
                </button>
                
                <button className="p-6 bg-forest-dark/40 hover:bg-forest-light/30 border border-moss/20 rounded-2xl text-left transition-all group">
                  <div className="text-leaf mb-3 group-hover:scale-110 transition-transform">
                    <Users className="w-7 h-7" />
                  </div>
                  <div className="text-white font-semibold mb-1">Compare with Peers</div>
                  <div className="text-sand/70 text-sm">See regional benchmarks</div>
                </button>
              </div>
            </div>
          </>
        ) : (
          /* AI Recommendations Tab */
          <div className="space-y-6">
            <div className="card-organic p-8 bg-gradient-to-r from-moss/10 to-leaf/10 border-leaf/30">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 bg-gradient-to-br from-moss to-leaf rounded-2xl flex items-center justify-center flex-shrink-0 shadow-glow-green">
                  <Target className="w-7 h-7 text-forest-dark" strokeWidth={2.5} />
                </div>
                <div>
                  <h2 className="text-3xl font-bold font-display text-white mb-2">AI-Powered Energy Recommendations</h2>
                  <p className="text-sand/80 text-lg">
                    Our AI analyzes your generation patterns, consumption habits, and local weather forecasts to provide personalized optimization strategies.
                  </p>
                </div>
              </div>
            </div>

            {isLoadingAI ? (
              <div className="flex flex-col items-center justify-center py-20">
                <div className="relative">
                  <div className="w-20 h-20 border-4 border-moss/20 border-t-leaf rounded-full animate-spin"></div>
                  <Sprout className="w-10 h-10 text-leaf absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
                </div>
                <p className="text-white mt-6 text-lg">Analyzing your energy data...</p>
              </div>
            ) : (
              <div className="space-y-4">
                {aiRecommendations.map((rec) => (
                  <div 
                    key={rec.id} 
                    className={`card-organic p-8 hover:shadow-organic-lg transition-all ${
                      rec.priority === 'high' 
                        ? 'border-earth-clay/50 bg-gradient-to-br from-earth-clay/5 to-transparent' 
                        : rec.priority === 'medium'
                        ? 'border-moss/30'
                        : 'border-moss/20'
                    }`}
                  >
                    <div className="flex items-start gap-4">
                      <div className={`w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg ${
                        rec.priority === 'high'
                          ? 'bg-gradient-to-br from-earth-clay to-sand'
                          : rec.priority === 'medium'
                          ? 'bg-gradient-to-br from-moss to-leaf'
                          : 'bg-gradient-to-br from-forest-light to-moss'
                      }`}>
                        <rec.icon className="w-7 h-7 text-forest-dark" strokeWidth={2.5} />
                      </div>
                      
                      <div className="flex-1">
                        <div className="flex items-start justify-between mb-3">
                          <h3 className="text-2xl font-bold text-white">{rec.title}</h3>
                          <span className={`px-4 py-1 rounded-full text-xs font-bold uppercase ${
                            rec.priority === 'high'
                              ? 'bg-earth-clay/20 text-white border border-earth-clay/40'
                              : rec.priority === 'medium'
                              ? 'bg-moss/20 text-white border border-leaf/30'
                              : 'bg-forest-light/30 text-white border border-moss/20'
                          }`}>
                            {rec.priority}
                          </span>
                        </div>
                        
                        <p className="text-sand/80 mb-6 leading-relaxed text-lg">{rec.description}</p>
                        
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <TrendingUp className="w-6 h-6 text-white" />
                            <span className="text-white font-bold text-lg">{rec.impact}</span>
                          </div>
                          <button className="px-6 py-3 bg-moss/10 hover:bg-moss/20 border border-leaf/30 text-white rounded-full font-semibold transition-all transform hover:scale-105">
                            Learn More →
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );

  return isLoggedIn ? <Dashboard /> : <LandingPage />;
};

export default EnerXApp;