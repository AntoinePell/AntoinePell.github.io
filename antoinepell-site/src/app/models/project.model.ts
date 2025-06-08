import { Part } from "./part.model";

export interface Project {
  name: string;
  tags?: string[];
  partList: Part[];
  conclusion: string;
}
