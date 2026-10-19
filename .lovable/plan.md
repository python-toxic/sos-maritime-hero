# SOS India Homepage Extension

## Scope
Extend the existing SOS India homepage beneath the current hero without changing the hero. Build the requested sections in order, retaining the established typography and colors and keeping the presentation responsive and accessible.

## Approach
- Inspect current routes, components, and data sources; reuse existing Insights/FAQ destinations where present.
- Create small reusable homepage section components and typed content/service interfaces for the four CMS-managed types: services, courses, employees, and job openings.
- Keep content retrieval separate from presentation. If no live source exists, provide empty/loading/error handling and clearly labeled sample placeholders only where needed; do not represent them as connected data.
- Use only confirmed company details and verified certifications; omit unavailable facts rather than inventing them.
- Add distinct metadata to the homepage and validate desktop/mobile rendering, links, and the existing routing test.

## Technical details
Frontend-only implementation unless an existing backend is discovered. No new CMS, database, authentication, API credentials, or replacement of Insights/FAQ systems. Any unavailable API integration will be documented as a typed contract for a future backend connection.
