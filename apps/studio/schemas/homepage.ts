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
        name: 'profileImage',
        title: 'Profile image',
        type: 'image',
        options: {
          hotspot: true,
        },
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
      })
    ],
  })