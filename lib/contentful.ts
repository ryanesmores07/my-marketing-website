import { createClient, Entry, EntrySkeletonType } from "contentful";

export const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID!,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN!,
});

interface ProjectFields {
  title: string;
  slug: string;
}

const projectSkeleton: EntrySkeletonType<ProjectFields> = {
  contentTypeId: "project",
  fields: {
    title: "Symbol",
    slug: "Symbol",
  },
};

interface ServiceFields {
  title: string;
  slug: string;
  icon: any; // Asset link
  teaser: string[];
  body: any; // Rich text
  order: number;
}

export async function fetchProjects() {
  const res = await client.getEntries<EntrySkeletonType<ProjectFields>>({
    content_type: "marketingProjects",
  });
  return res.items.map((item) => ({ ...item.fields }));
}

export async function fetchServices() {
  const res = await client.getEntries<EntrySkeletonType<ServiceFields>>({
    content_type: "service",
  });
  return res.items;
}
