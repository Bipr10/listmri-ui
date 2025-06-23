// src/ListingMRI.jsx
import React, { useState } from 'react'

const ListingMRI = () => {
  const [url, setUrl] = useState('')
  const [result, setResult] = useState(null)
  const [loading, setLoading] = useState(false)

  const handleAnalyze = () => {
    setLoading(true)
    setTimeout(() => {
      // Simüle edilmiş yapay zekâ analizi
      setResult({
        titleScore: 85,
        titleComment: "Başlık güçlü ancak daha çok anahtar kelime içerebilir.",
        descriptionScore: 70,
        descriptionComment: "Açıklama bilgilendirici fakat duygusal bağ eksik.",
        tagScore: 90,
        tagComment: "Etiketler SEO açısından oldukça etkili.",
        seoScore: 78,
        seoComment: "Alt metinler eksik. Daha güçlü CTA cümleleri eklenmeli."
      })
      setLoading(false)
    }, 1500)
  }

  return (
    <div style={{ padding: '2rem', fontFamily: 'sans-serif', maxWidth: '600px', margin: 'auto' }}>
      <h1>🧠 ListingMRI</h1>
      <p>Enter your Etsy listing URL below and get an instant analysis powered by AI.</p>

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
        {loading ? 'Analyzing...' : 'Analyze Listing'}
      </button>

      {result && (
        <div style={{ marginTop: '2rem' }}>
          <h2>📊 Results</h2>
          <ul>
            <li><strong>📝 Title Score:</strong> {result.titleScore}/100<br/><em>{result.titleComment}</em></li>
            <li><strong>📄 Description Score:</strong> {result.descriptionScore}/100<br/><em>{result.descriptionComment}</em></li>
            <li><strong>🏷️ Tag Score:</strong> {result.tagScore}/100<br/><em>{result.tagComment}</em></li>
            <li><strong>🔍 SEO Score:</strong> {result.seoScore}/100<br/><em>{result.seoComment}</em></li>
          </ul>
        </div>
      )}
    </div>
  )
}

export default ListingMRI
