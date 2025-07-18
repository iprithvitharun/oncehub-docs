import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';
import styles from './index.module.css';
import React, { useState } from 'react';
import ManualSearch from '../components/ManualSearch';
import articles from '../data/articles';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();

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
    const titleMatches = articles.filter(doc => doc.title.toLowerCase().includes(lower));
    const contentMatches = articles.filter(doc =>
      !doc.title.toLowerCase().includes(lower) && doc.description.toLowerCase().includes(lower)
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
                <li key={doc.title} style={{ marginBottom: 12 }}>
                  <a href={doc.link} style={{ fontWeight: 600, color: '#2e8555', textDecoration: 'none', fontSize: '1.05rem' }}>{doc.title}</a>
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

  // Helper to highlight a snippet from the description
  function highlightSnippet(doc, query) {
    const lower = query.toLowerCase();
    if (doc.title.toLowerCase().includes(lower)) return null;
    const idx = doc.description.toLowerCase().indexOf(lower);
    if (idx === -1) return null;
    const snippetStart = Math.max(0, idx - 30);
    const snippetEnd = Math.min(doc.description.length, idx + lower.length + 30);
    const snippet = doc.description.substring(snippetStart, snippetEnd);
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
        <div style={{marginTop: 40}}>
          <ManualSearch />
        </div>
      </main>
    </Layout>
  );
}
