import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

export const Slider = () => {
  return (
    <>
      <Carousel
        additionalTransfrom={0}
        arrows
        autoPlay
        autoPlaySpeed={5000}
        centerMode={false}
        className=''
        containerClass='container-with-dots'
        dotListClass=''
        draggable
        focusOnSelect={false}
        infinite
        itemClass=''
        keyBoardControl
        minimumTouchDrag={80}
        pauseOnHover
        renderArrowsWhenDisabled={false}
        renderButtonGroupOutside={false}
        renderDotsOutside={false}
        responsive={{
          desktop: {
            breakpoint: {
              max: 3000,
              min: 1024,
            },
            items: 3,
            partialVisibilityGutter: 40,
          },
          mobile: {
            breakpoint: {
              max: 464,
              min: 0,
            },
            items: 1,
            partialVisibilityGutter: 30,
          },
          tablet: {
            breakpoint: {
              max: 1024,
              min: 464,
            },
            items: 2,
            partialVisibilityGutter: 30,
          },
        }}
        rewind={false}
        rewindWithAnimation={false}
        rtl={false}
        shouldResetAutoplay
        showDots={false}
        sliderClass=''
        slidesToSlide={2}
        swipeable
      >
        <img
          src='https://images.unsplash.com/photo-1549989476-69a92fa57c36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'
          style={{
            display: 'block',
            height: '100%',
            margin: 'auto',
            width: '100%',
          }}
        />
        <img
          src='https://images.unsplash.com/photo-1549396535-c11d5c55b9df?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60'
          style={{
            display: 'block',
            height: '100%',
            margin: 'auto',
            width: '100%',
          }}
        />
        <img
          src='https://images.unsplash.com/photo-1550133730-695473e544be?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'
          style={{
            display: 'block',
            height: '100%',
            margin: 'auto',
            width: '100%',
          }}
        />
        <img
          src='https://images.unsplash.com/photo-1550167164-1b67c2be3973?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'
          style={{
            display: 'block',
            height: '100%',
            margin: 'auto',
            width: '100%',
          }}
        />
        <img
          src='https://images.unsplash.com/photo-1550338861-b7cfeaf8ffd8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'
          style={{
            display: 'block',
            height: '100%',
            margin: 'auto',
            width: '100%',
          }}
        />
      </Carousel>
    </>
  );
};