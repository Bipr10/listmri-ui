import React, { useState } from "react";

export default function ListingMRI() {
  const [url, setUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [report, setReport] = useState(null);

  const handleAnalyze = async () => {
    setLoading(true);
    setTimeout(() => {
      setReport({
        title: {
          current: "Nazar boncuğu kolye",
          suggestion:
            "Evil Eye Necklace • Turkish Blue Bead Pendant • Minimalist Lucky Charm Jewelry for Her",
        },
        description: {
          current: "",
          suggestion:
            "Feel protected and stylish with this handcrafted Turkish evil eye necklace...",
        },
        tags: [
          "evil eye necklace",
          "turkish jewelry",
          "minimalist pendant",
          "blue eye charm",
          "gift for her",
        ],
        visualFeedback: "Ek stilize mockup ve modelli görseller önerilir.",
        score: "Satış potansiyel artışı: +38%",
      });
      setLoading(false);
    }, 2000);
  };

  return (
    <div className="p-6 max-w-2xl mx-auto bg-white rounded-xl shadow-md space-y-4">
      <h1 className="text-2xl font-bold text-center">🧠 Etsy Listing MRI</h1>
      <p className="text-gray-600 text-center">
        AI destekli Etsy ürün analizi – gizli satış kayıplarını keşfet
      </p>

      <input
        type="text"
        placeholder="Etsy ürün linkini yapıştır"
        className="w-full border p-2 rounded-md"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
      />
      <button
        onClick={handleAnalyze}
        className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-2 rounded-md"
        disabled={loading || !url}
      >
        {loading ? "Analiz ediliyor..." : "Analizi Başlat"}
      </button>

      {report && (
        <div className="bg-gray-50 p-4 rounded-md space-y-2">
          <h2 className="text-xl font-semibold">🔍 Analiz Sonuçları</h2>
          <div>
            <strong>Başlık Önerisi:</strong> {report.title.suggestion}
          </div>
          <div>
            <strong>Açıklama Önerisi:</strong> {report.description.suggestion}
          </div>
          <div>
            <strong>Etiket Önerileri:</strong> {report.tags.join(", ")}
          </div>
          <div>
            <strong>Görsel Yorumu:</strong> {report.visualFeedback}
          </div>
          <div>
            <strong>{report.score}</strong>
          </div>
        </div>
      )}
    </div>
  );
}
