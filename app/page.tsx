import { ArrowDown, ArrowUpRight, Mail } from 'lucide-react';

const email = 'sirius.szy@foxmail.com';

export default function Home() {
  return (
    <div className="site-shell">
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>

      <header className="site-header">
        <div className="header-inner">
          <a className="wordmark" href="#top" aria-label="Zhenyu Shao homepage">
            <span className="wordmark-name">Zhenyu Shao</span>
            <span className="wordmark-dot" aria-hidden="true" />
          </a>

          <nav className="site-nav" aria-label="Primary navigation">
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>
      </header>

      <main id="main-content">
        <section className="hero" id="top" aria-labelledby="page-title">
          <div className="hero-rule" aria-hidden="true">
            <span>Personal homepage</span>
            <span>2026</span>
          </div>

          <div className="hero-grid">
            <div className="hero-copy">
              <p className="eyebrow">Official academic profile</p>
              <h1 id="page-title">Zhenyu Shao</h1>
              <p className="chinese-name" lang="zh-CN">
                邵震宇
              </p>
              <p className="hero-summary">
                A concise public home for academic identity, professional updates,
                and correspondence.
              </p>

              <div className="hero-actions" aria-label="Homepage actions">
                <a className="primary-link" href={`mailto:${email}`}>
                  <Mail aria-hidden="true" />
                  Email me
                </a>
                <a className="text-link" href="#about">
                  Read profile
                  <ArrowDown aria-hidden="true" />
                </a>
              </div>
            </div>

            <aside className="identity-card" aria-label="Contact details">
              <div className="monogram" aria-hidden="true">
                ZS
              </div>
              <dl>
                <div>
                  <dt>Official name</dt>
                  <dd>Zhenyu Shao</dd>
                </div>
                <div>
                  <dt>Chinese name</dt>
                  <dd lang="zh-CN">邵震宇</dd>
                </div>
                <div>
                  <dt>Email</dt>
                  <dd>
                    <a href={`mailto:${email}`}>{email}</a>
                  </dd>
                </div>
              </dl>
            </aside>
          </div>
        </section>

        <section className="content-section" id="about" aria-labelledby="about-title">
          <div className="section-marker" aria-hidden="true">
            01
          </div>
          <div className="section-heading">
            <p className="eyebrow">Profile</p>
            <h2 id="about-title">About</h2>
          </div>
          <div className="section-body">
            <p className="lead">
              I am Zhenyu Shao (邵震宇). This website is my official personal
              homepage and a stable point of contact for academic platforms,
              collaborators, and professional correspondence.
            </p>
            <p>
              The page is intentionally concise. Research interests, selected
              work, affiliations, and other verified profile information can be
              added here as they become available.
            </p>
            <div className="status-note">
              <span className="status-dot" aria-hidden="true" />
              Profile details will be updated over time.
            </div>
          </div>
        </section>

        <section
          className="content-section contact-section"
          id="contact"
          aria-labelledby="contact-title"
        >
          <div className="section-marker" aria-hidden="true">
            02
          </div>
          <div className="section-heading">
            <p className="eyebrow">Correspondence</p>
            <h2 id="contact-title">Contact</h2>
          </div>
          <div className="section-body">
            <p className="lead">
              For academic or professional enquiries, email is the best way to
              reach me.
            </p>
            <a className="email-panel" href={`mailto:${email}`}>
              <span>
                <small>Email address</small>
                <strong>{email}</strong>
              </span>
              <ArrowUpRight aria-hidden="true" />
            </a>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="footer-inner">
          <p>© 2026 Zhenyu Shao · 邵震宇</p>
          <a href="#top">Back to top ↑</a>
        </div>
      </footer>
    </div>
  );
}
