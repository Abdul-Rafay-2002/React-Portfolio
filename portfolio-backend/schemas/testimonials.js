export default {
    name:'testimonials',
    title:'Testimonials',
    type: 'document',
    fields:[
    {
      name: 'name',
      title: 'Person Name',
      type: 'string',
    },
    {
      name: 'company',
      title: 'Company Name',
      type: 'string',
    },
    {
      name: 'imageurl',
      title: 'Client Image',
      type: 'image',
      option: {
        hotspot: true,
      },
    },
        {
            name: 'tags',
            title: 'Tags',
            type: 'array',
            of: [
                {
                    type: 'block'
                },
                {
                    type: 'image'
                }
            ]
        },

    ],
};
