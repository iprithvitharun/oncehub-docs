import React, { useState } from 'react';
import articles from '../data/articles';

export default function ManualSearch() {
  const [query, setQuery] = useState('');
  const filtered = articles.filter(
    a =>
      a.title.toLowerCase().includes(query.toLowerCase()) ||
      a.description.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div>
      <input
        type="text"
        placeholder="Search articles..."
        value={query}
        onChange={e => setQuery(e.target.value)}
        style={{ width: '100%', padding: '8px', marginBottom: '16px' }}
      />
      <ul>
        {filtered.map(article => (
          <li key={article.link} style={{ marginBottom: '16px' }}>
            <a href={article.link}><strong>{article.title}</strong></a>
            <div>{article.description}</div>
          </li>
        ))}
        {filtered.length === 0 && <li>No articles found.</li>}
      </ul>
    </div>
  );
} 