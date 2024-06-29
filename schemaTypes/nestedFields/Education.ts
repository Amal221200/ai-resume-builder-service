import { DocumentDefinition } from "sanity";

export default {
    name: 'education',
    title: 'Education',
    type: 'document',
    fields: [
        {
            name: 'universityName',
            title: 'University Name',
            type: 'string'
        },
        {
            name: 'startDate',
            title: 'Start Date',
            type: 'string'
        },
        {
            name: 'endDate',
            title: 'End Date',
            type: 'string'
        },
        {
            name: 'degree',
            title: 'degree',
            type: 'string'
        },
        {
            name: 'major',
            title: 'Major',
            type: 'string'
        },
        {
            name: 'description',
            title: 'Description',
            type: 'text'
        },
        {
            name: 'currentlyStudying',
            title: 'Currently Studying',
            type: 'boolean'
        },
    ]
} as DocumentDefinition