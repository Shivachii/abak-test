import { QardhForm } from "@/components/Forms/QardhForm";
import { Metadata } from "next";
// import { QardhForm } from "@/components/forms/QardhForm"; // you can build this based on the form JSX we've built above

export const metadata: Metadata = {
  title: "ABAK – Qardh Hassanah Fund",
  description:
    "Ethical, interest-free financial assistance by AhlulBayt Assembly of Kenya",
};

export default function QardhHassanahPage() {
  return (
    <main className="px-4 sm:px-6 lg:px-8 py-10 bg-slate-50 text-gray-800">
      <div className="max-w-5xl mx-auto space-y-16">
        {/* Header Section */}
        <section className="text-center space-y-4">
          <h1 className="text-3xl md:text-5xl font-bold text-primary">
            Qardh Hassanah Fund
          </h1>
          <p className="text-lg md:text-xl text-gray-600">
            Empowering lives through Shariah-compliant, interest-free financial
            assistance.
          </p>
        </section>

        {/* Overview */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-secondary">
            Executive Summary
          </h2>
          <p>
            ABAK’s Qardh Hassanah Fund provides ethical financial assistance to
            individuals and businesses facing hardship. It is designed to
            promote economic empowerment, dignity, and social inclusion through
            interest-free loans.
          </p>
        </section>

        {/* Objectives & Benefits */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-xl font-semibold text-secondary mb-2">
              Objectives
            </h3>
            <ul className="list-disc list-inside space-y-1">
              <li>Provide interest-free loans to those in need</li>
              <li>Support students, small businesses & low-income families</li>
              <li>Promote social solidarity & ethical financing</li>
              <li>Establish a sustainable revolving fund</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-secondary mb-2">
              Key Benefits
            </h3>
            <ul className="list-disc list-inside space-y-1">
              <li>Compassionate support for vulnerable individuals</li>
              <li>Access to ethical financial solutions</li>
              <li>Reduces cycles of debt</li>
              <li>Fosters responsible borrowing</li>
            </ul>
          </div>
        </section>

        {/* Governance & Eligibility */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-lg font-medium text-secondary">
              Governance & Management
            </h3>
            <p>
              Managed by ABAK’s QHFC Committee, ensuring transparency and
              accountability through screening, approvals, disbursement, and
              monitoring.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-medium text-secondary">
              Eligibility & Terms
            </h3>
            <p>
              Applicants must demonstrate financial need. Loans are
              interest-free with flexible repayment plans based on necessity and
              supported by references.
            </p>
          </div>
        </section>

        {/* Loan Process Overview */}
        <section className="space-y-4">
          <h3 className="text-xl font-semibold text-secondary">
            Loan Application Process
          </h3>
          <ol className="list-decimal list-inside space-y-2 text-gray-700">
            <li>Application Submission & Processing</li>
            <li>Verification & Assessment</li>
            <li>Recommendation & Committee Review</li>
            <li>Approval & Disbursement</li>
            <li>Follow-up, Recovery & Support</li>
          </ol>
        </section>

        {/* Challenges and Future Prospects */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-lg font-semibold text-secondary">
              Challenges & Solutions
            </h3>
            <ul className="list-disc list-inside space-y-1">
              <li>Risk managed through strict assessment & guarantors</li>
              <li>Awareness & financial literacy training</li>
              <li>Strategic collaboration with institutions</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-secondary">
              Future Prospects
            </h3>
            <ul className="list-disc list-inside space-y-1">
              <li>Digital transformation & online application</li>
              <li>Expanding awareness & education programs</li>
              <li>Strengthening partnerships & accountability</li>
            </ul>
          </div>
        </section>

        {/* Application Form */}
        <section id="application-form">
          <h2 className="text-2xl font-semibold text-primary mb-4">
            Apply Now
          </h2>
          <QardhForm />
        </section>
      </div>
    </main>
  );
}
