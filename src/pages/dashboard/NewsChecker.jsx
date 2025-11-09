import React, { useState } from "react";

export default function NewsChecker() {
  const [query, setQuery] = useState("");
  const [result, setResult] = useState(null);
  const [checkedRaw, setCheckedRaw] = useState(null); // will show the answer to the question
  const [loading, setLoading] = useState(false);

  // sample local news-analysis data (use your actual variable if available)
  const newsData = {
    article_id: "euo1GAJ1HVp74Omey1kK",
    score: 19,
    label: "fake",
    confidence: 0.62,
    explanation: [
      "Sensational writing patterns detected (penalty 0.25)",
      "High emotional tone (sentiment magnitude ≈ 3.69)",
      "Topical category hints: Cancer, Offbeat, Health News",
      "Key entities: Experts, cancer",
      "Sensational terms in text: banned, cure, miracle, shocking",
      'Notable line: "SHOCKING discovery banned by officials!"',
    ],
    features: {
      entity_wiki_hits: 0,
      sentiment_magnitude: 3.69,
      sensational_penalty: 0.25,
      categories: ["/Health/Health Conditions/Cancer", "/News/Health News"],
    },
    insights: {
      key_entities: ["Experts", "cancer"],
      sensational_terms: ["banned", "miracle", "shocking"],
      notable_sentences: [
        "SHOCKING discovery banned by officials!",
        "Other flagged sentence here",
      ],
    },
  };

  const clamp = (v, a = 0, b = 100) => Math.max(a, Math.min(b, v ?? 0));
  const pct = (v) => `${clamp(Math.round(v))}%`;

  // derive a natural-language answer from the local newsData based on user's question
  const answerFromData = (q, data) => {
    const t = (q || "").trim().toLowerCase();

    if (!t)
      return "Please ask a question about the article (e.g. 'Is this real?', 'Why is it fake?', 'Score', 'Confidence').";

    // intent checks
    if (
      t.includes("real") ||
      t.includes("fake") ||
      t.includes("is it") ||
      t.includes("verdict") ||
      t.includes("label")
    ) {
      return `Verdict: ${data.label?.toUpperCase() ?? "UNKNOWN"} — score ${
        data.score ?? "—"
      } (confidence ${
        typeof data.confidence === "number" ? pct(data.confidence * 100) : "—"
      })`;
    }

    if (t.includes("score")) {
      return `Score: ${data.score ?? "—"} (mapped to ${pct(
        scorePercent(data.score)
      )})`;
    }

    if (t.includes("confidence")) {
      return `Confidence: ${
        typeof data.confidence === "number" ? pct(data.confidence * 100) : "—"
      }`;
    }

    if (
      t.includes("why") ||
      t.includes("reason") ||
      t.includes("explain") ||
      t.includes("why fake") ||
      t.includes("why real")
    ) {
      if (Array.isArray(data.explanation) && data.explanation.length) {
        return `Reasons: ${data.explanation.slice(0, 4).join(" · ")}`;
      }
      return "No explanation available.";
    }

    if (
      t.includes("entities") ||
      t.includes("who") ||
      t.includes("people") ||
      t.includes("key entities")
    ) {
      const ents = data.insights?.key_entities ?? [];
      return ents.length
        ? `Key entities: ${ents.join(", ")}`
        : `No key entities detected.`;
    }

    if (t.includes("sentiment") || t.includes("tone")) {
      return `Sentiment magnitude: ${
        data.features?.sentiment_magnitude ?? "—"
      } (higher means more emotional tone)`;
    }

    if (
      t.includes("sensational") ||
      t.includes("terms") ||
      t.includes("words")
    ) {
      const terms = data.insights?.sensational_terms ?? [];
      return terms.length
        ? `Sensational terms flagged: ${terms.join(", ")}`
        : "No sensational terms flagged.";
    }

    if (t.includes("id") || t.includes("article id")) {
      return `Article ID: ${data.article_id ?? "—"}`;
    }

    if (
      t.includes("categories") ||
      t.includes("topic") ||
      t.includes("category")
    ) {
      return data.features?.categories && data.features.categories.length
        ? `Categories: ${data.features.categories.join(", ")}`
        : "No categories available.";
    }

    if (
      t.includes("notable") ||
      t.includes("sentence") ||
      t.includes("lines")
    ) {
      const s = data.insights?.notable_sentences ?? [];
      return s.length
        ? `Notable sentences: ${s.join(" · ")}`
        : "No notable sentences.";
    }

    // default: provide a concise summary
    const shortExplain =
      Array.isArray(data.explanation) && data.explanation.length
        ? data.explanation[0]
        : "No short explanation available.";
    return `Summary: ${shortExplain} Verdict: ${
      data.label?.toUpperCase() ?? "UNKNOWN"
    } — Score ${data.score ?? "—"} (Confidence ${
      typeof data.confidence === "number" ? pct(data.confidence * 100) : "—"
    })`;
  };

  // helper reused from component
  const scorePercent = (s) => {
    if (s == null) return 0;
    if (s <= 100) return clamp(s);
    return clamp((s / (s + 50)) * 100);
  };

  const handleCheck = async () => {
    if (!query.trim()) {
      setCheckedRaw("Please enter a question.");
      return;
    }

    setLoading(true);
    setResult(null);
    setCheckedRaw(null);

    try {
      // use local newsData instead of API
      const data = newsData;

      // set the detailed result panel as before
      setResult(data);

      // compute a concise answer for the user's question using the local data
      const answer = answerFromData(query, data);
      setCheckedRaw(answer);

      console.log("Using local data for answer:", answer);
    } catch (err) {
      console.log("Local processing error:", err);
      setCheckedRaw(`Error: ${err.message || "Processing failed"}`);
    } finally {
      setLoading(false);
    }
  };

  // visual helpers
  const labelClass = (lbl) =>
    lbl === "fake"
      ? "bg-red-600 text-white"
      : lbl === "real"
      ? "bg-green-600 text-white"
      : "bg-amber-500 text-black";

  const CircularScore = ({ value, size = 92, thickness = 10 }) => {
    const pctValue = clamp(Math.round(value));
    const radius = (size - thickness) / 2;
    const circumference = 2 * Math.PI * radius;
    const dash = (pctValue / 100) * circumference;
    const offset = circumference - dash;
    return (
      <svg width={size} height={size} className="block">
        <defs>
          <linearGradient id="gScore" x1="0" x2="1">
            <stop offset="0%" stopColor="#7c2ae8" />
            <stop offset="100%" stopColor="#4b1366" />
          </linearGradient>
        </defs>

        <g transform={`translate(${size / 2}, ${size / 2})`}>
          <circle
            r={radius}
            fill="none"
            stroke="rgba(255,255,255,0.04)"
            strokeWidth={thickness}
          />
          <circle
            r={radius}
            fill="none"
            stroke="url(#gScore)"
            strokeWidth={thickness}
            strokeLinecap="round"
            strokeDasharray={`${dash} ${circumference}`}
            strokeDashoffset={offset}
            style={{
              transition:
                "stroke-dasharray 700ms ease, stroke-dashoffset 700ms ease",
            }}
            transform="rotate(-90)"
          />
          <text
            x="0"
            y="4"
            textAnchor="middle"
            fontSize="18"
            fontWeight="700"
            fill="white"
            className="select-none"
          >
            {pctValue}
          </text>
          <text
            x="0"
            y="24"
            textAnchor="middle"
            fontSize="10"
            fill="white"
            opacity="0.75"
          >
            score
          </text>
        </g>
      </svg>
    );
  };

  return (
    <section className="bg-gradient-to-br from-[#07060a] to-[#0f0612] rounded-xl p-6 border border-purple-800/30 shadow-lg">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h2 className="text-xl font-semibold text-white">📰 News Checker</h2>
          <p className="text-white/70 text-sm">
            Ask a question about the article and get an answer from the
            analysis.
          </p>
        </div>

        <div className="text-sm text-white/60">
          {loading ? "Processing…" : "Ready"}
        </div>
      </div>

      {/* single horizontal row: input, controls, summary, score */}
      <div className="flex gap-4 items-start flex-nowrap overflow-x-auto">
        {/* main input + controls + result summary */}
        <div className="flex-1 min-w-[420px]">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Ask (e.g. 'Is this real?', 'Why is it fake?', 'What are the sensational terms?')"
            className="w-full p-3 rounded-md bg-white/6 border border-white/8 text-white placeholder-white/40 outline-none focus:border-purple-400 transition"
          />

          <div className="flex gap-3 mt-3">
            <button
              onClick={handleCheck}
              disabled={loading}
              className="flex-1 py-2 rounded-md bg-gradient-to-r from-purple-500 to-fuchsia-600 text-white font-medium hover:shadow-[0_0_18px_rgba(124,58,237,0.22)] transition disabled:opacity-60"
            >
              {loading ? "Processing…" : "Ask"}
            </button>

            <button
              onClick={() => {
                setQuery("");
                setResult(null);
                setCheckedRaw(null);
              }}
              className="px-4 py-2 rounded-md bg-white/5 text-white/80 border border-white/8"
            >
              Reset
            </button>
          </div>

          {checkedRaw && (
            <div className="mt-3 p-3 rounded-md bg-white/6 text-sm text-white/80">
              {checkedRaw}
            </div>
          )}

          {result && (
            <div className="mt-4 p-4 rounded-lg bg-white/5 border border-white/8">
              <div className="flex items-center gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <span
                      className={`px-3 py-1 rounded-full text-sm font-semibold ${labelClass(
                        result.label
                      )}`}
                    >
                      {result.label?.toUpperCase() || "UNKNOWN"}
                    </span>

                    <div className="text-sm text-white/70">
                      Confidence:{" "}
                      <span className="font-medium text-white">
                        {typeof result.confidence === "number"
                          ? pct(result.confidence * 100)
                          : "-"}
                      </span>
                    </div>

                    <div className="text-sm text-white/60 ml-auto">
                      ID:{" "}
                      <span className="font-mono text-xs text-white/70">
                        {result.article_id ?? "—"}
                      </span>
                    </div>
                  </div>

                  <p className="text-sm text-white/70">
                    <strong>Summary:</strong>{" "}
                    {result.explanation && result.explanation.length > 0
                      ? result.explanation[0]
                      : "No short explanation available."}
                  </p>

                  <div className="mt-3 flex gap-2 flex-wrap">
                    <div className="px-3 py-1 bg-white/5 rounded text-xs text-white/70">
                      Sentiment: {result.features?.sentiment_magnitude ?? "—"}
                    </div>
                    <div className="px-3 py-1 bg-white/5 rounded text-xs text-white/70">
                      Entities: {result.features?.entity_wiki_hits ?? 0}
                    </div>
                    <div className="px-3 py-1 bg-white/5 rounded text-xs text-white/70">
                      Penalty: {result.features?.sensational_penalty ?? 0}
                    </div>
                  </div>

                  {/* short explanations list inline */}
                  {result.explanation && (
                    <div className="mt-3 text-sm text-white/70">
                      <strong>Why:</strong>{" "}
                      <span className="opacity-90">
                        {result.explanation.slice(0, 3).join(" · ")}
                      </span>
                    </div>
                  )}

                  {/* confidence small bar */}
                  <div className="mt-3">
                    <div className="text-xs text-white/70 mb-1">Confidence</div>
                    <div className="w-full h-3 bg-white/6 rounded-full overflow-hidden">
                      <div
                        style={{
                          width:
                            typeof result.confidence === "number"
                              ? `${clamp(result.confidence * 100)}%`
                              : "0%",
                        }}
                        className={`h-3 rounded-full bg-gradient-to-r from-purple-400 to-fuchsia-600 transition-all`}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* score meter kept on the same row */}
        <div className="w-44 flex-shrink-0">
          {result ? (
            <div className="p-4 rounded-lg bg-white/5 border border-white/8 flex flex-col items-center gap-3">
              <CircularScore value={scorePercent(result.score)} />
              <div className="text-xs text-white/70">Score</div>
            </div>
          ) : (
            <div className="p-4 rounded-lg bg-white/6 border border-white/8 flex flex-col items-center gap-3">
              <CircularScore value={0} />
              <div className="text-xs text-white/70">No score</div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
