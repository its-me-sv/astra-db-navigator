import {collections, nonMapCollections} from './dummy-data';

const allCollections: Array<string> = [...collections, ...nonMapCollections];

export const generateColumnTypeDefinition = (
  type: string, frozen: boolean, depth: number, 
  colTyp: string, key: string, value: string
):string => {
  if (!allCollections.includes(type)) return type;
  if (type === 'tuple') return `tuple<${colTyp}>`;
  let result = '';
  if (type === 'set') result = `set<${colTyp}>`;
  if (type === 'map') result = `map<${key}, ${value}>`;
  if (type === 'list') {
    result = `${colTyp}`;
    for (let i = 1; i <= depth; i += 1)
      result = `list<${result}>`;
  }
  if (frozen) result = `frozen<${result}>`;
  return result;
};