export default {
    name: 'price-menu',
    title: 'Price menu',
    type: 'document',
    
    fields: [
      {
        name: 'title',
        title: 'Service Name',
        description: 'example: "massage',
        type: 'string',
      },
      {
        name: 'description',
        title: 'Service Description',
        type: 'string',
      },
      {
        name: 'price',
        title: 'Service Price',
        type: 'string',
      },
      {
        name: 'menuNumber',
        title: 'Menu Number',
        type: 'number',
      },
      {
        name: 'Image',
        title: 'Service image',
        type: 'image',
      },
    ],
  
    preview: {
      select: {
        title: 'title',
        author: 'author.name',
        media: 'mainImage',
      },
    },
  }
  