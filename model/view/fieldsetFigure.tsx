import Detail from "../detail";
import Util from "../../util";
import Image from "next/image"
type FieldsetFigureProps = { detail: Detail, sectionName: string, sectionIndex:number };
type PictureProps = { detail: Detail, sectionName: string, sectionIndex:number, className:string };

const FieldsetFigure: (props: FieldsetFigureProps) => JSX.Element  = (props) => {

    const Figure: (props: PictureProps) => JSX.Element = (props) =>{

        return  <>
        <figure className={props.className}>
            <picture className="figure__picture">
                <Image className={`picture__image ${props.detail?.url ? "picture__image--zoom" : ""}`} width={200} height={200} objectFit="contain" src={JSON.parse(String(props.detail.image.src))} alt={props.detail.image.alt} title={props.detail.title?.definition ?? props.detail.image.title}/>
            </picture> 
            {props.detail.image.caption && 
                <figcaption className={`figure__caption ${getDetailFigureCaptionCssModifier(props.sectionIndex)}`}> 
                    <strong>{props.detail.image.caption}</strong>
                </figcaption>
            }
        </figure>
    </> 
    }

    return props.detail.url 
        ?  <address tabIndex={0}  role="link">
                <a tabIndex={-1} href={props.detail?.url ?? `#${props.sectionName}`} target={props.detail?.url ? "_blank" : "_self"} rel="noopener noreferrer"> 
                    <Figure {...Util.MergeObjects([props, {className: "anchor__figure"}]) as PictureProps}/>
                </a>
            </address>
        :  <Figure {...Util.MergeObjects([props, {className: "fieldset__figure"}]) as PictureProps} />
}

const getDetailFigureCaptionCssModifier: (sectionIndex: number) => string = (sectionIndex) => sectionIndex % 2 === 0 
    ? "figure__caption--dark-overlay figure__caption--light-text" 
    : "figure__caption--light-overlay figure__caption--dark-text";

export default FieldsetFigure;