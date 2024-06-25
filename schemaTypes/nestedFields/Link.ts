import { DocumentDefinition } from "sanity";

export default {
    name: 'link',
    title: 'Link',
    type: 'document',
    fields: [
        {
            name:'label',
            title:'Label',
            type:'string'
        },
        {
            name:'url',
            title:'URL',
            type:'string'
        },
    ]
} as DocumentDefinition