import { SVGProps } from "react"

const ScrollIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={144}
    height={144}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g filter="url(#a)">
      <rect x={40} y={25} width={64} height={64} rx={32} fill="#065373" />
      <path
        d="M72 50.6c.933 0 1.867.36 2.573 1.067l8.694 8.693a1.006 1.006 0 0 1 0 1.413 1.006 1.006 0 0 1-1.414 0L73.16 53.08c-.64-.64-1.68-.64-2.32 0l-8.693 8.693a1.006 1.006 0 0 1-1.414 0 1.006 1.006 0 0 1 0-1.413l8.694-8.693A3.635 3.635 0 0 1 72 50.6Z"
        fill="#fff"
      />
    </g>
    <defs>
      <filter
        id="a"
        x={0}
        y={0}
        width={144}
        height={144}
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dy={15} />
        <feGaussianBlur stdDeviation={20} />
        <feColorMatrix values="0 0 0 0 0.0235294 0 0 0 0 0.32549 0 0 0 0 0.45098 0 0 0 0.08 0" />
        <feBlend
          in2="BackgroundImageFix"
          result="effect1_dropShadow_3871_36646"
        />
        <feBlend
          in="SourceGraphic"
          in2="effect1_dropShadow_3871_36646"
          result="shape"
        />
      </filter>
    </defs>
  </svg>
)

export default ScrollIcon
