import React from 'react';

function Work() {
  const images = [
    { url: "https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/6697d711ae2b889bd611cdf4_YIR%202021%20-%2016%209%20(A).webp", top: "50%", left: "50%", isactive: false },
    { url: "https://cdn.prod.website-files.com/62df9251ae9124d9d726bcb9/6346b68e7f858311216e120b_V2%20Tools%20OpenGraph%20Final.jpg", top: "53%", left: "48%", isactive: false },
    { url: "https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/6697d711ae2b889bd611cdf4_YIR%202021%20-%2016%209%20(A).webp", top: "52%", left: "50%", isactive: false },
    { url: "https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/6697d711ae2b889bd611cdf4_YIR%202021%20-%2016%209%20(A).webp", top: "49%", left: "47%", isactive: false },
    { url: "https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/6697d711ae2b889bd611cdf4_YIR%202021%20-%2016%209%20(A).webp", top: "51%", left: "48%", isactive: false },
    { url: "https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/6697d711ae2b889bd611cdf4_YIR%202021%20-%2016%209%20(A).webp", top: "57%", left: "49%", isactive: false },
  ];

  return (
    <div className='w-full h-screen flex items-center justify-center bg-black relative'>
      {/* Title */}
      <div className='max-w-screen-xl mx-auto text-center'>
        <h1 className='text-[25vw] font-medium text-white leading-none select-none'>Work</h1>
      </div>

      {/* Images */}
      <div className='absolute top-0 left-0 w-full h-full'>
        {images.map((elem, index) => (
          <img
            key={index}
            className='absolute w-40 rounded-lg -translate-x-[50%] -translate-y-[50%]'
            src={elem.url}
            style={{ top: elem.top, left: elem.left }}
            alt={`Image ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

export default Work;
