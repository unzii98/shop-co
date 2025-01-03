import Casual from "../casual/page";



export default function Test(){
  const testimonials = [
    {
      name: "Sarah M.",
      text: "I'm blown away by the quality and style of the clothes I received from ShopCo. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.",
    },
    {
      name: "Alex K.",
      text: "Finding clothes that align with my personal style used to be a challenge until I discovered ShopCo. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions.",
    },
    {
      name: "James L.",
      text: "As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon ShopCo. The selection of clothes is not only diverse but also on-point with the latest trends.",
    },
  ];
  

  
    return (
      <div className="bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-center text-2xl font-bold text-gray-800 mb-8">OUR HAPPY CUSTOMERS</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white shadow-   md rounded-lg p-6 border border-gray-200 text-center"
              >
                <div className="text-yellow-400 text-xl mb-2">★★★★★</div>
                <h3 className="font-semibold text-gray-800 mb-2">{testimonial.name}</h3>
                <p className="text-sm text-gray-600">{testimonial.text}</p>
              </div>
            ))}
          </div>
        </div>
        <Casual/>
      </div>
    );
  };
  



