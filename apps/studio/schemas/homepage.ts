import {defineField, defineType, type StringRule } from 'sanity'

export default defineType({
    name: 'homepage',
    title: 'Home',
    type: 'document',
    fields: [
      defineField({
        name: 'title',
        title: 'Title',
        description: 'Appears in Search Engine Results or Web Browser tab',
        type: 'string',
      }),
      defineField({
        name: 'headline',
        title: 'Headline Title',
        type: 'string',
      }),
      defineField({
        name: 'heroImage',
        title: 'Hero image',
        type: 'image',
        options: {
          hotspot: true,
        },
      }),
      defineField({
        name: 'smallProfile',
        title: 'Profile',
        type: 'object',
        fields:[
          { name: 'profileImage', type: 'image', title: 'Profile Image', options: { hotspot: true }},
          { name: 'nameCaption', type: 'string', title: 'Profile Name Caption'},
          { name: 'titleCaption', type: 'string', title: 'Profile Title Caption'},
        ]
      }),
      defineField({
        title: 'Content', 
        name: 'content',
        type: 'array', 
        of: [{type: 'block'}]
      }),
      defineField({
        name: 'email',
        title: 'Email',
        type: 'string',
        validation: (Rule:StringRule) => Rule.regex(/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g, 'Email')
      }),
      defineField({
        name: 'phone',
        title: 'Phone Number',
        type: 'string',
        validation: (Rule:StringRule) => Rule.regex(/(?:\d{1}\s)?\(?(\d{3})\)?-?\s?(\d{3})-?\s?(\d{4})/g, 'US Phone')
      }),
      defineField({
        name: 'soundcloudLink',
        title: 'Soundcloud Link',
        type: 'url',
      })
    ],
  })