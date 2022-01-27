import { TextProps } from "../detail";
import HTMLTag from "./htmlTag";
import _ from "./keyableFragment";

const Text: (props: {description: TextProps[], cssClass:string}) =>  JSX.Element = (props) => {
    const JSXElements = props.description.map((element, index) => {
        // key as first and last few letters inside the text and the index, unique enough?
        const key: string = element.text.substring(0,2) + index + element.text.substring(element.text.length, element.text.length -2);
        
        return element.format 
            ? <HTMLTag as={element.format} key={key} className={element.unstyled ? `${props.cssClass} ${props.cssClass}--no-style` : ""}>{element.text} </HTMLTag> 
            : <_ key={key}>{element.text} </_> 
    });

    return <>{JSXElements}</>;
} 


export default Text;