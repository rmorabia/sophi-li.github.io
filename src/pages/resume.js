import React from 'react'
import 'typeface-roboto'

import Layout from '../layout'

const Resume = () => (
  <Layout>
    <h1>Resume</h1>
    <div>
      <p>
        <strong>
          <a href="/Sophia Li Resume.pdf" target="_blank">
            View or download resume PDF here.
          </a>
        </strong>
      </p>
      <p>
        <strong>Coding from:</strong> San Francisco 🌁
      </p>
      <h2>Experience</h2>
      <h3>
        <i>Baker</i> at Neighbor Bakehouse
      </h3>
      <ul>
        <li>Mixed, shaped, and baked over 5k artisan sourdough loaves</li>
      </ul>

      <h3>
        <i>Executive Assistant and Culture Associate</i> at Philanthropy
        University
      </h3>
      <ul>
        <li>
          Designed and implemented a scalable and team driven onboarding process
          to achieve 83% onboarding satisfaction score from 9 new team members
        </li>
        <li>
          Recruited top talent and improved diversity & inclusion-related
          outcomes through designing a scalable hiring process
        </li>
        <li>
          Formalized and strengthened core operating values and culture by
          leading quarterly offsites, team building activities, employee
          celebrations and recognition, team building activities, lunch and
          learn sessions
        </li>
        <li>
          Built and facilitated growth-focused development and performance
          review systems that measurably improves performance while building
          trust between peers and their managers
        </li>
      </ul>

      <h3>
        <i>Program Coordinator</i> at Center for Social Sector Leadership, Haas
        School of Business
      </h3>
      <ul>
        <li>
          Built and maintained a database of over 5,000+ partners and clients in
          Salesforce
        </li>
        <li>
          Increased participation in programs and events by 10% through analysis
          of yearly program metrics
        </li>
        <li>
          Trained and mentored 10 staff members in Salesforce management, daily
          workflow, and reporting
        </li>
        <li>
          Managed the success of Berkeley Board Fellow program that supports
          500+ MBA students and community partners
        </li>
      </ul>
    </div>
  </Layout>
)

export default Resume
