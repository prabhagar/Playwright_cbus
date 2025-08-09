import path from 'path';

export const getAttachmentPath = (filename: string) => {
  return path.resolve(__dirname, '../../test-fixtures/attachments', filename);
};