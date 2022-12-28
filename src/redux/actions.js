export const addUserId = (id) => {
  return {
    type: "ADD_USERID",
    value: id,
  };
};

export const removeUserId = () => {
  return {
    type: "REMOVE_USERID",
  };
};

export const addRecord = (catches) => {
  return {
    type: "ADD_RECORDS",
    value: catches,
  };
};

export const removeRecord = () => {
  return {
    type: "REMOVE_RECORDS",
  };
};
