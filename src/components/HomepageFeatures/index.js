import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Getting Started',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Everything you need to set up your OnceHub account and begin scheduling in minutes.
      </>
    ),
  },
  {
    title: 'Calendar & Video Conferencing Connections',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Step-by-step guides to connect your calendars and video conferencing tools for seamless scheduling.
      </>
    ),
  },
  {
    title: 'Booking Calendars',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Learn to configure, customize, and manage your meetings with our latest scheduling solution.
      </>
    ),
  },
  {
    title: 'Booking Pages (Legacy)',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Support and best practices for our classic booking pages and event types.
      </>
    ),
  },
  {
    title: 'Chatbots & Routing Forms',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Automate engagement, qualification, and routing with customizable chatbots and forms.
      </>
    ),
  },
  {
    title: 'Integrations',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Connect OnceHub with your favorite apps, CRMs, and automation tools.
      </>
    ),
  },
  {
    title: 'User & Account Management',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Manage users, roles, security, billing, and account preferences with ease.
      </>
    ),
  },
  {
    title: 'Reporting & Analytics',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Track bookings, monitor sources, and gain insights with powerful analytics tools.
      </>
    ),
  },
  {
    title: 'Resources & Support',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Find definitions, video tutorials, downloads, and ways to contact our support team.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
