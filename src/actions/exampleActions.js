export const AN_ACTION = 'AN_ACTION';
export function doAction(obj) {
  return { type: AN_ACTION, payload: obj };
}
