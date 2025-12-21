const skills = [
    {
        category: 'Languages',
        items: [
            { name: 'Java', logo: '/assets/logos/java-seeklogo.svg' },
            { name: 'Python', logo: '/assets/logos/python-svgrepo-com.svg' },
            { name: 'SQL', logo: '/assets/logos/sql-svgrepo-com.svg' },
            { name: 'ShellScripting', logo: '/assets/logos/bash02-svgrepo-com.svg' },
            { name: 'Lua', logo: '/assets/logos/lua-svgrepo-com.svg' },
            { name: 'JavaScript', logo: '/assets/logos/javascript-svgrepo-com.svg' }
        ]
    },
    {
        category: 'Technologies',
        items: [
            { name: 'Spring Boot', logo: '/assets/logos/spring-svgrepo-com.svg' },
            { name: 'ReactJs', logo: '/assets/logos/reactjs-svgrepo-com.svg' },
            { name: 'AngularJs', logo: '/assets/logos/angular-svgrepo-com.svg' }
        ]
    },
    {
        category: 'Databases',
        items: [
            { name: 'MongoDB', logo: '/assets/logos/mongo-svgrepo-com.svg' },
            { name: 'InfluxDB', logo: '/assets/logos/influxdb-svgrepo-com.svg' },
            { name: 'Postgres', logo: '/assets/logos/postgresql-svgrepo-com.svg' },
            { name: 'Oracle', logo: '/assets/logos/oracle-6-logo-svgrepo-com.svg' }
        ]
    },
    {
        category: 'Gateways',
        items: [
            { name: 'Apigee', logo: '/assets/logos/apigee-api-platform-svgrepo-com.svg' },
            { name: 'Nginx', logo: '/assets/logos/nginx-svgrepo-com.svg' },
            { name: 'Kong Gateway', logo: '/assets/logos/kong-svgrepo-com.svg' },
            { name: 'APISIX', logo: '/assets/logos/apisix_svg.svg' }
        ]
    },
    {
        category: 'Cloud Technologies',
        items: [
            { name: 'Openshift', logo: '/assets/logos/redhat-openshift-logodix-com.svg' },
            { name: 'AWS', logo: '/assets/logos/aws-svgrepo-com.svg' },
            { name: 'GCP', logo: '/assets/logos/gcp-svgrepo-com.svg' },
            { name: 'Kubernetes', logo: '/assets/logos/kubernetes-svgrepo-com.svg' },
            { name: 'Docker', logo: '/assets/logos/docker-svgrepo-com.svg' }
        ]
    },
    {
        category: 'Concepts',
        items: [
            { name: 'Multithreading', logo: 'https://cdn-icons-png.flaticon.com/512/3063/3063825.png' },
            { name: 'DSA', logo: 'https://cdn-icons-png.flaticon.com/512/3039/3039383.png' },
            { name: 'NoSQL', logo: '/assets/logos/nosql-svgrepo-com.svg' },
            { name: 'CVS (SVN, GIT)', logo: '/assets/logos/git-logodix-com.svg' },
            { name: 'Clean code (SonarQube)', logo: '/assets/logos/sonarqube-svgrepo-com.svg' },
            { name: 'Hibernate', logo: 'https://cdn.worldvectorlogo.com/logos/hibernate.svg' }
        ]
    }, {
        category: 'App servers and Web Servers',
        items: [
            { name: 'Glassfish', logo: '/assets/logos/glassfish.svg' },
            { name: 'Tomcat', logo: '/assets/logos/tomcat-svgrepo-com.svg' },
            { name: 'WebSphere', logo: '/assets/logos/IBMwebsphere.svg' },
            { name: 'WebLogic', logo: '/assets/logos/weblogic.svg' },
            { name: 'Netty', logo: '/assets/logos/idxOYp4Ugo_1766039669176.png' }
        ]
    },

    {
        category: 'Messaging / Queues',
        items: [
            { name: 'Kafka', logo: '/assets/logos/kafka-svgrepo-com.svg' },
            { name: 'IBM WS MQ', logo: '/assets/logos/websphereMQ.svg' },
            { name: 'RabbitMQ', logo: '/assets/logos/rabbitmq-svgrepo-com.svg' },
            { name: 'ActiveMQ', logo: '/assets/logos/Apache_ActiveMQ_Logo.svg' },
            { name: 'Fiorano MQ', logo: '/assets/logos/Fiorano_id5Zlm7ICt_0.svg' },
            { name: 'AWS SNS/SQS', logo: '/assets/logos/aws-svgrepo-com.svg' }
        ]
    },
    {
        category: 'Testing Frameworks',
        items: [
            { name: 'JUnit', logo: '/assets/logos/Junit-ld-com.svg' },
            { name: 'Cucumber', logo: '/assets/logos/cucumber-logodix-com.svg' },
            { name: 'Mockito', logo: '/assets/logos/mockito-logodix-com.png' }
        ]
    },
    {
        category: 'Project Management',
        items: [
            { name: 'Jira', logo: '/assets/logos/jira-svgrepo-com.svg' },
            { name: 'Confluence', logo: '/assets/logos/confluence-logo-svgrepo-com.svg' },
            { name: 'Trello', logo: '/assets/logos/trello-svgrepo-com.svg' },
            { name: 'Asana', logo: '/assets/logos/asana.svg' },
            { name: 'Notion', logo: '/assets/logos/notion.svg' },
        ]
    },
    {
        category: 'Observability & CI/CD',
        items: [
            { name: 'Prometheus', logo: '/assets/logos/prometheus-svgrepo-com.svg' },
            { name: 'Grafana', logo: '/assets/logos/grafana-svgrepo-com.svg' },
            { name: 'Datadog', logo: '/assets/logos/datadog-svgrepo-com.svg' },
            { name: 'New Relic', logo: '/assets/logos/newrelic-svgrepo-com.svg' },
            { name: 'Splunk', logo: '/assets/logos/splunk-svgrepo-com.svg' },
            { name: 'Elastic APM', logo: '/assets/logos/elastic-svgrepo-com.svg' },
            { name: 'Kibana', logo: '/assets/logos/kibana-svgrepo-com.svg' },
            { name: 'Jaeger', logo: '/assets/logos/Jaeger_Logo_Final_PANTONE.svg' },
            { name: 'Zipkin', logo: '/assets/logos/zipkin_symbol.svg' },
            { name: 'OpenTelemetry', logo: '/assets/logos/Open_Telemetry.svg' },
            { name: 'CloudWatch', logo: '/assets/logos/CloudWatch.svg' },
            { name: 'Google Cloud Ops', logo: '/assets/logos/gcp-svgrepo-com.svg' },

            { name: 'Jenkins', logo: '/assets/logos/jenkins-svgrepo-com.svg' },
            { name: 'GitHub Actions', logo: '/assets/logos/github-svgrepo-com.svg' },
            { name: 'Bamboo', logo: '/assets/logos/bamboo-svgrepo-com.svg' },
            { name: 'Jfrog', logo: '/assets/logos/jfrog-svgrepo-com.svg' }
        ]
    }
];

export default skills;
