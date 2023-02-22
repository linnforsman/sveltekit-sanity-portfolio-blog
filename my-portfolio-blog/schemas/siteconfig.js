export default {
  name: 'siteconfig',
  type: 'document',
  title: 'Site Settings',
  fields: [
    {
      name: 'title',
      title: 'Title',
      description: 'The name of the site.',
      type: 'string',
    },
    {
      name: 'subtitle',
      title: 'Subtitle',
      description: 'The subtitle of the site.',
      type: 'string',
    },
    {
      name: 'introduce',
      title: 'Introduction',
      type: 'string',
    },
  ],
}
