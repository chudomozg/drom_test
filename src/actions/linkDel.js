import { LINK_DELETE } from "./index";

export const linkDel = id => {
  return {
    type: LINK_DELETE,
    payload: id
  };
};
