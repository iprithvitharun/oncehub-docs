import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import Heading from '@theme/Heading';
import styles from './index.module.css';
import React, { useState } from 'react';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();

  // Docs index: title, id, content, and url
  const docsIndex = [
    {
      title: 'Getting started with Hiver for Gmail',
      id: 'getting-started-with-hiver',
      url: '/docs/getting-started/getting-started-with-hiver',
      content: `Hiver lets your team manage customer support emails directly from Gmail without sharing login credentials. Your teammates can see messages, reply from the shared address, assign conversations to teammates, leave notes for context, and more. Install and set up Hiver, Create a Shared Mailbox, Import past customer emails, Add more teammates to your inbox, Organize emails with tags and note.`
    },
    {
      title: 'Create a Shared Mailbox',
      id: 'create-a-shared-mailbox',
      url: '/docs/getting-started/create-a-shared-mailbox',
      content: `A shared mailbox is like a central container for emails sent to a specific address, like support@company.com. Teammates who are added to the mailbox can see, reply to, add notes, and manage emails. You can create separate shared mailboxes for different teams (like Support, Sales, or Finance), or combine multiple email addresses (like info@ and hello@) into a single mailbox depending on how your team works. To create a Shared Mailbox: In Gmail, click the yellow Hiver icon. Click Admin Panel to view the admin dashboard. Click Shared Inboxes. Click Create Shared Inbox. Choose Email as the channel. Enter the mailbox details. After creating your shared mailbox: Each teammate you added will receive an email notification. The shared mailbox will appear in their Gmail sidebar under the Hiver section. Emails will start syncing for each teammate. Other teammates can assign emails to them and mention them in notes. All teammates with access can see who else is part of the shared mailbox.`
    },
    {
      title: 'Content and visual guidelines for Hiver Knowledge Base',
      id: 'Content-and-visual-guidelines',
      url: '/docs/getting-started/Content-and-visual-guidelines',
      content: `Structure & Navigation: Each article will include a Table of Contents if it has more than one major heading. Steps should be numbered, not bulleted, to clarify action order. Visuals: Images will be used sparingly. Only include screenshots when: The action involves multiple UI elements that may confuse the user, The UI changes context. The first screenshot on a page is encouraged to anchor users visually. All screenshots will follow a consistent style guide. Screenshots should capture the full layout so users understand where the action happens. Use arrows or highlights to guide attention to specific elements. At least one side should be anchored to the border to avoid floating. Language & Formatting: Use bold for UI elements that users need to interact with to take action. Avoid over-labeling components. Say: “Click Save.” Don’t say: “Click the Save button.”`
    },
    {
      title: 'Redesigned invite email',
      id: 'redesigned-invite-email',
      url: '/docs/getting-started/redesigned-invite-email',
      content: `Redesigned invite email. Current and updated invite email screenshots.`
    },
  ];

  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  function handleSearch(e) {
    const value = e.target.value;
    setQuery(value);
    if (!value) {
      setResults([]);
      return;
    }
    // Prioritize title matches, then content matches
    const lower = value.toLowerCase();
    const titleMatches = docsIndex.filter(doc => doc.title.toLowerCase().includes(lower));
    const contentMatches = docsIndex.filter(doc =>
      !doc.title.toLowerCase().includes(lower) && doc.content.toLowerCase().includes(lower)
    );
    setResults([...titleMatches, ...contentMatches]);
  }

  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <input
            type="text"
            placeholder="Search docs..."
            value={query}
            onChange={handleSearch}
            style={{ padding: '0.75rem', fontSize: '1.1rem', borderRadius: 6, border: '1px solid #ccc', minWidth: 280 }}
            aria-label="Search documentation"
          />
        </div>
        {query && results.length > 0 && (
          <div style={{ background: '#fff', color: '#222', borderRadius: 8, boxShadow: '0 2px 8px rgba(0,0,0,0.08)', margin: '1rem auto 0', maxWidth: 500, padding: '1rem', textAlign: 'left' }}>
            <ul style={{ listStyle: 'none', margin: 0, padding: 0 }}>
              {results.map(doc => (
                <li key={doc.id} style={{ marginBottom: 12 }}>
                  <a href={doc.url} style={{ fontWeight: 600, color: '#2e8555', textDecoration: 'none', fontSize: '1.05rem' }}>{doc.title}</a>
                  <div style={{ fontSize: '0.95rem', color: '#444', marginTop: 2, lineHeight: 1.4 }}>
                    {highlightSnippet(doc, query)}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        )}
        {query && results.length === 0 && (
          <div style={{ background: '#fff', color: '#222', borderRadius: 8, boxShadow: '0 2px 8px rgba(0,0,0,0.08)', margin: '1rem auto 0', maxWidth: 500, padding: '1rem', textAlign: 'left' }}>
            <span>No results found.</span>
          </div>
        )}
      </div>
    </header>
  );

  // Helper to highlight a snippet from the content
  function highlightSnippet(doc, query) {
    const lower = query.toLowerCase();
    if (doc.title.toLowerCase().includes(lower)) return null;
    const idx = doc.content.toLowerCase().indexOf(lower);
    if (idx === -1) return null;
    const snippetStart = Math.max(0, idx - 30);
    const snippetEnd = Math.min(doc.content.length, idx + lower.length + 30);
    const snippet = doc.content.substring(snippetStart, snippetEnd);
    // Highlight the match
    const before = snippet.substring(0, idx - snippetStart);
    const match = snippet.substring(idx - snippetStart, idx - snippetStart + lower.length);
    const after = snippet.substring(idx - snippetStart + lower.length);
    return <span>...{before}<mark style={{ background: '#ffe564', padding: 0 }}>{match}</mark>{after}...</span>;
  }
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
