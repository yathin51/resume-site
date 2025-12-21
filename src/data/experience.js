const experiences = [
    {
        id: 'altimetrik',
        role: 'Senior Staff Engineer - Product and Platform Engineering',
        company: 'Altimetrik India Private Limited',
        period: 'March 2024 - December 2025',
        location: 'Bengaluru, India',
        companyLogo: '/assets/logos/altimetrik.png',
        summary: 'Directed platform reliability and microservices initiatives, elevating security, performance, and cost efficiency across enterprise systems.',
        background: 'At Altimetrik, I played a pivotal role in strengthening the company’s product and platform engineering capabilities. My focus was on securing applications against vulnerabilities, optimizing microservices throughput, and reducing cloud expenditure. I partnered closely with product and operations teams to design resilient architectures, improve deployment velocity, and raise engineering standards for observability and testing.',
        achievements: [
            'Eliminated critical vulnerabilities and improved overall security posture using Blackduck and secure coding practices.',
            'Enhanced code robustness by adopting advanced Spring Boot features and platform best practices.',
            'Achieved over 20% reduction in AWS cloud costs through rightsizing, architectural improvements, and resource optimization.',
            'Optimized systems to sustain 800+ TPS with minimal cloud resource usage while preserving reliability.',
            'Implemented React-based UI enhancements and resolved frontend defects, improving usability and customer experience.'
        ],
        bullets: [
            'Led platform-wide security remediation and continuous SCA scanning with Blackduck.',
            'Refactored services to leverage Spring Boot 3.x features for stability and observability.',
            'Introduced containerized deployments and Kubernetes patterns to improve scalability and delivery.',
            'Executed cost-optimization initiatives on AWS yielding 20%+ savings.',
            'Delivered frontend improvements and bug fixes using React to raise UX quality.'
        ],
        tech: ['JDK17', 'Spring Boot 3.2', 'Docker', 'Kubernetes', 'AWS', 'MongoDB', 'Redis', 'Prometheus', 'Grafana', 'Blackduck', 'ReactJS', 'Oracle DB', 'Apache Apisix', 'AWS SQS/SNS']
    },
    {
        id: 'apiwiz',
        role: 'Lead Platform Engineer',
        company: 'APIwiz (Itorix Software Pvt. Ltd.)',
        period: 'June 2022 - January 2024',
        location: 'Bengaluru, India',
        companyLogo: '/assets/logos/apiwiz.svg',
        summary: 'Architected flagship API modules and optimized cloud-native systems, delivering secure, scalable, and cost-efficient API ecosystems.',
        background: 'At APIwiz, I spearheaded platform engineering initiatives that defined the company’s API ecosystem strategy. I pioneered the flagship API Compliance module, enabling traffic management, compliance monitoring, and real-time visualization. I also crafted the Portfolio module to provide deep operational insights. My work optimized performance to 1000 TPS with minimal resource usage, reduced cloud expenditure by over 20%, and strengthened security with advanced encryption and masking. Through Kubernetes and Docker orchestration, I ensured high availability and rapid deployments, while engaging directly with customers to support adoption of new features.',
        achievements: [
            'Pioneered the architecture and development of the flagship API Compliance module, a cornerstone for API traffic management, compliance monitoring, and real-time traffic visualization.',
            'Enhanced code robustness by integrating advanced Spring Boot features.',
            'Achieved over 20% reduction in cloud expenditure across AWS and GCP platforms.',
            'Crafted and deployed the Portfolio module to deliver comprehensive insights into system operations.',
            'Optimized application performance to support 1000 TPS with minimal cloud resource utilization.',
            'Boosted throughput via Hazelcast for caching & rate limiting, and leveraged RabbitMQ for reliable API data synchronization.',
            'Fortified data security by implementing 256-bit encryption and data masking protocols.',
            'Ensured high application availability and rapid on-prem deployment through Kubernetes orchestration and Docker Compose.',
            'Led customer engagement, delivering knowledge transfer and support for newly released features.'
        ],
        bullets: [
            'Architected and delivered flagship API Compliance and Portfolio modules.',
            'Cut cloud costs by 20% across AWS and GCP.',
            'Optimized performance to sustain 1000 TPS with lean infrastructure.',
            'Implemented Hazelcast caching & rate limiting and RabbitMQ synchronization.',
            'Applied 256-bit encryption and data masking for enterprise-grade security.',
            'Enabled high availability and rapid deployments with Kubernetes and Docker.',
            'Enhanced system resilience using advanced Spring Boot features.',
            'Partnered with customers to drive adoption of new features.'
        ],
        tech: ['JDK11', 'Spring Boot 2.7', 'MongoDB', 'Hazelcast', 'Caching', 'Multithreading', 'Encryption', 'Hashing', 'PostgreSQL', 'AWS', 'GCP', 'Kubernetes', 'Docker', 'InfluxDB', 'Grafana', 'API Gateway', 'OAuth2', 'Prometheus', 'Datadog', 'RabbitMQ', 'Agile/Scrum']
    },
    {
        id: 'brillio',
        role: 'Senior Technical Consultant',
        company: 'Brillio Technologies',
        period: 'Aug 2021 - May 2022',
        location: 'Bengaluru, India',
        companyLogo: '/assets/logos/generic.svg',
        summary: 'Spearheaded architectural design and modernization of eBay’s People Management systems, migrating legacy stacks to modern microservices.',
        background: 'At Brillio, I led architectural design for a suite of 15 interconnected microservices, enhancing eBay’s internal People Management systems. I implemented robust security measures and caching strategies to bolster system security and optimize response times. I orchestrated a seamless migration from legacy PLSQL/J2EE to a modern Spring Boot and Hibernate framework, ensuring scalability and maintainability.',
        achievements: [
            'Spearheaded architectural design for 15 interconnected microservices.',
            'Implemented robust security measures and caching strategies.',
            'Orchestrated migration from legacy PLSQL/J2EE to Spring Boot and Hibernate.'
        ],
        bullets: [
            'Designed architecture for microservices powering People Management systems.',
            'Implemented caching and security enhancements.',
            'Migrated legacy stack to Spring Boot and Hibernate.'
        ],
        tech: ['Java', 'Spring Boot', 'Hibernate', 'PLSQL', 'Caching', 'Microservices', 'Oracle DB', 'Redis', 'Agile/Scrum']
    },
    {
        id: 'iginfotech',
        role: 'Senior Developer',
        company: 'IG Infotech',
        period: 'Dec 2019 - Aug 2021',
        location: 'Bengaluru, India',
        companyLogo: '/assets/logos/generic.svg',
        summary: 'Developed and managed trading applications, streamlining onboarding and ensuring reliability for millions of users worldwide.',
        background: 'At IG Infotech, I spearheaded configuration of Spring Boot applications to streamline onboarding processes at IG, a premier derivatives trading broker. I oversaw the management and enhancement of 25 robust applications, ensuring seamless trading experiences for millions worldwide. I also developed comprehensive Functional and Acceptance test suites utilizing the Cucumber framework to maintain high-quality software delivery.',
        achievements: [
            'Configured Spring Boot applications to streamline onboarding.',
            'Managed and enhanced 25 trading applications.',
            'Developed Functional and Acceptance test suites with Cucumber.'
        ],
        bullets: [
            'Configured Spring Boot apps for onboarding.',
            'Managed 25 trading applications.',
            'Built test suites with Cucumber.'
        ],
        tech: ['JDK8', 'Spring Boot', 'Cucumber', 'Agile/Scrum', 'Microservices', 'Oracle DB']
    },
    {
        id: 'nscglobal',
        role: 'Senior Software Engineer',
        company: 'NSC Global',
        period: 'Dec 2018 - Dec 2019',
        location: 'Bengaluru, India',
        companyLogo: '/assets/logos/generic.svg',
        summary: 'Engineered Spring Boot microservices and optimized network system models, enhancing reliability, scalability, and performance.',
        background: 'In my second tenure at NSC Global, I focused on modernizing network system models through microservices architecture. I engineered and launched Spring Boot applications, improved system reliability with RabbitMQ, and implemented JDK8 to reduce response times. I also built proof-of-concepts for architectural improvements, ensuring the platform evolved with scalability and performance in mind.',
        achievements: [
            'Engineered and launched Spring Boot microservices to optimize network system models.',
            'Enhanced system reliability and resilience using RabbitMQ.',
            'Implemented JDK8 features to cut response times and improve efficiency.',
            'Built proof-of-concepts for architectural improvements to support scalability.'
        ],
        bullets: [
            'Developed Spring Boot microservices for network optimization.',
            'Improved reliability with RabbitMQ messaging.',
            'Reduced response times by leveraging JDK8.',
            'Created POCs to validate architectural improvements.'
        ],
        tech: ['JDK8', 'Spring Boot', 'RabbitMQ', 'Agile/Scrum']
    },
    {
        id: 'nscglobal2',
        role: 'Senior Software Engineer',
        company: 'NSC Global',
        period: 'Feb 2017 - Dec 2018',
        location: 'Bengaluru, India',
        companyLogo: '/assets/logos/generic.svg',
        summary: 'Maintained IBM WebSphere runtimes and managed MQ objects, ensuring robust messaging and reliability across 27 enterprise applications.',
        background: 'During this tenure at NSC Global, I engineered and maintained IBM WebSphere 7.0 Java client runtimes, creating resilient test environments and seamless integration with MQ objects. I managed 27 high-performance applications serving millions of users across diverse U.S. regions, providing critical support during EJB application downtimes. My work ensured continuity of service and strengthened enterprise messaging capabilities.',
        achievements: [
            'Engineered and maintained IBM WebSphere 7.0 Java client runtimes to support enterprise-grade applications.',
            'Ensured seamless integration with MQ objects for robust messaging capabilities.',
            'Managed 27 high-performance applications, delivering exceptional service to millions of users.',
            'Provided critical support during EJB application downtimes, ensuring business continuity.'
        ],
        bullets: [
            'Maintained IBM WebSphere runtimes for enterprise systems.',
            'Configured and managed MQ objects to ensure reliable messaging.',
            'Oversaw 27 applications supporting millions of users.',
            'Delivered critical support during EJB downtimes.'
        ],
        tech: ['JDK5', 'IBM WebSphere 7.0', 'EJB', 'MQ', 'Waterfall']
    }, {
        id: 'attra',
        role: 'Senior Software Engineer',
        company: 'Attra Infotech Pvt. Ltd.',
        period: 'Oct 2013 - Feb 2017',
        location: 'Bengaluru, India',
        companyLogo: '/assets/logos/generic.svg',
        summary: 'Delivered enterprise-grade backend systems, WebServices, and automation solutions, ensuring reliability and efficiency across financial platforms.',
        background: 'At Attra Infotech, I was responsible for building and maintaining backend systems and integrations for enterprise clients. My work spanned IBM WebSphere runtime management, WebService development, and automation of ETL and job scheduling processes. I consistently delivered solutions that improved reliability, streamlined workflows, and enhanced customer-facing services.',
        achievements: [
            'Configured, deployed, and managed IBM WebSphere 8.5 client runtimes, establishing robust test environments.',
            'Crafted JAX-WS service binding producers and client implementations from WSDL contracts, ensuring seamless multi-format WebService responses.',
            'Designed WebServices for dynamic form-to-PDF conversions utilizing Adobe LiveCycle ES2.',
            'Streamlined automation of Informatica scheduled jobs and FTP file transfers through Control-M integration.'
        ],
        bullets: [
            'Managed IBM WebSphere runtimes to support enterprise-grade applications.',
            'Built JAX-WS service bindings from WSDL contracts for standardized WebService responses.',
            'Developed dynamic form-to-PDF WebServices using Adobe LiveCycle ES2.',
            'Automated Informatica jobs and FTP transfers via Control-M.'
        ],
        tech: ['JDK5', 'Spring MVC', 'IBM WebSphere 8.5', 'JAX-WS', 'Adobe LiveCycle ES2', 'Informatica', 'Control-M', 'Oracle DB', 'Waterfall']
    }
];

export default experiences;
