import React, { useEffect } from "react";
import { base44 } from "@/api/base44Client";
import { useQuery } from "@tanstack/react-query";
import { ArrowLeft, Calendar, Eye } from "lucide-react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { format } from "date-fns";
import ReactMarkdown from "react-markdown";

export default function ArticleView() {
  const urlParams = new URLSearchParams(window.location.search);
  const articleId = urlParams.get('id');

  const { data: article, isLoading } = useQuery({
    queryKey: ['article', articleId],
    queryFn: async () => {
      const articles = await base44.entities.Article.filter({ id: articleId });
      return articles[0];
    },
    enabled: !!articleId,
  });

  useEffect(() => {
    if (article && articleId) {
      // Increment view count
      base44.entities.Article.update(articleId, {
        view_count: (article.view_count || 0) + 1
      }).catch(err => console.error("Error updating view count:", err));
    }
  }, [article, articleId]);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-[#FAFAF9] flex items-center justify-center">
        <div className="text-center">
          <div className="inline-block animate-spin w-16 h-16 border-4 border-black border-t-transparent neo-border"></div>
          <p className="mt-4 font-bold text-2xl">LOADING...</p>
        </div>
      </div>
    );
  }

  if (!article) {
    return (
      <div className="min-h-screen bg-[#FAFAF9] flex items-center justify-center">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <div className="bg-white neo-border neo-shadow p-12">
            <h1 className="text-3xl font-bold mb-4">ARTICLE NOT FOUND</h1>
            <Link to={createPageUrl("Articles")}>
              <button className="neo-button bg-black text-white px-6 py-3 font-bold">
                ← BACK TO ARTICLES
              </button>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-[#FAFAF9] min-h-screen">
      {/* Back Button */}
      <div className="bg-white border-b-4 border-black py-4">
        <div className="max-w-4xl mx-auto px-4">
          <Link to={createPageUrl("Articles")}>
            <button className="neo-button bg-[#FFED4E] px-4 py-2 font-bold flex items-center gap-2">
              <ArrowLeft className="w-5 h-5" strokeWidth={3} />
              BACK TO ARTICLES
            </button>
          </Link>
        </div>
      </div>

      {/* Featured Image */}
      {article.featured_image_url && (
        <div className="max-w-6xl mx-auto px-4 py-8">
          <div className="neo-border neo-shadow overflow-hidden">
            <img 
              src={article.featured_image_url} 
              alt={article.title}
              className="w-full h-[400px] object-cover"
            />
          </div>
        </div>
      )}

      {/* Article Content */}
      <article className="max-w-4xl mx-auto px-4 py-12">
        <div className="bg-white neo-border neo-shadow p-8 md:p-12">
          {/* Meta */}
          <div className="flex flex-wrap items-center gap-6 mb-8 pb-6 border-b-4 border-black">
            <div className="flex items-center gap-2 text-sm font-medium">
              <Calendar className="w-5 h-5" strokeWidth={2.5} />
              {format(new Date(article.published_date || article.created_date), 'MMMM d, yyyy')}
            </div>
            <div className="flex items-center gap-2 text-sm font-medium">
              <Eye className="w-5 h-5" strokeWidth={2.5} />
              {article.view_count || 0} views
            </div>
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight">
            {article.title}
          </h1>

          {/* Tags */}
          {article.tags && article.tags.length > 0 && (
            <div className="flex flex-wrap gap-3 mb-8">
              {article.tags.map((tag, i) => (
                <span 
                  key={i}
                  className="px-4 py-2 text-sm font-bold neo-border bg-[#FFED4E]"
                >
                  {tag.toUpperCase()}
                </span>
              ))}
            </div>
          )}

          {/* Content */}
          <div className="prose prose-lg max-w-none">
            <ReactMarkdown
              components={{
                h1: ({ children }) => <h1 className="text-3xl md:text-4xl font-bold mt-8 mb-4">{children}</h1>,
                h2: ({ children }) => <h2 className="text-2xl md:text-3xl font-bold mt-6 mb-3">{children}</h2>,
                h3: ({ children }) => <h3 className="text-xl md:text-2xl font-bold mt-4 mb-2">{children}</h3>,
                p: ({ children }) => <p className="mb-4 leading-relaxed text-lg">{children}</p>,
                ul: ({ children }) => <ul className="list-disc ml-6 mb-4 space-y-2">{children}</ul>,
                ol: ({ children }) => <ol className="list-decimal ml-6 mb-4 space-y-2">{children}</ol>,
                li: ({ children }) => <li className="text-lg">{children}</li>,
                a: ({ children, ...props }) => (
                  <a {...props} className="text-[#FF006E] font-bold hover:underline" target="_blank" rel="noopener noreferrer">
                    {children}
                  </a>
                ),
                blockquote: ({ children }) => (
                  <blockquote className="border-l-4 border-black bg-[#FFED4E] p-4 my-6 neo-border">
                    {children}
                  </blockquote>
                ),
                code: ({ inline, children }) => 
                  inline ? (
                    <code className="bg-gray-200 px-2 py-1 rounded text-sm">{children}</code>
                  ) : (
                    <pre className="bg-black text-white p-4 neo-border overflow-x-auto my-4">
                      <code>{children}</code>
                    </pre>
                  ),
              }}
            >
              {article.content}
            </ReactMarkdown>
          </div>
        </div>
      </article>

      {/* Back to Articles */}
      <div className="max-w-4xl mx-auto px-4 pb-16">
        <Link to={createPageUrl("Articles")}>
          <button className="neo-button bg-black text-white px-8 py-4 font-bold text-lg w-full md:w-auto">
            ← BACK TO ALL ARTICLES
          </button>
        </Link>
      </div>
    </div>
  );
}
