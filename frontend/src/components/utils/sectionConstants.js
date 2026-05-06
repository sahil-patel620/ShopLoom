
// export const responsive = {
//   desktop: {
//     breakpoint: { max: 3000, min: 1024 },
//     items: 4,
//     slidesToSlide: 4,
//   },
//   tablet: { breakpoint: { max: 1024, min: 768 }, items: 4, slidesToSlide: 4 },
//   mobile: { breakpoint: { max: 767, min: 464 }, items: 2, slidesToSlide: 1 },
// };


 export const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 3000, min: 1536 },
    items: 5,
    partialVisibilityGutter: 40,
  },
  desktop: {
    breakpoint: { max: 1536, min: 1024 },
    items: 4,
    partialVisibilityGutter: 30,
  },
  tablet: {
    breakpoint: { max: 1024, min: 640 },
    items: 2,
    partialVisibilityGutter: 20,
  },
  mobile: {
    breakpoint: { max: 640, min: 0 },
    items: 1,
    partialVisibilityGutter: 15,
  },
};