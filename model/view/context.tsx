import { createContext } from "react";
import Data from "../../data";
import Context from "../../type/context";
import Util from "../../util";

export type ComponentDataConnector = (mergeProps: PropsReducer) => ComponentConstructor;
export type PropsReducer = (props: any) => any;
export type ComponentConstructor = (targetComponent: BaseJSXConstructor) => (props: any) => JSX.Element;
export type BaseJSXConstructor = (props?: any) => JSX.Element;
export type ContextProvider = (TargetComponent: BaseJSXConstructor) => (props: any) => JSX.Element;

export const AppContext = createContext<Context|undefined>({ owner: Data.ProjectOwner() });

export const getBaseProps: PropsReducer = (baseProps: object) => ({ ...baseProps });

export const connect: ComponentDataConnector = (getProps: PropsReducer = getBaseProps) => (TargetComponent: BaseJSXConstructor) => {

    return (props: any) => 
        <AppContext.Consumer>
            {(context?: Context) => {
                if (!context) 
                    throw Error(`Context is undefined at the ${TargetComponent.name} component. This is caused either by omitting a default value for context or not setting a provider for it.`);
                
                const contextProps = getProps(context);
                return <TargetComponent {...(Util.MergeObjects([contextProps, props]))} />
            }}
        </AppContext.Consumer>
}

//I will always use the context with data which exist at the point of creating the context, why can't it be the default one?
//Is this really needed at all?
export const withContextProvider = (TargetComponent: BaseJSXConstructor) => {
    return (props: any) => 
        <AppContext.Provider value={{ owner: Data.ProjectOwner() }}>       
            <TargetComponent {...props} />
        </AppContext.Provider>
}
    
