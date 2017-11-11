import Main from '../layouts/main';
import Link from 'next/prefetch';
import Head from 'next/head';

export default () => (
  <Main>
    <Head>
      <title>Thomas Shelley</title>
    </Head>

    <div className="home">
      <div className="main">
        <h1>Thomas Shelley</h1>
        <nav>
          <a target="_blank" href="https://github.com/tsh3lley">Github</a>
          <a target="_blank" href="https://linkedin.com/in/thomasjshelley">LinkedIn</a>
          <a href="/static/shelley-resume.pdf">Resume</a>
          <a href="mailto:thomasjshelley@gmail.com">Email</a>
        </nav>
      </div>
    </div>

    <style jsx>{`
      .home {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: -1;
      }
      .main {
        flex: none;
        text-align: center;
      }
      h1 {
        font-size: 14px;
        font-weight: normal;
      }
      nav {
        margin-top: 20px;
      }
      a {
        display: inline-block;
        margin: 0 15px;
        text-decoration: none;
      }
    `}</style>
  </Main>
)
