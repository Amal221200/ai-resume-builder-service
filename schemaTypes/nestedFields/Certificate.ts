import { DocumentDefinition } from "sanity";

export default {
    name: 'certificate',
    title: 'Certificate',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'string'
        },
        {
            name: 'link',
            title: 'Link',
            type: 'string'
        },
        {
            name: 'provider',
            title: 'Provider',
            type: 'string'
        },
        {
            name: 'description',
            title: 'Description',
            type: 'text'
        },
    ]
} as DocumentDefinition