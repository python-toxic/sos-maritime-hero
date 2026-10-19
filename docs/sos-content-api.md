# SOS India content API handoff

This project currently has no content API or database connection. The homepage
uses empty, explicitly unconfigured results; it does not display sample records
as if they were live. The Zod schemas in `src/lib/sos-content.ts` define the
expected published record shapes.

## Expected collection contract

| Collection | Suggested read endpoint | CMS-managed actions |
| --- | --- | --- |
| Services | `GET /api/content/services` | Create, edit, publish/unpublish, reorder, manage details |
| Courses | `GET /api/content/courses` | Create, edit, publish/unpublish, manage course information |
| Employees | `GET /api/content/employees` | Create, edit, publish/unpublish, manage staff profiles |
| Job openings | `GET /api/content/job-openings` | Create, edit, publish/unpublish, close/archive vacancies |

Each read response should be `{ "items": [...] }`, validate against its matching
Zod schema, and return only published records to the public homepage. Writes
should require CMS authorization and validate the same schema server-side.
Services need a nonnegative `sortOrder`; opening an archived or closed vacancy
must not make it appear as an active listing. These endpoints are contracts only
and are not implemented in this project.

Insights and FAQs should be linked to their existing systems when those routes
and destinations are supplied; neither system is present in this project yet.

## Fields

- Services: `id`, `slug`, `title`, `summary`, `description`, optional `imageUrl`,
  `status`, `sortOrder`.
- Courses: `id`, `slug`, `title`, `summary`, `description`, optional `imageUrl`,
  optional `enquiryUrl`, `status`.
- Employees: `id`, `name`, `designation`, optional `biography`, optional
  `imageUrl`, `status`.
- Job openings: `id`, `slug`, `title`, optional `location`, `summary`, optional
  `applicationUrl`, `status`.

`status` is `draft`, `published`, or `archived`. Slugs use lowercase letters,
numbers, and hyphens. Optional image and action links must be valid absolute
URLs when provided.