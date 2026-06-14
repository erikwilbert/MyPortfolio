export interface Article {
  id: string;
  slug: string;
  title: string;
  description: string;
  date: string;
  readingTime: number;
  image: string;
  content: string;
  tags: string[];
}

export const articles: Article[] = [
  {
    id: "article-1",
    slug: "article-1",
    title: "Add your first article title here",
    description: "Add a brief description of your article.",
    date: "2024-01-15",
    readingTime: 5,
    image: "/placeholder-article-1.png",
    tags: ["Tag 1", "Tag 2"],
    content: `
# Article Title

Add your article content here.

## Section 1

Add content for this section.

## Section 2

Add more detailed content here. Explain your thoughts, learnings, or technical insights.

## Conclusion

Wrap up your article with key takeaways or final thoughts.
    `.trim(),
  },
  {
    id: "article-2",
    slug: "article-2",
    title: "Add another article title",
    description: "Add a brief description of your article.",
    date: "2024-01-10",
    readingTime: 7,
    image: "/placeholder-article-2.png",
    tags: ["Tag 1", "Tag 3"],
    content: `
# Article Title

Add your article content here.

## Key Points

- Point 1
- Point 2
- Point 3

## Conclusion

Add conclusion here.
    `.trim(),
  },
  {
    id: "article-3",
    slug: "article-3",
    title: "Third article placeholder",
    description: "Add a brief description of your article.",
    date: "2024-01-05",
    readingTime: 6,
    image: "/placeholder-article-3.png",
    tags: ["Tag 2", "Tag 3"],
    content: `
# Article Title

Add your article content here.

## Introduction

Start your article with an engaging introduction.

## Main Content

Add the main body of your article.

## Takeaways

Share key takeaways with your readers.
    `.trim(),
  },
];
