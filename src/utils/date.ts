export const formatDate = (dateString: string, locale = 'ja-JP'): string => {
  return new Date(dateString).toLocaleDateString(locale, {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
};

export const formatDateShort = (dateString: string, locale = 'ja-JP'): string => {
  return new Date(dateString).toLocaleDateString(locale, {
    year: 'numeric',
    month: 'numeric',
    day: 'numeric'
  });
};

export const formatMonth = (dateString: string, locale = 'ja-JP'): string => {
  return new Date(dateString).toLocaleDateString(locale, {
    year: 'numeric',
    month: 'long'
  });
};

export const getYear = (dateString: string): number => {
  return new Date(dateString).getFullYear();
};