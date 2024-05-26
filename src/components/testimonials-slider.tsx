import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Avatar } from "@nextui-org/react";

interface Testimonial {
  name: string;
  position: string;
  testimonial: string;
  avatar: string;
  background: string;
}

const testimonials: Testimonial[] = [
  {
    name: "John Doe",
    position: "Teacher",
    testimonial:
      "African Capital provided me with a loan when I needed it the most. Their service is excellent and the terms are very fair.",
    avatar:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmedia.gq.com%2Fphotos%2F5a452be350c0930b83d797c1%2F4%3A3%2Fw_1668%2Ch_1251%2Cc_limit%2Fidris-elba-grooming-gq.jpg&f=1&nofb=1&ipt=121c455b66519792bfb9669d1414c9319570af1095462bd3df19c57606bf1340&ipo=images",
    background:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.wallpapersafari.com%2F97%2F99%2FCbKQsx.jpg&f=1&nofb=1&ipt=586ebd637629badeb4c14ab18abfcd9fedd7c37e94accefed4b7abf3e31eb475&ipo=images",
  },
  {
    name: "Jane Smith",
    position: "Civil Servant",
    testimonial:
      "I had a great experience with African Capital. They are professional, and their loan process is very straightforward.",
    avatar:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmedia.gq.com%2Fphotos%2F5a452be350c0930b83d797c1%2F4%3A3%2Fw_1668%2Ch_1251%2Cc_limit%2Fidris-elba-grooming-gq.jpg&f=1&nofb=1&ipt=121c455b66519792bfb9669d1414c9319570af1095462bd3df19c57606bf1340&ipo=images",
    background:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.wallpapersafari.com%2F97%2F99%2FCbKQsx.jpg&f=1&nofb=1&ipt=586ebd637629badeb4c14ab18abfcd9fedd7c37e94accefed4b7abf3e31eb475&ipo=images",
  },
  {
    name: "Peter Johnson",
    position: "Salaried Employee",
    testimonial:
      "The loan I got from African Capital helped me to manage my finances better. I highly recommend them to anyone in need of financial assistance.",
    avatar:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.pngall.com%2Fwp-content%2Fuploads%2F5%2FUser-Profile-PNG.png&f=1&nofb=1&ipt=904e05e6d674479eecb593feada37b6c37b692731bb10925ad2cdcf52d708341&ipo=images",
    background:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.wallpapersafari.com%2F97%2F99%2FCbKQsx.jpg&f=1&nofb=1&ipt=586ebd637629badeb4c14ab18abfcd9fedd7c37e94accefed4b7abf3e31eb475&ipo=images",
  },
];

const TestimonialSlider: React.FC = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Slider className="h-52" {...settings}>
      {testimonials.map((testimonial: Testimonial, index: number) => (
        <div
          className="flex w-full h-full items-center align-middle justify-center mx-auto"
          key={index}
        >
          {/* <img
            src={testimonial.avatar}
            className="h-20 w-20 rounded-full object-cover mx-auto"
          /> */}
          <Avatar src={testimonial.avatar} className="mx-auto h-20 w-20" />
          <p className="text-cyan-100 text-center font-bold">
            {testimonial.name}
          </p>
          <p className="text-cyan-200 text-center">{testimonial.position}</p>
          <p className="text-white text-sm md:text-lg text-center mt-4 italic mb-10 ">
            {testimonial.testimonial}&quot;{" "}
          </p>
        </div>
      ))}
    </Slider>
  );
  // return (
  //   <div className="max-w-2xl mx-auto py-8">
  //     <Swiper
  //       modules={[Pagination, Navigation]}
  //       spaceBetween={50}
  //       slidesPerView={1}
  //       pagination={true}
  //     >
  //       {testimonials.map((testimonial, index) => (
  //         <SwiperSlide key={index}>
  //           <div className=" p-6 rounded-lg shadow-md flex my-0 flex-col items-center">
  //             <img
  //               src={testimonial.avatar}
  //               alt={testimonial.name}
  //               className="w-24 h-24 rounded-full mb-4"
  //             />
  //             <p className="text-white italic mb-4">
  //               {testimonial.testimonial}&quot;
  //             </p>
  //             <p className="text-gray-900 font-bold">{testimonial.name}</p>
  //             <p className="text-gray-600">{testimonial.position}</p>
  //           </div>
  //         </SwiperSlide>
  //       ))}
  //     </Swiper>
  //   </div>
  // );
};

export default TestimonialSlider;
