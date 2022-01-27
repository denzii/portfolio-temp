import ToStringProps from "../type/toStringProps";

export default interface IPlainOldObject {
    ToString: (props?: ToStringProps) => string;
}