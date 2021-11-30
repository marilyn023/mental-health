export const unFlattenResults = results =>
    results.map(post => {
        const { date, slug, tags, title } = post;
        return { slug, frontmatter: { title, date, tags } };
    });