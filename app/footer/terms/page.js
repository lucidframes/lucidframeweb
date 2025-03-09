import React from "react";

const TermsOfService = () => {
  return (
    <div className="mt-30 md:mt-40 mb-30 p-6 max-w-4xl mx-auto text-gray-400">
      <h1 className="text-3xl font-bold mb-4">Terms of Service</h1>

      <p className="mb-4">
        Welcome to LucidFrameWeb. By accessing and using our services, you agree
        to abide by the terms outlined in this document. Please read them
        carefully before proceeding.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">1. Scope of Services</h2>
      <p className="mb-4">
        LucidFrameWeb provides comprehensive advertising and branding solutions,
        including but not limited to TV commercials (TVCs), motion graphics,
        social media content, corporate branding, digital marketing strategies,
        campaign management, and graphic design services. Our services are
        tailored to each client’s brand identity and business objectives.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">2. Client Obligations</h2>
      <p className="mb-4">
        Clients must provide clear project requirements, brand guidelines, and
        any necessary materials within the agreed timelines. Failure to do so
        may result in project delays or additional costs. Clients are
        responsible for obtaining legal rights to any third-party assets
        submitted for use in their projects.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">
        3. Project Timelines & Revisions
      </h2>
      <p className="mb-4">
        Project timelines will be agreed upon before commencement. Clients are
        entitled to a set number of revisions per project phase. Additional
        revisions outside of the agreed scope may incur additional charges.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">4. Payments & Refunds</h2>
      <p className="mb-4">
        All projects require an upfront deposit before work begins. The
        remaining balance must be paid upon project completion or according to a
        pre-arranged payment schedule. Payments are non-refundable once project
        work has commenced unless otherwise agreed in writing.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">
        5. Intellectual Property & Usage Rights
      </h2>
      <p className="mb-4">
        All creative assets, including but not limited to videos, designs, and
        branding materials, remain the intellectual property of LucidFrameWeb
        unless otherwise specified in a separate agreement. Clients receive the
        right to use the final deliverables for their intended purpose, but
        redistribution, modification, or resale without explicit permission is
        strictly prohibited.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">
        6. Confidentiality & Data Protection
      </h2>
      <p className="mb-4">
        LucidFrameWeb respects client confidentiality and will not disclose
        sensitive information to third parties without prior written consent,
        except where required by law. Clients also agree to maintain the
        confidentiality of any proprietary strategies or methodologies shared
        during collaboration.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">
        7. Advertising Performance Disclaimer
      </h2>
      <p className="mb-4">
        While we strive to provide high-quality advertising content and
        marketing strategies, LucidFrameWeb does not guarantee specific audience
        reach, engagement, or sales results. The effectiveness of advertising
        campaigns is influenced by multiple factors beyond our control.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">
        8. Liability Limitations
      </h2>
      <p className="mb-4">
        LucidFrameWeb is not liable for indirect, incidental, or consequential
        damages arising from the use of our services. Clients acknowledge that
        all projects are executed based on provided requirements and that any
        losses due to advertising strategies remain the responsibility of the
        client.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">
        9. Termination of Services
      </h2>
      <p className="mb-4">
        Either party may terminate a project under the following conditions:
      </p>
      <ul className="list-disc ml-6 mb-4">
        <li>Failure to make required payments</li>
        <li>Violation of intellectual property agreements</li>
        <li>Misuse of delivered creative assets</li>
        <li>Unforeseen circumstances preventing service continuation</li>
      </ul>

      <h2 className="text-xl font-semibold mt-6 mb-2">
        10. Modifications to Terms
      </h2>
      <p className="mb-4">
        LucidFrameWeb reserves the right to update these terms at any time. Any
        changes will be communicated to existing clients, and continued use of
        our services constitutes acceptance of the revised terms.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">11. Governing Law</h2>
      <p className="mb-4">
        These terms shall be governed and interpreted under the laws of the
        jurisdiction in which LucidFrameWeb operates. Any disputes shall be
        resolved through negotiation, mediation, or legal action if necessary.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">
        12. Contact Information
      </h2>
      <p className="mb-4">
        For any inquiries regarding these terms, our services, or project
        collaboration, please contact us at{" "}
        <a href="mailto:support@lucidframeweb.com" className="text-blue-500">
          support@lucidframeweb.com
        </a>
        .
      </p>
    </div>
  );
};

export default TermsOfService;
