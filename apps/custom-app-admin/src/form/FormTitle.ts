import { Form as TForm } from "../api/form/Form";

export const FORM_TITLE_FIELD = "title";

export const FormTitle = (record: TForm): string => {
  return record.title?.toString() || String(record.id);
};
