export default {
  name: 'menu',
  title: 'Menu',
  type: 'document',
  
  fields: [
    {
      name: 'title',
      title: 'Title',
      description: 'one or two words for best asthetics',
      type: 'string',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'string',
    },
    {
      name: 'postNumber',
      title: 'Post Number',
      type: 'number',
    },
    {
      name: 'mainImage',
      title: 'Main image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
  ],

  preview: {
    select: {
      title: 'title',
      author: 'author.name',
      media: 'mainImage',
    },
    prepare(selection) {
      const {author} = selection
      return Object.assign({}, selection, {
        subtitle: author && `by ${author}`,
      })
    },
  },
}
