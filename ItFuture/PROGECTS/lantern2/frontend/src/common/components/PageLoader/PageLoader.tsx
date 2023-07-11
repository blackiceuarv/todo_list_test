import React, { FC } from 'react';
import {Loader, Overlay} from "@/common/components";


interface IPageLoaderProps {
  className?: string;
}

export const PageLoader: FC<IPageLoaderProps> = ({ className }) => {
  return (
    <Overlay className={className}>
      <Loader />
    </Overlay>
  );
};
