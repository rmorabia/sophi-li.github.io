import React from 'react'

import Layout from '../layout'

import styles from './resume.module.css'

const Resume = () => (
  <Layout>
    <div className={styles.container}>
      <h1>Resume</h1>

      <section>
        <p>
          <strong>
            <a href="/Sophia Li Resume.pdf" target="_blank" rel="noopener">
              📄 Resume PDF
            </a>
          </strong>
        </p>
        <p>Currently looking for a software engineering role.</p>
        <p>
          <strong>Coding from:</strong> San Francisco 🌁
        </p>
      </section>
      <section>
        <h2>Experience</h2>

        <h3>
          <i>Baker</i> at Neighbor Bakehouse
        </h3>
        <p>August 2019 - December 2019</p>
        <ul>
          <li>Mixed, shaped, and baked over 5k artisan sourdough loaves</li>
        </ul>

        <h3>
          <i>Executive Assistant and Culture Associate</i> at Philanthropy
          University
        </h3>
        <p>August 2018 - August 2019</p>
        <ul>
          <li>
            Designed and implemented a scalable and team driven onboarding
            process to achieve 83% onboarding satisfaction score from 9 new team
            members
          </li>
          <li>
            Recruited top talent and improved diversity & inclusion-related
            outcomes through designing a scalable hiring process
          </li>
          <li>
            Formalized and strengthened core operating values and culture by
            leading quarterly offsites, team building activities, employee
            celebrations and recognition, lunch and learn sessions
          </li>
          <li>
            Built and facilitated growth-focused development and performance
            review systems that measurably improves performance while building
            trust between peers and their managers
          </li>
        </ul>

        <h3>
          <i>Intern</i> at Philanthropy University
        </h3>
        <p>January 2018 - July 2018</p>
        <ul>
          <li>
            Developed a customized Salesforce instance for Partnership’s team to
            track fundraising pipeline
          </li>
          <li>
            Initiated and implemented knowledge management system across entire
            organization through a feedback driven process
          </li>
        </ul>

        <h3>
          <i>Program Coordinator</i> at Center for Social Sector Leadership,
          Haas School of Business
        </h3>
        <p>May 2016 - May 2018</p>
        <ul>
          <li>
            Built and maintained a database of over 5,000+ partners and clients
            in Salesforce
          </li>
          <li>
            Increased participation in programs and events by 10% through
            analysis of yearly program metrics
          </li>
          <li>
            Trained and mentored 10 staff members in Salesforce management,
            daily workflow, and reporting
          </li>
          <li>
            Managed the success of Berkeley Board Fellow program that supports
            500+ MBA students and community partners
          </li>
        </ul>
      </section>
      <section>
        <h2>Community</h2>
        <h3>
          <i>Co-organizer</i> for Write/Speak/Code San Francisco Chapter
        </h3>
        <p>September 2019 - present</p>
        <ul>
          <li>
            {' '}
            Organize events to help increase the visibility and leadership of
            technologists from underrepresented genders through peer-led
            development
          </li>
        </ul>
      </section>
      <section>
        <h2>Education</h2>
        <h3>University of California, Berkeley</h3>
        <p>BA, Cognitive Science 2014 - 2018</p>
      </section>
    </div>
  </Layout>
)

export default Resume
