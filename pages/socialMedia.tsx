import PersonalURLs from '../interface/personalUrls';
import ExternalNavigationProps from '../type/externalNavigationProps';
import { connect, ComponentConstructor }  from '../model/view/context';
import AppContext from '../type/context';
import Util from '../util';
import _ from '../model/view/keyableFragment';
import * as ReactIcons from 'react-icons/fa';

type SocialMediaSectionProps =  { urls: PersonalURLs };

type ContextReducer =  (context: AppContext) => SocialMediaSectionProps;
const Data: ContextReducer = (context: AppContext) => ({
        urls: context.owner.urls,
});

const SocialMedia: (props: SocialMediaSectionProps) => JSX.Element  = (props) => <>
    {Object.entries(props.urls).map(([targetPlatformName, navigationProps]: [string, ExternalNavigationProps]) => <_ key={targetPlatformName}>
        <address className="social-media__external-address" >
                <a href={getTargetPlatformHref(targetPlatformName, navigationProps.url)} target={"_blank"} rel="noopener noreferrer" title={`My ${Util.Capitalize(targetPlatformName)}`} aria-label={`My ${targetPlatformName} URL`} > 
                <ReactIcon iconName={navigationProps.iconName}/>  
                </a>
        </address>
    </_>)}
</>

const getTargetPlatformHref: (targetPlatformName: string, navigationUrl: string) => string = (targetPlatformName, navigationUrl) => targetPlatformName === "email" ? `mailto: ${navigationUrl}` : navigationUrl;

const ReactIcon = (props: {iconName:string}) => {
    // cannot really use the named export's name as key and get typescript to be happy about it without unnecessary work, so just going to do the below and be happy about it
    //@ts-ignore
    const Icon = ReactIcons[props.iconName];
    if (Icon == undefined) throw new Error("A Font Awesome icon with the given name does not exist in react-icons library... Please see the available ones at: https://react-icons.github.io/react-icons/icons?name=fa")
    
    return <Icon className="anchor__icon anchor__icon--white" />
};

const WithContextConsumer: ComponentConstructor = connect(Data);
export default WithContextConsumer(SocialMedia);