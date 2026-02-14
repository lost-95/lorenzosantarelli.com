import React from "react";
import Section from "../components/UI/Section";

const Resume: React.FC = () => {
  return (
    <div className="pt-24 fade-in">
      <Section
        title="Curriculum Vitae"
        subtitle="Data Analyst (early-career) — SQL, Python, Reporting"
      >
        {/* Top Header with Download Button */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-16 p-8 bg-white rounded-3xl border border-slate-100 shadow-sm">
          <div>
            <h3 className="text-2xl font-bold text-slate-900 mb-2">
              Lorenzo Santarelli
            </h3>
            <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-slate-500 font-medium">
              <span className="flex items-center gap-2">
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                lorenzosantarelli95@gmail.com
              </span>

              <span className="flex items-center gap-2">
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                +39 335 672 0071
              </span>

              <span className="flex items-center gap-2 text-primary font-bold">
                Italy · Open to Junior roles (EU/Remote)
              </span>
            </div>
          </div>

          <a
            href="/cv-lorenzo-santarelli.pdf"
            download="Lorenzo_Santarelli_CV.pdf"
            className="inline-flex items-center justify-center gap-3 bg-primary hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-2xl transition-all shadow-lg shadow-primary/20 whitespace-nowrap"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 16v1a2 2 0 002 2h12a2 2 0 002-2v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
              />
            </svg>
            Download CV (PDF)
          </a>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            {/* Profile Section */}
            <div>
              <h3 className="text-2xl font-bold mb-6 border-b-2 border-primary w-fit pb-2">
                Profile
              </h3>
              <p className="text-slate-600 leading-relaxed font-medium">
                Early-career Data Analyst with a software background and hands-on
                practice in SQL and Python (data cleaning, EDA, and basic KPI
                reporting). I’m comfortable working with relational databases and
                translating findings into clear, business-friendly summaries.
                Currently seeking a Junior Data Analyst role to grow in analytics
                and reporting.
              </p>
            </div>

            {/* Experience */}
            <div>
              <h3 className="text-2xl font-bold mb-6 border-b-2 border-primary w-fit pb-2">
                Experience
              </h3>

              <div className="space-y-10 border-l-2 border-gray-100 ml-3">
                {/* SYS-DAT */}
                <div className="relative pl-8">
                  <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-primary border-4 border-white" />
                  <div className="mb-3">
                    {/* NOTE: Update dates to your real 3-month period */}
                    <span className="text-xs font-black text-primary uppercase tracking-widest">
                      (3 months)
                    </span>
                    <h4 className="text-xl font-bold text-gray-900">
                      Software / Systems Analyst Intern
                    </h4>
                    <p className="text-gray-500 font-bold">
                      SYS-DAT Group{" "}
                      <span className="text-gray-400 font-semibold">
                        · Enterprise ERP environment
                      </span>
                    </p>
                  </div>
                  <ul className="list-disc list-outside ml-4 text-gray-600 space-y-2 text-sm leading-relaxed">
                    <li>
                      Supported issue investigation and bug fixing across ERP
                      modules with dev/support teams.
                    </li>
                    <li>
                      Wrote and refined SQL queries to extract data for reporting
                      and troubleshooting.
                    </li>
                    <li>
                      Worked with large relational databases and followed internal
                      processes (tickets, testing, documentation).
                    </li>
                    <li>
                      Helped improve data validation checks and reduce recurring
                      issues through clearer handoffs.
                    </li>
                  </ul>
                </div>

                {/* Projects */}
                <div className="relative pl-8">
                  <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-primary/50 border-4 border-white" />
                  <div className="mb-3">
                    <span className="text-xs font-black text-primary uppercase tracking-widest">
                      Jul 2024 – Present
                    </span>
                    <h4 className="text-xl font-bold text-gray-900">
                      Data Analytics Projects (Freelance / Personal)
                    </h4>
                    <p className="text-gray-500 font-bold">Personal portfolio</p>
                  </div>
                  <ul className="list-disc list-outside ml-4 text-gray-600 space-y-2 text-sm leading-relaxed">
                    <li>
                      Built small end-to-end analyses using SQL and Python:
                      cleaning, EDA, and clear visuals.
                    </li>
                    <li>
                      Created concise takeaways (what’s happening, why it matters,
                      next steps) for non-technical audiences.
                    </li>
                    <li>
                      Practiced reproducible workflows (notebooks, version control,
                      documentation).
                    </li>
                  </ul>
                </div>

                {/* Startup */}
                <div className="relative pl-8">
                  <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-gray-300 border-4 border-white" />
                  <div className="mb-3">
                    <span className="text-xs font-black text-gray-400 uppercase tracking-widest">
                      Mar 2023 – Jul 2024
                    </span>
                    <h4 className="text-xl font-bold text-gray-900">
                      Project Coordinator — Startup
                    </h4>
                    <p className="text-gray-500 font-bold">WebWiseItalia</p>
                  </div>
                  <ul className="list-disc list-outside ml-4 text-gray-600 space-y-2 text-sm leading-relaxed">
                    <li>
                      Coordinated delivery activities and clarified requirements
                      with stakeholders.
                    </li>
                    <li>
                      Supported simple KPI tracking and reporting using
                      internal/public data sources.
                    </li>
                    <li>
                      Improved alignment by documenting priorities, acceptance
                      criteria, and delivery updates.
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Projects */}
            <div>
              <h3 className="text-2xl font-bold mb-6 border-b-2 border-primary w-fit pb-2">
                Key Projects
              </h3>

              <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                <h4 className="text-lg font-bold text-slate-900 mb-2">
                  Customer Churn Analysis & Prediction (Banking)
                </h4>

                <ul className="list-disc list-outside ml-6 text-sm text-slate-600 space-y-2 mb-4">
                  <li>
                    Cleaned and explored the dataset (EDA), engineered a few
                    meaningful features, and built a baseline churn model.
                  </li>
                  <li>
                    Focused on interpretability: connected model signals to churn
                    drivers, segments, and retention actions.
                  </li>
                </ul>

                <a
                  href="https://github.com/lost-95/customer-churn-banking"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-bold text-primary hover:underline"
                >
                  View on GitHub →
                </a>
              </div>
            </div>

            {/* Education */}
            <div>
              <h3 className="text-2xl font-bold mb-6 border-b-2 border-primary w-fit pb-2">
                Education
              </h3>

              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-bold text-slate-900">
                    University of Camerino (UNICAM)
                  </h4>
                  <p className="text-slate-500 font-medium">
                    BSc Computer Science (in progress)
                  </p>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-slate-900">
                    Erasmus — Universidad de Sevilla
                  </h4>
                  <p className="text-slate-500 font-medium">
                    Computer Engineering | Sep 2022 – Feb 2023
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-12">
            <div className="bg-tech-dark p-8 rounded-3xl text-white shadow-xl">
              <h3 className="text-xl font-bold mb-8 border-b border-white/20 pb-4">
                Technical Skills
              </h3>

              <div className="space-y-8">
                <div>
                  <h4 className="text-[10px] font-black uppercase tracking-widest text-primary mb-4">
                    Data Analysis
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {["SQL", "Python", "pandas", "NumPy"].map((s) => (
                      <span
                        key={s}
                        className="bg-white/10 px-3 py-1 rounded-lg text-xs font-medium"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-[10px] font-black uppercase tracking-widest text-primary mb-4">
                    Visualization & Reporting
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {["Power BI", "Matplotlib", "Seaborn", "KPI Reporting"].map(
                      (s) => (
                        <span
                          key={s}
                          className="bg-white/10 px-3 py-1 rounded-lg text-xs font-medium"
                        >
                          {s}
                        </span>
                      )
                    )}
                  </div>
                </div>

                <div>
                  <h4 className="text-[10px] font-black uppercase tracking-widest text-primary mb-4">
                    ML Foundations
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "scikit-learn",
                      "EDA",
                      "Data Cleaning",
                      "Data Quality",
                      "Feature Engineering (basics)",
                    ].map((s) => (
                      <span
                        key={s}
                        className="bg-white/10 px-3 py-1 rounded-lg text-xs font-medium"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-[10px] font-black uppercase tracking-widest text-primary mb-4">
                    Tools
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {["Git", "GitHub", "Jupyter", "VS Code", "MySQL Workbench"].map(
                      (s) => (
                        <span
                          key={s}
                          className="bg-white/10 px-3 py-1 rounded-lg text-xs font-medium"
                        >
                          {s}
                        </span>
                      )
                    )}
                  </div>
                </div>
              </div>

              <h3 className="text-xl font-bold mt-16 mb-8 border-b border-white/20 pb-4">
                Certifications
              </h3>

              <div className="space-y-6">
                <div className="group">
                  <h4 className="font-bold text-sm group-hover:text-primary transition-colors">
                    SQL for Data Analysis
                  </h4>
                  <p className="text-xs text-white/50">Maven Analytics</p>
                </div>

                <div className="group">
                  <h4 className="font-bold text-sm group-hover:text-primary transition-colors">
                    Machine Learning A–Z
                  </h4>
                  <p className="text-xs text-white/50">SuperDataScience</p>
                </div>

                <div className="group">
                  <h4 className="font-bold text-sm group-hover:text-primary transition-colors">
                    Google AI Essentials
                  </h4>
                  <p className="text-xs text-white/50">Google</p>
                </div>

                <div className="group">
                  <h4 className="font-bold text-sm group-hover:text-primary transition-colors">
                    English B2
                  </h4>
                  <p className="text-xs text-white/50">Cambridge</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default Resume;