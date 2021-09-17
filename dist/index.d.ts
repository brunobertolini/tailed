import * as React from 'react';
declare type Props = {
    [key: string]: any;
};
declare type ComponentOrTag = string | React.ComponentType<Props>;
declare type PropsHandler = (props?: Props) => string;
declare type Fragment = string | PropsHandler;
declare type Utility = TemplateStringsArray | string[];
export declare const tail: (str: Utility, ...args: Fragment[]) => (props?: Props | undefined) => string;
export declare const tailed: (componentName: ComponentOrTag) => (strs: Utility, args_0: Fragment) => ({ className, children, ...props }: Props) => JSX.Element;
export {};
