import { useEffect } from 'react'
import { siteConfig } from '@/data/site'
import { publicUrl } from '@/lib/assets'
import './PortfolioPdfPage.css'

const portfolioUrl = siteConfig.siteUrl

export function PortfolioPdfPage() {
  useEffect(() => {
    const previousTitle = document.title
    document.title = 'Avneet Aujla | Engineering Portfolio Summary'
    document.documentElement.classList.add('portfolio-pdf-mode')
    document.body.classList.add('portfolio-pdf-mode')
    document.documentElement.style.colorScheme = 'light'
    return () => {
      document.title = previousTitle
      document.documentElement.classList.remove('portfolio-pdf-mode')
      document.body.classList.remove('portfolio-pdf-mode')
      document.documentElement.style.colorScheme = ''
    }
  }, [])

  return (
    <div className="portfolio-pdf-page" data-theme="light">
      <div className="portfolio-pdf-page__sheet">
        <header className="portfolio-pdf-page__header">
          <div className="portfolio-pdf-page__identity">
            <h1>Avneet Aujla</h1>
            <p className="portfolio-pdf-page__role">
              Mechanical Engineering | University of Guelph
            </p>
            <p className="portfolio-pdf-page__lead">
              Mechanical engineer with hands-on experience in robotics, mechanical
              design, automation, machine vision, manufacturing, and industrial
              project engineering.
            </p>
          </div>

          <div className="portfolio-pdf-page__contacts">
            <span>
              <a href={`mailto:${siteConfig.contact.email}`}>
                {siteConfig.contact.email}
              </a>
              <span className="portfolio-pdf-page__dot">·</span>
              <a href={siteConfig.contact.linkedin} target="_blank" rel="noreferrer">
                LinkedIn
              </a>
              <span className="portfolio-pdf-page__dot">·</span>
              <a href={portfolioUrl} target="_blank" rel="noreferrer">
                Portfolio
              </a>
            </span>
            <a
              className="portfolio-pdf-page__cta"
              href={portfolioUrl}
              target="_blank"
              rel="noreferrer"
            >
              View Full Engineering Portfolio →
            </a>
          </div>
        </header>

        <section className="portfolio-pdf-page__section">
          <h2>Selected Engineering Experience</h2>

          <article className="portfolio-pdf-page__featured portfolio-pdf-page__featured--primary">
            <div className="portfolio-pdf-page__featured-main">
              <h3>
                Robot Dojo
                <span className="portfolio-pdf-page__org">
                  {' '}
                  — Toyota Motor Manufacturing Canada
                </span>
              </h3>
              <p>
                Designed and supported fabrication of an offline robot teaching
                system used to develop new robot and part programs without consuming
                production equipment time. Designed for robot-teaching applications
                across Toyota’s Cambridge and Woodstock press shops.
              </p>
            </div>
            <div className="portfolio-pdf-page__metric-stack">
              <div className="portfolio-pdf-page__metric">
                <strong>SolidWorks Design</strong>
              </div>
              <div className="portfolio-pdf-page__metric">
                <strong>Custom Fabrication</strong>
              </div>
              <div className="portfolio-pdf-page__metric">
                <strong>Production Line Time Eliminated</strong>
              </div>
            </div>
          </article>

          <div className="portfolio-pdf-page__featured-row">
            <article className="portfolio-pdf-page__featured">
              <h3>
                RAV4 Split Detection Vision System
                <span className="portfolio-pdf-page__org"> — Toyota</span>
              </h3>
              <div className="portfolio-pdf-page__big-metrics">
                <div>
                  <span className="portfolio-pdf-page__big-num">35+</span>
                  <span className="portfolio-pdf-page__big-label">hr repair event</span>
                </div>
                <div>
                  <span className="portfolio-pdf-page__big-num">3</span>
                  <span className="portfolio-pdf-page__big-label">
                    missed production runs
                  </span>
                </div>
              </div>
              <p>
                Developed and tested a machine-vision system to detect severe panel
                splits before damaged material remained inside stamping dies.
                Covered camera setup, lighting, validation, HMI controls, and PLC
                integration.
              </p>
            </article>

            <article className="portfolio-pdf-page__featured">
              <h3>
                Nachi Robot Valve Failure Investigation
                <span className="portfolio-pdf-page__org"> — Toyota</span>
              </h3>
              <div className="portfolio-pdf-page__big-metrics portfolio-pdf-page__big-metrics--three">
                <div>
                  <span className="portfolio-pdf-page__big-num">~1.5</span>
                  <span className="portfolio-pdf-page__big-label">
                    hr downtime / month / robot
                  </span>
                </div>
                <div>
                  <span className="portfolio-pdf-page__big-num">10</span>
                  <span className="portfolio-pdf-page__big-label">robots</span>
                </div>
                <div>
                  <span className="portfolio-pdf-page__big-num">0</span>
                  <span className="portfolio-pdf-page__big-label">
                    failures after countermeasures
                  </span>
                </div>
              </div>
              <p>
                Investigated recurring vacuum and blow-off valve failures on robotic
                part-transfer equipment, then developed and implemented engineering
                countermeasures.
              </p>
            </article>
          </div>
        </section>

        <section className="portfolio-pdf-page__section">
          <h2>Additional Engineering Work</h2>
          <div className="portfolio-pdf-page__additional">
            <article>
              <h3>
                Equipment Data Collection System
                <span className="portfolio-pdf-page__org"> — Toyota</span>
              </h3>
              <p>
                100+ sensors on one automated press line — configuration, alarm
                thresholds, data analysis, and AI-assisted failure identification.
              </p>
            </article>
            <article>
              <h3>
                Gate Restraining System
                <span className="portfolio-pdf-page__org"> — Cargill</span>
              </h3>
              <p>
                Mechanical design and implementation for an industrial gate
                restraining improvement through drawings, fabrication, vendors, and
                installation.
              </p>
            </article>
            <article>
              <h3>
                Product Transfer Conveyor
                <span className="portfolio-pdf-page__org"> — Cargill</span>
              </h3>
              <p>
                Supported mechanical design and implementation of a product transfer
                conveyor in an active production facility.
              </p>
            </article>
          </div>
        </section>

        <section className="portfolio-pdf-page__section">
          <h2>Design &amp; Build Projects</h2>
          <div className="portfolio-pdf-page__campus">
            <article>
              <h3>
                Automated Wheelchair
                <span className="portfolio-pdf-page__org">
                  {' '}
                  — University of Guelph
                </span>
              </h3>
              <p>
                Led the mechanical design of an automated wheelchair system as
                part of a five-person team. Developed and tested a system capable
                of navigating a course and launching a ball, with emphasis on
                mechanical design, prototyping, integration, and iterative
                testing.
              </p>
              <p className="portfolio-pdf-page__tags">
                Mechanical Design · Prototyping · Integration · Testing
              </p>
            </article>
            <article>
              <h3>
                F1 Toy Vehicle
                <span className="portfolio-pdf-page__org">
                  {' '}
                  — University of Guelph
                </span>
              </h3>
              <p>
                Designed and built a mechanically driven F1-inspired toy vehicle
                to satisfy defined performance requirements, including a minimum
                2.5&nbsp;m travel distance. Developed the concept through CAD,
                fabrication, assembly, and physical testing.
              </p>
              <p className="portfolio-pdf-page__tags">
                CAD · Fabrication · Assembly · Testing
              </p>
            </article>
          </div>
        </section>

        <section className="portfolio-pdf-page__section portfolio-pdf-page__toolkit">
          <h2>Technical Toolkit</h2>
          <div className="portfolio-pdf-page__skills">
            <div>
              <h4>CAD &amp; Design</h4>
              <p>SolidWorks · Autodesk Inventor · AutoCAD · GD&amp;T</p>
            </div>
            <div>
              <h4>Analysis &amp; Programming</h4>
              <p>ABAQUS · MATLAB · Python</p>
            </div>
            <div>
              <h4>Automation &amp; Robotics</h4>
              <p>PLCs · Machine Vision · Sensors · Robotics</p>
            </div>
            <div>
              <h4>Engineering</h4>
              <p>
                Mechanical Design · Engineering Drawings · Prototyping · Testing
              </p>
            </div>
          </div>
        </section>

        <section className="portfolio-pdf-page__section portfolio-pdf-page__visuals">
          <h2>Project Visuals</h2>
          <div className="portfolio-pdf-page__visual-row">
            <figure>
              <div className="portfolio-pdf-page__visual-frame">
                <img
                  src={publicUrl('/projects/tbwc-project-hero-pdf.png')}
                  alt="Automated wheelchair mechanical prototype"
                />
              </div>
              <figcaption>Automated Wheelchair — Prototype</figcaption>
            </figure>
            <figure>
              <div className="portfolio-pdf-page__visual-frame">
                <img
                  src={publicUrl('/projects/f1-kinder-toy-assembly-render.png')}
                  alt="F1 toy vehicle CAD assembly render"
                />
              </div>
              <figcaption>F1 Toy Vehicle — CAD Design</figcaption>
            </figure>
          </div>
        </section>

        <footer className="portfolio-pdf-page__footer">
          <span>Avneet Aujla | Engineering Portfolio</span>
          <a href={portfolioUrl} target="_blank" rel="noreferrer">
            {portfolioUrl.replace(/^https?:\/\//, '')}
          </a>
        </footer>
      </div>

      <aside className="portfolio-pdf-page__hint" aria-hidden="true">
        Print → Save as PDF · US Letter · Background graphics on
      </aside>
    </div>
  )
}
