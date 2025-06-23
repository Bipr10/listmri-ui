// src/ListingMRI.jsx
import React, { useState } from 'react'

const ListingMRI = () => {
  const [url, setUrl] = useState('')
  const [result, setResult] = useState(null)
  const [loading, setLoading] = useState(false)

  const handleAnalyze = () => {
    setLoading(true)
    setTimeout(() => {
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

  const scoreColor = (score) => {
    if (score >= 85) return '#4ade80' // yeşil
    if (score >= 70) return '#facc15' // sarı
    return '#f87171' // kırmızı
  }

  return (
    <div style={{ padding: '2rem', fontFamily: 'sans-serif', maxWidth: '700px', margin: 'auto' }}>
      <h1 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>🧠 ListingMRI</h1>
      <p style={{ color: '#555', marginBottom: '1rem' }}>Get instant feedback on your Etsy listing — title, description, tags, and SEO!</p>

      <input
        type="text"
        placeholder="https://www.etsy.com/listing/..."
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        style={{
          width: '100%',
          padding: '0.75rem',
          fontSize: '1rem',
          border: '1px solid #ccc',
          borderRadius: '8px',
          marginBottom: '1rem'
        }}
      />

      <button
        onClick={handleAnalyze}
        style={{
          padding: '0.75rem 1.5rem',
          fontSize: '1rem',
          backgroundColor: '#2563eb',
          color: 'white',
          border: 'none',
          borderRadius: '6px',
          cursor: 'pointer'
        }}
      >
        {loading ? 'Analyzing...' : 'Analyze Listing'}
      </button>

      {result && (
        <div style={{ marginTop: '2rem', display: 'grid', gap: '1rem' }}>
          <h2 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>📊 AI-Powered Feedback</h2>

          {[{
            label: '📝 Title',
            score: result.titleScore,
            comment: result.titleComment
          }, {
            label: '📄 Description',
            score: result.descriptionScore,
            comment: result.descriptionComment
          }, {
            label: '🏷️ Tags',
            score: result.tagScore,
            comment: result.tagComment
          }, {
            label: '🔍 SEO',
            score: result.seoScore,
            comment: result.seoComment
          }].map((item, idx) => (
            <div key={idx} style={{ border: '1px solid #eee', borderRadius: '10px', padding: '1rem', boxShadow: '0 1px 4px rgba(0,0,0,0.05)' }}>
              <strong>{item.label}:</strong>
              <div style={{
                margin: '0.5rem 0',
                height: '8px',
                borderRadius: '4px',
                backgroundColor: '#eee',
                overflow: 'hidden'
              }}>
                <div style={{ width: `${item.score}%`, height: '100%', backgroundColor: scoreColor(item.score) }} />
              </div>
              <div style={{ fontSize: '0.9rem', color: '#444' }}>{item.comment}</div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default ListingMRI
