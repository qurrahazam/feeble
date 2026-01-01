export function EllipseBg() {
  return (
    <div className="fixed top-0 left-0 pointer-events-none z-0 w-full h-auto">
      <svg 
        className="w-full h-auto max-w-[300px] md:max-w-[400px] lg:max-w-[660px]"
        viewBox="0 0 500 334" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMinYMin meet"
      >
        <g filter="url(#filter0_f_1_146)">
          <ellipse 
            cx="143.159" 
            cy="-7.8811" 
            rx="235.633" 
            ry="220.881" 
            fill="white" 
            fillOpacity="0.7"
          />
        </g>
        <defs>
          <filter 
            id="filter0_f_1_146" 
            x="-213.474" 
            y="-349.762" 
            width="713.265" 
            height="683.762" 
            filterUnits="userSpaceOnUse" 
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix"/>
            <feBlend 
              mode="normal" 
              in="SourceGraphic" 
              in2="BackgroundImageFix" 
              result="shape"
            />
            <feGaussianBlur 
              stdDeviation="60.5" 
              result="effect1_foregroundBlur_1_146"
            />
          </filter>
        </defs>
      </svg>
    </div>
  );
}