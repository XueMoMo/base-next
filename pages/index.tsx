import Head from 'next/head'
import Layout, {siteTitle} from '../components/layout'
import {Image} from "semantic-ui-react";
import styles from '../styles/index.module.scss';
import classNames from "classnames";
import {useTranslation} from "react-i18next";
import BgAnim from '../components/effect/BgAnim';
import useParallax from "../lib/hooks/useParallax";

export default function Home({}: {}) {
  const {t} = useTranslation()
  const {data} = useParallax(120, 5)

  return (
    <Layout className={styles.main}>
      <BgAnim/>
      <Head>
        <title>{siteTitle}</title>
      </Head>

      <div style={{
        overflow: "hidden"
      }}>
        {data.map((ig, i) =>
          <Image circular src={"/images/profile.jpg"} size={'tiny'} inline key={`image_${i}`}
                 className={classNames(styles.animStart, {[styles.animFinal]: ig.value})}/>
        )}
      </div>
    </Layout>
  )
}
