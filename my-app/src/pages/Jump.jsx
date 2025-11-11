import React, { useState, useEffect } from 'react';
import { Menu, X, Box, Shield, Eye, Zap, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Jump() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 text-white overflow-hidden">
    
      <div className="fixed inset-0 overflow-hidden pointer-events-none">

        <svg className="absolute inset-0 w-full h-full opacity-20" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style={{stopColor: '#06b6d4', stopOpacity: 0.5}} />
              <stop offset="100%" style={{stopColor: '#3b82f6', stopOpacity: 0.5}} />
            </linearGradient>
          </defs>
          
          {[...Array(15)].map((_, i) => (
            <g key={i}>
              <circle 
                cx={`${(i * 7 + 10) % 90}%`} 
                cy={`${(i * 13 + 15) % 80}%`} 
                r="4" 
                fill="url(#grad1)"
                className="animate-pulse"
                style={{animationDelay: `${i * 0.3}s`}}
              />
              <line
                x1={`${(i * 7 + 10) % 90}%`}
                y1={`${(i * 13 + 15) % 80}%`}
                x2={`${((i + 1) * 7 + 10) % 90}%`}
                y2={`${((i + 1) * 13 + 15) % 80}%`}
                stroke="url(#grad1)"
                strokeWidth="1"
                className="animate-pulse"
                style={{animationDelay: `${i * 0.2}s`}}
              />
            </g>
          ))}
        </svg>
        
        <div className="absolute top-20 left-10 w-32 h-32 animate-float-slow">
          <svg viewBox="0 0 100 100" className="w-full h-full opacity-10">
            <polygon points="50,10 90,35 90,65 50,90 10,65 10,35" fill="none" stroke="#06b6d4" strokeWidth="2"/>
          </svg>
        </div>
        
        <div className="absolute bottom-20 right-20 w-40 h-40 animate-float-medium">
          <svg viewBox="0 0 100 100" className="w-full h-full opacity-10">
            <rect x="20" y="20" width="60" height="60" fill="none" stroke="#3b82f6" strokeWidth="2" transform="rotate(45 50 50)"/>
          </svg>
        </div>
        
        <div className="absolute top-1/2 left-1/4 w-24 h-24 animate-float-fast">
          <svg viewBox="0 0 100 100" className="w-full h-full opacity-10">
            <circle cx="50" cy="50" r="40" fill="none" stroke="#8b5cf6" strokeWidth="2"/>
            <circle cx="50" cy="50" r="25" fill="none" stroke="#8b5cf6" strokeWidth="2"/>
          </svg>
        </div>
        
        <div className="absolute top-40 right-1/3 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-40 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1.5s'}}></div>
      </div>

     <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${ scrollY > 50 ? 'bg-slate-950 shadow-lg' : 'bg-transparent'  }`}>
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold">
              Jump<span className="text-cyan-400">Bot</span>
            </div>
            
            <div className="hidden md:flex items-center gap-8">
              <a href="#home" className="hover:text-cyan-400 transition-colors">Home</a>
              <a href="#why" className="hover:text-cyan-400 transition-colors">Why Blockchain</a>
              <a href="#pricing" className="hover:text-cyan-400 transition-colors">Pricing</a>
              <a href="#how" className="hover:text-cyan-400 transition-colors">How It Works</a>
              <button className="bg-cyan-500 hover:bg-cyan-600 px-6 py-2 rounded-full transition-all transform hover:scale-105">
                Contact Us
              </button>
            </div>

            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {isMenuOpen && (
            <motion.div initial={{ y: -50, opacity: 0 }}
animate={{ y: 0, opacity: 1 }}
transition={{ duration: 0.6, ease: "easeOut" }}
 className="md:hidden mt-4 pb-4 space-y-4 animate-fade-in">
              <a href="#home" className="block hover:text-cyan-400 transition-colors">Home</a>
              <a href="#why" className="block hover:text-cyan-400 transition-colors">Why Blockchain</a>
              <a href="#pricing" className="block hover:text-cyan-400 transition-colors">Pricing</a>
              <a href="#how" className="block hover:text-cyan-400 transition-colors">How It Works</a>
              <button className="w-full bg-cyan-500 hover:bg-cyan-600 px-6 py-2 rounded-full transition-all">
                Contact Us
              </button>
            </motion.div>
          )}
        </div>
      </nav>

      <section
 className="relative min-h-screen flex items-center pt-20">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <motion.div
          id="home"
        initial={{ opacity: 0, x: -50 }}
whileInView={{ opacity: 1, x: 0 }}
viewport={{ once: true, amount: 0.3 }}
transition={{ duration: 0.8, ease: "easeOut" }} className="space-y-6 animate-fade-in-up">
            <h1 className="text-6xl md:text-7xl font-bold pt-30 leading-tight">
              Unleashing the Power of <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Blockchain</span>
            </h1>
            <p className="text-gray-300 text-lg">
              Transforming industries with secure, decentralized, and transparent technology.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="bg-cyan-500 hover:bg-cyan-600 px-8 py-3 rounded-full transition-all transform hover:scale-105 flex items-center gap-2">
                Get Started with Blockchain <ChevronRight size={20} />
              </button>
              <button className="border border-cyan-500 hover:bg-cyan-500/10 px-8 py-3 rounded-full transition-all">
                Discover How It Works
              </button>
            </div>
          </motion.div>

        
          <div className="relative h-96 flex items-center justify-center animate-fade-in">
            <div className="relative w-full h-full flex items-center justify-center">
              {[...Array(3)].map((_, i) => (
                <div
                  key={i}
                  className="absolute w-32 h-32 border-4 border-cyan-400/30 rounded-2xl animate-float"
                  style={{
                    animationDelay: `${i * 0.3}s`,
                    transform: `rotate(${i * 15}deg) translateX(${i * 40}px)`,
                  }}
                >
                  <div className="w-full h-full bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-xl backdrop-blur-sm"></div>
                </div>
              ))}
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
            </div>
          </div>
        </div>
        
      </section>

    
      <motion.section id="why" initial={{ opacity: 0, x: 50 }}
whileInView={{ opacity: 1, x: 0 }}
viewport={{ once: true, amount: 0.3 }}
transition={{ duration: 0.8, ease: "easeOut" }}
className="py-9 md:py-20 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Why <span className="text-cyan-400">Blockchain?</span>
            </h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Blockchain is redefining trust in the digital world. Here's why it matters.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: <Box className="w-8 h-8" />,
                title: "Decentralization",
                desc: "No single entity controls the system"
              },
              {
                icon: <Shield className="w-8 h-8" />,
                title: "Security",
                desc: "Encrypted and tamper-proof data"
              },
              {
                icon: <Eye className="w-8 h-8" />,
                title: "Transparency",
                desc: "Public, accountable transactions"
              },
              {
                icon: <Zap className="w-8 h-8" />,
                title: "Efficiency",
                desc: "Faster, cost-effective processes"
              }
            ].map((item, idx) => (
              <div
                key={idx}
                className="group bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm p-8 rounded-2xl border border-cyan-500/20 hover:border-cyan-500/50 transition-all transform hover:scale-105 hover:-translate-y-2 cursor-pointer animate-fade-in-up"
                style={{animationDelay: `${idx * 0.1}s`}}
              >
                <div className="text-cyan-400 mb-4 group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-gray-400">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </motion.section>


      <motion.section initial={{ opacity: 0, x: -50 }}
whileInView={{ opacity: 1, x: 0 }}
viewport={{ once: true, amount: 0.3 }}
transition={{ duration: 0.8, ease: "easeOut" }}
className="py-20 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in-up">
              <h2 className="text-4xl md:text-5xl font-bold">
                Why Blockchain <span className="text-cyan-400">Matters</span>
              </h2>
              <p className="text-gray-300 text-lg leading-relaxed">
                Blockchain is revolutionizing how we handle data, transactions, and trust. By eliminating intermediaries and creating secure, transparent systems, blockchain is laying the foundation for a more efficient and fair digital future.
              </p>
              <button className="bg-cyan-500 hover:bg-cyan-600 px-8 py-3 rounded-full transition-all transform hover:scale-105 flex items-center gap-2">
                Read More <ChevronRight size={20} />
              </button>
            </div>

            <div className="relative h-96 flex items-center justify-center animate-fade-in">
              <img 
                src="https://i.pinimg.com/736x/32/6d/a6/326da6b951c0a1ccd1fd2ad605dd8e6a.jpg"
                alt="Blockchain Infrastructure"
                className="w-full h-full object-contain drop-shadow-2xl animate-float mix-blend-screen opacity-90"
                style={{filter: 'brightness(1.1) contrast(1.1)'}}
              />
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 blur-3xl -z-10 animate-pulse"></div>
            </div>
          </div>
        </div>
      </motion.section>

    
      <section id="how" className="py-10 md:py-32 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20 animate-fade-in-up">
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              How <span className="text-cyan-400">Blockchain</span> Works
            </h2>
            <p className="text-gray-300 text-xl max-w-3xl mx-auto">
              Understanding the technology that's revolutionizing digital trust and transforming industries worldwide
            </p>
          </div>

          <div 
className="grid md:grid-cols-2 gap-16 items-center mb-32">
            <div className="space-y-6 animate-fade-in-up">
              <div className="inline-block bg-cyan-500/10 border border-cyan-500/30 rounded-full px-6 py-2 text-cyan-400 font-semibold">
                Step 1
              </div>
              <motion.div 
              initial={{ opacity: 0, x: -50 }}
whileInView={{ opacity: 1, x: 0 }}
viewport={{ once: true, amount: 0.3 }}
transition={{ duration: 0.8, ease: "easeOut" }}
>
              <h3 className="text-3xl md:text-4xl font-bold">Transaction Initiation</h3>
              <p className="text-gray-300 text-lg leading-relaxed">
                When a user initiates a transaction, whether it's sending cryptocurrency, recording data, or executing a smart contract, the information is broadcast to a network of computers (nodes) across the globe.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed">
                Each transaction contains critical information: the sender's address, receiver's address, amount, timestamp, and a unique digital signature that proves authenticity. This data is encrypted using advanced cryptographic algorithms to ensure security.
              </p>
              </motion.div>
              <motion.div initial={{ opacity: 0, x: -50 }}
whileInView={{ opacity: 1, x: 0 }}
viewport={{ once: true, amount: 0.3 }}
transition={{ duration: 0.8, ease: "easeOut" }}
className="flex flex-wrap gap-4 pt-4">
                <div className="flex items-center gap-2 bg-slate-800/50 px-4 py-2 rounded-lg">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
                  <span className="text-sm text-gray-300">Encrypted Data</span>
                </div>
                <div className="flex items-center gap-2 bg-slate-800/50 px-4 py-2 rounded-lg">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
                  <span className="text-sm text-gray-300">Digital Signature</span>
                </div>
                <div className="flex items-center gap-2 bg-slate-800/50 px-4 py-2 rounded-lg">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
                  <span className="text-sm text-gray-300">Network Broadcast</span>
                </div>
              </motion.div>
            </div>

            <motion.div initial={{ opacity: 0, x: -50 }}
whileInView={{ opacity: 1, x: 0 }}
viewport={{ once: true, amount: 0.3 }}
transition={{ duration: 0.8, ease: "easeOut" }}
className="relative h-96 flex items-center justify-center animate-fade-in">
              <div className="relative w-full h-full">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-32 h-32 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-2xl animate-pulse flex items-center justify-center shadow-2xl">
                    <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                    </svg>
                  </div>
                </div>

                
                {[...Array(3)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute inset-0 flex items-center justify-center"
                  >
                    <div 
                      className="border-2 border-cyan-400/30 rounded-full animate-ping"
                      style={{
                        width: `${(i + 1) * 100}px`,
                        height: `${(i + 1) * 100}px`,
                        animationDelay: `${i * 0.5}s`,
                        animationDuration: '3s'
                      }}
                    ></div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          
          <motion.div initial={{ opacity: 0, x: 50 }}
whileInView={{ opacity: 1, x: 0 }}
viewport={{ once: true, amount: 0.3 }}
transition={{ duration: 0.8, ease: "easeOut" }}
className="grid md:grid-cols-2 gap-16 items-center mb-32">
            
            <div className="relative h-96 flex items-center justify-center animate-fade-in order-2 md:order-1">
              <div className="grid grid-cols-4 gap-3">
                {[...Array(16)].map((_, i) => (
                  <div
                    key={i}
                    className="w-16 h-16 bg-gradient-to-br from-slate-800 to-slate-900 border border-cyan-400/30 rounded-lg flex items-center justify-center animate-pulse"
                    style={{
                      animationDelay: `${i * 0.1}s`,
                    }}
                  >
                    <div className={`w-8 h-8 rounded ${i % 3 === 0 ? 'bg-cyan-400/20' : 'bg-blue-500/20'}`}></div>
                  </div>
                ))}
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-blue-500/5 rounded-full blur-3xl"></div>
            </div>

            <div className="space-y-6 animate-fade-in-up order-1 md:order-2">
              <div className="inline-block bg-cyan-500/10 border border-cyan-500/30 rounded-full px-6 py-2 text-cyan-400 font-semibold">
                Step 2
              </div>
              <h3 className="text-3xl md:text-4xl font-bold">Verification Process</h3>
              <p className="text-gray-300 text-lg leading-relaxed">
                Network nodes validate the transaction using consensus mechanisms like Proof of Work (PoW) or Proof of Stake (PoS). Miners or validators compete to solve complex mathematical puzzles that require significant computational power.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed">
                This process ensures that the transaction is legitimate, the sender has sufficient funds, and no double-spending occurs. Multiple nodes must agree on the transaction's validity before it can proceed to the next step.
              </p>
              <div className="bg-slate-800/50 border border-cyan-500/20 rounded-xl p-6 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-gray-300">Validation Progress</span>
                  <span className="text-cyan-400 font-bold">98%</span>
                </div>
                <div className="w-full bg-slate-700 rounded-full h-3 overflow-hidden">
                  <div className="bg-gradient-to-r from-cyan-500 to-blue-500 h-full rounded-full animate-pulse" style={{width: '98%'}}></div>
                </div>
                <div className="flex justify-between text-sm text-gray-400">
                  <span>2,847 nodes verified</span>
                  <span>~0.5s remaining</span>
                </div>
              </div>
            </div>
          </motion.div>

          
          <div className="grid md:grid-cols-2 gap-16 items-center mb-32">
            <motion.div initial={{ opacity: 0, x: 50 }}
whileInView={{ opacity: 1, x: 0 }}
viewport={{ once: true, amount: 0.3 }}
transition={{ duration: 0.8, ease: "easeOut" }}
className="space-y-6 animate-fade-in-up">
              <div className="inline-block bg-cyan-500/10 border border-cyan-500/30 rounded-full px-6 py-2 text-cyan-400 font-semibold">
                Step 3
              </div>
              <h3 className="text-3xl md:text-4xl font-bold">Block Creation</h3>
              <p className="text-gray-300 text-lg leading-relaxed">
                Once verified, the transaction is bundled with other transactions into a "block." Each block contains a timestamp, a reference to the previous block (creating the "chain"), and a cryptographic hash that serves as its unique fingerprint.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed">
                The block header includes critical metadata: the hash of the previous block, a timestamp, the Merkle root (a hash of all transactions), and a nonce (a random number used in mining). This structure makes the blockchain tamper-proof.
              </p>
              <div className="grid grid-cols-2 gap-4 pt-4">
                <div className="bg-slate-800/50 border border-cyan-500/20 rounded-xl p-4">
                  <div className="text-cyan-400 text-2xl font-bold mb-1">256-bit</div>
                  <div className="text-gray-400 text-sm">Hash Encryption</div>
                </div>
                <div className="bg-slate-800/50 border border-cyan-500/20 rounded-xl p-4">
                  <div className="text-cyan-400 text-2xl font-bold mb-1">10 min</div>
                  <div className="text-gray-400 text-sm">Average Block Time</div>
                </div>
              </div>
            </motion.div>

            
            <motion.div initial={{ opacity: 0, scale: 0.95 }}
whileInView={{ opacity: 1, scale: 1 }}
viewport={{ once: true, amount: 0.3 }}
transition={{ duration: 0.8, ease: "easeOut" }}
 className="relative h-96 flex items-center justify-center animate-fade-in">
              <div className="relative">
                
                <div className="space-y-4">
                  {[...Array(4)].map((_, i) => (
                    <motion.div initial={{ opacity: 0, scale: 0.95 }}
whileInView={{ opacity: 1, scale: 1 }}
viewport={{ once: true, amount: 0.3 }}
transition={{ duration: 0.8, ease: "easeOut" }}

                      key={i}
                      className="bg-gradient-to-r from-slate-800 to-slate-900 border-2 border-cyan-400/40 rounded-xl p-6 w-64 transform hover:scale-105 transition-transform animate-fade-in-up"
                      style={{
                        animationDelay: `${i * 0.2}s`,
                        marginLeft: `${i * 10}px`
                      }}
                    >
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-cyan-400 font-bold text-sm">Block #{i + 1}</span>
                        <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                      </div>
                      <div className="space-y-2 text-xs">
                        <div className="flex justify-between">
                          <span className="text-gray-400">Hash:</span>
                          <span className="text-gray-300 font-mono">0x7a8f...</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-400">Txns:</span>
                          <span className="text-gray-300">{Math.floor(Math.random() * 500) + 100}</span>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
                
                <div className="absolute top-1/2 left-0 w-full h-1 bg-gradient-to-r from-cyan-500/30 to-transparent -z-10"></div>
              </div>
            </motion.div>
          </div>

          
          <motion.div 
          initial={{ opacity: 0, x: 50 }}
whileInView={{ opacity: 1, x: 0 }}
viewport={{ once: true, amount: 0.3 }}
transition={{ duration: 0.8, ease: "easeOut" }}
className="grid md:grid-cols-2 gap-16 items-center mb-32">
            
            <div className="relative h-96 flex items-center justify-center animate-fade-in order-2 md:order-1">
              <div className="relative w-full h-full">
                
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-full flex items-center justify-center z-10 shadow-2xl">
                  <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
                  </svg>
                </div>
                
                {[...Array(8)].map((_, i) => {
                  const angle = (i * 45) * Math.PI / 180;
                  const radius = 120;
                  const x = Math.cos(angle) * radius;
                  const y = Math.sin(angle) * radius;
                  return (
                    <div key={i}>
                      <div
                        className="absolute w-12 h-12 bg-slate-800 border-2 border-cyan-400/50 rounded-full flex items-center justify-center animate-pulse"
                        style={{
                          left: `calc(50% + ${x}px - 24px)`,
                          top: `calc(50% + ${y}px - 24px)`,
                          animationDelay: `${i * 0.2}s`
                        }}
                      >
                        <div className="w-3 h-3 bg-cyan-400 rounded-full"></div>
                      </div>
                     
                      <svg className="absolute inset-0 w-full h-full pointer-events-none">
                        <line
                          x1="50%"
                          y1="50%"
                          x2={`calc(50% + ${x}px)`}
                          y2={`calc(50% + ${y}px)`}
                          stroke="url(#grad1)"
                          strokeWidth="2"
                          className="animate-pulse"
                          style={{animationDelay: `${i * 0.15}s`}}
                        />
                      </svg>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="space-y-6 animate-fade-in-up order-1 md:order-2">
              <div className="inline-block bg-cyan-500/10 border border-cyan-500/30 rounded-full px-6 py-2 text-cyan-400 font-semibold">
                Step 4
              </div>
              <h3 className="text-3xl md:text-4xl font-bold">Network Distribution</h3>
              <p className="text-gray-300 text-lg leading-relaxed">
                The newly created block is distributed across the entire network. Every node receives a copy of the updated blockchain, ensuring complete transparency and redundancy. This decentralized distribution is what makes blockchain so resilient.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed">
                With thousands of copies stored across the globe, the blockchain becomes virtually impossible to hack or manipulate. An attacker would need to simultaneously alter the majority of copies—a practically impossible feat with modern blockchain networks.
              </p>
              <div className="grid grid-cols-3 gap-4 pt-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-cyan-400 mb-1">15,000+</div>
                  <div className="text-gray-400 text-sm">Active Nodes</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-cyan-400 mb-1">99.9%</div>
                  <div className="text-gray-400 text-sm">Uptime</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-cyan-400 mb-1">&lt;1s</div>
                  <div className="text-gray-400 text-sm">Sync Time</div>
                </div>
              </div>
            </div>
          </motion.div>

         
          <motion.div initial={{ opacity: 0, x: -50 }}
whileInView={{ opacity: 1, x: 0 }}
viewport={{ once: true, amount: 0.3 }}
transition={{ duration: 0.8, ease: "easeOut" }}
 className="grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-6 animate-fade-in-up">
              <div className="inline-block bg-cyan-500/10 border border-cyan-500/30 rounded-full px-6 py-2 text-cyan-400 font-semibold">
                Step 5
              </div>
              <h3 className="text-3xl md:text-4xl font-bold">Permanent & Immutable</h3>
              <p className="text-gray-300 text-lg leading-relaxed">
                Once a block is added to the chain, it becomes permanent and immutable. Each block contains the hash of the previous block, creating an unbreakable chain. Altering any past transaction would require changing every subsequent block—computationally infeasible.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed">
                This immutability creates an audit trail that can be verified by anyone at any time. It's perfect for applications requiring transparency and accountability: financial transactions, supply chain tracking, medical records, voting systems, and more.
              </p>
              <div className="bg-gradient-to-r from-slate-800/50 to-slate-900/50 border border-cyan-500/20 rounded-xl p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-cyan-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Shield className="w-6 h-6 text-cyan-400" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold mb-2 text-white">Cryptographic Security</h4>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      SHA-256 hashing ensures that even a single character change would completely alter the hash, making tampering immediately detectable across the network.
                    </p>
                  </div>
                </div>
              </div>
            </div>

           
            <motion.div 
            initial={{ opacity: 0, x: 50 }}
whileInView={{ opacity: 1, x: 0 }}
viewport={{ once: true, amount: 0.3 }}
transition={{ duration: 0.8, ease: "easeOut" }}
className="relative h-96 flex items-center justify-center animate-fade-in">
              <div className="space-y-2">
                {[...Array(5)].map((_, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <div 
                      className="w-48 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border-2 border-cyan-400/50 rounded-lg p-4 backdrop-blur-sm animate-fade-in-up"
                      style={{animationDelay: `${i * 0.15}s`}}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-xs text-gray-400">Block {i + 1}</span>
                        <div className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse"></div>
                      </div>
                      <div className="text-xs font-mono text-cyan-400">
                        {`Hash: 0x${Math.random().toString(16).substring(2, 8)}...`}
                      </div>
                    </div>
                    {i < 4 && (
                      <div className="flex flex-col items-center gap-1">
                        <div className="w-8 h-0.5 bg-cyan-400/50"></div>
                        <svg className="w-4 h-4 text-cyan-400" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                      </div>
                    )}
                  </div>
                ))}
                <div className="absolute -right-10 top-1/2 transform -translate-y-1/2">
                  <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-3 w-24">
                    <svg className="w-8 h-8 text-red-400 mx-auto mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                    <p className="text-xs text-center text-red-400 font-semibold">Locked</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          
          <motion.div 
          initial={{ opacity: 0, y: -40 }}
whileInView={{ opacity: 1, y: 0 }}
viewport={{ once: true, amount: 0.3 }}
transition={{ duration: 0.8, ease: "easeOut" }}
className="mt-32 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 rounded-2xl p-12 text-center animate-fade-in-up">
            <h3 className="text-3xl font-bold mb-6">The Power of Blockchain</h3>
            <p className="text-gray-300 text-lg max-w-4xl mx-auto leading-relaxed mb-8">
              By combining cryptographic security, decentralized networks, and consensus mechanisms, blockchain creates a trustless system where transactions are verified by mathematics rather than institutions. This revolutionary technology is reshaping finance, healthcare, supply chains, and countless other industries.
            </p>
            <button className="bg-cyan-500 hover:bg-cyan-600 px-4 py-2 md:py-4 rounded-full transition-all transform hover:scale-105 text-lg font-semibold flex items-center gap-2 mx-auto">
              Start Your Blockchain Journey
            </button>
          </motion.div>
        </div>
      </section>

      
      <section id="pricing" className="py-20 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Pricing <span className="text-cyan-400">Plans</span>
            </h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Choose the plan that fits your needs and start exploring the power of blockchain today.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Beginner Plan",
                price: "$199",
                desc: "Individuals new to blockchain",
                features: [
                  "Access to basic blockchain guides",
                  "Community forum access",
                  "Monthly newsletter",
                  "Email support"
                ],
                popular: false
              },
              {
                name: "Intermediate Plan",
                price: "$349",
                desc: "Users with some blockchain knowledge",
                features: [
                  "Everything in Beginner",
                  "Advanced tutorials",
                  "Priority support",
                  "Quarterly webinars",
                  "API access"
                ],
                popular: true
              },
              {
                name: "Advanced Plan",
                price: "$495",
                desc: "Professionals looking for advanced tools and insights",
                features: [
                  "Everything in Intermediate",
                  "Custom blockchain solutions",
                  "24/7 premium support",
                  "Private consultations",
                  "Early access to new features"
                ],
                popular: false
              }
            ].map((plan, idx) => (
              <div
                key={idx}
                className={`relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm p-8 rounded-2xl border ${
                  plan.popular ? 'border-cyan-400 scale-105' : 'border-cyan-500/20'
                } transition-all transform hover:scale-105 cursor-pointer animate-fade-in-up`}
                style={{animationDelay: `${idx * 0.1}s`}}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-cyan-500 to-blue-500 px-9 py-1 rounded-full text-sm font-bold">
                    Most Popular
                  </div>
                )}
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <div className="text-4xl font-bold mb-2">
                  {plan.price}<span className="text-gray-400 text-lg">/month</span>
                </div>
                <p className="text-gray-400 mb-6">{plan.desc}</p>
                <div className="space-y-3 mb-8">
                  {plan.features.map((feature, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <div className="w-5 h-5 rounded-full bg-cyan-500/20 flex items-center justify-center mt-0.5">
                        <div className="w-2 h-2 rounded-full bg-cyan-400"></div>
                      </div>
                      <span className="text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>
                <button className={`w-full py-3 rounded-full transition-all transform hover:scale-105 ${
                  plan.popular
                    ? 'bg-cyan-500 hover:bg-cyan-600'
                    : 'border border-cyan-500 hover:bg-cyan-500/10'
                }`}>
                  Get Started
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="py-12 border-t border-cyan-500/20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="text-2xl font-bold mb-4">
            Jump<span className="text-cyan-400">Bot</span>
          </div>
          <p className="text-gray-400 mb-4">
            Transforming the future with blockchain technology
          </p>
          <div className="flex justify-center gap-6 text-sm text-gray-400">
            <a href="#" className="hover:text-cyan-400 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-cyan-400 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-cyan-400 transition-colors">Contact</a>
          </div>
          <p className="text-gray-500 text-sm mt-6">
            © 2025 JumpBot. All rights reserved.
          </p>
          <p className="text-gray-500 text-sm mt-2">
            Developed by Akinremi Daniel.</p>
          </div>
      </footer>

      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        
        @keyframes float-slow {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-30px) rotate(10deg); }
        }
        
        @keyframes float-medium {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-25px) rotate(-15deg); }
        }
        
        @keyframes float-fast {
          0%, 100% { transform: translateY(0px) scale(1); }
          50% { transform: translateY(-15px) scale(1.1); }
        }
        
        .animate-fade-in {
          animation: fade-in 0.6s ease-out;
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 0.6s ease-out;
        }
        
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        
        .animate-float-slow {
          animation: float-slow 6s ease-in-out infinite;
        }
        
        .animate-float-medium {
          animation: float-medium 5s ease-in-out infinite;
        }
        
        .animate-float-fast {
          animation: float-fast 4s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}