import React from "react";
import { base44 } from "@/api/base44Client";
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { Eye, Calendar, ArrowRight, BookOpen } from "lucide-react";
import { format } from "date-fns";

export default function Articles() {
  const { data: articles, isLoading } = useQuery({
    queryKey: ['articles'],
    queryFn: () => base44.entities.Article.filter({ published: true }, '-published_date'),
    initialData: [],
  });

  return (
    <div className="bg-[#FAFAF9] min-h-screen">
      {/* Hero */}
      <section className="bg-[#00F0FF] py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4">
          <div className="bg-white neo-border neo-shadow p-8 md:p-12 rotate-1">
            <div className="-rotate-1">
              <div className="flex items-center gap-4 mb-4">
                <BookOpen className="w-12 h-12" strokeWidth={3} />
                <h1 className="text-4xl md:text-6xl font-bold">ARTICLES</h1>
              </div>
              <p className="text-xl md:text-2xl font-medium">
                Updates, resources, and advocacy news from Watts Up Austin
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4">
          {isLoading ? (
            <div className="text-center py-20">
              <div className="inline-block animate-spin w-12 h-12 border-4 border-black border-t-transparent neo-border"></div>
              <p className="mt-4 font-bold text-xl">LOADING...</p>
            </div>
          ) : articles.length === 0 ? (
            <div className="bg-white neo-border neo-shadow p-12 text-center">
              <BookOpen className="w-16 h-16 mx-auto mb-4 text-gray-400" strokeWidth={3} />
              <h3 className="text-2xl font-bold mb-2">NO ARTICLES YET</h3>
              <p className="text-lg text-gray-600">Check back soon for updates and resources!</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {articles.map((article, index) => {
                const rotations = ['-rotate-1', 'rotate-1', '-rotate-2'];
                const colors = ['#FFED4E', '#00F0FF', '#FF006E'];
                const rotation = rotations[index % rotations.length];
                const color = colors[index % colors.length];

                return (
                  <Link 
                    key={article.id} 
                    to={`${createPageUrl("ArticleView")}?id=${article.id}`}
                    className={`block group ${rotation} hover:rotate-0 transition-transform`}
                  >
                    <div className="bg-white neo-border neo-shadow-sm hover:neo-shadow transition-all h-full">
                      {article.featured_image_url && (
                        <div className="h-48 overflow-hidden border-b-4 border-black">
                          <img 
                            src={article.featured_image_url} 
                            alt={article.title}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      )}
                      <div className="p-6">
                        <div className="flex items-center gap-4 mb-4 text-sm">
                          <div className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" strokeWidth={2.5} />
                            <span className="font-medium">
                              {format(new Date(article.published_date || article.created_date), 'MMM d, yyyy')}
                            </span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Eye className="w-4 h-4" strokeWidth={2.5} />
                            <span className="font-medium">{article.view_count || 0}</span>
                          </div>
                        </div>
                        
                        <h3 className="text-xl md:text-2xl font-bold mb-3 leading-tight">
                          {article.title}
                        </h3>
                        
                        {article.excerpt && (
                          <p className="text-gray-700 mb-4 leading-relaxed">
                            {article.excerpt}
                          </p>
                        )}

                        {article.tags && article.tags.length > 0 && (
                          <div className="flex flex-wrap gap-2 mb-4">
                            {article.tags.slice(0, 3).map((tag, i) => (
                              <span 
                                key={i}
                                className="px-2 py-1 text-xs font-bold neo-border"
                                style={{ backgroundColor: color }}
                              >
                                {tag.toUpperCase()}
                              </span>
                            ))}
                          </div>
                        )}

                        <div className="flex items-center gap-2 font-bold group-hover:gap-4 transition-all">
                          READ MORE
                          <ArrowRight className="w-5 h-5" strokeWidth={3} />
                        </div>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
