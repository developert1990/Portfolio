import L_Acuspire from "../imgs/experience/acuspire.png";
import L_Goodszilla from "../imgs/experience/goodszilla.jpeg";

export const experiences = [
    {
        id: 1,
        role: "Full-Stack Software Developer",
        align: "",
        reveal: "right",
        endDate: "Present",
        startDate: "From 03/01/2023",
        innerColor: "acuspire",
        iconColor: "bg-dark",
        labelColor: "bg-dark",
        imgSource: '',
        company: "DFN Freight Exchange Inc",
        features: [
            "Leveraging both <span>Nest.js</span> and <span>Vue.js</span>, I successfully built, maintained and upgraded a new application which resulted in new customers.",
            "Successfully collaborated with teams from different parts of the organization as well as customers to develop the freight transportation platform.",
            "Created end-to-end test automation suite with <span>Cypress</span> to save time spent on manual application testing.",
            "Create scalable code for customer business solutions, identify bugs and product defects, and coordinate with team members to resolve critical technical issues.",
            "Collaborate team members to improve the application by participating in code reviews and paired programming sessions",
        ],
        link: [
            {
                href: "https://www.linkedin.com/company/dfn-freight-exchange/",
                name: "Link",
            },
        ],
    },
    {
        id: 2,
        role: "Full-Stack Software Developer",
        align: "",
        reveal: "right",
        endDate: "02/28/2023",
        startDate: "From 09/20/2021",
        innerColor: "acuspire",
        iconColor: "bg-dark",
        labelColor: "bg-dark",
        imgSource: L_Acuspire,
        company: "Acuspire",
        features: [
            "Leveraging both <span>Laravel</span> and <span>Vue.js</span>, I successfully built, maintained and upgraded a new application (joboffer.com) which resulted in new customers.",
            "Refactored legacy code to replace into modern which resulted in more readable and maintainable code.",
            "Collaborated with customers to understand their unique needs in order to design a new application and features utilizing <span>Vue.js</span>.",
            "Participated in upgrading and optimizing <span>MySQL</span> queries to improve system performance.",
            "Used <span>Sentry</span> to monitor and fix issues in a timely manner.",
            "Tested transactional emails using <span>Mailtrap</span>.",
            "Resolved front-end usability problems reported by customers and management.",
            "Logged <span>Git</span> commits daily and tracked work via Atlassian <span>JIRA</span>.",
            "Submitted demo videos and pull requests of completed code for approval.",
        ],
        link: [
            {
                href: "https://www.linkedin.com/company/acuspire/",
                name: "Link",
            },
        ],
    },
    {
        id: 3,
        role: "Full-Stack Software Developer",
        align: "left-aligned",
        reveal: "left",
        endDate: "09/01/2021",
        startDate: "From 05/01/2021",
        innerColor: "goodszilla",
        iconColor: "bg-blue",
        labelColor: "bg-blue",
        imgSource: L_Goodszilla,
        company: "Goodszilla",
        features: ["Working on Front-end with <span>React.js</span> and <span>React Native</span>", "Working on Back-end with <span>Node.js (serverless, AWS lambda and DynamoDB)</span>"],
        link: [
            {
                href: "https://www.linkedin.com/company/goodszillapp/",
                name: "Link",
            },
        ],
    },
];
