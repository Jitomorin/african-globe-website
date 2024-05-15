export default function OurOffices() {
  const offices = [
    {
      name: "Kenya Head Office",
      address_line_1: "Ambank House, 13th Floor, University Way",
      address_line_2: "Nairobi, Kenya",
      phone_num_1: "0718 210519",
      phone_num_2: "0717 513000",
      email: "info@africancapital.net",
    },
    {
      name: "Tanzania Office",
      address_line_1: "Elite Tower, 2nd Floor, Azikiwe Street",
      address_line_2: "Dar-Es-Salaam, Tanzania",
      phone_num_1: "+255 22 2110043",
      phone_num_2: "2110216",
      email: "infoacl@africancapital.net",
    },
    {
      name: "Dodoma Office",
      address_line_1:
        "Kisumo Tower, 2nd Floor, Madukani/Independent Square Street",
      address_line_2: "Dodoma, Tanzania.",
      po_box: "14800",
      phone_num_1: "+255 689096738",
      phone_num_2: "710317937",
    },
  ];
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900">
            Our offices
          </h2>
          {/* <p className="mt-6 text-lg leading-8 text-gray-600">
            
          </p> */}
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 text-base leading-7 sm:grid-cols-2 sm:gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-4">
          {offices.map((office: any, index: number) => (
            <div key={index}>
              <h3 className="border-l border-primary-600 pl-6 font-semibold text-gray-900">
                {office.name}
              </h3>
              <address className="border-l border-primary-200 pl-6 pt-2 not-italic text-gray-600">
                <p>{`${office.address_line_1}, ${office.address_line_2}`}</p>
                {office.po_box && <p>{`P.O Box ${office.po_box}`}</p>}
                <p>{`Tel ${office.phone_num_1}/ ${office.phone_num_2}`}</p>
                {office.email && <p>{`Email ${office.email}`}</p>}
              </address>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
