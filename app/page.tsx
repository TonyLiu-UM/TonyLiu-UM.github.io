import {
  ArrowUpRight,
  BookOpen,
  BriefcaseBusiness,
  FileText,
  GraduationCap,
  Mail,
  MapPin,
  Sparkles,
} from 'lucide-react';

const researchQuestions = [
  {
    title: 'When should a model trust feedback?',
    copy: 'I study when extra computation, adaptation, or agreement signals are genuinely useful—and when acting on them makes a model less reliable.',
    projects: 'MetaGate · IPU · Readiness-Gated UDA',
  },
  {
    title: 'How should an agent improve from outcomes?',
    copy: 'I explore how agents can validate, revise, and selectively retain what they learn without overfitting to repeatedly selected outcomes.',
    projects: 'CARE · Selection-Aware Self-Evolution · MAPGD',
  },
  {
    title: 'What happens after a reasoning error is used?',
    copy: 'I am interested in how errors propagate, whether repairs remain stable, and how independent evidence or formal verification changes the trajectory.',
    projects: 'Fault Dynamics · Lean2Isabelle',
  },
];

const projects = [
  {
    title: 'MetaGate',
    subtitle: 'When more test-time compute hurts',
    status: 'Accepted · PRICAI 2026',
    tone: 'accepted',
    copy: 'A target-label-free gate that audits disagreement between frozen source-calibrated difficulty signals before reallocating samples.',
    result: 'Reduced below-uniform transfers from 13/20 to 1/20 at 6.99 decoded samples per problem.',
    role: 'Sole author',
  },
  {
    title: 'CARE',
    subtitle: 'Executable program evolution for reaction optimization',
    status: 'Under review · AAAI 2027',
    tone: 'review',
    copy: 'An intervention-gated controller that records decisions before outcome reveal, validates generated programs, and retains, revises, or regenerates them from evidence.',
    result: 'Ranked first across eight tasks and 30 matched seeds on all three evaluation metrics.',
    role: 'Co-first author',
  },
  {
    title: 'Fault Dynamics',
    subtitle: 'After a reasoning error becomes load-bearing',
    status: 'Ongoing · NLP2CT Lab',
    tone: 'ongoing',
    copy: 'Controlled replay protocols that distinguish error detection, first repair, stable repair, relapse, and newly introduced errors.',
    result: 'Separating generic reflection from independently derived evidence across several reasoning domains.',
    role: 'Supervised by Prof. Derek F. Wong',
  },
  {
    title: 'Selection-Aware Self-Evolution',
    subtitle: 'When verifiable feedback can still lie',
    status: 'Ongoing · with Dr. Meng Qu',
    tone: 'ongoing',
    copy: 'Evidence-gated updates, sealed replication, and selective consolidation for agents learning from adaptively selected backtest feedback.',
    result: 'Using quantitative research as a controlled environment for studying recursive self-improvement.',
    role: 'Self-evolving agents',
  },
  {
    title: 'Lean2Isabelle',
    subtitle: 'Cross-assistant proof translation',
    status: 'ICML 2026 AI for Math Workshop',
    tone: 'accepted',
    copy: 'Three datasets totaling 36,004 examples, with verifier-guided SFT and GRPO using Minimal Valid Progress reward shaping.',
    result: 'Improved semantic proof success from 49.8% to 54.3%; extended version under NeurIPS 2026 review.',
    role: 'Co-first author',
  },
  {
    title: 'IPU',
    subtitle: 'Label-free prompt selection',
    status: 'Preparing ICLR 2027',
    tone: 'ongoing',
    copy: 'A source-calibrated answer-class posterior selected through item-grouped nested cross-fitting, without target-label tuning.',
    result: 'Spearman ρ=0.7208; retained 94% of that correlation with 80% fewer target calls.',
    role: 'Visiting Student · MAPLE Lab',
  },
];

const publications = [
  {
    title: 'When Difficulty Signals Are Unreliable: Auditing and Gating Sample-Count Adaptive Test-Time Compute',
    authors: 'Guanyu Liu',
    venue: 'PRICAI 2026 · Accepted regular paper · Sole author',
    label: 'Peer-reviewed',
  },
  {
    title: 'Lean2Isabelle: Factorized Cross-Assistant Proof Translation',
    authors: 'Guanyu Liu*, Jing Ma*, Derek F. Wong',
    venue: 'ICML 2026 AI for Math Workshop · Extended version under NeurIPS 2026 review',
    label: 'Workshop',
  },
  {
    title: 'CARE: Context-Aware Ranking Evolution with Executable Scoring Programs for Budgeted Reaction Optimization',
    authors: 'Guanyu Liu*, Weizhi Kong*, Chuxiong Tang*, Zichao Wang, Biao Zhang, Bo Li, Peng Zhang, Tianyu Shi',
    venue: 'Under review at AAAI 2027',
    label: 'Manuscript',
  },
  {
    title: 'MAPGD: Multi-Agent Prompt Gradient Descent for Collaborative Prompt Optimization',
    authors: 'Yue Han, Bowen Liu, Zihan Zhou, Guanyu Liu, et al.',
    venue: 'Under review at TMLR · Preliminary version at NeurIPS 2025 SEA Workshop',
    label: 'Manuscript',
  },
];

const currentQuestions = [
  'Which experiences should become an agent’s long-term memory or reusable skills?',
  'Can independent evidence prevent a reasoning system from returning to an earlier error?',
  'How should we evaluate agents when feedback is verifiable but statistically misleading?',
  'When should a model spend more computation—and when should it stop?',
];

export default function Home() {
  return (
    <main>
      <header className="topbar">
        <div className="topbar-inner">
          <a className="wordmark" href="#about">Guanyu Liu</a>
          <nav aria-label="Main navigation">
            <a href="#about">About</a>
            <a href="#research">Research</a>
            <a href="#projects">Projects</a>
            <a href="#publications">Publications</a>
          </nav>
          <a className="nav-cv" href="/Guanyu_Liu_CV.pdf" target="_blank">CV <ArrowUpRight size={14} /></a>
        </div>
      </header>

      <div className="page-shell">
        <aside className="profile-rail" aria-label="Profile">
          <div className="portrait-mark" aria-hidden="true"><span>GL</span></div>
          <h2>Guanyu Liu</h2>
          <p className="profile-role">Undergraduate researcher</p>
          <p className="profile-interest">Interested in reliable self-evolving AI.</p>
          <ul className="profile-facts">
            <li><MapPin size={16} /> Macau</li>
            <li><GraduationCap size={16} /> University of Macau</li>
            <li><BriefcaseBusiness size={16} /> NLP2CT Lab</li>
          </ul>
          <div className="profile-links">
            <a href="mailto:dc32352@um.edu.mo"><Mail size={16} /> Email</a>
            <a href="/Guanyu_Liu_CV.pdf" target="_blank"><FileText size={16} /> Curriculum Vitae</a>
          </div>
        </aside>

        <div className="content-column">
          <section className="intro-section" id="about">
            <p className="eyebrow">Welcome to my homepage <span aria-hidden="true">✦</span></p>
            <h1>Hi, I’m Guanyu.</h1>
            <div className="welcome-card">
              <p>
                I am a final-year undergraduate student in <strong>Statistics and Data Science</strong> at the University of Macau. I conduct research at the <strong>NLP2CT Lab</strong> under the supervision of <strong>Prof. Derek F. Wong</strong>.
              </p>
              <p>
                I am interested in a deceptively simple question: <em>when AI systems learn from feedback, how do they know what to trust?</em>
              </p>
              <p>
                My recent work explores reliable self-evolving agents, language-model reasoning and post-training, and learning under imperfect supervision.
              </p>
            </div>
            <p className="intro-note">
              Previously, I was a Visiting Student at <strong>MAPLE Lab, Westlake University</strong>, advised by <strong>Prof. Guojun Qi</strong>. I am also working with <strong>Dr. Meng Qu</strong> on self-evolving agents in quantitative research environments.
            </p>
          </section>

          <section className="content-section" id="research">
            <div className="section-title-row">
              <div><span className="section-number">01</span><h2>Research interests</h2></div>
              <p>One theme, viewed from three angles.</p>
            </div>
            <p className="research-lead">
              Modern AI systems increasingly critique, verify, remember, and update their own behavior. I study the failure modes that emerge inside this feedback loop.
            </p>
            <div className="question-list">
              {researchQuestions.map((question, index) => (
                <article key={question.title}>
                  <span>0{index + 1}</span>
                  <div><h3>{question.title}</h3><p>{question.copy}</p><small>{question.projects}</small></div>
                </article>
              ))}
            </div>
          </section>

          <section className="content-section" id="projects">
            <div className="section-title-row">
              <div><span className="section-number">02</span><h2>Selected projects</h2></div>
              <p>Projects I have led or helped shape.</p>
            </div>
            <div className="project-list">
              {projects.map((project) => (
                <article className="project-card" key={project.title}>
                  <div className="project-marker" aria-hidden="true">{project.title.slice(0, 1)}</div>
                  <div className="project-body">
                    <div className="project-topline"><span className={`status status-${project.tone}`}>{project.status}</span><span>{project.role}</span></div>
                    <h3>{project.title}</h3>
                    <p className="project-subtitle">{project.subtitle}</p>
                    <p>{project.copy}</p>
                    <div className="project-result"><Sparkles size={15} /><span>{project.result}</span></div>
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section className="content-section notebook-section">
            <div className="section-title-row">
              <div><span className="section-number">03</span><h2>In my notebook</h2></div>
              <p>Questions I am exploring now.</p>
            </div>
            <ol className="notebook-list">
              {currentQuestions.map((question, index) => <li key={question}><span>{index + 1}</span><p>{question}</p></li>)}
            </ol>
          </section>

          <section className="content-section" id="publications">
            <div className="section-title-row">
              <div><span className="section-number">04</span><h2>Publications</h2></div>
              <p>* Equal contribution</p>
            </div>
            <div className="publication-list">
              {publications.map((publication) => (
                <article key={publication.title}>
                  <BookOpen size={18} aria-hidden="true" />
                  <div><span className="publication-label">{publication.label}</span><h3>{publication.title}</h3><p>{publication.authors}</p><strong>{publication.venue}</strong></div>
                </article>
              ))}
            </div>
          </section>

          <section className="contact-card">
            <div>
              <span className="eyebrow">Let’s talk research</span>
              <h2>If any of these questions resonate, I would be happy to hear from you.</h2>
            </div>
            <a href="mailto:dc32352@um.edu.mo">Email me <ArrowUpRight size={17} /></a>
          </section>

          <footer>
            <span>© 2026 Guanyu Liu</span>
            <span>Last updated September 2026</span>
          </footer>
        </div>
      </div>
    </main>
  );
}
