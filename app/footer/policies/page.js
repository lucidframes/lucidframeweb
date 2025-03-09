import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="p-6 max-w-4xl mx-auto mt-30 mb-30 text-gray-400">
      <h1 className="text-3xl font-bold mb-4">Privacy Policy</h1>

      <p className="mb-4">
        At LucidFrameWeb, we highly value your privacy and are dedicated to
        protecting any personal information you share with us. This Privacy
        Policy outlines our approach to collecting, using, and safeguarding your
        data.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">
        1. Information We Collect
      </h2>
      <p className="mb-4">
        We collect personal, business-related, and technical information,
        including but not limited to:
      </p>
      <ul className="list-disc ml-6 mb-4">
        <li>
          Personal contact details (name, email, phone number, company name)
        </li>
        <li>Billing and payment details</li>
        <li>Project specifications and preferences</li>
        <li>Website analytics and user behavior data</li>
        <li>Marketing and communication preferences</li>
      </ul>

      <h2 className="text-xl font-semibold mt-6 mb-2">
        2. How We Use Your Information
      </h2>
      <p className="mb-4">
        We use your information for the following purposes:
      </p>
      <ul className="list-disc ml-6 mb-4">
        <li>
          Delivering and improving our advertising, branding, and marketing
          services
        </li>
        <li>Processing transactions, invoices, and client agreements</li>
        <li>Providing customer support and responding to inquiries</li>
        <li>Enhancing website functionality and performance tracking</li>
        <li>
          Sending relevant marketing and promotional content (with consent)
        </li>
      </ul>

      <h2 className="text-xl font-semibold mt-6 mb-2">
        3. Data Protection & Security
      </h2>
      <p className="mb-4">
        We implement industry-standard security measures to safeguard your
        information from unauthorized access, loss, misuse, or alteration.
        However, while we take every precaution to protect your data, no method
        of transmission over the internet is 100% secure.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">
        4. Third-Party Sharing
      </h2>
      <p className="mb-4">
        We do not sell, rent, or trade personal information. However, we may
        share your data with trusted third parties, including:
      </p>
      <ul className="list-disc ml-6 mb-4">
        <li>Payment processors to complete transactions</li>
        <li>
          Analytics providers to understand website traffic and engagement
        </li>
        <li>Cloud storage and data security partners</li>
        <li>Marketing platforms for personalized communications</li>
      </ul>

      <h2 className="text-xl font-semibold mt-6 mb-2">
        5. Cookies & Tracking Technologies
      </h2>
      <p className="mb-4">
        We use cookies and similar tracking technologies to optimize user
        experience and collect site performance insights. You can manage cookie
        preferences through your browser settings.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">
        6. Your Rights & Choices
      </h2>
      <p className="mb-4">You have the right to:</p>
      <ul className="list-disc ml-6 mb-4">
        <li>
          Access, update, or request deletion of your personal information
        </li>
        <li>Opt out of marketing communications at any time</li>
        <li>Request details about how your data is being used</li>
      </ul>
      <p className="mb-4">
        For any requests, please contact us at{" "}
        <a href="mailto:privacy@lucidframeweb.com" className="text-blue-500">
          privacy@lucidframeweb.com
        </a>
        .
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">
        7. Retention & Deletion of Data
      </h2>
      <p className="mb-4">
        We retain collected information as long as necessary to fulfill
        contractual obligations, comply with legal requirements, and enhance our
        services. When data is no longer needed, we securely delete or anonymize
        it.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">8. Policy Updates</h2>
      <p className="mb-4">
        We may update this Privacy Policy periodically. Any significant changes
        will be communicated via our website, and continued use of our services
        implies acceptance of the revised terms.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">9. Contact Us</h2>
      <p className="mb-4">
        For any questions regarding your privacy, data protection, or our
        policies, please reach out to us at{" "}
        <a href="mailto:privacy@lucidframeweb.com" className="text-blue-500">
          privacy@lucidframeweb.com
        </a>
        .
      </p>
    </div>
  );
};

export default PrivacyPolicy;
