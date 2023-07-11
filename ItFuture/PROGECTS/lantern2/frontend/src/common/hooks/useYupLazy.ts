import { AnySchema, lazy, mixed } from 'yup';

export const useYupLazy = (
  depends: boolean,
  schema: AnySchema,
  fallbackSchema: AnySchema = mixed().notRequired(),
) =>
  lazy(() => {
    if (depends) {
      return schema;
    }

    return fallbackSchema;
  });
