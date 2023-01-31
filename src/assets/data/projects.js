import L_league from "../../assets/imgs/projects/leagueOfLegend.png";
import L_simpleMovie from "../../assets/imgs/projects/simplemovie.png";
import L_covid from "../../assets/imgs/projects/covid-19-tracker.png";
import L_simpleChat from "../../assets/imgs/projects/simplechat.png";
import L_gitSearch from "../../assets/imgs/projects/git-search.png";
import L_Weather from "../../assets/imgs/projects/weather.png";
import L_REST_API from "../../assets/imgs/projects/REST_API.png";
import L_hanbok from "../../assets/imgs/projects/hanbok.png";
import L_sns from "../../assets/imgs/projects/sns.png";
import L_freshMeal from "../../assets/imgs/projects/freshMeal.png";
import L_FFUN from "../../assets/imgs/projects/FFUN.png";
import L_Family from "../../assets/imgs/projects/family.png";

// image on mac image size: 1413 x 885

// skills
import L_REACT from "../../assets/imgs/skills/react.svg";
import L_NODE_JS from "../../assets/imgs/skills/nodejs.svg";
import L_EXPRESS from "../../assets/imgs/skills/express.svg";
import L_Sqlite from "../../assets/imgs/skills/sqlite.png";
import L_Sass from "../../assets/imgs/skills/sass-1.svg";
import L_Mysql from "../../assets/imgs/skills/mysql.png";
import L_Socket from "../../assets/imgs/skills/socket_io.png";
import L_Material_ui from "../../assets/imgs/skills/material-ui-1.svg";
import L_Bootstrap from "../../assets/imgs/skills/bootstrap-4.svg";
import L_HighCharts from "../../assets/imgs/skills/highcharts.png";
import L_Typescript from "../../assets/imgs/skills/typescript.svg";
import L_Hapi_Joi from "../../assets/imgs/skills/hapi_joi.png";
import L_MongoDB from "../../assets/imgs/skills/mongoDB.png";
import L_AWS from "../../assets/imgs/skills/aws.png";
import L_docker from "../../assets/imgs/skills/docker.png";
import L_gitHubAction from "../../assets/imgs/skills/githubAction.png";
import L_CSS3 from "../../assets/imgs/skills/css3.svg";
import L_Jest from "../../assets/imgs/skills/jestlogo.png";
import L_ReactTestingLibrary from "../../assets/imgs/skills/react_testing_library.png";
import L_redis from "../../assets/imgs/skills/redis.png";
import L_Nginx from "../../assets/imgs/skills/nginx.png";
import L_Certbot from "../../assets/imgs/skills/certbot.png";
import L_Redux from "../../assets/imgs/skills/redux.svg";
import L_sinon from "../../assets/imgs/skills/sinon.png";
import L_Mocha from "../../assets/imgs/skills/mocha.png";

const COLOR = {
    purple: "bg-purple",
};

export const projects = [
    {
        id: 711,
        title: "Family",
        align: "",
        reveal: "left",
        time: "5:20 PM",
        date: "08/17/2021",
        innerColor: "github",
        iconColor: "bg-green",
        labelColor: "bg-green",
        imgSource: L_Family,
        description: "Website for my lovely dauther",
        features: ["Focused on code splitting", "Handle client-side data using redux and redux-toolkit.", "Implemented CI / CD pipeline using GitHub Actions and Docker compose to automate test and deployment.", "Perform unit tests and integration tests with Jest, sinon, mocha, chai and supertest."],
        technics: [
            { imgSource: L_REACT, name: "React" },
            { imgSource: L_NODE_JS, name: "Node.js" },
            { imgSource: L_EXPRESS, name: "Express" },
            { imgSource: L_Mysql, name: "MySql" },
            { imgSource: L_Redux, name: "Redux" },
            { imgSource: L_gitHubAction, name: " GitHub Action" },
            { imgSource: L_docker, name: "docker" },
            { imgSource: L_Sass, name: "Sass" },
            { imgSource: L_sinon, name: "sinon" },
            { imgSource: L_Mocha, name: "mocha" },
            { imgSource: L_Jest, name: "jest" },
            { imgSource: L_AWS, name: "aws" },
        ],
        clickButtons: [
            // {
            //   href: "",
            //   name: "SEE_LIVE",
            // },
            { href: "https://github.com/developert1990/Family", name: "JS_Code" },
        ],
    },
    {
        id: 700,
        title: "Vehicle Retail",
        align: "",
        reveal: "left",
        time: "5:20 PM",
        date: "08/17/2021",
        innerColor: "github",
        iconColor: "bg-green",
        labelColor: "bg-green",
        imgSource: L_FFUN,
        description: "Vehicle Management Application",
        features: ["Focused on code splitting", "Handle client-side data using redux and redux-thunk.", "Implemented CI / CD pipeline using GitHub Actions and Docker to automate test and deployment.", "Perform unit tests and integration tests with Jest, sinon, mocha, chai and supertest.", "Use HOC to manage pure rendering components with props"],
        technics: [
            { imgSource: L_REACT, name: "React" },
            { imgSource: L_NODE_JS, name: "Node.js" },
            { imgSource: L_EXPRESS, name: "Express" },
            { imgSource: L_MongoDB, name: "MongoDB" },
            { imgSource: L_Jest, name: "jest" },
            { imgSource: L_gitHubAction, name: " GitHub Action" },
            { imgSource: L_docker, name: "docker" },
            { imgSource: L_Material_ui, name: "Material-ui" },
            { imgSource: L_Sass, name: "Sass" },
            { imgSource: L_sinon, name: "sinon" },
            { imgSource: L_Mocha, name: "mocha" },
        ],
        clickButtons: [
            // {
            //     href: "http://ec2-3-236-55-54.compute-1.amazonaws.com:7010/",
            //     name: "SEE_LIVE",
            // },
            { href: "https://github.com/developert1990/FFUN", name: "JS_Code" },
        ],
    },
    {
        id: 701,
        title: "Fresh Meal",
        align: "left-aligned",
        reveal: "left",
        time: "10:20 PM",
        date: "06/12/2021",
        innerColor: "foodCommerce",
        iconColor: "bg-grey",
        labelColor: "bg-grey",
        imgSource: L_freshMeal,
        description: "Ordering Food Application",
        features: ["Handle client-side data using redux and redux-thunk.", "Implemented CI / CD pipeline using GitHub Actions and Docker to automate test and deployment.", "Perform unit tests and integration tests with Jest.", "Use HOC to manage pure rendering components with props"],
        technics: [
            { imgSource: L_REACT, name: "React" },
            { imgSource: L_gitHubAction, name: " GitHub Action" },
            { imgSource: L_docker, name: "docker" },
            { imgSource: L_Bootstrap, name: "Bootstrap" },
            { imgSource: L_Material_ui, name: "Material-ui" },
            { imgSource: L_Sass, name: "Sass" },
            { imgSource: L_Redux, name: "Redux" },
        ],
        clickButtons: [
            // {
            //   href: "http://ec2-3-236-55-54.compute-1.amazonaws.com:7002",
            //   name: "SEE_LIVE",
            // },
            {
                href: "https://github.com/developert1990/sultans_FreshFood",
                name: "JS_Code",
            },
        ],
    },
    {
        id: 702,
        title: "SNS",
        align: "",
        reveal: "left",
        time: "5:20 PM",
        date: "01/22/2021",
        innerColor: "SNS",
        iconColor: "bg-purple",
        labelColor: "bg-purple",
        imgSource: L_sns,
        description: "SNS Application",
        features: ["Handle client-side data using redux and redux-thunk.", "Implemented CI / CD pipeline using GitHub Actions and Docker to automate test and deployment.", "Perform unit tests and integration tests with Jest.", "Use session with redis for user authentication.", "Use socket.io for the real-time Connection and Communication"],
        technics: [
            { imgSource: L_REACT, name: "React" },
            { imgSource: L_NODE_JS, name: "Node.js" },
            { imgSource: L_EXPRESS, name: "Express" },
            { imgSource: L_MongoDB, name: "MongoDB" },
            { imgSource: L_Typescript, name: "TypeScript" },
            { imgSource: L_Jest, name: "jest" },
            { imgSource: L_AWS, name: "aws" },
            { imgSource: L_gitHubAction, name: " GitHub Action" },
            { imgSource: L_docker, name: "docker" },
            { imgSource: L_Bootstrap, name: "Bootstrap" },
            { imgSource: L_Material_ui, name: "Material-ui" },
            { imgSource: L_Sass, name: "Sass" },
            { imgSource: L_redis, name: "redis" },
        ],
        clickButtons: [
            // {
            //   href: "http://ec2-3-80-79-7.compute-1.amazonaws.com:8080",
            //   name: "SEE_LIVE",
            // },
            {
                href: "https://github.com/developert1990/Chatting-App-Client",
                name: "TS_Code",
            },
        ],
    },

    {
        id: 703,
        title: "E-commerce website for Korean Traditional costume",
        align: "left-aligned",
        reveal: "left",
        time: "4:34 AM",
        date: "01/18/2021",
        innerColor: "ecommerce",
        iconColor: "bg-danger",
        labelColor: "bg-danger",
        imgSource: L_hanbok,
        description: "E-commerce application focused on manage products and users and introduce Korean traditional costume.",
        features: ["Handle client-side data using redux and redux-thunk.", "Implemented CI/CD pipeline using GitHub Actions and Docker to automate test and deployment.", "Use Json Web Token (JWT) for user authentication."],
        technics: [
            { imgSource: L_REACT, name: "React" },
            { imgSource: L_NODE_JS, name: "Node.js" },
            { imgSource: L_EXPRESS, name: "Express" },
            { imgSource: L_MongoDB, name: "MongoDB" },
            { imgSource: L_Typescript, name: "TypeScript" },
            { imgSource: L_Hapi_Joi, name: "hapi_Joi" },
            { imgSource: L_Jest, name: "jest" },
            { imgSource: L_AWS, name: "aws" },
            { imgSource: L_gitHubAction, name: " GitHub Action" },
            { imgSource: L_docker, name: "docker" },
            { imgSource: L_Bootstrap, name: "Bootstrap" },
            { imgSource: L_Material_ui, name: "Material-ui" },
            { imgSource: L_Sass, name: "Sass" },
        ],
        clickButtons: [
            // {
            //   href: "http://ec2-3-80-79-7.compute-1.amazonaws.com:9001",
            //   name: "SEE_LIVE",
            // },
            // { href: "https://hanbok.netlify.app", name: "SEE_LIVE" },
            {
                href: "https://github.com/developert1990/Hanbok-E-client",
                name: "TS_Code",
            },
        ],
    },
    // "http://ec2-3-80-79-7.compute-1.amazonaws.com/"

    {
        id: 704,
        title: "League Of Legends Upgrading",
        align: "",
        reveal: "left",
        time: "12:45 AM",
        date: "Today",
        innerColor: "leagueOngoing",
        iconColor: "bg-darkYellow",
        labelColor: "bg-darkYellow",
        imgSource: L_league,
        description: "Explor player's information",
        features: ["Handle client-side data using redux and redux-thunk.", "Implemented CI/CD pipeline using GitHub Actions and Docker to automate test and deployment.", "Find user's rank by continent.", "Champion's detail with description and images", "Manage some states globally"],
        technics: [
            { imgSource: L_NODE_JS, name: "Node.js" },
            { imgSource: L_EXPRESS, name: "Express" },
            // { imgSource: L_Mysql, name: "MySql" },
            { imgSource: L_REACT, name: "React" },
            { imgSource: L_MongoDB, name: "MongoDB" },
            { imgSource: L_Nginx, name: "Nginx" },
            { imgSource: L_Certbot, name: "Certbot" },
            // { imgSource: L_Socket, name: "socket-io" },
            { imgSource: L_Bootstrap, name: "Bootstrap" },
            { imgSource: L_Material_ui, name: "Material-ui" },
            { imgSource: L_gitHubAction, name: " GitHub Action" },
            { imgSource: L_docker, name: "docker" },
            { imgSource: L_Sass, name: "Sass" },
            { imgSource: L_Jest, name: "Jest" },
            { imgSource: L_ReactTestingLibrary, name: "React Testing Library" },
        ],
        clickButtons: [
            // { href: "https://leagueoflegendhong.netlify.app", name: "SEE_LIVE" },
            {
                href: "https://github.com/developert1990/LOL-client",
                name: "TS_Client",
            },
            {
                href: "https://github.com/developert1990/LOL-server",
                name: "TS_Server",
            },
        ],
    },
    // "https://www.leagueoflegend.ml/"

    // {
    //     id: 705,
    //     title: "REST API",
    //     align: "left-aligned",
    //     reveal: "left",
    //     time: "3:34 PM",
    //     date: "11/04/2020",
    //     innerColor: "restApi",
    //     iconColor: "bg-blue",
    //     labelColor: "bg-blue",
    //     imgSource: L_REST_API,
    //     description: "This is simple REST API using node.js",
    //     features: ["Add information", "Delete information", "Update information", "Create information"],
    //     technics: [
    //         { imgSource: L_NODE_JS, name: "Node.js" },
    //         { imgSource: L_EXPRESS, name: "Express" },
    //         { imgSource: L_Sqlite, name: "Sqlite" },
    //         { imgSource: L_Typescript, name: "TypeScript" },
    //         { imgSource: L_Hapi_Joi, name: "hapi_Joi" },
    //     ],
    //     clickButtons: [
    //         { href: "none" },
    //         {
    //             href: "https://github.com/developert1990/REST_API_TypeScript_Nodejs",
    //             name: "TS_Code",
    //         },
    //     ],
    // },

    // {
    //   id: 706,
    //   title: "Github Search",
    //   align: "",
    //   reveal: "left",
    //   time: "9:15 AM",
    //   date: "10/24/2020",
    //   innerColor: "github",
    //   iconColor: "bg-green",
    //   labelColor: "bg-green",
    //   imgSource: L_gitSearch,
    //   description: "Search Github Users",
    //   features: [
    //     "Search Gibhub users",
    //     "Check repositories and followers and so on",
    //     "Perform unit tests and integration tests with Jest.",
    //     "Sign in, Sign up",
    //   ],
    //   technics: [
    //     { imgSource: L_REACT, name: "React" },
    //     { imgSource: L_NODE_JS, name: "Node.js" },
    //     { imgSource: L_EXPRESS, name: "Express" },
    //     { imgSource: L_MongoDB, name: "MongoDB" },
    //     { imgSource: L_Bootstrap, name: "Bootstrap" },
    //     { imgSource: L_Sass, name: "Sass" },
    //   ],
    //   clickButtons: [
    //     { href: "https://git-search-hong.netlify.app/", name: "SEE_LIVE" },
    //     {
    //       href: "https://github.com/developert1990/Git-Search_React.js",
    //       name: "JS_Code",
    //     },
    //   ],
    // },

    // {
    //   id: 707,
    //   title: "Weather-Application",
    //   align: "left-aligned",
    //   reveal: "right",
    //   time: "2:10 AM",
    //   date: "10/10/2020",
    //   innerColor: "weather",
    //   iconColor: "bg-purple",
    //   labelColor: "bg-purple",
    //   imgSource: L_Weather,
    //   description:
    //     "An app that can check the weather of cities all over the world.",
    //   features: [
    //     "Search city using API.",
    //     "Check weather today's information.",
    //     "Perform forecast Weather.",
    //   ],
    //   technics: [
    //     { imgSource: L_REACT, name: "React" },
    //     { imgSource: L_Typescript, name: "TypeScript" },
    //     { imgSource: L_Bootstrap, name: "Bootstrap" },
    //     { imgSource: L_Sass, name: "Sass" },
    //   ],
    //   clickButtons: [
    //     { href: "https://hong-weather.netlify.app", name: "SEE_LIVE" },
    //     {
    //       href: "https://github.com/developert1990/Weather_Typescript",
    //       name: "TS_Code",
    //     },
    //   ],
    // },

    {
        id: 708,
        title: "COVID-19 Tracker",
        align: "",
        reveal: "right",
        time: "4:20 AM",
        date: "08/11/2020",
        innerColor: "covidTrac",
        iconColor: "bg-lightRed",
        labelColor: "bg-lightRed",
        imgSource: L_covid,
        description: "An app that monitor and track the status of the world's COVID-19",
        features: ["Track COVID-19 each country", "Deaths, Recoveries, New Cases", "Keep following precautionary rules."],
        technics: [
            { imgSource: L_REACT, name: "React" },
            { imgSource: L_Typescript, name: "TypeScript" },
            { imgSource: L_Bootstrap, name: "Bootstrap" },
            { imgSource: L_Sass, name: "Sass" },
            { imgSource: L_CSS3, name: "CSS" },
            { imgSource: L_HighCharts, name: "HighCharts" },
        ],
        clickButtons: [
            { href: "https://covid-19-hong.netlify.app", name: "SEE_LIVE" },
            { href: "https://github.com/jadenHong/COVID-19", name: "JS_Code" },
        ],
    },
    {
        id: 709,
        title: "Simple Chat",
        align: "left-aligned",
        reveal: "right",
        time: "10:20 PM",
        date: "07/15/2020",
        innerColor: "simplechat",
        iconColor: "bg-grey",
        labelColor: "bg-grey",
        imgSource: L_simpleChat,
        description: "An Chatting application",
        features: ["Signin exiting user", "Icon selection", "Send text, video, photo."],
        technics: [
            { imgSource: L_REACT, name: "React" },
            { imgSource: L_NODE_JS, name: "Node.js" },
            { imgSource: L_EXPRESS, name: "Express" },
            { imgSource: L_Socket, name: "Socket-io" },
            { imgSource: L_CSS3, name: "CSS" },
            { imgSource: L_Mysql, name: "MySql" },
        ],
        clickButtons: [
            // { href: "https://simplechat-app.netlify.app", name: "SEE_LIVE" },
            {
                href: "https://github.com/developert1990/SimpleChat_React.js",
                name: "JS_Code",
            },
        ],
    },
    // {
    //     id: 710,
    //     title: "Simple Movie Application",
    //     align: "",
    //     reveal: "right",
    //     time: "8:20 PM",
    //     date: "07/03/2020",
    //     innerColor: "simplemovie",
    //     iconColor: "bg-green",
    //     labelColor: "bg-green",
    //     imgSource: L_simpleMovie,
    //     description: "An movie app with multiple functions",
    //     features: ["Register new user", "Signin exiting user", "Weather information you live in.", "Movie information", "Bulletin Service"],
    //     technics: [
    //         { imgSource: L_REACT, name: "React" },
    //         { imgSource: L_NODE_JS, name: "Node.js" },
    //         { imgSource: L_EXPRESS, name: "Express" },
    //         { imgSource: L_Bootstrap, name: "Bootstrap" },
    //         { imgSource: L_Sass, name: "Sass" },
    //         { imgSource: L_Mysql, name: "MySql" },
    //         { imgSource: L_Typescript, name: "TypeScript" },
    //     ],
    //     clickButtons: [
    //         { href: "https://simplemovie.netlify.app", name: "SEE_LIVE" },
    //         { href: "https://github.com/jadenHong/movie-app-view", name: "TS_Code" },
    //     ],
    // },
];
