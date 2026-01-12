declare module "react-lazy-load-image-component" {
  import { CSSProperties, FC, ImgHTMLAttributes } from "react";

  export interface LazyLoadImageProps extends ImgHTMLAttributes<HTMLImageElement> {
    src: string;
    alt?: string;
    effect?: string;
    placeholderSrc?: string;
    threshold?: number;
    visibleByDefault?: boolean;
    wrapperClassName?: string;
    wrapperProps?: any;
    afterLoad?: () => void;
    beforeLoad?: () => void;
    delayMethod?: string;
    delayTime?: number;
    placeholder?: React.ReactElement;
    scrollPosition?: { x: number; y: number };
    style?: CSSProperties;
  }

  export const LazyLoadImage: FC<LazyLoadImageProps>;
}
