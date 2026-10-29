export type Project = {
  id: number;
  title: string;
  description: string;
  descriptionEn?: string;
  imageUrl?: string;
  repositoryUrl: string;
  backendRepositoryUrl?: string;
  liveUrl?: string;
  stacks: string[];
};
