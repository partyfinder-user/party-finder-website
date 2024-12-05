import Cookies from 'js-cookie';

export const formatCurrency = (value) => {
  return new Intl.NumberFormat('it-IT', { style: 'currency', currency: 'EUR' }).format(value);
};

export const formatNumber = (value) => {
  return new Intl.NumberFormat('it-IT').format(value);
};

export const getCookieByKey = (key) => {
  return Cookies.get(key);
};

export const setCookieValue = (key, value, days) => {
  Cookies.set(key, value, { expires: days, path: '/' });
};

export const deleteCookieByKey = (key) => {
  Cookies.remove(key, { path: '/' });
};

export function cx(...classNames) {
  return classNames.filter(Boolean).join(' ');
}

export function generateUUID() {
  var d = new Date().getTime();
  var d2 = (typeof performance !== 'undefined' && performance.now && performance.now() * 1000) || 0;
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    var r = Math.random() * 16;
    if (d > 0) {
      r = (d + r) % 16 | 0;
      d = Math.floor(d / 16);
    } else {
      r = (d2 + r) % 16 | 0;
      d2 = Math.floor(d2 / 16);
    }
    return (c === 'x' ? r : (r & 0x3) | 0x8).toString(16);
  });
}

export function calcDiscountPercent(prevPrice, currentPrice) {
  const discountPercent = parseInt(((prevPrice - currentPrice) / prevPrice) * 100);
  return parseInt(discountPercent);
}

export function calcDiscountAmount(prevPrice, currentPrice) {
  const discountAmount = prevPrice - currentPrice;
  return formatCurrency(discountAmount);
}

export function capitalizeText(text) {
  if (!text || text.length <= 0) {
    return '';
  }

  return text?.charAt(0).toUpperCase() + text?.slice(1).toLowerCase();
}

export function parseTime(inputTime) {
  const timeRegexes = [/^(\d{1,2})$/, /^(\d{1,2})\.(\d{1,2})$/, /^(\d{1,2}):(\d{1,2})$/];

  for (const regex of timeRegexes) {
    const match = inputTime.match(regex);
    if (match) {
      const hours = parseInt(match[1], 10);
      const minutes = match[2] ? parseInt(match[2], 10) : 0;

      if (hours >= 0 && hours < 24 && minutes >= 0 && minutes < 60) {
        return { hours, minutes };
      }
    }
  }

  throw new Error(`Invalid time format: ${inputTime}`);
}

export function isValidImage(src) {
  const resolvedSrc = typeof src === 'object' && src?.src ? src.src : src;
  return typeof resolvedSrc === 'string' && resolvedSrc.trim() !== '';
}
