import { DocumentDefinition } from "sanity";

export default {
    name: 'experience',
    title: 'Experience',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'string'
        },
        {
            name: 'city',
            title: 'City',
            type: 'string'
        },
        {
            name: 'state',
            title: 'State',
            type: 'string'
        },
        {
            name: 'companyName',
            title: 'Company Name',
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
            name: 'skills',
            title: 'Skills',
            type: 'string'
        },
        {
            name: 'major',
            title: 'Major',
            type: 'string'
        },
        {
            name: 'workSummary',
            title: 'Work Summary',
            type: 'text'
        },
        {
            name: 'currentlyWorking',
            title: 'Currently Working',
            type: 'boolean'
        },
    ]
} as DocumentDefinition