// eslint-disable-next-line import/prefer-default-export
export const getHighestId = ({ messages }) => {
  const ids = messages.map((message) => message.id);
  return Math.max(...ids);
};
