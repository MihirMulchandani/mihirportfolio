import React from 'react';

const Section: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
  <section className="mb-12">
    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 border-l-2 border-blue-500 pl-4">
      {title}
    </h3>
    <div className="text-gray-600 dark:text-gray-300 leading-relaxed space-y-4">
      {children}
    </div>
  </section>
);

export const Security: React.FC = () => {
  return (
    <div className="max-w-3xl mx-auto w-full pt-8 md:pt-16 animate-fade-in">
      <div className="mb-16 border-b border-gray-200 dark:border-gray-800 pb-8">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Engineering Philosophy</h2>
        <p className="text-gray-600 dark:text-gray-400 font-mono text-sm">
          // Reflections on trust, data, and system correctness.
        </p>
      </div>

      <Section title="Trust Boundaries in Web Systems">
        <p>
          The modern web often blurs the line between client and server. My approach involves strictly defining trust boundaries. 
          The browser is an adversarial environment, but it is also the only place where user data can be truly private if encrypted before transmission.
          Server-side logic should assume every input is malicious, but client-side logic should assume the server is compromised (Zero Knowledge).
        </p>
      </Section>

      <Section title="Client-Side Encryption">
        <p>
          Encryption at rest on the server is insufficient for true privacy. I advocate for and implement end-to-end encryption where keys never leave the user's device. 
          This shifts the responsibility of secrecy from the infrastructure provider to the mathematical guarantees of the protocol.
        </p>
      </Section>

      <Section title="Absence of Data as a Terminal State">
        <p>
          Data retention is a liability. Systems like <strong>MsgOne</strong> are designed around the concept that the safest data is data that no longer exists. 
          Ephemeral systems must ensure that deletion is a cryptographic certainty, not just a database flag update.
        </p>
      </Section>

      <Section title="Irreversibility in Design">
        <p>
          Some actions must be designed to be irreversible to prevent social engineering. If a system allows a support agent to recover a "lost" key, 
          it introduces a human vulnerability. True security often means accepting that data loss is preferable to unauthorized access.
        </p>
      </Section>

      <div className="mt-16 p-6 bg-gray-50 dark:bg-gray-900/50 rounded border border-gray-200 dark:border-gray-800">
        <h4 className="text-sm font-bold text-gray-900 dark:text-white uppercase tracking-wider mb-2">Responsible Disclosure</h4>
        <p className="text-sm text-gray-600 dark:text-gray-400">
          I have previously identified and responsibly disclosed a public-facing access control vulnerability in a major system. 
          Details are withheld to strictly adhere to disclosure policies and ethical standards.
        </p>
      </div>
    </div>
  );
};