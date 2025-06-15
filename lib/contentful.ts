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
  contentTypeId: "marketingProjects",
  fields: {
    title: "Symbol",
    slug: "Symbol",
  },
};

export async function fetchProjects() {
  const res = await client.getEntries<EntrySkeletonType<ProjectFields>>({
    content_type: "marketingProjects",
  });
  return res.items.map((item) => ({ ...item.fields }));
}
