async function mergeAuthorsAndComments() {
  try {
    // 1. Fetch all authors
    const authorsRes = await fetch("https://api.blog.com/authors");
    const authors = await authorsRes.json();

    // 2. Map each author to include article + comments
    const result = await Promise.all(
      authors.map(async (author) => {
        const articlesWithComments = await Promise.all(
          author.articleIds.map(async (articleId) => {
            const commentsRes = await fetch(`https://api.blog.com/articles/${articleId}/comments`);
            const comments = await commentsRes.json();

            return {
              articleId,
              comments
            };
          })
        );

        return {
          id: author.id,
          name: author.name,
          articles: articlesWithComments
        };
      })
    );

    console.log(result);
    return result;

  } catch (error) {
    console.error(" Error merging data:", error);
  }
}

mergeAuthorsAndComments();



