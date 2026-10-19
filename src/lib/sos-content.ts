import { z } from "zod";

const slug = z.string().min(1).regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/);
const publicationStatus = z.enum(["draft", "published", "archived"]);
const optionalImageUrl = z.string().url().nullable().optional();

export const serviceSchema = z.object({
  id: z.string().min(1),
  slug,
  title: z.string().min(2).max(100),
  summary: z.string().min(10).max(240),
  description: z.string().min(20),
  imageUrl: optionalImageUrl,
  status: publicationStatus,
  sortOrder: z.number().int().nonnegative(),
});

export const courseSchema = z.object({
  id: z.string().min(1),
  slug,
  title: z.string().min(2).max(100),
  summary: z.string().min(10).max(240),
  description: z.string().min(20),
  imageUrl: optionalImageUrl,
  enquiryUrl: z.string().url().nullable().optional(),
  status: publicationStatus,
});

export const employeeSchema = z.object({
  id: z.string().min(1),
  name: z.string().min(2).max(100),
  designation: z.string().min(2).max(100),
  biography: z.string().max(1200).nullable().optional(),
  imageUrl: optionalImageUrl,
  status: publicationStatus,
});

export const jobOpeningSchema = z.object({
  id: z.string().min(1),
  slug,
  title: z.string().min(2).max(100),
  location: z.string().min(2).max(100).nullable().optional(),
  summary: z.string().min(10).max(240),
  applicationUrl: z.string().url().nullable().optional(),
  status: publicationStatus,
});

export type Service = z.infer<typeof serviceSchema>;
export type Course = z.infer<typeof courseSchema>;
export type Employee = z.infer<typeof employeeSchema>;
export type JobOpening = z.infer<typeof jobOpeningSchema>;

export type CollectionResult<T> =
  | { status: "unconfigured"; items: readonly T[] }
  | { status: "loading"; items: readonly T[] }
  | { status: "ready"; items: readonly T[] }
  | { status: "empty"; items: readonly T[] }
  | { status: "error"; items: readonly T[]; message: string };

// No CMS API is configured in this project. Replace these empty results with the
// typed API adapter documented in docs/sos-content-api.md when a source exists.
export const sosContent: {
  services: CollectionResult<Service>;
  courses: CollectionResult<Course>;
  employees: CollectionResult<Employee>;
  jobOpenings: CollectionResult<JobOpening>;
} = {
  services: { status: "unconfigured", items: [] },
  courses: { status: "unconfigured", items: [] },
  employees: { status: "unconfigured", items: [] },
  jobOpenings: { status: "unconfigured", items: [] },
};