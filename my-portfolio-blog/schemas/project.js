export default {
  name: 'project',
  type: 'document',
  title: 'Projects',
  fields: [
    {
      title: 'Image',
      name: 'image',
      type: 'image',
    },
    {
      title: 'Title',
      name: 'title',
      type: 'string',
    },
    {
      title: 'Slug',
      name: 'slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLenght: 96,
      },
    },
    {
      title: 'Description',
      name: 'desc',
      type: 'text',
    },
    {
      title: 'Client',
      name: 'client',
      type: 'string',
    },
    {
      title: 'Project type',
      name: 'type',
      type: 'string',
    },
    {
      title: 'Project Role',
      name: 'role',
      type: 'string',
    },
  ],
  preview: {
    select: {
      title: 'title',
      slug: 'slug',
      media: 'image',
    },
    prepare({title = 'No title', slug, media}) {
      const path = `/project/${slug.current}/`
      return {
        title,
        media,
        subtitle: path,
      }
    },
  },
}
