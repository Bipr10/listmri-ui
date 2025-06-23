// src/ListingMRI.jsx
import React, { useState } from 'react'

const ListingMRI = () => {
  const [url, setUrl] = useState('')
  const [result, setResult] = useState(null)

  const handleAnalyze = () => {
    // Simülasyon: Gerçek analiz henüz yok
    setResult({
      titleScore: 85,
      descriptionScore: 70,
      tagScore: 90,
      seoScore: 78,
    })
  }

  return (
    <div style={{ padding: '2rem', fontFamily: 'sans-serif', maxWidth: '600px', margin: 'auto' }}>
      <h1>🧠 ListingMRI</h1>
      <p>Enter your Etsy listing URL below and get an instant analysis.</p>

      <input
        type="text"
        placeholder="https://www.etsy.com/listing/..."
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        style={{ width: '100%', padding: '0.75rem', fontSize: '1rem', marginBottom: '1rem' }}
      />

      <button
        onClick={handleAnalyze}
        style={{ padding: '0.75rem 1.5rem', fontSize: '1rem', cursor: 'pointer' }}
      >
        Analyze Listing
      </button>

      {result && (
        <div style={{ marginTop: '2rem' }}>
          <h2>📊 Results</h2>
          <ul>
            <li>📝 Title Score: {result.titleScore}/100</li>
            <li>📄 Description Score: {result.descriptionScore}/100</li>
            <li>🏷️ Tag Score: {result.tagScore}/100</li>
            <li>🔍 SEO Score: {result.seoScore}/100</li>
          </ul>
        </div>
      )}
    </div>
  )
}

export default ListingMRI
