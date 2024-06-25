import { DocumentDefinition, } from "sanity";
import Skill from "./nestedFields/Skill";
import Certificate from "./nestedFields/Certificate";
import Project from "./nestedFields/Project";
import Education from "./nestedFields/Education";
import Experience from "./nestedFields/Experience";
import Link from "./nestedFields/Link";


export default {
    name: 'resume',
    title: "Resume",
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'string',
            validation: (Rule) => Rule.required()
        },
        {
            name: 'user_email',
            title: 'User Email',
            type: 'string',
            validation: (Rule) => Rule.required()
        },
        {
            name: 'username',
            title: 'Username',
            type: 'string',
            validation: (Rule) => Rule.required()
        },
        {
            name: 'firstName',
            title: 'First Name',
            type: 'string'
        },
        {
            name: 'lastName',
            title: 'Last Name',
            type: 'string'
        },
        {
            name: 'phone',
            title: 'Phone',
            type: 'string'
        },
        {
            name: 'address',
            title: 'Address',
            type: 'string'
        },
        {
            name: 'email',
            title: 'Email',
            type: 'string'
        },
        {
            name: 'jobTitle',
            title: 'Job Title',
            type: 'string'
        },
        {
            name: 'summary',
            title: 'summary',
            type: 'string'
        },
        {
            name: 'links',
            title: 'Links',
            type: 'array',
            of: [Link]
        },
        {
            name: 'skills',
            title: 'Skills',
            type: 'array',
            of: [Skill]
        },
        {
            name: 'certificates',
            title: 'Certificates',
            type: 'array',
            of: [Certificate]
        },
        {
            name: 'projects',
            title: 'Projects',
            type: 'array',
            of: [Project]
        },
        {
            name: 'educations',
            title: 'Educations',
            type: 'array',
            of: [Education]
        },
        {
            name: 'experiences',
            title: 'Experiences',
            type: 'array',
            of: [Experience]
        },
    ],
    initialValue:{
        experiences: [],
        educations: [],
        skills: [],
        links: [],
        projects: [],
        certificates: [],
    }
} as DocumentDefinition