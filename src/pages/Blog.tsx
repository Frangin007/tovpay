export default function Blog() {
  const posts = [
    {
      icon: '📊',
      tag: 'Inclusion Financière',
      title: 'Comment le nano-crédit transforme les économies informelles',
      date: 'Mai 2026',
      reading: '5 min',
      gradient: 'linear-gradient(135deg,#0D2251,#00B98E)'
    },
    {
      icon: '🤖',
      tag: 'Innovation IA',
      title: 'Le scoring mobile : la révolution du crédit sans garantie',
      date: 'Avril 2026',
      reading: '4 min',
      gradient: 'linear-gradient(135deg,#1A3FA8,#00B98E)'
    },
    {
      icon: '🤝',
      tag: 'Partenariat',
      title: 'TOVPAY & Orabank : un partenariat historique pour l\'UEMOA',
      date: 'Mars 2026',
      reading: '6 min',
      gradient: 'linear-gradient(135deg,#0B4A3F,#00B98E)'
    },
    {
      icon: '💼',
      tag: 'PME',
      title: 'Étude de cas : Comment Ama Trader a triplé son chiffre d\'affaires',
      date: 'Février 2026',
      reading: '7 min',
      gradient: 'linear-gradient(135deg,#F5A623,#FF8C42)'
    },
    {
      icon: '📱',
      tag: 'Tech',
      title: 'Architecture fintech africaine : défis et solutions',
      date: 'Janvier 2026',
      reading: '8 min',
      gradient: 'linear-gradient(135deg,#7C3AED,#A855F7)'
    },
    {
      icon: '🌍',
      tag: 'Expansion',
      title: 'La stratégie panafricaine de TOVPAY : 12 pays d\'ici 2028',
      date: 'Décembre 2025',
      reading: '5 min',
      gradient: 'linear-gradient(135deg,#0891B2,#06B6D4)'
    }
  ]

  return (
    <>
      <section className="page-hero">
        <div className="page-hero-grid"></div>
        <div className="page-hero-inner">
          <div className="breadcrumb">
            <span className="breadcrumb-item">Accueil</span>
            <span className="breadcrumb-sep">/</span>
            <span className="breadcrumb-item">Blog</span>
          </div>
          <h1>Blog & Actualités</h1>
          <p>Dernières nouvelles sur l'inclusion financière et l'innovation en Afrique</p>
        </div>
      </section>

      <section style={{ background: '#fff' }}>
        <div className="container">
          <div className="blog-full-grid" style={{ marginTop: '60px' }}>
            {posts.map((post, i) => (
              <div key={i} className="blog-full-card">
                <div className="blog-full-img" style={{ background: post.gradient }}>
                  {post.icon}
                </div>
                <div className="blog-full-body">
                  <div className="blog-meta" style={{ marginBottom: '12px' }}>
                    <span className="blog-tag">{post.tag}</span>
                    <span className="blog-reading">{post.reading}</span>
                  </div>
                  <h4 className="blog-title">{post.title}</h4>
                  <p className="blog-excerpt">
                    Découvrez les dernières tendances et innovations en fintech, étude de cas et analyses de marché pour l'inclusion financière africaine.
                  </p>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 'auto' }}>
                    <div className="blog-author-row">
                      <span className="blog-author-avatar">📝</span>
                      <span className="blog-author-name">TOVPAY Blog</span>
                    </div>
                    <span className="blog-date">{post.date}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ background: 'var(--g50)', paddingTop: '60px' }}>
        <div className="container">
          <div className="newsletter-box">
            <div>
              <h3 style={{ color: '#fff', marginBottom: '8px', fontSize: '1.3rem', fontWeight: 700 }}>S'abonner à la newsletter</h3>
              <p style={{ color: 'rgba(255,255,255,.75)', fontSize: '14px' }}>Recevez les dernières actualités fintech africaines</p>
            </div>
            <div className="newsletter-input-row">
              <input type="email" className="newsletter-input" placeholder="email@exemple.com" />
              <button className="newsletter-btn">S'abonner</button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
