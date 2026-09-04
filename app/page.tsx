import {
  ArrowDownRight,
  ArrowUpRight,
  BookOpen,
  CircleCheck,
  FileText,
  Mail,
  MapPin,
  Sparkles,
} from 'lucide-react';

const researchQuestions = [
  {
    number: '01',
    eyebrow: 'Adaptive inference',
    title: 'Can a model know when more thinking will help?',
    copy: 'More computation, supervision, or adaptation is not always beneficial. I study how models can recognize unreliable signals before acting on them.',
    projects: ['MetaGate', 'IPU', 'Readiness-Gated UDA'],
    accent: 'cyan',
  },
  {
    number: '02',
    eyebrow: 'Self-evolving agents',
    title: 'Can an agent learn from outcomes without being misled?',
    copy: 'Outcome feedback can improve an agent, but it can also encourage overfitting and misleading generalizations. I explore how agents validate, revise, and selectively retain what they learn.',
    projects: ['CARE', 'Selection-Aware RSI', 'MAPGD'],
    accent: 'violet',
  },
  {
    number: '03',
    eyebrow: 'Reasoning reliability',
    title: 'What happens after an error becomes load-bearing?',
    copy: 'Finding an error is only the beginning. I am interested in how errors propagate after they have already been used, whether repairs remain stable, and how external evidence changes this process.',
    projects: ['Fault Dynamics', 'Lean2Isabelle'],
    accent: 'amber',
  },
];

const featuredWork = [
  {
    index: 'A',
    title: 'MetaGate',
    subtitle: 'When more test-time compute hurts',
    status: 'Accepted · PRICAI 2026',
    statusTone: 'accepted',
    question:
      'Adaptive compute assumes harder-looking problems deserve more samples. What if the difficulty signal itself is unreliable?',
    contribution:
      'I developed a target-label-free gate that audits disagreement between frozen source-calibrated difficulty signals before reallocating samples.',
    result:
      'Reduced below-uniform transfers from 13/20 to 1/20 at 6.99 decoded samples per problem.',
    tags: ['Sole author', 'Test-time compute', 'Reliability'],
  },
  {
    index: 'B',
    title: 'CARE',
    subtitle: 'Executable program evolution for reaction optimization',
    status: 'Under review · AAAI 2027',
    statusTone: 'review',
    question:
      'Can an LLM improve an experimental decision rule from outcomes without producing invalid or unstable programs?',
    contribution:
      'I co-designed an intervention-gated controller that records decisions before outcome reveal, validates generated programs, and retains, revises, or regenerates them from observed evidence.',
    result:
      'Ranked first across eight tasks and 30 matched seeds on all three evaluation metrics.',
    tags: ['Co-first author', 'Agents', 'Program evolution'],
  },
  {
    index: 'C',
    title: 'Fault Dynamics',
    subtitle: 'After a reasoning error becomes load-bearing',
    status: 'Ongoing · NLP2CT Lab',
    statusTone: 'ongoing',
    question:
      'Once a model has used an incorrect intermediate conclusion, does later reflection truly repair the reasoning—or only hide the failure?',
    contribution:
      'I am developing controlled replay protocols that distinguish error detection, first repair, stable repair, relapse, and newly introduced errors.',
    result:
      'Current experiments separate generic reflection from independently derived evidence across multiple reasoning domains.',
    tags: ['Prof. Derek F. Wong', 'Reasoning', 'Evaluation'],
  },
  {
    index: 'D',
    title: 'Selection-Aware Self-Evolution',
    subtitle: 'When verifiable feedback can still lie',
    status: 'Ongoing · with Dr. Meng Qu',
    statusTone: 'ongoing',
    question:
      'How should a research agent improve when every backtest is reproducible, yet repeated selection makes the feedback statistically deceptive?',
    contribution:
      'I am exploring evidence-gated updates, sealed replication, and selective consolidation of reusable memories and skills.',
    result:
      'The project reframes quantitative research as a controlled environment for studying recursive self-improvement under adaptive selection.',
    tags: ['Self-evolving agents', 'Feedback', 'Evaluation'],
  },
  {
    index: 'E',
    title: 'Lean2Isabelle',
    subtitle: 'Cross-assistant proof translation',
    status: 'ICML 2026 AI for Math Workshop',
    statusTone: 'accepted',
    question:
      'Can formal verification provide sufficiently dense feedback to teach models how to translate proofs across theorem provers?',
    contribution:
      'I built three datasets totaling 36,004 examples and implemented verifier-guided SFT and GRPO with Minimal Valid Progress reward shaping.',
    result:
      'Improved semantic proof success from 49.8% to 54.3%; extended version is under review at NeurIPS 2026.',
    tags: ['Co-first author', 'Formal reasoning', 'Post-training'],
  },
  {
    index: 'F',
    title: 'IPU',
    subtitle: 'Label-free prompt selection',
    status: 'Ongoing · preparing ICLR 2027',
    statusTone: 'ongoing',
    question:
      'How can we choose prompts after distribution shift when target labels are unavailable and model agreement is imperfect?',
    contribution:
      'I designed a source-calibrated answer-class posterior selected through item-grouped nested cross-fitting, without target-label tuning.',
    result:
      'Reached Spearman ρ=0.7208 on a 40-prompt GSM8K pool; a low-budget variant retained 94% of that correlation with 80% fewer target calls.',
    tags: ['Visiting student', 'Prompt selection', 'Label-free'],
  },
];

const publications = [
  {
    year: '2026',
    title:
      'When Difficulty Signals Are Unreliable: Auditing and Gating Sample-Count Adaptive Test-Time Compute',
    authors: 'Guanyu Liu',
    venue: 'PRICAI 2026 · Accepted regular paper · Sole author',
    kind: 'Peer-reviewed',
  },
  {
    year: '2026',
    title: 'Lean2Isabelle: Factorized Cross-Assistant Proof Translation',
    authors: 'Guanyu Liu*, Jing Ma*, Derek F. Wong',
    venue:
      'ICML 2026 AI for Math Workshop · Extended version under review at NeurIPS 2026',
    kind: 'Workshop',
  },
  {
    year: '2026',
    title:
      'CARE: Context-Aware Ranking Evolution with Executable Scoring Programs for Budgeted Reaction Optimization',
    authors:
      'Guanyu Liu*, Weizhi Kong*, Chuxiong Tang*, Zichao Wang, Biao Zhang, Bo Li, Peng Zhang, Tianyu Shi',
    venue: 'Under review at AAAI 2027',
    kind: 'Manuscript',
  },
  {
    year: '2026',
    title:
      'MAPGD: Multi-Agent Prompt Gradient Descent for Collaborative Prompt Optimization',
    authors: 'Yue Han, Bowen Liu, Zihan Zhou, Guanyu Liu, et al.',
    venue: 'Under review at TMLR · Preliminary version at NeurIPS 2025 SEA Workshop',
    kind: 'Manuscript',
  },
];

const openQuestions = [
  'Which experiences should become an agent’s long-term memory or reusable skills?',
  'Can independent evidence prevent reasoning systems from returning to an earlier error?',
  'How should we evaluate agents when feedback is verifiable but statistically misleading?',
  'When should a model spend more computation—and when should it stop?',
];

function FeedbackLoop() {
  return (
    <div className="feedback-loop" aria-label="A feedback loop from signal to decision, outcome, evidence gate, and update">
      <div className="loop-orbit loop-orbit-one" />
      <div className="loop-orbit loop-orbit-two" />
      <div className="loop-center">
        <span>evidence</span>
        <strong>GATE</strong>
        <small>what should change?</small>
      </div>
      <div className="loop-node node-signal"><span>01</span><strong>Signal</strong></div>
      <div className="loop-node node-decision"><span>02</span><strong>Decision</strong></div>
      <div className="loop-node node-outcome"><span>03</span><strong>Outcome</strong></div>
      <div className="loop-node node-update"><span>04</span><strong>Update</strong></div>
      <svg className="loop-lines" viewBox="0 0 520 520" aria-hidden="true">
        <defs>
          <linearGradient id="line-gradient" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#6ee7f2" />
            <stop offset=".5" stopColor="#8b8cf8" />
            <stop offset="1" stopColor="#f5b86b" />
          </linearGradient>
        </defs>
        <path d="M143 112 C267 46 407 118 419 248 C431 369 323 461 202 425 C94 393 52 271 111 178" />
        <path className="line-secondary" d="M259 259 C327 198 386 225 391 293 C397 371 298 401 245 348 C188 291 111 322 115 392" />
      </svg>
    </div>
  );
}

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Guanyu Liu, home">
          <span className="brand-mark">GL</span>
          <span className="brand-name">Guanyu Liu</span>
        </a>
        <nav aria-label="Main navigation">
          <a href="#questions">Questions</a>
          <a href="#work">Research</a>
          <a href="#publications">Publications</a>
          <a href="#about">About</a>
        </nav>
        <a className="header-cv" href="/Guanyu_Liu_CV.pdf" target="_blank">
          CV <ArrowUpRight size={15} />
        </a>
      </header>

      <section className="hero section-shell" id="top">
        <div className="hero-copy">
          <div className="hero-kicker"><span className="pulse-dot" />University of Macau · Final-year undergraduate</div>
          <h1>I study how AI systems learn from feedback—<em>and what happens when that feedback is wrong.</em></h1>
          <p className="hero-intro">I am interested in reliable self-evolving agents, language-model reasoning and post-training, and learning under imperfect supervision.</p>
          <div className="hero-actions">
            <a className="button button-primary" href="#work">Explore my research <ArrowDownRight size={17} /></a>
            <a className="button button-ghost" href="mailto:dc32352@um.edu.mo"><Mail size={17} /> Get in touch</a>
          </div>
          <div className="hero-meta">
            <span><MapPin size={15} /> Macau</span>
            <span><Sparkles size={15} /> Open to research conversations</span>
          </div>
        </div>
        <FeedbackLoop />
      </section>

      <section className="manifesto">
        <div className="section-shell manifesto-grid">
          <span className="section-index">Research lens</span>
          <p>Modern AI systems do more than produce answers: they critique, verify, remember, and update their behavior. I am curious about the failure modes inside this loop—and how we can make improvement <span>selective, evidence-aware, and stable.</span></p>
        </div>
      </section>

      <section className="section-shell section-block" id="questions">
        <div className="section-heading">
          <div><span className="section-index">01 · The questions</span><h2>Three questions connect my work.</h2></div>
          <p>Different domains, one recurring tension: useful feedback is rarely the same as trustworthy feedback.</p>
        </div>
        <div className="question-grid">
          {researchQuestions.map((item) => (
            <article className={`question-card accent-${item.accent}`} key={item.number}>
              <div className="question-topline"><span>{item.number}</span><span>{item.eyebrow}</span></div>
              <h3>{item.title}</h3><p>{item.copy}</p>
              <div className="chip-row">{item.projects.map((project) => <span key={project}>{project}</span>)}</div>
            </article>
          ))}
        </div>
      </section>

      <section className="work-section" id="work">
        <div className="section-shell section-block">
          <div className="section-heading">
            <div><span className="section-index">02 · Selected research</span><h2>Projects that started with a puzzle.</h2></div>
            <p>Each project begins with a concrete failure mode, then turns it into a method, an experiment, or a sharper evaluation question.</p>
          </div>
          <div className="work-grid">
            {featuredWork.map((work) => (
              <article className="work-card" key={work.index}>
                <div className="work-card-head"><span className="work-letter">{work.index}</span><span className={`status status-${work.statusTone}`}>{work.status}</span></div>
                <h3>{work.title}</h3><p className="work-subtitle">{work.subtitle}</p>
                <div className="work-detail"><span>The puzzle</span><p>{work.question}</p></div>
                <div className="work-detail"><span>What I did</span><p>{work.contribution}</p></div>
                <div className="work-result"><CircleCheck size={17} /><p>{work.result}</p></div>
                <div className="tag-row">{work.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell section-block questions-now">
        <div className="section-heading compact-heading"><div><span className="section-index">03 · In my notebook</span><h2>Questions I’m exploring now.</h2></div></div>
        <ol className="open-question-list">
          {openQuestions.map((question, index) => (
            <li key={question}><span>0{index + 1}</span><p>{question}</p><ArrowUpRight size={20} aria-hidden="true" /></li>
          ))}
        </ol>
      </section>

      <section className="publication-section" id="publications">
        <div className="section-shell section-block">
          <div className="section-heading">
            <div><span className="section-index">04 · Publications</span><h2>Writing and collaborative work.</h2></div>
            <p>* Equal contribution. Under-review work is listed separately from peer-reviewed publications.</p>
          </div>
          <div className="publication-list">
            {publications.map((publication) => (
              <article className="publication" key={publication.title}>
                <div className="publication-year">{publication.year}</div>
                <div className="publication-main"><span className="publication-kind">{publication.kind}</span><h3>{publication.title}</h3><p>{publication.authors}</p><strong>{publication.venue}</strong></div>
                <BookOpen size={21} aria-hidden="true" />
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell about-section" id="about">
        <div className="about-card">
          <div className="about-title"><span className="section-index">05 · About</span><h2>Curiosity first,<br />evidence always.</h2></div>
          <div className="about-copy">
            <p>Hi! I’m Guanyu Liu, a final-year undergraduate student in Statistics and Data Science at the University of Macau. I conduct research at the <strong>NLP2CT Lab</strong> under the supervision of <strong>Prof. Derek F. Wong</strong>.</p>
            <p>Previously, I was a Visiting Student at the <strong>MAPLE Lab, Westlake University</strong>, advised by <strong>Prof. Guojun Qi</strong>. I am also working with <strong>Dr. Meng Qu</strong> on self-evolving agents in quantitative research environments.</p>
            <p>I enjoy turning small but puzzling observations into controlled research questions—especially when an apparently helpful signal turns out to be unreliable.</p>
            <div className="about-links"><a href="mailto:dc32352@um.edu.mo"><Mail size={17} /> Email me</a><a href="/Guanyu_Liu_CV.pdf" target="_blank"><FileText size={17} /> Download CV</a></div>
          </div>
        </div>
      </section>

      <footer className="site-footer section-shell">
        <div><span className="brand-mark">GL</span><p>Researching reliable learning from imperfect feedback.</p></div>
        <a href="mailto:dc32352@um.edu.mo">dc32352@um.edu.mo <ArrowUpRight size={15} /></a>
        <span>© 2026 Guanyu Liu</span>
      </footer>
    </main>
  );
}
