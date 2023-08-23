import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import dbgptBanner from '../../static/img/DB-GPT_Banner.svg';
import dbgptFramework from '../../static/img/dbgpt_framework.png';

import styles from './index.module.css';
import FeaturedSlider from '@site/src/components/FeaturedSlider';
import HomeLayout from '@site/src/components/HomeLayout';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className="container" style={{ background: `url(${dbgptBanner}) no-repeat center/cover` }}>
      <div>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="http://dbgpt.site/">
            Start Experience Now!
          </Link>
        </div>
        <br />
        <br />
        <br />
      </div>
    </header>
  );
}

export default function Home() {
  return <HomeLayout />;
}
