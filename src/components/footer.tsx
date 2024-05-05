const navigation = {
  links: [
    { name: "Home", href: "/" },
    { name: "Types of Loans", href: "/types-of-loans" },
    { name: `FAQ's`, href: "/faq" },
    { name: "Contact", href: "/contact" },
    { name: "Apply Loan", href: "/apply-loan" },
  ],
  support: [
    { name: "Pricing", href: "#" },
    { name: "Documentation", href: "#" },
    { name: "Guides", href: "#" },
    { name: "API Status", href: "#" },
  ],
  clients: [
    { name: "Office of the President" },
    { name: "Office of the Vice President" },
    { name: "Ministry of State For National Heritage & Culture" },
    { name: "Office of the Prime Minister" },
    { name: "Ministry of Agriculture" },
    { name: "Ministry of Education (Teachers Service Commission)" },
    { name: "Ministry of Medical Services " },
    { name: "And Many More" },
  ],
  branches: [
    { name: "Kibwezi – 0716 086456" },
    { name: "Kisumu – 0702 660842" },
    { name: "Eldoret – 0716 086 269" },
    { name: "Kericho – 0716 086 470" },
    { name: "Siaya – 0716 086 556" },
    { name: "Migori – 0716 086 491" },
    { name: "Kitui – 0716 086 536" },
    { name: "Homabay – 0708 292 898" },
    { name: "Kisii – 0708 292 847" },
    { name: "Kakamega – 0708 292 798" },
    { name: "Bungoma – 0708 292 813" },
    { name: "Thika (coming soon)" },
    { name: "Nakuru (coming soon)" },
    { name: "Machakos (coming soon)" },
  ],
  social: [
    {
      name: "Facebook",
      href: "https://web.facebook.com/African-Capital-Limited-Kenya-2247078775531058",
      icon: (props: any) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      name: "Instagram",
      href: "https://www.instagram.com/official_africancapitallimited/",
      icon: (props: any) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      name: "Twitter",
      href: "https://twitter.com/africancapital1",
      icon: (props: any) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
        </svg>
      ),
    },
  ],
  offices: [
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
  ],
};

export default function Footer() {
  return (
    <footer className="bg-gray-900" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="mx-auto max-w-7xl px-6 pb-8 pt-16 sm:pt-24 lg:px-8 lg:pt-32">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8">
            <div className="h-52 flex justify-center items-center align-middle bg-white rounded-full w-52 object-contain  ">
              <img
                className="object-contain h-36 w-36"
                src="/logos/logo_no_bg.png"
                alt="Company name"
              />
            </div>

            <p className="text-sm leading-6 text-gray-300">
              The solution to your money needs
            </p>
            <div className="flex space-x-6">
              {navigation.social.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-500 hover:text-gray-400"
                >
                  <span className="sr-only">{item.name}</span>
                  <item.icon className="h-6 w-6" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>
          <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6 text-white">
                  Company
                </h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.links.map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        className="text-sm leading-6 text-gray-300 hover:text-white"
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-sm font-semibold leading-6 text-white">
                  Clients
                </h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.clients.map((item) => (
                    <li key={item.name}>
                      <p className="text-sm leading-6 text-gray-300">
                        {item.name}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-semibold leading-6 text-white">
                  Branches
                </h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.branches.map((item) => (
                    <li key={item.name}>
                      <p className="text-sm leading-6 text-gray-300">
                        {item.name}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-10 md:mt-0">
          <h3 className="text-sm font-semibold leading-6 text-white">
            Offices
          </h3>
          <ul role="list" className="lg:flex lg:align-middle mt-6 space-y-4">
            {navigation.offices.map((item) => (
              <li className="flex flex-col justify-center " key={item.name}>
                <p className="text-lg leading-6 text-gray-300 font-semibold">
                  {item.name}
                </p>
                <p className="text-sm leading-6 text-gray-300">
                  {`${item.address_line_1}, ${item.address_line_2}`}
                </p>
                {item.po_box && (
                  <p className="text-sm leading-6 text-gray-300">
                    {`P.O Box ${item.po_box}`}
                  </p>
                )}
                <p className="text-sm leading-6 text-gray-300">
                  {`Tel ${item.phone_num_1}/ ${item.phone_num_2}`}
                </p>
                {item.email && (
                  <p className="text-sm leading-6 text-gray-300">
                    {`Email ${item.email}`}
                  </p>
                )}
              </li>
            ))}
          </ul>
        </div>
        <div className="mt-16 border-t border-white/10 pt-8 sm:mt-20 lg:mt-24">
          <p className="text-xs leading-5 text-gray-400">
            African Capital Limited Copyright &copy; 2024
          </p>
        </div>
      </div>
    </footer>
  );
}
