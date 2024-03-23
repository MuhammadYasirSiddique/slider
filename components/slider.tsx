// import React, { Component } from "react";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

// export default class CenterMode extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       centerSlideIndex: 0,
//     };
//   }

//   handleBeforeChange = (oldSlide: any, newSlide: any) => {
//     // The oldSlide and newSlide parameters represent the indices of the slides
//     console.log(`Changing from slide ${oldSlide} to slide ${newSlide}`);

//     this.setState({
//       centerSlideIndex: newSlide,
//     });
//   };

//   handleAfterChange = (currentSlide) => {
//     this.setState({
//       centerSlideIndex: currentSlide,
//     });
//   };

//   render() {
//     const { centerSlideIndex } = this.state;

//     const settings = {
//       className: "center",
//       centerMode: true,
//       infinite: true,
//       centerPadding: "60px",
//       slidesToShow: 3,
//       slideToScroll:1,
//       speed: 500,
      
//       dots: true,
//       // afterChange: this.handleAfterChange,
//       beforeChange: this.handleBeforeChange,
//       // beforeChange: (current, next) => {
//       //   console.log("beforeChange", current, next);
//       // },
//       responsive: [
//         {
//           breakpoint: 1024,
//           settings: {
//             slidesToShow: 3,
//             slidesToScroll: 3,
//             infinite: true,
//             dots: true
//           }
//         },
       
//         {
//           breakpoint: 575,
//           settings: {
//             slidesToShow: 1,
//             slidesToScroll: 1,
//             infinite: true,
//             dots: true
//           }
//         }
//       ]
    
//     };

//     return (
//       <div className=" text-center w-full">
//         <h2>Center Mode</h2>
//         <p>Current center slide index: {centerSlideIndex}</p>
//         <Slider {...settings}>
//           <div>
//             <h3 className={centerSlideIndex === 0 ? "bg-red-800 scale-150" : ""}>
//               1
//             </h3>
//           </div>
//           <div>
//             <h3 className={centerSlideIndex === 1 ? "bg-red-800" : ""}>
//               2
//             </h3>
//           </div>
//           <div>
//             <h3 className={centerSlideIndex === 2 ? "bg-red-800" : ""}>
//               3
//             </h3>
//           </div>
//           <div>
//             <h3 className={centerSlideIndex === 3 ? "bg-red-800" : ""}>
//               4
//             </h3>
//           </div>
//           <div>
//             <h3 className={centerSlideIndex === 4 ?"bg-red-800" : ""}>
//               5
//             </h3>
//           </div>
//           <div>
//             <h3 className={centerSlideIndex === 5 ? "bg-red-800" : ""}>
//               6
//             </h3>
//           </div>
//         </Slider>
//       </div>
//     );
//   }
// }


import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default class CenterMode extends Component {
  constructor(props: {} | Readonly<{}>) {
    super(props);
    this.state = {
      centerSlideIndex: 0,
    };
  }

  handleBeforeChange = (oldSlide: any, newSlide: any) => {
    console.log(`Changing from slide ${oldSlide} to slide ${newSlide}`);

    this.setState({
      centerSlideIndex: newSlide,
    });
  };

  handleAfterChange = (currentSlide: any) => {
    this.setState({
      centerSlideIndex: currentSlide,
    });
  };

  render() {
    const { centerSlideIndex } = this.state;

    const data = [
      { id: 1, content: "1" },
      { id: 2, content: "2" },
      { id: 3, content: "3" },
      { id: 4, content: "4" },
      { id: 5, content: "5" },
      { id: 6, content: "6" },
    ];

    const settings = {
      className: "center",
      centerMode: true,
      infinite: true,
      centerPadding: "60px",
      slidesToShow: 3,
      slideToScroll: 1,
      speed: 400,
      dots: true,
      beforeChange: this.handleBeforeChange,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 575,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
            dots: true,
          },
        },
      ],
    };

    return (
      <div className=" text-center mx-36">
        <h2>Center Mode</h2>
        <p>Current center slide index: {centerSlideIndex}</p>
        <Slider {...settings}>
          {data.map((item) => (
            <div key={item.id}>
              <div className={centerSlideIndex === item.id - 1 ? "bg-red-800 scale-150 p-10 text-3xl transform transition-transform transform-scale-150 " : "bg-slate-500 p-10 my-5"}>
              <h3 className="">
                {item.content}
              </h3>

              </div>
            </div>
          ))}
        </Slider>
      </div>
    );
  }
}
