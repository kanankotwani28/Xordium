import React, { useEffect, useState } from "react";

export default function HotTopics() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [expanded, setExpanded] = useState(false);

  // Replace with your real key or set REACT_APP_NEWSAPI_KEY in .env
  const API_KEY = import.meta.env.VITE_NEWS_API_KEY || "API_KEY";
  const ENDPOINT = `https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=${API_KEY}`;

  useEffect(() => {
    let mounted = true;
    setLoading(true);
    setError(null);

    fetch(ENDPOINT)
      .then((res) => {
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        return res.json();
      })
      .then((data) => {
        if (!mounted) return;
        if (data.status !== "ok") {
          setError("Failed to load news");
          setArticles([]);
        } else {
          setArticles(
            Array.isArray(data.articles) ? data.articles.slice(0, 10) : []
          );
        }
      })
      .catch((err) => {
        if (!mounted) return;
        setError(err.message || "An error occurred");
      })
      .finally(() => {
        if (!mounted) return;
        setLoading(false);
      });

    return () => {
      mounted = false;
    };
  }, [ENDPOINT]);

  return (
    <section className="p-0 overflow-x-hidden">
      <div className="flex items-start justify-between mb-4">
        <div>
          <h2 className="text-xl font-semibold text-white">🔥 Hot Topics</h2>
          <p className="text-white/70 text-sm">
            Currently trending BBC headlines
          </p>
        </div>
        <div className="text-sm text-white/60">
          {loading ? "Loading..." : `${articles.length} items`}
        </div>
      </div>

      {error && (
        <div className="mb-4 text-sm text-red-300">
          Error loading news: {error}
        </div>
      )}

      {loading && !error ? (
        <div className="grid gap-3">
          {Array.from({ length: 4 }).map((_, i) => (
            <div
              key={i}
              className="p-3 rounded-lg bg-white/5 border border-white/6 animate-pulse"
            />
          ))}
        </div>
      ) : (
        <>
          {articles.length === 0 ? (
            <div className="text-sm text-white/60">No articles found.</div>
          ) : (
            <>
              <div className="divide-y divide-white/10">
                {(expanded ? articles : articles.slice(0, 3)).map((a, idx) => (
                  <a
                    key={a.url || idx}
                    href={a.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group block py-4 overflow-hidden max-w-full"
                    aria-label={`Open article: ${a.title}`}
                  >
                    <div className="flex gap-4 items-start">
                      {a.urlToImage ? (
                        <img
                          src={a.urlToImage}
                          alt={a.title || "article image"}
                          className="w-24 h-16 rounded-md object-cover flex-shrink-0"
                        />
                      ) : (
                        <div className="w-24 h-16 rounded-md bg-white/6 flex-shrink-0" />
                      )}

                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between gap-3 min-w-0">
                          <h3 className="font-medium text-white truncate">
                            {a.title}
                          </h3>
                          <span className="text-xs text-white/60 whitespace-nowrap flex-shrink-0">
                            {a.source?.name || "BBC"} •{" "}
                            {new Date(a.publishedAt).toLocaleString(undefined, {
                              month: "short",
                              day: "numeric",
                              hour: "2-digit",
                              minute: "2-digit",
                            })}
                          </span>
                        </div>

                        {a.description && (
                          <p className="text-sm text-white/60 mt-2 line-clamp-2">
                            {a.description}
                          </p>
                        )}
                      </div>
                    </div>
                  </a>
                ))}
              </div>

              {articles.length > 3 && (
                <div className="mt-4">
                  <button
                    type="button"
                    onClick={() => setExpanded((v) => !v)}
                    aria-expanded={expanded}
                    className="text-sm font-medium text-purple-300 hover:text-purple-200 underline underline-offset-4"
                  >
                    {expanded
                      ? "Show less"
                      : `Read more (${articles.length - 3} more)`}
                  </button>
                </div>
              )}
            </>
          )}
        </>
      )}
    </section>
  );
}
