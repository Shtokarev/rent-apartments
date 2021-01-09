import { UserAgent } from '@types';

export const getUserAgent = async (userAgent: string): Promise<UserAgent> => {
  const { UAParser } = await import('ua-parser-js');
  const uaParser = new UAParser(userAgent);
  const uaParserResult = uaParser.getResult();

  return uaParserResult;
};
