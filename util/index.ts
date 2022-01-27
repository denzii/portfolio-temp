export default class Util {
    static Capitalize: (element: string) => string = (elem) => elem && elem.charAt(0).toUpperCase() + elem.slice(1);
    static MergeObjects: (objects: object[]) => object = (objects) => Object.assign({}, ...objects);
    static KebapCase: (element: string) => string = (elem) =>  elem.match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)!.map(x => x.toLowerCase()).join('-')
}