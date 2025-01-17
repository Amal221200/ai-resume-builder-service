import { DocumentDefinition } from "sanity";

export default {
    name: 'project',
    title: 'Project',
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
            name: 'stack',
            title: 'Stack',
            type: 'string'
        },
        {
            name: 'description',
            title: 'Description',
            type: 'text'
        },
    ]
} as DocumentDefinition