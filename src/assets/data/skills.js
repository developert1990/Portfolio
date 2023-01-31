import L_HTML5 from "../imgs/skills/html-5.svg";
import L_CSS3 from "../imgs/skills/css3.svg";
import L_SASS from "../imgs/skills/sass-1.svg";
import L_BOOTSTRAP from "../imgs/skills/bootstrap-4.svg";
import L_REACT from "../imgs/skills/react.svg";
import L_REDUX from "../imgs/skills/redux.svg";
import L_REACT_ROUTER from "../imgs/skills/react-router.svg";
import L_REACT_BOOTSTRAP from "../imgs/skills/react-bootstrap.svg";
import L_MATERIALUI from "../imgs/skills/material-ui-1.svg";
import L_NODE_JS from "../imgs/skills/nodejs.svg";
import L_EXPRESS from "../imgs/skills/express.svg";
import L_DJANGO from "../imgs/skills/django.svg";
import L_Hapi_Joi from "../imgs/skills/hapi_joi.png";
import L_Jest from "../imgs/skills/jestlogo.png";
import L_ReactTestingLibrary from "../imgs/skills/react_testing_library.png";
// import L_POSTGRESQL from "../imgs/skills/postgresql.svg";
import L_ORACLESQL from "../imgs/skills/oraclesql.png";
import L_MYSQL from "../imgs/skills/mysql.png";
// import L_MSSQL from "../imgs/skills/mssql.svg";
import L_GIT from "../imgs/skills/git-icon.svg";
import L_HEROKU from "../imgs/skills/heroku.svg";
import L_GITHUB_PAGES from "../imgs/skills/github.svg";
import L_NETLIFY from "../imgs/skills/netlify.png";
import L_JAVASCRIPT from "../imgs/skills/javascript.svg";
import L_TYPESCRIPT from "../imgs/skills/typescript.svg";
import L_MONGODB from "../imgs/skills/mongoDB.png";
import L_GOLANG from "../imgs/skills/go-6.svg";
import L_JAVA from "../imgs/skills/java.webp";
import L_PYTHON from "../imgs/skills/python.svg";
import L_Sqlite from "../imgs/skills/sqlite.png";
import L_GitHubAction from "../imgs/skills/githubAction.png";
import L_Docker from "../imgs/skills/docker.png";
import L_Redis from "../imgs/skills/redis.png";
import L_AWS from "../imgs/skills/aws.png";
import L_DYNAMODB from "../imgs/skills/DynamoDB.png";
import L_API_Gateway from "../imgs/skills/api-gateway.svg";
import L_COGNITO from "../imgs/skills/cognito.svg";
import L_REACT_NATIVE from "../imgs/skills/react-native.png";
import L_MOCHA from "../imgs/skills/mocha.png";
import L_SINON from "../imgs/skills/sinon.png";
import L_BITBUCKET from "../imgs/skills/bitbucket.png";
import L_SOURCETREE from "../imgs/skills/sourcetree.png";
import L_LARAVEL from "../imgs/skills/laravel.png";
import L_PHP from "../imgs/skills/php.png";
import L_VUE from "../imgs/skills/vue.png";

export const skillsData = {
    frontend: [
        {
            link: "https://en.wikipedia.org/wiki/HTML5",
            imgAltText: "HTML 5",
            imgSrc: L_HTML5,
            skillName: "HTML5",
        },
        {
            link: "https://medium.com/beginners-guide-to-mobile-web-development/whats-new-in-css-3-dcd7fa6122e1",
            imgAltText: "CSS 3",
            imgSrc: L_CSS3,
            skillName: "CSS3",
        },
        {
            link: "https://www.javascript.com/",
            imgAltText: "JavaScript",
            imgSrc: L_JAVASCRIPT,
            skillName: "JavaScript",
        },
        {
            link: "https://sass-lang.com/",
            imgAltText: "Sass",
            imgSrc: L_SASS,
            skillName: "Sass",
        },
        {
            link: "https://getbootstrap.com/",
            imgAltText: "Bootstrap",
            imgSrc: L_BOOTSTRAP,
            skillName: "Bootstrap",
        },
        {
            link: "https://reactjs.org/",
            imgAltText: "React JS",
            imgSrc: L_REACT,
            skillName: "React JS",
        },
        {
            link: "https://redux.js.org/",
            imgAltText: "Redux",
            imgSrc: L_REDUX,
            skillName: "Redux",
        },
        {
            link: "https://facebook.github.io/flux/",
            imgAltText: "React Native",
            imgSrc: L_REACT_NATIVE,
            skillName: "React Native",
        },
        {
            link: "https://reacttraining.com/react-router/",
            imgAltText: "React Router",
            imgSrc: L_REACT_ROUTER,
            skillName: "React Router",
        },
        {
            link: "https://react-bootstrap.github.io/",
            imgAltText: "React Bootstrap",
            imgSrc: L_REACT_BOOTSTRAP,
            skillName: "React Bootstrap",
        },
        {
            link: "https://material-ui.com/",
            imgAltText: "Material-UI",
            imgSrc: L_MATERIALUI,
            skillName: "Material-UI",
        },
        {
            link: "https://vuejs.org/",
            imgAltText: "Vue",
            imgSrc: L_VUE,
            skillName: "Vue",
        },
    ],

    backend: [
        {
            link: "https://nodejs.org/en/",
            imgAltText: "Node.js",
            imgSrc: L_NODE_JS,
            skillName: "Node.js",
        },
        {
            link: "https://expressjs.com/",
            imgAltText: "Express",
            imgSrc: L_EXPRESS,
            skillName: "Express",
        },
        {
            link: "https://aws.amazon.com/api-gateway/",
            imgAltText: "API Gateway",
            imgSrc: L_API_Gateway,
            skillName: "API Gateway",
        },
        {
            link: "https://www.npmjs.com/package/@hapi/joi",
            imgAltText: "Hapi Joi",
            imgSrc: L_Hapi_Joi,
            skillName: "Hapi Joi",
        },
        {
            link: "https://aws.amazon.com/cognito/",
            imgAltText: "cognito",
            imgSrc: L_COGNITO,
            skillName: "cognito",
        },
        {
            link: "https://laravel.com/",
            imgAltText: "LARAVEL",
            imgSrc: L_LARAVEL,
            skillName: "Laravel",
        },
    ],
    hostingPlatforms: [
        {
            link: "https://www.heroku.com/",
            imgAltText: "Heroku",
            imgSrc: L_HEROKU,
            skillName: "Heroku",
        },
        // {
        //     link: "https://www.digitalocean.com/",
        //     imgAltText: "Digital Ocean",
        //     imgSrc: L_DIGITAL_OCEAN,
        //     skillName: "Digital Ocean",
        // },
        {
            link: "https://pages.github.com/",
            imgAltText: "GitHub Pages",
            imgSrc: L_GITHUB_PAGES,
            skillName: "GitHub Pages",
        },
        {
            link: "https://www.netlify.com/",
            imgAltText: "Netlify",
            imgSrc: L_NETLIFY,
            skillName: "Netlify",
        },
        {
            link: "https://aws.amazon.com/",
            imgAltText: "aws",
            imgSrc: L_AWS,
            skillName: "aws",
        },
    ],
    programmingLanguages: [
        {
            link: "https://java.com/",
            imgAltText: "Java",
            imgSrc: L_JAVA,
            skillName: "Java",
        },
        {
            link: "https://www.javascript.com/",
            imgAltText: "JavaScript",
            imgSrc: L_JAVASCRIPT,
            skillName: "JavaScript",
        },
        {
            link: "https://www.typescriptlang.org/",
            imgAltText: "TypeScript",
            imgSrc: L_TYPESCRIPT,
            skillName: "TypeScript",
        },
        {
            link: "https://www.python.org/",
            imgAltText: "Python",
            imgSrc: L_PYTHON,
            skillName: "Python",
        },
        {
            link: "https://www.php.net/",
            imgAltText: "php",
            imgSrc: L_PHP,
            skillName: "php",
        },
        // {
        //     link: "https://golang.org/",
        //     imgAltText: "Golang",
        //     imgSrc: L_GOLANG,
        //     skillName: "Golang",
        // },
    ],
    databases: [
        {
            link: "https://www.sqlite.org/index.html",
            imgAltText: "Sqlite",
            imgSrc: L_Sqlite,
            skillName: "Sqlite",
        },
        {
            link: "https://www.oracle.com/index.html",
            imgAltText: "ORACLE_SQL",
            imgSrc: L_ORACLESQL,
            skillName: "ORACLE_SQL",
        },
        {
            link: "https://www.mysql.com/",
            imgAltText: "MYSQL",
            imgSrc: L_MYSQL,
            skillName: "MYSQL",
        },
        {
            link: "https://www.mongodb.com/",
            imgAltText: "MongoDB",
            imgSrc: L_MONGODB,
            skillName: "MongoDB",
        },
        {
            link: "https://redis.io/",
            imgAltText: "redis",
            imgSrc: L_Redis,
            skillName: "redis",
        },
        {
            link: "https://aws.amazon.com/dynamodb/",
            imgAltText: "DynamoDB",
            imgSrc: L_DYNAMODB,
            skillName: "DynamoDB",
        },
    ],
    versionControl: [
        {
            link: "https://git-scm.com/",
            imgAltText: "GIT",
            imgSrc: L_GIT,
            skillName: "Git",
        },
        {
            link: "https://bitbucket.org/",
            imgAltText: "BITBUCKET",
            imgSrc: L_BITBUCKET,
            skillName: "Bitbucket",
        },
        {
            link: "https://www.sourcetreeapp.com/",
            imgAltText: "SOURCETREE",
            imgSrc: L_SOURCETREE,
            skillName: "Sourcetree",
        },
    ],
    CICD: [
        {
            link: "https://github.com/features/actions",
            imgAltText: "GitHub Action",
            imgSrc: L_GitHubAction,
            skillName: "GitHub Action",
        },
    ],
    Testing: [
        {
            link: "https://jestjs.io/docs/en/getting-started",
            imgAltText: "jest",
            imgSrc: L_Jest,
            skillName: "jest",
        },
        {
            link: "https://testing-library.com/docs/react-testing-library/intro/",
            imgAltText: "React Testing Library",
            imgSrc: L_ReactTestingLibrary,
            skillName: "React Testing Library",
        },
        {
            link: "https://sinonjs.org/",
            imgAltText: "Sinon",
            imgSrc: L_SINON,
            skillName: "Sinon",
        },
        {
            link: "https://mochajs.org/",
            imgAltText: "Mocha",
            imgSrc: L_MOCHA,
            skillName: "Mocha",
        },
    ],
    Containerization_Platform: [
        {
            link: "https://www.docker.com/",
            imgAltText: "docker",
            imgSrc: L_Docker,
            skillName: "docker",
        },
    ],
};
