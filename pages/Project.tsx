import React from 'react';
import { SectionHeading } from '../components/SectionHeading';

export const Project: React.FC = () => {
  return (
    <div className="bg-white pb-24">
      <div className="bg-navy-900 py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">The Project</h1>
          <p className="text-xl text-cream-200 font-light max-w-2xl mx-auto">
            Building trust and fairness in AI-enabled public services.
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10">
        <div className="bg-white p-8 md:p-12 shadow-sm rounded-sm">
          <div className="text-left">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4 text-navy-900">
              Research Scope
            </h2>
            <p className="text-lg font-sans leading-relaxed max-w-3xl text-gray-600">
              A two years ICSSR longitudinal study examining trust, fairness, and accountability in AI-enabled e-governance systems across diverse Indian regions.
            </p>
            <div className="h-1 w-20 bg-bronze-500 mt-4"></div>
          </div>

          <div className="prose prose-lg text-gray-700 font-sans mb-16 text-justify mt-4">
            <p className="leading-relaxed">
              This research investigates the ethical dimensions of Artificial Intelligence deployment in public service delivery across Tamil Nadu and Haryana-Chandigarh. Through a mixed-methods approach combining technical AI system audits, annual citizen surveys tracking 2,200+ respondents, focus group discussions, and stakeholder interviews, the study evaluates how AI systems used in welfare distribution, healthcare triaging, and predictive policing impact public trust, algorithmic fairness, and institutional accountability. By bridging computer science methodologies with social science research, the project will develop the Ethical AI Maturity Index (EAMI), ethics dashboards, audit templates, and the Responsible AI for Governance Framework (RAIGF) to ensure AI in Indian governance is transparent, inclusive, and citizen-centric—aligned with the Viksit Bharat@2047 vision.
            </p>
          </div>

          <h2 className="text-3xl md:text-4xl font-serif font-bold text-navy-900 mb-8">Key Focus Areas</h2>

          <div className="space-y-8">
            <div className="flex flex-col md:flex-row md:gap-8">
              <div className="md:w-64 flex-shrink-0">
                <h3 className="font-bold text-navy-900 text-lg">Trust and Citizen Perception:</h3>
              </div>
              <p className="text-gray-700 font-sans leading-relaxed">
                Measuring how transparency, explainability, human oversight, and grievance redressal mechanisms influence public trust in AI-driven government services across different demographic groups, literacy levels, and regional contexts.
              </p>
            </div>

            <div className="flex flex-col md:flex-row md:gap-8">
              <div className="md:w-64 flex-shrink-0">
                <h3 className="font-bold text-navy-900 text-lg">Algorithmic Fairness and Bias:</h3>
              </div>
              <p className="text-gray-700 font-sans leading-relaxed">
                Conducting technical audits using SHAP, LIME, and Fairlearn to identify disparities in AI decision-making across caste, gender, language, literacy, and urban-rural divides—with special focus on marginalized communities.
              </p>
            </div>

            <div className="flex flex-col md:flex-row md:gap-8">
              <div className="md:w-64 flex-shrink-0">
                <h3 className="font-bold text-navy-900 text-lg">Institutional Accountability:</h3>
              </div>
              <p className="text-gray-700 font-sans leading-relaxed">
                Evaluating whether government agencies have established meaningful oversight protocols, audit mechanisms, grievance redressal systems, and adaptive learning processes to ensure ethical AI deployment.
              </p>
            </div>
          </div>


          <h2 className="text-3xl md:text-4xl font-serif font-bold text-navy-900 mb-8 mt-16">Ethical AI in E-Governance Framework</h2>

          <div className="flex justify-center">
            <img src="/assets/vendig.svg" alt="Ethical AI in E-Governance Framework" className="w-full max-w-xl h-auto" />
          </div>
        </div>
      </div>
    </div>
  );
};