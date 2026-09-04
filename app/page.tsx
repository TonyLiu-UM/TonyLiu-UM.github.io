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
    title: 'When is feedback reliable enough to act on?',
    copy: 'I audit signals before they control additional computation, adaptation, or memory—especially when their errors can make a system worse than a simple baseline.',
    projects: 'MetaGate · IPU · Readiness-Gated UDA',
  },
  {
    title: 'How can agents learn from outcomes without overfitting to them?',
    copy: 'I design update rules that separate action from outcome reveal, validate proposed strategies, and retain only improvements that survive independent checks.',
    projects: 'CARE · Selection-Aware Self-Evolution · MAPGD',
  },
  {
    title: 'Can a reasoning system recover after an error becomes load-bearing?',
    copy: 'I trace how errors propagate through long reasoning chains and study whether independent evidence or formal verification can produce stable—not merely temporary—repairs.',
    projects: 'Fault Dynamics · Lean2Isabelle',
  },
];

type Project = {
  title: string;
  subtitle: string;
  status: string;
  tone: 'accepted' | 'review' | 'ongoing';
  copy: string;
  detail: string;
  detailLabel: 'Current focus' | 'Result';
  role: string;
  href?: string;
  linkLabel?: string;
};

const currentProjects: Project[] = [
  {
    title: 'Fault Dynamics in Long-Form Reasoning',
    subtitle: 'After a reasoning error becomes load-bearing',
    status: 'Ongoing · NLP2CT Lab',
    tone: 'ongoing',
    copy: 'Developing controlled replay experiments that begin after an incorrect intermediate result has already been used, then separately measure detection, repair, relapse, newly introduced errors, and task completion.',
    detail: 'Testing whether independently derived evidence improves stable recovery beyond generic reflection.',
    detailLabel: 'Current focus',
    role: 'Supervised by Prof. Derek F. Wong',
  },
  {
    title: 'Selection-Aware Self-Evolving Agents',
    subtitle: 'Quantitative research under misleading feedback',
    status: 'Ongoing · University of Macau',
    tone: 'ongoing',
    copy: 'Building a research-agent setting in which models generate, backtest, and revise quantitative hypotheses under leakage-controlled evaluation.',
    detail: 'Evidence-gated updates that separate exploratory selection from sealed replication before a strategy enters persistent memory.',
    detailLabel: 'Current focus',
    role: 'With Dr. Meng Qu',
  },
];

const selectedProjects: Project[] = [
  {
    title: 'MetaGate',
    subtitle: 'When more test-time compute hurts',
    status: 'Accepted · PRICAI 2026',
    tone: 'accepted',
    copy: 'A target-label-free gate that compares independently calibrated difficulty signals and falls back to uniform sampling when their disagreement makes reallocation unsafe.',
    detail: 'Across 20 cross-model transfers, reduced harmful reallocations—cases below uniform sampling—from 13 to 1, while averaging 6.99 decoded samples per problem and 0.28 percentage points above uniform.',
    detailLabel: 'Result',
    role: 'Sole author',
    href: '/papers/metagate.pdf',
    linkLabel: 'Paper',
  },
  {
    title: 'CARE',
    subtitle: 'Executable program evolution for reaction optimization',
    status: 'Manuscript under review',
    tone: 'review',
    copy: 'Co-designed an intervention-gated controller that separates program synthesis from experiment selection: each proposed scoring program is compiled and validated before use, and the controller records its decision before observing the outcome.',
    detail: 'Across eight reaction-optimization tasks with 30 matched seeds per task, ranked first among evaluated methods on normalized regret, best-so-far AUC, and Top-1% Success@15.',
    detailLabel: 'Result',
    role: 'Co-first author',
    href: '/papers/care.pdf',
    linkLabel: 'Preprint',
  },
  {
    title: 'Lean2Isabelle',
    subtitle: 'Cross-assistant proof translation',
    status: 'ICML 2026 AI for Math Workshop',
    tone: 'accepted',
    copy: 'Built three datasets totaling 36,004 verified examples and trained SFT/GRPO models with Isabelle feedback; Minimal Valid Progress provides denser rewards for partially correct proof trajectories.',
    detail: 'On MiniF2F-DSP, verifier-guided post-training increased semantic proof success from 49.8% to 54.3%.',
    detailLabel: 'Result',
    role: 'Co-first author',
    href: '/papers/lean2isabelle.pdf',
    linkLabel: 'Workshop paper',
  },
];

const additionalProjects: Project[] = [
  {
    title: 'IPU',
    subtitle: 'Target-label-free prompt selection',
    status: 'Ongoing research',
    tone: 'ongoing',
    copy: 'Prompt selection normally requires many labeled target responses. IPU instead estimates prompt quality from stable agreement patterns across model responses, using source calibration and item-grouped nested cross-fitting to avoid tuning on target labels.',
    detail: 'On 40 GSM8K prompts, reached Spearman ρ=.721 versus .571 for mean pairwise agreement and .558 for majority pseudo-labeling; a low-budget fusion retained ρ=.680 with 80% fewer target responses.',
    detailLabel: 'Result',
    role: 'Led at MAPLE Lab',
  },
];

const publications = [
  {
    group: 'Peer-reviewed publications',
    title: 'When Difficulty Signals Are Unreliable: Auditing and Gating Sample-Count Adaptive Test-Time Compute',
    authors: 'Guanyu Liu',
    venue: 'PRICAI 2026 · Accepted regular paper · Sole author',
    label: 'Conference',
    href: '/papers/metagate.pdf',
  },
  {
    group: 'Peer-reviewed publications',
    title: 'Lean2Isabelle: Factorized Cross-Assistant Proof Translation',
    authors: 'Guanyu Liu*, Jing Ma*, Derek F. Wong',
    venue: 'ICML 2026 AI for Math Workshop · Extended manuscript under review',
    label: 'Workshop',
    href: '/papers/lean2isabelle.pdf',
  },
  {
    group: 'Manuscripts and preprints',
    title: 'CARE: Context-Aware Ranking Evolution with Executable Scoring Programs for Budgeted Reaction Optimization',
    authors: 'Guanyu Liu*, Weizhi Kong*, Chuxiong Tang*, Zichao Wang, Biao Zhang, Bo Li, Peng Zhang, Tianyu Shi',
    venue: 'Manuscript under review',
    label: 'Manuscript',
    href: '/papers/care.pdf',
  },
  {
    group: 'Manuscripts and preprints',
    title: 'MAPGD: Multi-Agent Prompt Gradient Descent for Collaborative Prompt Optimization',
    authors: 'Yue Han, Bowen Liu, Zihan Zhou, Guanyu Liu, et al.',
    venue: 'Manuscript under review · Preliminary version at NeurIPS 2025 SEA Workshop',
    label: 'Manuscript',
  },
];

function ProjectCard({ project, compact = false }: { project: Project; compact?: boolean }) {
  return (
    <article className={`project-card${compact ? ' project-card-compact' : ''}`}>
      <div className="project-marker" aria-hidden="true">{project.title.slice(0, 1)}</div>
      <div className="project-body">
        <div className="project-topline"><span className={`status status-${project.tone}`}>{project.status}</span><span>{project.role}</span></div>
        <h3>{project.title}</h3>
        <p className="project-subtitle">{project.subtitle}</p>
        <p>{project.copy}</p>
        <div className={`project-result${project.detailLabel === 'Current focus' ? ' project-focus' : ''}`}>
          <Sparkles size={15} />
          <span><strong>{project.detailLabel}:</strong> {project.detail}</span>
        </div>
        {project.href && <a className="project-link" href={project.href} target="_blank">{project.linkLabel} <ArrowUpRight size={14} /></a>}
      </div>
    </article>
  );
}

export default function Home() {
  const publicationGroups = ['Peer-reviewed publications', 'Manuscripts and preprints'];

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
          <div className="nav-actions">
            <a className="nav-email" href="mailto:dc32352@um.edu.mo"><Mail size={14} /> Email</a>
            <a className="nav-cv" href="/Guanyu_Liu_CV.pdf" target="_blank">CV <ArrowUpRight size={14} /></a>
          </div>
        </div>
      </header>

      <div className="page-shell">
        <aside className="profile-rail" aria-label="Profile">
          <div className="portrait-mark" aria-hidden="true"><span>GL</span></div>
          <h2>Guanyu Liu</h2>
          <p className="profile-role">Undergraduate researcher</p>
          <p className="profile-interest">Reliable self-evolving agents, reasoning, and verification.</p>
          <ul className="profile-facts">
            <li><MapPin size={16} /> Macau</li>
            <li><GraduationCap size={16} /> <a href="https://www.um.edu.mo/" target="_blank">University of Macau</a></li>
            <li><BriefcaseBusiness size={16} /> <a href="http://nlp2ct.cis.um.edu.mo/" target="_blank">NLP2CT Lab</a></li>
          </ul>
          <div className="profile-links">
            <a href="mailto:dc32352@um.edu.mo"><Mail size={16} /> Email</a>
            <a href="/Guanyu_Liu_CV.pdf" target="_blank"><FileText size={16} /> Curriculum Vitae</a>
          </div>
        </aside>

        <div className="content-column">
          <section className="intro-section" id="about">
            <p className="eyebrow">Hi, I’m Guanyu <span aria-hidden="true">✦</span></p>
            <h1>How can AI improve without trusting the wrong feedback?</h1>
            <div className="welcome-card">
              <p>
                I am a final-year undergraduate in <strong>Statistics and Data Science</strong> at the <a href="https://www.um.edu.mo/" target="_blank"><strong>University of Macau</strong></a>. At the <a href="http://nlp2ct.cis.um.edu.mo/" target="_blank"><strong>NLP2CT Lab</strong></a>, I work with <a href="https://www.fst.um.edu.mo/personal/derek-wong/" target="_blank"><strong>Prof. Derek F. Wong</strong></a> on language-model reasoning.
              </p>
              <p>
                I keep returning to one question: <em>how can an AI system improve from feedback without letting unreliable evidence corrupt its next decision?</em>
              </p>
              <p>I study this problem at three levels: deciding when to spend or reuse computation, turning outcomes into persistent agent strategies, and repairing errors once they have entered a reasoning chain.</p>
            </div>
            <div className="credibility-strip" aria-label="Selected research highlights">
              <span><strong>PRICAI 2026</strong> · Sole author</span>
              <span><strong>ICML 2026 AI for Math</strong> · Co-first author</span>
              <span><strong>NLP2CT Lab</strong> · University of Macau</span>
            </div>
            <p className="intro-note">
              Previously, I was a Visiting Student at MAPLE Lab, Westlake University, advised by <a href="https://en.westlake.edu.cn/faculty/guojun-qi.html" target="_blank"><strong>Prof. Guojun Qi</strong></a>. I am also working with <a href="https://fic.um.edu.mo/zh-hant/people/mengqu/" target="_blank"><strong>Dr. Meng Qu</strong></a> on self-evolving agents for quantitative research.
            </p>
          </section>

          <section className="content-section" id="research">
            <div className="section-title-row">
              <div><span className="section-number">01</span><h2>Research interests</h2></div>
              <p>Reliable Self-Evolving Agents · LLM Reasoning & Verification · Imperfect Feedback</p>
            </div>
            <p className="research-lead">
              Modern AI systems increasingly critique, verify, remember, and update their own behavior. I audit feedback, gate consequential updates, and test whether improvements persist. I use reasoning, scientific discovery, quantitative research, and adaptation as stress tests of the same question—not as unrelated application areas.
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
              <div><span className="section-number">02</span><h2>Research</h2></div>
              <p>Selected work and my contributions.</p>
            </div>
            <h3 className="project-group-title">Current research</h3>
            <div className="project-list">
              {currentProjects.map((project) => <ProjectCard project={project} key={project.title} />)}
            </div>
            <h3 className="project-group-title">Selected work</h3>
            <div className="project-list">
              {selectedProjects.map((project) => <ProjectCard project={project} key={project.title} />)}
            </div>
            <h3 className="project-group-title">Additional research</h3>
            <div className="project-list">
              {additionalProjects.map((project) => <ProjectCard project={project} compact key={project.title} />)}
            </div>
          </section>

          <section className="content-section" id="publications">
            <div className="section-title-row">
              <div><span className="section-number">03</span><h2>Publications</h2></div>
              <p>* Equal contribution</p>
            </div>
            {publicationGroups.map((group) => (
              <div className="publication-group" key={group}>
                <h3>{group}</h3>
                <div className="publication-list">
                  {publications.filter((publication) => publication.group === group).map((publication) => (
                    <article key={publication.title}>
                      <BookOpen size={18} aria-hidden="true" />
                      <div>
                        <span className="publication-label">{publication.label}</span>
                        <h3>{publication.title}</h3>
                        <p>{publication.authors}</p>
                        <strong>{publication.venue}</strong>
                        {publication.href && <a className="publication-link" href={publication.href} target="_blank">Read <ArrowUpRight size={13} /></a>}
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            ))}
          </section>

          <section className="contact-card">
            <div>
              <span className="eyebrow">Let’s talk research</span>
              <h2>I am always happy to discuss reliable agents, language-model reasoning, and learning from imperfect feedback.</h2>
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
