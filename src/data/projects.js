const projects = [
    {
        id: 'citibank-bsi',
        name: 'Altimetrik : Citi Bank - BSI',
        summary: 'Improved security posture and application performance; automated migration of ~150 repositories.',
        tasks: [
            'Reduce Security vulnerabilities utilising tools like BlackDuck.',
            'Enhanced Functionalities and improved velocity of the application.',
            'Script for the migration of nearly 150 repos from BitBucket to GitHub.'
        ],
        role: 'Senior Staff Engineer- Product and Platform Engineering',
        date: '2025',
        tech: ['Java-17', 'SpringBoot 3', 'MongoDB', 'EMS', 'OpenShift', 'Docker', 'Kubernetes']
    },
    {
        id: 'bhn-bloom',
        name: 'Altimetrik : BHN - Bloom',
        summary: 'Scaled and stabilized the service to 800 TPS with resource-efficient cloud usage and distributed locking.',
        tasks: [
            'Enhanced app to accommodate 800 TPS with the low utility of cloud resources.',
            'Implemented a distributed lock to provide high - accuracy responses in multithreaded applications.',
            'Enhanced Functionalities and brought stability to the application.'
        ],
        role: 'Senior Staff Engineer- Product and Platform Engineering',
        date: '2024-2025',
        tech: ['Java-17', 'SpringBoot 3.2', 'MongoDB', 'MultiThreading', 'AWS', 'Docker', 'Redis']
    },
    {
        id: 'bhn-raptor',
        name: 'Altimetrik : BHN - Raptor',
        summary: 'Boosted application performance by over 20% and improved stability through multithreading and cloud optimizations.',
        tasks: [
            'Improved application performance by more than 20% with the low utility of cloud resources.',
            'Enhanced Functionalities and brought stability to the application.'
        ],
        role: 'Senior Staff Engineer- Product and Platform Engineering',
        date: '2024',
        tech: ['Java-17', 'SpringBoot 3.2', 'MultiThreading', 'AWS', 'Docker', 'ReactJS']
    },
    {
        id: 'apiwiz',
        name: 'APIwiz : Api-Compliance, Monitoring, TestSuite, Portfolio, Design-studio',
        summary: 'Designed Portfolio module and engineered system for 1K TPS with caching, HA, strong encryption, and fast on-prem deployment.',
        tasks: [
            'Designed and implemented the Portfolio module for the overall purview of the active system.',
            'Enhanced app to accommodate 1K TPS with the low utility of cloud resources.',
            'Caching & rate limiting using Hazelcast to increase throughput.',
            'Utilised RabbitMQ for consistent API data updation.',
            'Implemented 256 - bit encryption and masking for sensitive data.',
            'Implemented high availability of the application utilising Kubernetes features.',
            'Speedy deployment for on - prem installations using the Docker Compose.'
        ],
        role: 'Lead Platform Engineer',
        date: '2022–2024',
        tech: ['Java-11', 'SpringBoot 2.7', 'MongoDB', 'Hazelcast', 'Caching', 'MultiThreading', 'Encryption', 'Hashing', 'PostgreSQL', 'AWS', 'GCP', 'Kubernetes', 'Docker', 'RabbitMQ']
    },
    {
        id: 'brillio',
        name: 'Brillio Technologies : eBay.com - People Management System',
        summary: 'Architected and migrated a 15-service people management platform to Spring Boot, improving security and response times.',
        tasks: [
            'Designed the architecture for 15 intercommunicating microservices intended for internal People Management systems.',
            'Utilise security, and caching to improve security and response time.',
            'Designed and Integrated the migration of the people management system from existing System of PLSQL and J2EE stack to Springboot, Hibernate stack.'
        ],
        role: 'Solution Architect',
        date: '2021-2022',
        tech: ['Java-8', 'SpringBoot 2.4', 'Microservices', 'Caching', 'MultiThreading', 'SQL', 'Oracle', 'Redis']
    },
    {
        id: 'ig-ao',
        name: 'IG Infotech : Account Opening',
        summary: 'Onboarded new clients by configuring and maintaining 25 production services and developing Cucumber test suites.',
        tasks: [
            'Configure Spring boot applications to accommodate new client onboarding.',
            'Manage and upgrade 25 different highly functional applications serving millions of traders across the globe.',
            'Compile Functional and Acceptance test cases using the Cucumber frameworks.'
        ],
        role: 'Software Engineer',
        date: '2019–2021',
        tech: ['Java-8', 'SpringBoot 2.4', 'Microservices', 'Caching', 'MultiThreading', 'SQL', 'Oracle']
    },
    {
        id: 'bis-mig',
        name: 'NSCGlobal : AT&T Business Information System Migrations',
        summary: 'Led migration to Spring Boot microservices with MQ integration and JDK8 optimizations to reduce latency.',
        tasks: [
            'Design, Build, and Deploy Spring Boot applications utilizing Microservices architecture for the network model of the systems.',
            'Utilize MQ objects(request, reply, topics, queues) suitable to the RabbitMQ to enhance the reliability of the systems.',
            'Provide architectural ideologies(POCs) to utilize the JDK8 functionalities to reduce the latency on the responses from the applications.'
        ],
        role: 'Senior Engineer',
        date: '2018–2019',
        tech: ['Java-8', 'SpringBoot', 'Microservices', 'SQL', 'Oracle', 'RabbitMQ']
    },
    {
        id: 'bis',
        name: 'NSCGlobal : AT&T Business Information System',
        summary: 'Maintained and supported EJB/J2EE WebSphere environments across 27 mission-critical applications.',
        tasks: [
            'Develop, Configure, Deploy, and Manage IBM Websphere 7.0 Java client runtimes to provide a test environment.Utilize MQ objects(request, remote, reply, transmission queues).Provide Support for the existing Consumers of the EJB applications during downtime.',
            'Manage and sustain 27 different highly functional applications serving millions of consumers across different regions of the United States of America.'
        ],
        role: 'Support Engineer',
        date: '2017–2018',
        tech: ['Java-5', 'J2EE', 'MultiThreading', 'SQL', 'Oracle', 'IBM WebSphere']
    },
    {
        id: 'aurora',
        name: 'Attra Infotech Pvt.Ltd : GE - Aurora',
        summary: 'Built JAX-WS services, PDF conversion, and automated ETL workflows on WebSphere to support GE integrations.',
        tasks: [
            'Configure, Deploy, and Manage IBM Websphere 8.5 client runtimes to provide a test environment.',
            'Build JAX - WS service binding producers and client implementation from WSDL contracts.',
            'Developed a solution for the multi - format WebService response to have a common format request to various other web services internally to provide the requested data.',
            'Design a WebService to convert dynamic forms to PDFs using Adobe LiveCycle ES2.',
            'Automate Informatica scheduled jobs, file transfers using FTP jobs using Control - M.'
        ],
        role: 'Integration Engineer',
        date: '2013–2017',
        tech: ['Java-7', 'Spring MVC', 'MultiThreading', 'SQL', 'Oracle', 'Adobe LiveCycle', 'IBM-WebsphereMQ', 'SOAP', 'Control-M']
    },
];

export default projects;