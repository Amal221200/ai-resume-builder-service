import { DocumentDefinition } from "sanity";

export default {
    name: 'skill',
    title: 'Skill',
    type: 'document',
    fields: [
        {
            name: 'name',
            title: 'Name',
            type: 'string'
        },
    ]
} as DocumentDefinition