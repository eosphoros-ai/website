import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
import privacyPng from '../../../static/img/privacy.png';
import multiScenePng from '../../../static/img/multi_scene.png';
import multiLLMPng from '../../../static/img/multi_llms.jpeg';

const FeatureList = [
  {
    title: '私域知识库',
    image: privacyPng,
    description: (
      <>
        you can be assured that there is no risk of data leakage, and your data is 100% private and secure
      </>
    ),
  },
  {
    title: '智能数据报表',
    image: multiScenePng,
    description: (
      <>
        Support multiply scenes, chat to db, chat to dashboard, chat to knowledge and native chat with LLMs.
      </>
    ),
  },
  {
    title: '多模型管理',
    image: multiLLMPng,
    description: (
      <>
        Support multiply LLMs, such as chatglm, vicuna, Qwen, and proxy of chatgpt and bard.
      </>
    ),
  },
  {
    title: '知识库统一向量存储/索引',
    image: multiScenePng,
    description: (
      <>
        Knowledge Based Question and Answer.
      </>
    ),
  },
  {
    title: '隐私&安全',
    image: privacyPng,
    description: (
      <>
        100% private and secure.
      </>
    ),
  },
  {
    title: 'Agent插件',
    image: multiLLMPng,
    description: (
      <>
        Support AutoGPT plugins, and you can build your own plugins as well.
      </>
    ),
  },
];

function Feature({image, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <img src={image} alt={title} className={styles.featureSvg} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container" >
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
