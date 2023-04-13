import React from 'react';
import {Image as AntImage} from "antd";
import styles from "./styles.module.scss";

/**
 * The props of the Image component
 * @interface IImageProps
 * @property {string} src - The source of the image
 * @property {React.CSSProperties} style - The style of the image (optional) Default: {maxHeight: 550}
 * @property {boolean} preview - Whether to show a preview of the image (optional) Default: false
 */
interface IImageProps {
    src: string;
    style?: React.CSSProperties;
    preview?: boolean;
    footer?: React.ReactNode;
}

const Image = ({src, style, preview=false, footer=null}: IImageProps) => {
    return (
        <div className={styles.imageBasic} style={style}>
            <AntImage
                src={src}
                preview={preview}
            />
            {footer}
        </div>
    );
};

export default Image;