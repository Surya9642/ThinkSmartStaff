export type Job = { id:string; title:string; technology:string; location:string; experience:string; type:string; mode:string; description:string; skills:string[]; responsibilities:string[] }
export const jobs:Job[] = [
 {id:'senior-react-engineer',title:'Senior React Engineer',technology:'Frontend',location:'Bengaluru, India',experience:'5+ years',type:'Full-time',mode:'Hybrid',description:'Shape accessible, high-performing product experiences with a collaborative engineering team.',skills:['React','TypeScript','Design systems','Testing'],responsibilities:['Build reliable user interfaces','Partner with design and product','Improve performance and accessibility']},
 {id:'cloud-platform-engineer',title:'Cloud Platform Engineer',technology:'Cloud & DevOps',location:'Remote — India',experience:'4+ years',type:'Contract',mode:'Remote',description:'Help teams build secure, observable cloud platforms that scale with their products.',skills:['AWS','Kubernetes','Terraform','CI/CD'],responsibilities:['Automate cloud infrastructure','Improve observability','Collaborate on platform standards']},
 {id:'data-scientist',title:'Data Scientist',technology:'Data & AI',location:'Austin, USA',experience:'3+ years',type:'Full-time',mode:'On-site',description:'Turn complex data into useful insights and dependable machine learning products.',skills:['Python','SQL','Machine learning','MLOps'],responsibilities:['Explore and model data','Deploy and monitor models','Explain insights to stakeholders']},
 {id:'dotnet-developer',title:'.NET Application Developer',technology:'Enterprise Apps',location:'Pune, India',experience:'5+ years',type:'Permanent',mode:'Hybrid',description:'Modernize enterprise applications with thoughtful architecture and strong engineering practices.',skills:['C#','ASP.NET Core','Azure','SQL'],responsibilities:['Design APIs and services','Maintain quality through tests','Support modernization initiatives']},
 {id:'qa-automation',title:'QA Automation Engineer',technology:'Quality Assurance',location:'Remote — USA',experience:'2+ years',type:'Contract',mode:'Remote',description:'Build confidence in releases through practical automation and clear quality signals.',skills:['Playwright','TypeScript','API testing','CI'],responsibilities:['Create maintainable test suites','Partner with developers','Report actionable quality metrics']},
 {id:'ios-engineer',title:'iOS Engineer',technology:'Mobile',location:'Hyderabad, India',experience:'4+ years',type:'Full-time',mode:'Hybrid',description:'Create polished mobile experiences for customers across a growing product portfolio.',skills:['Swift','SwiftUI','REST APIs','App Store'],responsibilities:['Build user-focused features','Maintain app quality','Work with product and design']}
]
export const technologyGroups = [
 {category:'Software Development',items:['React','Angular','Vue.js','Node.js','Python','Java','C# / .NET','PHP','Go','Ruby']},
 {category:'Cloud & DevOps',items:['AWS','Microsoft Azure','Google Cloud','Docker','Kubernetes','Terraform','CI/CD','Linux']},
 {category:'Data & AI',items:['Python','Machine Learning','Generative AI','Data Engineering','Power BI','SQL','TensorFlow','MLOps']},
 {category:'Enterprise Applications',items:['Salesforce','SAP','Microsoft Dynamics','ServiceNow','Workday','Oracle']},
 {category:'Quality Assurance',items:['Manual Testing','Automation Testing','Playwright','Selenium','Performance Testing','API Testing']},
 {category:'Cybersecurity & Infrastructure',items:['Cloud Security','Network Engineering','SOC','IAM','Infrastructure Support','Security Testing']}
]
export const services = [
 {title:'Custom software',slug:'custom-software',desc:'Purpose-built applications aligned to your workflows, customers and growth plans.',icon:'✳'},
 {title:'Web development',slug:'web-development',desc:'Accessible websites and web applications engineered for speed and scale.',icon:'⌘'},
 {title:'Mobile applications',slug:'mobile-app-development',desc:'Useful iOS and Android experiences from discovery through delivery.',icon:'▣'},
 {title:'Cloud solutions',slug:'cloud-solutions',desc:'Cloud architecture, migration and DevOps practices built for resilience.',icon:'☁'},
 {title:'Application modernization',slug:'application-modernization',desc:'Make legacy systems easier to evolve, integrate and operate.',icon:'↗'},
 {title:'API integration',slug:'api-integration',desc:'Connect platforms and data with secure, maintainable integrations.',icon:'⟷'},
 {title:'Software testing',slug:'software-testing',desc:'Improve release confidence with quality engineering and test automation.',icon:'◎'},
 {title:'Maintenance & support',slug:'maintenance-support',desc:'Keep critical applications secure, dependable and ready for what is next.',icon:'◌'}
]
export const industries = ['Information Technology','Banking & Financial Services','Healthcare','Manufacturing','Retail & E-commerce','Education','Telecommunications','Logistics','Construction','Hospitality']
