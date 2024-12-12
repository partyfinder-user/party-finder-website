import { generateUUID, getCookieByKey, setCookieValue } from './tools';

export const getUserUUID = () => {
  let uuidck, uuidls;
  uuidls = localStorage.getItem('__usruuid');
  uuidck = getCookieByKey('__usruuid');

  if (uuidls || uuidck) {
    const uuid = uuidls ?? uuidck;
    setCookieValue('__usruuid', uuid, 1000);
    localStorage.setItem('__usruuid', uuid);
    console.log(`User uuid not detected >> ${uuid}`);
    return uuid;
  }

  const uuid = generateUUID();
  setCookieValue('__usruuid', uuid, 1000);
  localStorage.setItem('__usruuid', uuid);
  console.log(`User uuid not detected >> Generate new uuid: ${uuid}`);
  return uuid;
};
