
import { Project, BlogPost, Skill } from './types';

export const SKILLS: Skill[] = [
  {
    category: "Data Analysis",
    items: ["Python", "Pandas", "NumPy", "SQL", "Data Cleaning", "Data Quality"]
  },
  {
    category: "Visualization",
    items: ["Matplotlib", "Seaborn", "Power BI", "KPI Reporting", "Plotly"]
  },
  {
    category: "Machine Learning",
    items: ["Scikit-learn", "Classification", "Regression", "Feature Engineering", "ColumnTransformer"]
  },
  {
    category: "Tools & Concepts",
    items: ["Git/GitHub", "Jupyter", "VS Code", "MySQL Workbench", "EDA", "Business Impact"]
  }
];

export const PROJECTS: Project[] = [
  {
    id: "f1-predictor",
    title: "F1 Race Predictor & Fantasy F1",
    category: "Machine Learning / Web App",
    businessProblem: "Predicting the finishing order of the next Formula 1 Grand Prix and pricing drivers and teams for a fantasy league, using 25 years of results, race-day weather and race pace.",
    dataset: "Jolpica F1 API (Ergast successor, same schema as the Kaggle F1 dataset) 2001–today, Open-Meteo ERA5 race-day weather, lap-by-lap timing since 2018.",
    tools: ["Python", "LightGBM", "Pandas", "FastAPI", "GitHub Actions", "JavaScript"],
    methodology: "LightGBM LambdaRank models (before and after qualifying, plus qualifying order) validated walk-forward season by season; Plackett-Luce simulation for calibrated win/podium probabilities; Elo ratings, team lineage and weather features.",
    insights: [
      "Out of sample (2016–today) the post-qualifying model picks the winner in 57% of races, ahead of the 'pole sitter wins' baseline.",
      "Recalibrating the simulation on fantasy points instead of the race winner removed a systematic bias against midfield drivers."
    ],
    impact: "Live web app updated automatically every race weekend by a scheduled data and retraining pipeline, in Italian, English and Spanish.",
    image: "/f1-predictor-cover.svg",
    liveUrl: "/f1-predictor/"
  },
  {
    id: "customer-churn-banking",
    title: "Customer Churn Prediction (Banking)",
    category: "Machine Learning / Business Analytics",
    businessProblem: "Identifying high-risk customers in the banking sector to prevent attrition and quantify financial loss.",
    dataset: "Banking sector customer dataset with demographic and transactional features.",
    tools: ["Python", "Scikit-learn", "Pandas", "ColumnTransformer", "Seaborn"],
    methodology: "End-to-end pipeline: EDA, data cleaning, one-hot encoding with ColumnTransformer, and model evaluation focusing on Recall to capture the maximum number of churners.",
    insights: [
      "Identified that age and number of products were the top 2 predictors of churn.",
      "Customers with zero balance showed a 15% higher churn rate than active savers."
    ],
    impact: "Model provides actionable segments for marketing teams to apply retention strategies, potentially reducing churn by 12% through targeted intervention.",
    image: "https://images.unsplash.com/photo-1501167786227-4cba60f6d58f?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "erp-sql-optimization",
    title: "ERP SQL Optimization & Reporting",
    category: "Data Analysis / SQL",
    businessProblem: "Slow reporting and data validation issues across large relational databases in an enterprise ERP environment.",
    dataset: "Proprietary ERP relational database modules (SYS-DAT Group).",
    tools: ["SQL", "MySQL Workbench", "Data Validation", "Root Cause Analysis"],
    methodology: "Wrote and optimized complex SQL queries for evidence gathering. Performed data validation checks to reduce regressions during system updates.",
    insights: [
      "Optimized query execution time by 40% for monthly financial reports.",
      "Identified 3 major data inconsistencies in production modules during bug investigations."
    ],
    impact: "Improved handoffs between dev and support teams; ensured high data integrity for enterprise clients.",
    image: "https://images.unsplash.com/photo-1551288049-bbbda5466975?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "market-trends-eda",
    title: "Freelance Data Storytelling",
    category: "Data Visualization / EDA",
    businessProblem: "Non-technical stakeholders needed to understand market trends and KPI performance without digging into raw spreadsheets.",
    dataset: "Custom client datasets (LS Digital).",
    tools: ["Python", "Pandas", "Matplotlib", "KPI Storytelling"],
    methodology: "Built reproducible workflows for data preparation and created clear visualizations focused on business takeaways.",
    insights: [
      "Visualized customer segment growth which led to a pivot in regional marketing spend.",
      "Automated the monthly cleaning process, saving the client 4 hours of manual work per cycle."
    ],
    impact: "Translated technical outputs into 'drivers' and 'next actions' for non-technical leadership.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop"
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: "churn-analysis-deep-dive",
    title: "Why Recall Matters More Than Accuracy in Churn Prediction",
    date: "Oct 2024",
    preview: "A deep dive into my Banking Churn project and why the business cost of a False Negative outweighs a False Positive.",
    content: "In churn prediction, missing a customer who is about to leave is much more expensive than accidentally targeting a loyal customer with a promotion. This post explains how I used Scikit-learn to optimize for the right business metrics.\n\n## Key Concepts\n- The cost of customer acquisition vs. retention.\n- Confusion Matrix interpretation for business owners.\n- Feature importance in a random forest model.",
    tags: ["Machine Learning", "Business Impact"],
    readTime: "6 min"
  },
  {
    id: "eda-workflow",
    title: "My 5-Step Checklist for Data Cleaning",
    date: "Aug 2024",
    preview: "How my experience with ERP systems taught me the importance of data quality and validation.",
    content: "Working with production ERP data taught me that real-world data is messy. Here is my systematic approach to ensuring data integrity before any analysis begins.\n\n## The Workflow\n1. Schema Validation\n2. Null Value Strategy\n3. Outlier Contextualization\n4. Type Casting & Normalization\n5. Cross-reference checks.",
    tags: ["Data Analysis", "Python"],
    readTime: "5 min"
  },
  {
    id: "sql-window-functions",
    title: "SQL Window Functions for KPI Reporting",
    date: "July 2024",
    preview: "How I use SQL to calculate rolling averages and Year-over-Year growth directly in the database.",
    content: "While Python is great, doing heavy lifting in SQL is often more efficient. I'll show you how I use OVER and PARTITION BY to build reports that stakeholders actually use.\n\n```sql\nSELECT \n  month,\n  revenue,\n  LAG(revenue) OVER (ORDER BY month) as prev_month_rev\nFROM sales_data;\n```",
    tags: ["SQL", "Reporting"],
    readTime: "4 min"
  }
];
