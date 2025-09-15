import { getLinkBuilder, LinkBuilder } from './get-link-builder';

interface ResourcePaths<TRootParams extends object = never> {
  list: LinkBuilder<TRootParams>;
  create?: string;
  view: (id: number) => string;
  edit?: (id: number) => string;
}

export const getResourcePaths = <TRootParams extends object = never>(
  basePath: string,
  options?: { withCreation?: boolean; withEditing?: boolean },
): ResourcePaths<TRootParams> => {
  const paths: ResourcePaths<TRootParams> = {
    list: getLinkBuilder<TRootParams>(basePath),
    view: (id: number) => `${basePath}/${id}`,
  };

  if (options?.withCreation) {
    paths.create = `${basePath}/create`;
  }

  if (options?.withEditing) {
    paths.edit = (id: number) => `${basePath}/${id}/edit`;
  }

  return paths;
};
