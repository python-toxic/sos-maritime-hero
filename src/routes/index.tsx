import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, Play } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "SOS India — Safer Seas, A Cleaner Tomorrow" },
      {
        name: "description",
        content: "Maritime safety, ship recycling and compliance by SOS India.",
      },
      { property: "og:title", content: "SOS India — Safer Seas, A Cleaner Tomorrow" },
      {
        property: "og:description",
        content: "Maritime safety, ship recycling and compliance by SOS India.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="sos-hero" id="top">
      <header className="sos-header">
        <a className="sos-brand" href="#top" aria-label="SOS India home">
          <span className="sos-brand__mark">SOS</span>
          <span className="sos-brand__divider" aria-hidden="true" />
          <span className="sos-brand__country">INDIA</span>
        </a>

        <nav className="sos-nav" aria-label="Main navigation">
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#journey">Our Journey</a>
          <a href="#leadership">Leadership</a>
          <a href="#contact">Contact</a>
        </nav>

        <Button className="sos-header__contact" type="button">
          <span>Get in touch</span>
          <ArrowRight aria-hidden="true" />
        </Button>
      </header>

      <section className="sos-copy" aria-labelledby="sos-heading">
        <p className="sos-eyebrow">
          <span className="sos-eyebrow__rule" aria-hidden="true" />
          <span>MARITIME SAFETY&nbsp; / &nbsp;SHIP RECYCLING&nbsp; / &nbsp;COMPLIANCE</span>
        </p>

        <h1 className="sos-heading" id="sos-heading">
          <span>Safer Seas</span>
          <span className="sos-heading__accent">A Cleaner Tomorrow</span>
        </h1>

        <p className="sos-description">
          End-to-end maritime safety, ship recycling and compliance
          <br className="sos-description__desktop-break" /> solutions for a more sustainable maritime industry.
        </p>

        <div className="sos-actions">
          <Button className="sos-action-primary" type="button">
            <span>Explore Our Services</span>
            <ArrowRight aria-hidden="true" />
          </Button>
          <Button className="sos-action-watch" variant="ghost" type="button">
            <span>Watch Our Approach</span>
            <span className="sos-play" aria-hidden="true">
              <Play />
            </span>
          </Button>
        </div>
      </section>
    </main>
  );
}
