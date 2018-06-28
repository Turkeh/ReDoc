import * as React from 'react';
import { ContentItemModel } from '../../services/MenuBuilder';
import { OperationModel } from '../../services/models';
export declare class ContentItems extends React.Component<{
    items: ContentItemModel[];
}> {
    render(): any;
}
export interface ContentItemProps {
    item: ContentItemModel;
}
export declare class ContentItem extends React.Component<ContentItemProps> {
    render(): any;
}
export declare class TagItem extends React.Component<ContentItemProps> {
    render(): JSX.Element;
}
export declare class OperationItem extends React.Component<{
    item: OperationModel;
}> {
    render(): JSX.Element;
}
