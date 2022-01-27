import IPlainOldObject from "../interface/plainOldObject";
import ToStringProps from "../type/toStringProps";
import Util from "../util";
import Background from "../interface/background";
import PersonalURLs from "../interface/personalUrls";

export default class ProjectOwner implements IPlainOldObject{
    firstName: string;
    middleName: string;
    lastName: string;
    birthYear: number;
    urls: PersonalURLs;
    background: Background;

    constructor(firstName: string, middleName: string|null, lastName: string, birthYear: number, urls: PersonalURLs, background: Background) {
        this.firstName = firstName;
        this.middleName = middleName ?? "";
        this.lastName = lastName;
        this.birthYear = birthYear;
        this.urls = urls;
        this.background = background;
    }

    ToString = (props?: ToStringProps) => props?.detailed 
        ? `${Util.Capitalize(this.firstName)} ${Util.Capitalize(this.middleName)} ${Util.Capitalize(this.lastName)} born in ${String(this.birthYear)}` 
        : `${Util.Capitalize(this.firstName)} ${Util.Capitalize(this.lastName)}` 
}