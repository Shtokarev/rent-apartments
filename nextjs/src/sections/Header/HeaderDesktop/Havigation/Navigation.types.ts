import { LinkProps } from '@components/Link';

export interface NavMenuItem {
  readonly link: LinkProps;
  readonly name: string;
  readonly title?: string;
}
