import { ArrowRight, Anchor, BadgeCheck, BookOpen, BriefcaseBusiness, Compass, FileCheck2, ShieldCheck, UsersRound } from "lucide-react";
import maritimePhoto from "@/assets/sos-maritime-about.jpg";
import { Button } from "@/components/ui/button";
import type { CollectionResult, Course, Employee, JobOpening, Service } from "@/lib/sos-content";

function EmptyCollection({
  collection,
  result,
}: {
  collection: string;
  result: CollectionResult<unknown>;
}) {
  if (result.status === "loading") {
    return <p className="sos-empty-state" role="status">Loading {collection.toLowerCase()}…</p>;
  }

  if (result.status === "error") {
    return <p className="sos-empty-state" role="alert">{result.message}</p>;
  }

  if (result.status === "empty") {
    return <p className="sos-empty-state">There are no published {collection.toLowerCase()} yet.</p>;
  }

  return (
    <p className="sos-empty-state">
      {collection} will appear here when verified content is available.
    </p>
  );
}

function SectionHeading({
  label,
  title,
  description,
}: {
  label: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="sos-section-heading">
      <p className="sos-section-label">{label}</p>
      <h2>{title}</h2>
      {description ? <p className="sos-section-description">{description}</p> : null}
    </div>
  );
}

function ServiceGrid({ result }: { result: CollectionResult<Service> }) {
  if (result.items.length === 0) {
    return <EmptyCollection collection="Services" result={result} />;
  }

  return (
    <div className="sos-service-grid">
      {result.items.slice(0, 6).map((service) => (
        <article className="sos-service-item" key={service.id}>
          <div className="sos-service-item__number">{String(service.sortOrder + 1).padStart(2, "0")}</div>
          <h3>{service.title}</h3>
          <p>{service.summary}</p>
          <a href="#contact" className="sos-inline-link" aria-label={`Enquire about ${service.title}`}>
            Enquire <ArrowRight aria-hidden="true" />
          </a>
        </article>
      ))}
    </div>
  );
}

function CourseList({ result }: { result: CollectionResult<Course> }) {
  if (result.items.length === 0) {
    return <EmptyCollection collection="Courses and training" result={result} />;
  }

  return (
    <div className="sos-content-grid sos-content-grid--three">
      {result.items.slice(0, 3).map((course) => (
        <article className="sos-content-item" key={course.id}>
          <BookOpen aria-hidden="true" />
          <h3>{course.title}</h3>
          <p>{course.summary}</p>
          <a className="sos-inline-link" href={course.enquiryUrl ?? "#contact"}>
            Enquire <ArrowRight aria-hidden="true" />
          </a>
        </article>
      ))}
    </div>
  );
}

function PeopleList({ result }: { result: CollectionResult<Employee> }) {
  if (result.items.length === 0) {
    return <EmptyCollection collection="Team profiles" result={result} />;
  }

  return (
    <div className="sos-content-grid sos-content-grid--four">
      {result.items.slice(0, 4).map((employee) => (
        <article className="sos-person-item" key={employee.id}>
          {employee.imageUrl ? (
            <img src={employee.imageUrl} alt={employee.name} loading="lazy" width={480} height={560} />
          ) : (
            <div className="sos-person-item__placeholder" aria-hidden="true"><UsersRound /></div>
          )}
          <h3>{employee.name}</h3>
          <p>{employee.designation}</p>
          {employee.biography ? <p className="sos-person-item__bio">{employee.biography}</p> : null}
        </article>
      ))}
    </div>
  );
}

function Vacancies({ result }: { result: CollectionResult<JobOpening> }) {
  if (result.items.length === 0) {
    return <EmptyCollection collection="Current vacancies" result={result} />;
  }

  return (
    <div className="sos-vacancy-list">
      {result.items.slice(0, 3).map((opening) => (
        <article className="sos-vacancy-item" key={opening.id}>
          <div>
            <h3>{opening.title}</h3>
            <p>{opening.location ?? "Location to be confirmed"} · {opening.summary}</p>
          </div>
          {opening.applicationUrl ? (
            <a href={opening.applicationUrl} className="sos-inline-link">Apply <ArrowRight aria-hidden="true" /></a>
          ) : null}
        </article>
      ))}
    </div>
  );
}

export function HomeSections({
  services,
  courses,
  employees,
  jobOpenings,
}: {
  services: CollectionResult<Service>;
  courses: CollectionResult<Course>;
  employees: CollectionResult<Employee>;
  jobOpenings: CollectionResult<JobOpening>;
}) {
  return (
    <>
      <section className="sos-trust-strip" aria-labelledby="sos-trust-title">
        <div className="sos-section-inner sos-trust-strip__inner">
          <div>
            <p className="sos-section-label">Our standards</p>
            <h2 id="sos-trust-title">Certifications &amp; classification</h2>
          </div>
          <p className="sos-trust-strip__note">
            Official certification and classification marks will be added when verified.
          </p>
        </div>
      </section>

      <section className="sos-about-section" id="about" aria-labelledby="sos-about-title">
        <div className="sos-section-inner sos-about-layout">
          <div className="sos-about-copy">
            <p className="sos-section-label" id="journey">About SOS India</p>
            <h2 id="sos-about-title">Maritime expertise, with a more sustainable horizon.</h2>
            <p>
              SOS India works across maritime safety, ship recycling and compliance—supporting a safer
              and more sustainable maritime industry.
            </p>
            <a className="sos-inline-link" href="#services">
              Explore our services <ArrowRight aria-hidden="true" />
            </a>
          </div>
          <figure className="sos-about-image">
            <img
              src={maritimePhoto}
              alt="Illustrative view of a cargo vessel at a ship recycling facility with workers in protective equipment"
              loading="lazy"
              width={1440}
              height={1008}
            />
            <figcaption>Illustrative maritime imagery</figcaption>
          </figure>
        </div>
      </section>

      <section className="sos-services-section" id="services" aria-labelledby="sos-services-title">
        <div className="sos-section-inner">
          <SectionHeading
            label="What we do"
            title="Our services"
            description="Safety, recycling and compliance support for the maritime industry."
          />
          <div id="sos-services-title" className="sos-visually-hidden">Our services</div>
          <ServiceGrid result={services} />
        </div>
      </section>

      <section className="sos-values-section" aria-labelledby="sos-values-title">
        <div className="sos-section-inner sos-values-layout">
          <div>
            <SectionHeading label="Why SOS India" title="A considered approach to safer seas." />
            <p className="sos-values-intro">
              Our focus is a more responsible maritime industry, from safety through end-of-life vessel recycling.
            </p>
          </div>
          <div className="sos-values-list" id="sos-values-title">
            <article><ShieldCheck aria-hidden="true" /><div><h3>Safety-led</h3><p>Maritime safety is at the heart of our work.</p></div></article>
            <article><Anchor aria-hidden="true" /><div><h3>Industry-focused</h3><p>Support shaped around maritime operations.</p></div></article>
            <article><FileCheck2 aria-hidden="true" /><div><h3>Compliance-minded</h3><p>Compliance is part of the service we provide.</p></div></article>
            <article><Compass aria-hidden="true" /><div><h3>Sustainability-aware</h3><p>Working towards a cleaner maritime future.</p></div></article>
          </div>
        </div>
      </section>

      <section className="sos-courses-section" id="courses" aria-labelledby="sos-courses-title">
        <div className="sos-section-inner">
          <SectionHeading label="Learning & development" title="Courses & training" />
          <h2 className="sos-visually-hidden" id="sos-courses-title">Courses &amp; training</h2>
          <CourseList result={courses} />
        </div>
      </section>

      <section className="sos-people-section" id="leadership" aria-labelledby="sos-people-title">
        <div className="sos-section-inner">
          <SectionHeading label="The people behind the work" title="Our people" />
          <h2 className="sos-visually-hidden" id="sos-people-title">Our people</h2>
          <PeopleList result={employees} />
        </div>
      </section>

      <section className="sos-careers-section" id="careers" aria-labelledby="sos-careers-title">
        <div className="sos-section-inner sos-careers-layout">
          <div className="sos-careers-mark" aria-hidden="true"><BriefcaseBusiness /></div>
          <div className="sos-careers-copy">
            <p className="sos-section-label">Careers</p>
            <h2 id="sos-careers-title">Build a more sustainable maritime future.</h2>
            <p>Current opportunities will be listed here when available.</p>
          </div>
          <Vacancies result={jobOpenings} />
        </div>
      </section>

      <section className="sos-insights-section" id="insights" aria-labelledby="sos-insights-title">
        <div className="sos-section-inner sos-insights-layout">
          <div>
            <SectionHeading label="Ideas & updates" title="Latest insights" />
            <h2 className="sos-visually-hidden" id="sos-insights-title">Latest insights</h2>
          </div>
          <p className="sos-empty-state">
            The existing Insights pages and articles are not available in this project yet.
          </p>
        </div>
      </section>

      <section className="sos-contact-section" id="contact" aria-labelledby="sos-contact-title">
        <div className="sos-section-inner sos-contact-layout">
          <div>
            <p className="sos-section-label">Start a conversation</p>
            <h2 id="sos-contact-title">Safer seas begin with the right conversation.</h2>
          </div>
          <div className="sos-contact-actions">
            <Button type="button" disabled title="Company contact details have not been supplied">Contact us <ArrowRight aria-hidden="true" /></Button>
            <Button type="button" variant="outline" disabled title="Company contact details have not been supplied">Request a quote</Button>
            <p>Contact details have not been supplied yet.</p>
          </div>
        </div>
      </section>

      <footer className="sos-footer">
        <div className="sos-section-inner sos-footer-layout">
          <a className="sos-footer-brand" href="#top" aria-label="SOS India, back to top">
            <span>SOS</span><small>INDIA</small>
          </a>
          <nav aria-label="Footer navigation">
            <a href="#about">About</a><a href="#services">Services</a><a href="#courses">Training</a>
            <a href="#careers">Careers</a><a href="#insights">Insights</a>
          </nav>
          <p>FAQ destination is not available in this project yet.</p>
        </div>
      </footer>
    </>
  );
}