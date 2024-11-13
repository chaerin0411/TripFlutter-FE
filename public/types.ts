import { StaticImageData } from 'next/image';

export interface ListData {
  id: number;
  image: StaticImageData | string;
  destinationName: string;
  tags: string[];
}

export interface TestListData {
  [key: string]: ListData[];
}