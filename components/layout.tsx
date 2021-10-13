import Head from 'next/head'
import styles from './layout.module.css'
import classNames from "classnames";

export const siteTitle = 'A basic framework use next.js'

export default function Layout({
  children,
  className,
}: {
  children: React.ReactNode,
  className?: string,
}) {
  return (
    <div className={classNames(className, styles.container)}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Base Next"
        />
        <meta name="og:title" content={siteTitle} />
      </Head>
      {children}
    </div>
  )
}
