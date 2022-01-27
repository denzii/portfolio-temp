import { ElementType, HTMLAttributes, FC } from 'react';

interface ComponentProps extends HTMLAttributes<HTMLOrSVGElement> {
  as?: ElementType;
}

const HTMLTag: FC<ComponentProps> = ({ as: Tag = "div", ...otherProps }) => {
  return <Tag {...otherProps} />;
};

export default HTMLTag;
