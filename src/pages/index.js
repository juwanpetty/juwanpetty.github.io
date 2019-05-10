import React from "react"
import { Link } from "gatsby"
import Layout from "../components/Layout/layout"
import styles from "./index.module.scss"

const Index = () => {
  return (
    <Layout>
      <section className={styles.Section}>
        <div className={styles.SectionHeader}>
          <div>
            <h1>Section Title</h1>
            <p>Section subtitle</p>
          </div>

          <Link to="/">See more pens</Link>
        </div>

        <div className={styles.SectionList}>
          <div className={styles.SectionListItem}>
            <div className={styles.ImageWrapper}>
              <div className={styles.Image} />
            </div>
            <div className={styles.Meta}>
              <p className={styles.Source}>2 Days Ago</p>
              <div className={styles.Overflow}>
                <h3>Rescale - Senior DevOps Engineer</h3>
                <p className={styles.Description}>
                  Rescale is the leader in enterprise big compute and is one of
                  the fastest growing tech companies in Silicon Valley. Our
                  customers range from disruptive and innovative startups to
                  leading global automotive manufacturers. Our dynamic team is
                  welcoming, collabor…
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default Index
