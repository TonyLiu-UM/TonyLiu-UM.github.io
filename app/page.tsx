import {
  Award,
  BookOpen,
  BriefcaseBusiness,
  FileText,
  GraduationCap,
  Mail,
  MapPin,
} from 'lucide-react';

const researchQuestions = [
  {
    title: 'When is a signal reliable enough to use?',
    copy: 'I test whether difficulty estimates, verifier scores, and agreement between answers help a model choose where to spend compute or which data to learn from.',
    projects: 'Selection, Drift, and Immigration · MetaGate · IPU',
  },
  {
    title: 'Which strategies should an agent keep?',
    copy: 'I study how an agent can revise its scoring rules or prompts after seeing an outcome, and how to check whether the change holds up on new data.',
    projects: 'CARE · Selection-Aware Self-Evolving Agents · MAPGD',
  },
  {
    title: 'What happens after a model relies on an error?',
    copy: 'I use formal proof checks and paired replays to see where reasoning goes wrong and which kinds of evidence help a model recover.',
    projects: 'Lean2Isabelle · LCoT · Dual-Replay',
  },
];

type Project = {
  title: string;
  subtitle: string;
  status: string;
  tone: 'accepted' | 'review' | 'ongoing';
  copy: string;
  detail: string;
  detailLabel: 'Current focus' | 'Draft results' | 'Results';
  role: string;
  href?: string;
  linkLabel?: string;
};

const currentProjects: Project[] = [
  {
    title: 'Post-Consumption Error Fate in Reasoning Traces: A State-Paired Protocol for Reuse and Repair',
    subtitle: 'LCoT',
    status: 'Manuscript in preparation for ACL 2027',
    tone: 'ongoing',
    copy: 'I led the design of a protocol that compares continuations from the same point after a model has used an incorrect claim. I ran all the experiments and wrote the current manuscript draft.',
    detail: 'The study includes 3,840 continuations from five model checkpoints and 96 constructed states. In matched comparisons, prompting the model to check the claim was associated with 13.65 percentage points less error reuse and 8.63 points more repair.',
    detailLabel: 'Draft results',
    role: 'Aug 2026–present · With Prof. Derek F. Wong',
  },
  {
    title: 'IPU',
    subtitle: 'Prompt selection without target labels',
    status: 'Ongoing research',
    tone: 'ongoing',
    copy: 'I use labeled source data to estimate which answers are likely to be correct, then use those estimates to rank prompts on an unlabeled target set. During cross-fitting, I keep responses to each source item in the same fold.',
    detail: 'On 40 GSM8K prompts, Spearman ρ was 0.721, versus 0.571 for mean pairwise agreement and 0.558 for majority pseudo-labeling. Combining IPU with agreement retained ρ = 0.680 with 80% fewer target responses.',
    detailLabel: 'Results',
    role: 'Jun 2026–present · Began at MAPLE Lab',
  },
  {
    title: 'Selection-Aware Self-Evolving Agents',
    subtitle: 'Testing when agents should keep quantitative strategies',
    status: 'Ongoing research',
    tone: 'ongoing',
    copy: 'I am building a test bed where agents propose, backtest, and revise quantitative strategies. Data used to choose a strategy stay separate from the data used to test it again.',
    detail: 'A strategy must pass a follow-up test on held-out data before the agent saves it for later use.',
    detailLabel: 'Current focus',
    role: 'With Dr. Meng Qu, University of Macau',
  },
];

const selectedProjects: Project[] = [
  {
    title: 'Selection, Drift, and Immigration',
    subtitle: 'What repeated self-training does to rare solution modes',
    status: 'Findings of EACL 2027 (accepted)',
    tone: 'accepted',
    copy: 'I model what happens when a language model repeatedly trains on its own outputs. The model tracks how verifier selection changes accuracy and how much reference data can help retain rare solution modes.',
    detail: 'The analysis gives conditions for a stable correctness rate and thresholds for reference coverage. Across five seeds with a 0.5B model, frozen-verifier selection improved recursive GSM8K accuracy by 3.81 percentage points (95% CI 1.79–5.84).',
    detailLabel: 'Results',
    role: 'Sole author · Mar–Aug 2026',
    href: '/papers/selection-drift.pdf',
    linkLabel: 'Paper',
  },
  {
    title: 'MetaGate',
    subtitle: 'Deciding which problems get more test-time samples',
    status: 'PRICAI 2026 (oral presentation)',
    tone: 'accepted',
    copy: 'I built a gate that compares a difficulty estimate with answer agreement across samples. When the calibrated scores disagree sharply, the gate falls back to uniform sampling. It uses statistics from the source model and requires no target labels.',
    detail: 'On MATH-500, a difficulty-based allocator fell below uniform in 13 of 20 cross-model transfers. With the gate, this fell to 1 of 20. Mean accuracy was 0.28 percentage points above uniform at 6.99 decoded samples per problem.',
    detailLabel: 'Results',
    role: 'Sole author',
    href: '/papers/metagate.pdf',
    linkLabel: 'Paper',
  },
  {
    title: 'Lean2Isabelle',
    subtitle: 'Translating proofs from Lean to Isabelle',
    status: 'ICML 2026 AI for Math Workshop',
    tone: 'accepted',
    copy: 'I built the data pipeline for three datasets and trained models for statement translation and proof reconstruction. During proof training, I used feedback from Isabelle to reward progress on partial proofs. An extended manuscript is in preparation for ACL 2027.',
    detail: 'With verified target statements on LeanWorkbook-ISA, verifier-guided training raised semantic proof success from 49.8% to 54.3%.',
    detailLabel: 'Results',
    role: 'Co-first author',
    href: '/papers/lean2isabelle.pdf',
    linkLabel: 'Paper',
  },
  {
    title: 'Dual-Replay',
    subtitle: 'Testing evidence dependence in chest X-ray agents',
    status: 'Under review at ICASSP 2027',
    tone: 'review',
    copy: 'I replayed agent runs with clean and corrupted tool outputs, once with the existing evidence and once with access to new evidence. I used pre-crop probes and image controls to check whether the new image content helped the agent correct its answer.',
    detail: 'I found 48 recoveries in 917 eligible evaluations across four systems. Deleting tool outputs at the end missed the earlier dependence in all 48. In an offline test with corrupted outputs, I used estimated recovery gains to select which 25% of 480 requests could continue. Accuracy was 2.5 percentage points above uniform allocation (95% CI 1.0–4.2).',
    detailLabel: 'Results',
    role: 'Research assistant · Apr–Sep 2026',
  },
  {
    title: 'CARE',
    subtitle: 'Choosing reaction experiments under a fixed budget',
    status: 'Under review at AAAI 2027',
    tone: 'review',
    copy: 'I designed the decision logic that checks a language model’s scoring program and compares its recommendation with a numerical default. The controller logs each choice before seeing the outcome and uses the result to decide whether to keep, revise, or replace the program.',
    detail: 'In offline replay across eight tasks with 30 matched seeds per task, CARE ranked first among the evaluated methods on normalized regret, best-so-far AUC, and Top-1% Success@15.',
    detailLabel: 'Results',
    role: 'Co-first author',
    href: 'https://arxiv.org/abs/2606.14581',
    linkLabel: 'Preprint',
  },
];

const additionalProjects: Project[] = [
  {
    title: 'BCCD',
    subtitle: 'Mitochondrial segmentation from neighboring sections',
    status: 'Under review at ICASSP 2027',
    tone: 'review',
    copy: 'I trained a teacher to predict the center section’s mask from neighboring electron microscopy sections. Its high-confidence predictions guide a student that sees only the center section. The student still uses one image and one pass at inference.',
    detail: 'Across four transfer tasks, BCCD exceeded the best compared published F1 for each task by 0.50–1.20 percentage points, including comparisons with R4MITO and MaskTwins. It gained 1.00–1.80 points over a matched center-view Mean Teacher.',
    detailLabel: 'Results',
    role: 'Research assistant · Mar 2025–Sep 2026',
  },
];

const publications = [
  {
    group: 'Published and accepted',
    title: 'Selection, Drift, and Immigration in Recursive Language-Model Self-Training',
    authors: 'Guanyu Liu',
    venue: 'Findings of EACL 2027 (accepted)',
    label: 'Conference',
    href: '/papers/selection-drift.pdf',
  },
  {
    group: 'Published and accepted',
    title: 'When Difficulty Signals Are Unreliable: Auditing and Gating Sample-Count Adaptive Test-Time Compute',
    authors: 'Guanyu Liu',
    venue: 'PRICAI 2026 (oral presentation)',
    label: 'Conference',
    href: '/papers/metagate.pdf',
  },
  {
    group: 'Published and accepted',
    title: 'MAPGD: Multi-Agent Prompt Gradient Descent for Collaborative Prompt Optimization',
    authors: 'Yichen Han, Yuhang Han, Siteng Huang, Guanyu Liu, Yujia Zhang, Jianwei Shi, Isaac N Shi, Lewei He, Tianyu Shi',
    venue: 'Transactions on Machine Learning Research (TMLR) · 2026',
    label: 'Journal',
    href: 'https://openreview.net/forum?id=3kmaMv2r2Z',
  },
  {
    group: 'Published and accepted',
    title: 'Lean2Isabelle: Factorized Cross-Assistant Proof Translation',
    authors: 'Guanyu Liu*, Jingkun Ma*, Derek F. Wong',
    venue: 'The 3rd AI for Math Workshop at ICML 2026',
    label: 'Workshop',
    href: '/papers/lean2isabelle.pdf',
  },
  {
    group: 'Manuscripts under review',
    title: 'Ignored or Recovered? Dual-Replay Provenance for Chest X-Ray Agents',
    authors: 'Guanyu Liu, Zhengshan Wang, Long Chen',
  },
  {
    group: 'Manuscripts under review',
    title: 'CARE: Context-Aware Ranking Evolution with Executable Scoring Programs for Budgeted Reaction Optimization',
    authors: 'Guanyu Liu*, Weiyi Kong*, Chao Tang*, Zeyu Wang, Boer Zhang, Baiqing Li, Peiyu Zhang, Tianyu Shi',
    href: 'https://arxiv.org/abs/2606.14581',
  },
  {
    group: 'Manuscripts under review',
    title: 'Learning Center-Section Segmentation from Neighbors: Blind-Center Context Distillation for Unsupervised Domain Adaptation',
    authors: 'Guanyu Liu, Zhengshan Wang, Long Chen',
  },
];

function ProjectCard({ project, compact = false }: { project: Project; compact?: boolean }) {
  return (
    <article className={`project-card${compact ? ' project-card-compact' : ''}`}>
      <div className="project-topline"><span className={`status status-${project.tone}`}>{project.status}</span><span>{project.role}</span></div>
      <h4>{project.title}</h4>
      <p className="project-subtitle">{project.subtitle}</p>
      <p>{project.copy}</p>
      <div className={`project-result${project.detailLabel === 'Current focus' ? ' project-focus' : ''}`}>
        <strong>{project.detailLabel}</strong>
        <span>{project.detail}</span>
      </div>
      {project.href && <a className="project-link" href={project.href} target="_blank" rel="noreferrer" aria-label={`${project.linkLabel} for ${project.title}`}>{project.linkLabel}</a>}
    </article>
  );
}

export default function Home() {
  const publicationGroups = ['Published and accepted', 'Manuscripts under review'];

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
            <a className="nav-email" href="mailto:tonyliugy011@gmail.com"><Mail size={14} /> Email</a>
            <a className="nav-cv" href="/Guanyu_Liu_CV.pdf" target="_blank" rel="noreferrer">CV</a>
          </div>
        </div>
      </header>

      <div className="page-shell">
        <aside className="profile-rail" aria-label="Profile">
          <div className="portrait-mark">
            <img src="/guanyu-liu.jpg" alt="Guanyu Liu" />
          </div>
          <h2>Guanyu Liu</h2>
          <p className="profile-role">Undergraduate researcher</p>
          <p className="profile-interest">Language model reasoning and reliable agents</p>
          <ul className="profile-facts">
            <li><MapPin size={16} /> Macau</li>
            <li><GraduationCap size={16} /> <a href="https://www.um.edu.mo/" target="_blank">University of Macau</a></li>
            <li><BriefcaseBusiness size={16} /> <a href="http://nlp2ct.cis.um.edu.mo/" target="_blank">NLP2CT Lab</a></li>
            <li className="profile-award"><Award size={16} /> Lou Tou Vo Mathematics Scholarship</li>
          </ul>
          <div className="profile-links">
            <a href="mailto:tonyliugy011@gmail.com"><Mail size={16} /> Email</a>
            <a href="/Guanyu_Liu_CV.pdf" target="_blank"><FileText size={16} /> Curriculum Vitae</a>
          </div>
        </aside>

        <div className="content-column">
          <section className="intro-section" id="about">
            <h1>How can AI learn from feedback it can’t always trust?</h1>
            <div className="welcome-card">
              <p>
                I’m a final-year undergraduate in <strong>Statistics and Data Science</strong> at the <a href="https://www.um.edu.mo/" target="_blank"><strong>University of Macau</strong></a>. At the <a href="http://nlp2ct.cis.um.edu.mo/" target="_blank"><strong>NLP2CT Lab</strong></a>, I work with <a href="https://www.fst.um.edu.mo/personal/derek-wong/" target="_blank"><strong>Prof. Derek F. Wong</strong></a> on how language models recover from errors in long reasoning traces. I also work with <a href="https://fic.um.edu.mo/zh-hant/people/mengqu/" target="_blank"><strong>Dr. Meng Qu</strong></a> on self-evolving agents for quantitative research.
              </p>
              <p>
                With <strong>Prof. Long Chen</strong>, I’ve studied how multimodal agents recover from faulty tool evidence. As a visiting student at MAPLE Lab, Westlake University, I worked with <a href="https://en.westlake.edu.cn/faculty/guojun-qi.html" target="_blank"><strong>Prof. Guojun Qi</strong></a> on selecting prompts for new domains without target labels.
              </p>
            </div>
            <div className="credibility-strip" aria-label="Selected research highlights">
              <span><strong>Findings of EACL 2027</strong><br />Sole author (accepted)</span>
              <span><strong>PRICAI 2026</strong><br />Sole author, oral presentation</span>
              <span><strong>ICML 2026 AI for Math</strong><br />Co-first author</span>
            </div>
          </section>

          <section className="content-section" id="research">
            <div className="section-title-row">
              <h2>Research interests</h2>
            </div>
            <div className="question-list">
              {researchQuestions.map((question) => (
                <article key={question.title}>
                  <h3>{question.title}</h3>
                  <p>{question.copy}</p>
                  <small>{question.projects}</small>
                </article>
              ))}
            </div>
          </section>

          <section className="content-section" id="projects">
            <div className="section-title-row">
              <h2>Projects</h2>
            </div>
            <h3 className="project-group-title">Selected work</h3>
            <div className="project-list">
              {selectedProjects.map((project) => <ProjectCard project={project} key={project.title} />)}
            </div>
            <h3 className="project-group-title">Ongoing research</h3>
            <div className="project-list">
              {currentProjects.map((project) => <ProjectCard project={project} key={project.title} />)}
            </div>
            <h3 className="project-group-title">Additional research</h3>
            <div className="project-list">
              {additionalProjects.map((project) => <ProjectCard project={project} compact key={project.title} />)}
            </div>
          </section>

          <section className="content-section" id="publications">
            <div className="section-title-row">
              <h2>Publications</h2>
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
                        {publication.label && <span className="publication-label">{publication.label}</span>}
                        <h4>{publication.title}</h4>
                        <p>{publication.authors}</p>
                        {publication.venue && <strong>{publication.venue}</strong>}
                        {publication.href && <a className="publication-link" href={publication.href} target="_blank" rel="noreferrer" aria-label={`Read ${publication.title}`}>Read</a>}
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            ))}
          </section>

          <section className="contact-card">
            <h2>Get in touch</h2>
            <a href="mailto:tonyliugy011@gmail.com">Email me</a>
          </section>

          <footer>
            <span>© 2026 Guanyu Liu</span>
            <span>Last updated November 2026</span>
          </footer>
        </div>
      </div>
    </main>
  );
}
