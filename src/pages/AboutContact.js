import React from 'react';
import { useLocale } from '../i18n/LocaleProvider';

function AboutContact() {
    const { t } = useLocale();

    return (
        <div>
            <section>
                <h2>{t('about.title', 'About Me: Who I Am as a Software Engineer')}</h2>
                <p>
                    From writing my first "Hello World" program to architecting enterprise-level systems, my journey in software engineering has been driven by curiosity and a passion for innovation. I thrive on transforming complex challenges into elegant, efficient solutions that make a tangible impact.
                    With expertise spanning cloud computing, Integration, and modern web technologies, I bring a comprehensive approach to every project. My experience includes building scalable microservices, optimizing database performance, and implementing CI/CD pipelines that streamline development workflows.
                    <p>
                        <strong>Core Technologies: </strong>
                        Full-stack development with Java, Springboot, React, Node.js, and Python</p>
                    <p>
                        Cloud infrastructure using AWS, GCP and OpenShift
                    </p>
                    <p>API gateways like Apigee, Kong, NGINX, APISIX</p>
                    <p>DevOps and containerization with Docker and Kubernetes</p>
                </p>
            </section>

            <section style={{ marginTop: 20 }}>
                <h2>{t('contact.title', 'Contact')}</h2>
                <p>
                    {t('contact.emailLabel', 'Email')}: <a href="mailto:yathin.ksomaiah@gmail.com">yathin51@gmail.com</a>
                </p>
                <p>
                    {t('contact.linkedInLabel', 'LinkedIn')}: <a href="https://www.linkedin.com/in/yathin-somaiah-kullachana51/?locale=de_DE" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                </p>
                <p>
                    {t('contact.gitHubLabel', 'GitHub')}: <a href="https://github.com/yathin51" target="_blank" rel="noopener noreferrer">GitHub</a>
                </p>
            </section>
        </div>
    );
}

export default AboutContact;
