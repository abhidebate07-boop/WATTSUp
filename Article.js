{
  "name": "Article",
  "type": "object",
  "properties": {
    "title": {
      "type": "string",
      "description": "Article title"
    },
    "slug": {
      "type": "string",
      "description": "URL-friendly version of title"
    },
    "content": {
      "type": "string",
      "description": "Article content in markdown"
    },
    "excerpt": {
      "type": "string",
      "description": "Short summary of the article"
    },
    "featured_image_url": {
      "type": "string",
      "description": "URL of the featured image"
    },
    "view_count": {
      "type": "number",
      "default": 0,
      "description": "Number of times article was viewed"
    },
    "published": {
      "type": "boolean",
      "default": false,
      "description": "Whether article is published"
    },
    "published_date": {
      "type": "string",
      "format": "date",
      "description": "Date article was published"
    },
    "tags": {
      "type": "array",
      "items": {
        "type": "string"
      },
      "description": "Article tags/categories"
    }
  },
  "required": [
    "title",
    "content"
  ]
}
