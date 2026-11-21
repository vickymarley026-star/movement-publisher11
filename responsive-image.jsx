import * as React from "react";
export const ResponsiveImage = React.forwardRef(({ src, parsed, onSourceChange, fittingType, focalPoint, quality, aspectRatio, ...p }, ref) => <img ref={ref} src={src} {...p} />);
