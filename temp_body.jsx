


<nav>
  <div className="nav-logo">OPAQUE_</div>
  <ul className="nav-links">
    <li><a href="#mission">Mission</a></li>
    <li><a href="#services">Services</a></li>
    <li><a href="#dashboard">Dashboard</a></li>
    <li><a href="#results">Results</a></li>
    <li><a href="#tech">Technology</a></li>
  </ul>
  <button className="nav-cta" onclick="document.getElementById('cta').scrollIntoView({behavior:'smooth'})">Launch App ↗</button>
  <button className="hamburger" id="hamburger" aria-label="Menu">
    <span></span><span></span><span></span>
  </button>
</nav>


<div id="mobileNav" style={{"display":"none","position":"fixed","inset":"0","background":"#080810","zIndex":"200","flexDirection":"column","alignItems":"center","justifyContent":"center","gap":"32px"}}>
  <button onclick="closeMobileNav()" style={{"position":"absolute","top":"20px","right":"24px","background":"none","border":"none","color":"#fff","fontSize":"28px","cursor":"pointer"}}>✕</button>
  <a href="#mission" onclick="closeMobileNav()" style={{"fontFamily":"'Barlow Condensed',sans-serif","fontWeight":"900","fontSize":"36px","color":"#fff","textDecoration":"none","textTransform":"uppercase","letterSpacing":"2px"}}>Mission</a>
  <a href="#services" onclick="closeMobileNav()" style={{"fontFamily":"'Barlow Condensed',sans-serif","fontWeight":"900","fontSize":"36px","color":"#fff","textDecoration":"none","textTransform":"uppercase","letterSpacing":"2px"}}>Services</a>
  <a href="#dashboard" onclick="closeMobileNav()" style={{"fontFamily":"'Barlow Condensed',sans-serif","fontWeight":"900","fontSize":"36px","color":"#fff","textDecoration":"none","textTransform":"uppercase","letterSpacing":"2px"}}>Dashboard</a>
  <a href="#results" onclick="closeMobileNav()" style={{"fontFamily":"'Barlow Condensed',sans-serif","fontWeight":"900","fontSize":"36px","color":"#0000FF","textDecoration":"none","textTransform":"uppercase","letterSpacing":"2px"}}>Results</a>
  <a href="#tech" onclick="closeMobileNav()" style={{"fontFamily":"'Barlow Condensed',sans-serif","fontWeight":"900","fontSize":"36px","color":"#fff","textDecoration":"none","textTransform":"uppercase","letterSpacing":"2px"}}>Technology</a>
</div>


<section className="hero">
  <div className="hero-left">
    <div>
      <div className="hero-tag">Arbitrum Sepolia · iExec Nox · ChainGPT</div>
      <h1 className="hero-h1">Bold<br/>Privacy<br/><em>For Big</em><br/>Trades.</h1>
      <p className="hero-sub">Privacy-first DeFi analytics powered by iExec's confidential computing. Your PnL is public proof. Your balance stays encrypted — forever.</p>
      <div className="hero-actions">
        <button className="btn-primary" onclick="document.getElementById('cta').scrollIntoView({behavior:'smooth'})">Launch App →</button>
        <button className="btn-outline" onclick="document.getElementById('dashboard').scrollIntoView({behavior:'smooth'})">See Dashboard</button>
      </div>
    </div>
    <div style={{"borderTop":"2px solid #080810","paddingTop":"24px","display":"flex","gap":"32px","flexWrap":"wrap","marginTop":"40px"}}>
      <div className="hero-stat">
        <div className="hero-stat-n">$0</div>
        <div className="hero-stat-l">Shield Fee</div>
      </div>
      <div className="hero-stat" style={{"borderLeft":"2px solid #e0e0e0","paddingLeft":"24px"}}>
        <div className="hero-stat-n">&lt;0.05%</div>
        <div className="hero-stat-l">Unwrap Fee</div>
      </div>
      <div className="hero-stat" style={{"borderLeft":"2px solid #e0e0e0","paddingLeft":"24px"}}>
        <div className="hero-stat-n">100%</div>
        <div className="hero-stat-l">On-Chain</div>
      </div>
    </div>
  </div>
  <div className="hero-right">
    <div className="hero-badge">R+</div>
    <div style={{"position":"absolute","top":"30px","left":"40px","fontSize":"28px","color":"rgba(255,255,255,.3)"}}>✦</div>
    <div style={{"position":"absolute","bottom":"60px","right":"60px","fontSize":"18px","color":"rgba(255,255,255,.2)"}}>✦</div>
    
    <div className="hero-pixel" style={{"top":"20%","left":"15%"}}></div>
    <div className="hero-pixel" style={{"top":"35%","left":"85%"}}></div>
    <div className="hero-pixel" style={{"top":"70%","left":"10%"}}></div>
    <div className="hero-pixel" style={{"top":"80%","left":"78%"}}></div>
    <div className="hero-pixel" style={{"top":"50%","left":"92%"}}></div>
    <div className="hero-pixel" style={{"top":"15%","left":"70%"}}></div>
    <div className="hero-cube-wrap">
      <div className="hero-cube">
        <div className="cube-face front"><div className="cube-label">OPQ</div></div>
        <div className="cube-face back"><div className="cube-label">PRV</div></div>
        <div className="cube-face left"></div>
        <div className="cube-face right"></div>
        <div className="cube-face top"></div>
        <div className="cube-face bottom"></div>
      </div>
    </div>
    <div className="hero-right-text">
      <h3>Confidential Layer Active</h3>
      <p>iExec Nox wraps your assets in a cryptographic shield. Trade freely. Share only proof.</p>
    </div>
    <div className="hero-corner">SYS:ONLINE · BLOCK #19,482,301</div>
  </div>
</section>


<div className="marquee-wrap">
  <div className="marquee-inner" id="marquee">
    <span className="marquee-item">Verify Performance</span><span className="marquee-sep">✦</span>
    <span className="marquee-item">Not Your Balance</span><span className="marquee-sep">✦</span>
    <span className="marquee-item">iExec Nox</span><span className="marquee-sep">✦</span>
    <span className="marquee-item">ChainGPT Safety</span><span className="marquee-sep">✦</span>
    <span className="marquee-item">Arbitrum Sepolia</span><span className="marquee-sep">✦</span>
    <span className="marquee-item">Privacy-First DeFi</span><span className="marquee-sep">✦</span>
    <span className="marquee-item">Verify Performance</span><span className="marquee-sep">✦</span>
    <span className="marquee-item">Not Your Balance</span><span className="marquee-sep">✦</span>
    <span className="marquee-item">iExec Nox</span><span className="marquee-sep">✦</span>
    <span className="marquee-item">ChainGPT Safety</span><span className="marquee-sep">✦</span>
    <span className="marquee-item">Arbitrum Sepolia</span><span className="marquee-sep">✦</span>
    <span className="marquee-item">Privacy-First DeFi</span><span className="marquee-sep">✦</span>
  </div>
</div>


<section className="mission" id="mission">
  <div className="mission-left">
    <div>
      <div className="section-label">Our Mission</div>
      <h2 className="mission-h2">Why<br/>Privacy<br/>Matters</h2>
    </div>
    <p className="mission-body">In DeFi, your entire financial history is exposed on-chain. Whales copy your positions. Bots front-run your trades. OPAQUE changes the rules — your balance is encrypted, but your alpha is verifiable.</p>
    <ul className="mission-points">
      <li>Shield assets via iExec Nox confidential computing — balances invisible on-chain</li>
      <li>Share verified PnL without revealing portfolio size or composition</li>
      <li>AI-powered safety scoring via ChainGPT audits every position in real-time</li>
      <li>Generate tamper-proof performance cards to post on X — zero balance exposure</li>
    </ul>
    <button className="btn-primary" style={{"marginTop":"24px","alignSelf":"flex-start"}} onclick="document.getElementById('cta').scrollIntoView({behavior:'smooth'})">Start Shielding →</button>
  </div>
  <div className="mission-right">
    <div>
      <div style={{"textAlign":"center","marginBottom":"32px"}}>
        <div className="privacy-ring">
          <div style={{"position":"relative","zIndex":"2","textAlign":"center"}}>
            <div style={{"fontFamily":"'Barlow Condensed',sans-serif","fontSize":"40px","fontWeight":"900","color":"#0000FF","lineHeight":"1"}}>100%</div>
            <div style={{"fontSize":"10px","textTransform":"uppercase","letterSpacing":"2px","color":"#999","marginTop":"2px"}}>Privacy</div>
          </div>
          <div className="orbit-dot" style={{"top":"-6px","left":"50%","transform":"translateX(-50%)"}}></div>
          <div className="orbit-dot" style={{"bottom":"-6px","left":"50%","transform":"translateX(-50%)","background":"#080810"}}></div>
          <div className="orbit-dot" style={{"left":"-6px","top":"50%","transform":"translateY(-50%)","background":"#ccc"}}></div>
        </div>
      </div>
      <div style={{"display":"grid","gridTemplateColumns":"1fr 1fr","gap":"2px","border":"2px solid #e0e0e0"}}>
        <div style={{"padding":"16px","borderRight":"2px solid #e0e0e0"}}>
          <div style={{"fontFamily":"'Barlow Condensed',sans-serif","fontWeight":"900","fontSize":"28px","color":"#0000FF"}}>A+</div>
          <div style={{"fontSize":"11px","color":"#999","textTransform":"uppercase","letterSpacing":"1px","marginTop":"2px"}}>Safety Score</div>
        </div>
        <div style={{"padding":"16px"}}>
          <div style={{"fontFamily":"'Barlow Condensed',sans-serif","fontWeight":"900","fontSize":"28px","color":"#080810"}}>0.0s</div>
          <div style={{"fontSize":"11px","color":"#999","textTransform":"uppercase","letterSpacing":"1px","marginTop":"2px"}}>Latency</div>
        </div>
      </div>
    </div>
  </div>
</section>


<section className="why" id="why">
  <div className="why-header">
    <h2 className="why-h2">Why<br/>Choose<br/>Us? ✦</h2>
    <p className="why-sub">OPAQUE is the only DeFi analytics platform that cryptographically separates performance proof from balance data — no trust required.</p>
  </div>
  <div className="why-grid">
    <div className="why-card">
      <div className="why-card-num">01</div>
      <div className="why-card-title">Confidential Assets</div>
      <div className="why-card-body">iExec Nox wraps ERC-20 tokens in a confidential container. Your balance is invisible even to the protocol — only you hold the key.</div>
    </div>
    <div className="why-card">
      <div className="why-card-num">02</div>
      <div className="why-card-title">Verified PnL</div>
      <div className="why-card-body">On-chain ZK-based proof of profit and loss. Share a cryptographically signed performance certificate — no screenshots, no lies.</div>
    </div>
    <div className="why-card">
      <div className="why-card-num">03</div>
      <div className="why-card-title">AI Safety Layer</div>
      <div className="why-card-body">ChainGPT continuously audits portfolio risk. Rug-pull probability, exploit exposure, and volatility scoring updated per block.</div>
    </div>
    <div className="why-card">
      <div className="why-card-num">04</div>
      <div className="why-card-title">Alpha Cards</div>
      <div className="why-card-body">Generate beautiful, tamper-proof performance share cards. Post your alpha publicly. Your balance stays private. Always.</div>
    </div>
  </div>
</section>


<section className="services" id="services">
  <div className="services-top">
    <div className="section-label">Our Services</div>
    <h2 className="services-giant">Our<br/>Services<br/><em>For</em><br/>Your <span className="arrow">→</span><br/>Success.</h2>
  </div>
  <div className="services-grid">
    <div className="service-card">
      <div className="service-icon">
        <svg className="service-icon-svg" viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 21V9"/></svg>
      </div>
      <div className="service-title">Asset Shielding</div>
      <div className="service-body">Wrap any ERC-20 token into iExec Nox's confidential container with one click. Unwrap anytime — 0.05% fee only on exit.</div>
      <a className="service-link" href="#cta">Get Started →</a>
    </div>
    <div className="service-card">
      <div className="service-icon" style={{"background":"#080810"}}>
        <svg className="service-icon-svg" viewBox="0 0 24 24"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>
      </div>
      <div className="service-title">PnL Analytics</div>
      <div className="service-body">Real-time profit and loss dashboard. Win rate, best trade, drawdown — all calculated privately on encrypted data without exposure.</div>
      <a className="service-link" href="#dashboard">View Demo →</a>
    </div>
    <div className="service-card">
      <div className="service-icon">
        <svg className="service-icon-svg" viewBox="0 0 24 24"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
      </div>
      <div className="service-title">AI Risk Audit</div>
      <div className="service-body">ChainGPT-powered safety scoring grades your portfolio from A to F across rug risk, smart contract exposure, and market volatility.</div>
      <a className="service-link" href="#cta">Learn More →</a>
    </div>
    <div className="service-card" style={{"background":"#0000FF","borderTop":"2px solid #080810"}}>
      <div className="service-icon" style={{"background":"#fff"}}>
        <svg className="service-icon-svg" style={{"stroke":"#0000FF"}} viewBox="0 0 24 24"><path d="M4 12v8a2 2 0 002 2h12a2 2 0 002-2v-8M16 6l-4-4-4 4M12 2v13"/></svg>
      </div>
      <div className="service-title" style={{"color":"#fff"}}>Share Cards</div>
      <div className="service-body" style={{"color":"rgba(255,255,255,.7)"}}>Generate verified performance cards for Twitter/X. Cryptographically signed, tamper-proof, balance-private. Flex your alpha without doxxing your bag.</div>
      <a className="service-link" href="#cta" style={{"color":"#fff"}}>Try It Free →</a>
    </div>
    <div className="service-card">
      <div className="service-icon" style={{"background":"#080810"}}>
        <svg className="service-icon-svg" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M12 8v4l3 3"/></svg>
      </div>
      <div className="service-title">Trade History</div>
      <div className="service-body">Full encrypted transaction log. Every shield, trade, and unwrap recorded on-chain — visible only to you, provable to anyone you choose.</div>
      <a className="service-link" href="#cta">Explore →</a>
    </div>
    <div className="service-card">
      <div className="service-icon">
        <svg className="service-icon-svg" viewBox="0 0 24 24"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"/></svg>
      </div>
      <div className="service-title">Alpha Groups</div>
      <div className="service-body">White-label the OPAQUE dashboard for your alpha community. Members see verified collective performance, never individual balances.</div>
      <a className="service-link" href="#cta">Join Waitlist →</a>
    </div>
  </div>
</section>


<section className="dash-preview" id="dashboard">
  <div className="dash-header">
    <h2 className="dash-h2">Live<br/><span>Dashboard</span></h2>
    <div style={{"fontSize":"12px","color":"#555","fontFamily":"'Share Tech Mono',monospace"}}>SYS:LIVE · ARBITRUM SEPOLIA<br/>BLOCK #19,482,301</div>
  </div>
  <div className="dash-bento">
    
    <div className="db db-pnl">
      <div>
        <div className="pnl-label">Total Verified PnL</div>
        <div className="pnl-big"><span className="pnl-plus">+</span>18.43%</div>
        <div className="pnl-bar"><div className="pnl-bar-fill"></div></div>
        <div className="pnl-sub">▲ Profitable · On-chain verified · Balance private</div>
      </div>
      <div style={{"marginTop":"20px"}}>
        <svg width="100%" height="60" viewBox="0 0 300 60" preserveAspectRatio="none">
          <polyline points="0,52 30,44 60,48 90,32 120,36 150,22 180,26 210,18 240,20 300,10" fill="none" stroke="#0000FF" strokeWidth="2"/>
          <polygon points="0,52 30,44 60,48 90,32 120,36 150,22 180,26 210,18 240,20 300,10 300,60 0,60" fill="rgba(0,0,255,0.08)"/>
        </svg>
        <div style={{"display":"flex","justifyContent":"space-between","marginTop":"4px"}}>
          <span style={{"fontSize":"9px","color":"#333","fontFamily":"'Share Tech Mono',monospace"}}>JAN 01</span>
          <span style={{"fontSize":"9px","color":"#333","fontFamily":"'Share Tech Mono',monospace"}}>NOW</span>
        </div>
      </div>
    </div>
    
    <div className="db db-safety">
      <div className="label">AI Safety Score</div>
      <div className="score" style={{"marginTop":"8px"}}>A+</div>
      <div style={{"fontSize":"10px","color":"rgba(255,255,255,.5)","marginTop":"4px","fontFamily":"'Share Tech Mono',monospace"}}>ChainGPT · 82/100</div>
      <div style={{"marginTop":"16px","display":"flex","flexDirection":"column","gap":"8px"}}>
        <div style={{"fontSize":"10px","color":"rgba(255,255,255,.5)","display":"flex","justifyContent":"space-between"}}><span>Rug Risk</span><span style={{"color":"#fff"}}>LOW</span></div>
        <div style={{"fontSize":"10px","color":"rgba(255,255,255,.5)","display":"flex","justifyContent":"space-between"}}><span>Exploit</span><span style={{"color":"#fff"}}>LOW</span></div>
        <div style={{"fontSize":"10px","color":"rgba(255,255,255,.5)","display":"flex","justifyContent":"space-between"}}><span>Volatility</span><span style={{"color":"rgba(255,255,100,.8)"}}>MED</span></div>
      </div>
    </div>
    
    <div className="db db-stat">
      <div className="stat-l">Win Rate</div>
      <div className="stat-n">73%</div>
      <div style={{"height":"3px","background":"#1a1a1a","marginTop":"12px"}}><div style={{"height":"100%","width":"73%","background":"#0000FF"}}></div></div>
    </div>
    
    <div className="db db-enc">
      <div style={{"fontSize":"10px","color":"#555","letterSpacing":"2px","textTransform":"uppercase","fontFamily":"'Share Tech Mono',monospace","marginBottom":"10px"}}>Confidential Assets</div>
      <div className="enc-row">
        <span className="enc-sym">USDC</span>
        <span className="enc-val" id="ev1">X%#&amp;@$!*</span>
        <span className="enc-pnl">+12.4%</span>
      </div>
      <div className="enc-row">
        <span className="enc-sym">ETH</span>
        <span className="enc-val" id="ev2">◉◎●◦◉◦</span>
        <span className="enc-pnl">+28.7%</span>
      </div>
      <div className="enc-row">
        <span className="enc-sym">ARB</span>
        <span className="enc-val" id="ev3">▓▒░▓▓▒░</span>
        <span className="enc-pnl">+5.2%</span>
      </div>
    </div>
    
    <div className="db db-stat">
      <div className="stat-l">Best Trade</div>
      <div className="stat-n" style={{"color":"#0000FF"}}>+34.2%</div>
      <div style={{"fontSize":"10px","color":"#444","marginTop":"8px","fontFamily":"'Share Tech Mono',monospace"}}>ETH/USDC</div>
    </div>
    
    <div className="db" style={{"background":"#0000FF","cursor":"pointer","transition":"background .2s","gridColumn":"span 2"}} onmouseover="this.style.background='#0000cc'" onmouseout="this.style.background='#0000FF'" onclick="document.getElementById('cta').scrollIntoView({behavior:'smooth'})">
      <div style={{"fontFamily":"'Barlow Condensed',sans-serif","fontWeight":"900","fontSize":"28px","color":"#fff","letterSpacing":"-1px","textTransform":"uppercase"}}>Generate<br/>Share Card ↗</div>
      <div style={{"fontSize":"11px","color":"rgba(255,255,255,.6)","marginTop":"8px","fontFamily":"'Share Tech Mono',monospace"}}>Post verified PnL to X · Balance stays private</div>
    </div>
  </div>
</section>


<section className="results" id="results">
  <div className="results-header">
    <div className="section-label">Proven Results</div>
    <h2 className="results-h2">Proven<br/><em>Results</em></h2>
  </div>
  <div style={{"border":"2px solid #080810"}}>
    <div className="results-grid" style={{"border":"none","borderBottom":"2px solid #080810"}}>
      <div className="result-cell">
        <div className="result-n">$12M+</div>
        <div className="result-l">Assets Shielded</div>
        <div className="result-desc">Total value locked in confidential contracts across all active users on Arbitrum Sepolia testnet.</div>
      </div>
      <div className="result-cell" style={{"borderRight":"2px solid #080810"}}>
        <div className="result-n">4,800+</div>
        <div className="result-l">Wallets Protected</div>
        <div className="result-desc">DeFi traders who've moved their portfolio into OPAQUE's confidential layer since launch.</div>
      </div>
      <div className="result-cell" style={{"borderRight":"2px solid #080810"}}>
        <div className="result-n">99.9%</div>
        <div className="result-l">Uptime</div>
        <div className="result-desc">Zero downtime incidents. Privacy layer stays live even during peak Arbitrum congestion.</div>
      </div>
      <div className="result-cell" style={{"borderRight":"none"}}>
        <div className="result-n">A+</div>
        <div className="result-l">Safety Rating</div>
        <div className="result-desc">ChainGPT average portfolio safety score across all OPAQUE users — top tier DeFi security.</div>
      </div>
    </div>
    <div className="results-case">
      <div className="case-card">
        <div className="case-tag">Use Case · Alpha Groups</div>
        <div className="case-title">CRM Systems &amp; Crypto Platforms</div>
        <div className="case-body">Professional trading desks use OPAQUE to share verified group performance to clients without exposing individual book sizes or strategy compositions.</div>
      </div>
      <div className="case-card inv">
        <div className="case-tag">Use Case · Traffic Arbitrage</div>
        <div className="case-title">Traffic Arbitrage &amp; On-Chain Proof</div>
        <div className="case-body">Performance marketers running on-chain campaigns use OPAQUE's verified cards as cryptographic proof of ROI — no screenshots, no manipulation.</div>
      </div>
    </div>
  </div>
</section>


<section className="tech" id="tech">
  <div className="section-label">Technology Stack</div>
  <h2 className="tech-h2">We Employ<br/>The Most<br/>Advanced<br/>Technologies</h2>
  <p className="tech-sub">Built on battle-tested infrastructure — from iExec's confidential computing network to ChainGPT's AI audit engine. Every component chosen for security and performance.</p>
  <div className="tech-circles">
    <div className="tech-circle">
      <div className="tc-icon">⬡</div>
      <div className="tc-name">iExec Nox</div>
    </div>
    <div className="tech-circle">
      <div className="tc-icon">⬡</div>
      <div className="tc-name">ChainGPT</div>
    </div>
    <div className="tech-circle">
      <div className="tc-icon">⬡</div>
      <div className="tc-name">Arbitrum</div>
    </div>
    <div className="tech-circle">
      <div className="tc-icon">⬡</div>
      <div className="tc-name">Next.js</div>
    </div>
    <div className="tech-circle">
      <div className="tc-icon">⬡</div>
      <div className="tc-name">RLC Token</div>
    </div>
    <div className="tech-circle">
      <div className="tc-icon">⬡</div>
      <div className="tc-name">Wagmi</div>
    </div>
    <div className="tech-circle">
      <div className="tc-icon">⬡</div>
      <div className="tc-name">Viem</div>
    </div>
    <div className="tech-circle">
      <div className="tc-icon">⬡</div>
      <div className="tc-name">USDC</div>
    </div>
  </div>
  <div style={{"marginTop":"48px","borderTop":"2px solid #080810","paddingTop":"40px","display":"grid","gridTemplateColumns":"1fr 1fr","gap":"2px","borderLeft":"2px solid #080810","borderRight":"2px solid #080810","borderBottom":"2px solid #080810"}}>
    <div style={{"padding":"24px 28px","borderRight":"2px solid #080810"}}>
      <div style={{"fontFamily":"'Barlow Condensed',sans-serif","fontWeight":"800","fontSize":"18px","textTransform":"uppercase","letterSpacing":"1px","marginBottom":"8px"}}>iExec Nox SDK</div>
      <div style={{"fontSize":"13px","color":"#666","lineHeight":"1.7"}}>Nox enables confidential wrapping of any ERC-20 token. Assets are computationally shielded — not just hidden behind a proxy.</div>
    </div>
    <div style={{"padding":"24px 28px"}}>
      <div style={{"fontFamily":"'Barlow Condensed',sans-serif","fontWeight":"800","fontSize":"18px","textTransform":"uppercase","letterSpacing":"1px","marginBottom":"8px"}}>ChainGPT Audit API</div>
      <div style={{"fontSize":"13px","color":"#666","lineHeight":"1.7"}}>Real-time AI scoring of portfolio risk across 50+ smart contract vulnerability vectors, continuously updated on every block.</div>
    </div>
  </div>
</section>


<section className="cta-section" id="cta">
  <div className="cta-bg-text">OPAQUE OPAQUE</div>
  <div className="cta-inner">
    <div className="cta-tag">Free Consultation</div>
    <h2 className="cta-h2">Leave Your<br/>Wallet To<br/>Get Access</h2>
    <div className="cta-form">
      <input className="cta-input" type="text" placeholder="Enter your wallet address (0x...)"/>
      <button className="cta-btn">SHIELD NOW ↗</button>
    </div>
    <p className="cta-note">No email required. Connect wallet on next step. Arbitrum Sepolia testnet.</p>
  </div>
  <div className="cta-deco">
    <div className="cta-plus-grid">
      <span className="cta-plus">+</span><span className="cta-plus">+</span><span className="cta-plus">+</span><span className="cta-plus">+</span><span className="cta-plus">+</span><span className="cta-plus">+</span>
      <span className="cta-plus">+</span><span className="cta-plus">+</span><span className="cta-plus">+</span><span className="cta-plus">+</span><span className="cta-plus">+</span><span className="cta-plus">+</span>
      <span className="cta-plus">+</span><span className="cta-plus">+</span><span className="cta-plus">+</span><span className="cta-plus">+</span><span className="cta-plus">+</span><span className="cta-plus">+</span>
      <span className="cta-plus">+</span><span className="cta-plus">+</span><span className="cta-plus">+</span><span className="cta-plus">+</span><span className="cta-plus">+</span><span className="cta-plus">+</span>
      <span className="cta-plus">+</span><span className="cta-plus">+</span><span className="cta-plus">+</span><span className="cta-plus">+</span><span className="cta-plus">+</span><span className="cta-plus">+</span>
    </div>
  </div>
</section>


<footer>
  <div className="footer-top">
    <div>
      <div style={{"fontFamily":"'Barlow Condensed',sans-serif","fontWeight":"900","fontSize":"22px","color":"#fff","letterSpacing":"-1px","marginBottom":"12px"}}>OPAQUE_</div>
      <div style={{"fontSize":"13px","color":"#555","lineHeight":"1.7","maxWidth":"200px"}}>Privacy-first DeFi analytics. Powered by iExec Nox &amp; ChainGPT.</div>
    </div>
    <div>
      <div className="footer-col-title">Platform</div>
      <ul className="footer-links">
        <li><a href="#dashboard">Dashboard</a></li>
        <li><a href="#services">Shield Assets</a></li>
        <li><a href="#services">PnL Analytics</a></li>
        <li><a href="#services">Share Cards</a></li>
        <li><a href="#services">Alpha Groups</a></li>
      </ul>
    </div>
    <div>
      <div className="footer-col-title">Resources</div>
      <ul className="footer-links">
        <li><a href="#">Documentation</a></li>
        <li><a href="#">iExec Nox SDK</a></li>
        <li><a href="#">ChainGPT API</a></li>
        <li><a href="#">Manifesto</a></li>
        <li><a href="#">GitHub</a></li>
      </ul>
    </div>
    <div>
      <div className="footer-col-title">Socials</div>
      <ul className="footer-links">
        <li><a href="#">X / Twitter</a></li>
        <li><a href="#">Discord</a></li>
        <li><a href="#">Telegram</a></li>
        <li><a href="#">Medium</a></li>
      </ul>
    </div>
  </div>
  <div className="footer-giant">
    <div className="footer-giant-text">OPAQUE</div>
  </div>
  <div className="footer-bottom">
    <p><span className="dot"></span>© 2024 Opaque Finance. All rights reserved.</p>
    <p style={{"color":"#333"}}>Privacy Policy · Terms · Arbitrum Sepolia</p>
  </div>
</footer>

<script>
document.getElementById('hamburger').addEventListener('click', function(){
  var nav = document.getElementById('mobileNav');
  nav.style.display = nav.style.display==='flex'?'none':'flex';
});
function closeMobileNav(){
  document.getElementById('mobileNav').style.display='none';
}

var encChars = 'X%#&@$!*█▓▒░◉◎●◦';
var encEls = [
  {id:'ev1', len:8},
  {id:'ev2', len:7},
  {id:'ev3', len:7}
];
encEls.forEach(function(e){
  setInterval(function(){
    var el = document.getElementById(e.id);
    if(el) el.textContent = Array.from({length:e.len},function(){return encChars[Math.floor(Math.random()*encChars.length)]}).join('');
  }, 90);
});

// Scatter pixel positions for hero
var pixels = document.querySelectorAll('.hero-pixel');
pixels.forEach(function(p){
  setInterval(function(){
    p.style.opacity = Math.random() > .5 ? '1' : '0.3';
  }, 600 + Math.random()*800);
});
</script>
