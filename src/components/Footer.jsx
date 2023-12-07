import { facebook, instagram, linkedin, logo, twitter } from "../assets";

export const Footer = () => {
  const footerLinks = [
    {
      title: "Useful Links",
      links: [
        {
          name: "Content",
          link: "https://www.hoobank.com/content/",
        },
        {
          name: "How it Works",
          link: "https://www.hoobank.com/how-it-works/",
        },
        {
          name: "Create",
          link: "https://www.hoobank.com/create/",
        },
        {
          name: "Explore",
          link: "https://www.hoobank.com/explore/",
        },
        {
          name: "Terms & Services",
          link: "https://www.hoobank.com/terms-and-services/",
        },
      ],
    },
    {
      title: "Community",
      links: [
        {
          name: "Help Center",
          link: "https://www.hoobank.com/help-center/",
        },
        {
          name: "Partners",
          link: "https://www.hoobank.com/partners/",
        },
        {
          name: "Suggestions",
          link: "https://www.hoobank.com/suggestions/",
        },
        {
          name: "Blog",
          link: "https://www.hoobank.com/blog/",
        },
        {
          name: "Newsletters",
          link: "https://www.hoobank.com/newsletters/",
        },
      ],
    },
    {
      title: "Partner",
      links: [
        {
          name: "Our Partner",
          link: "https://www.hoobank.com/our-partner/",
        },
        {
          name: "Become a Partner",
          link: "https://www.hoobank.com/become-a-partner/",
        },
      ],
    },
  ];
  return (
    <section className="bg-black-500 max-w-[1400px] mx-auto px-5 py-20 lg:px-36 ">
      <div className="grid grid-cols-1 lg:grid-cols-2 border-b border-[#3F3E45] pb-10">
        <div>
          <img src={logo} alt="logo" />
          <p className="text-dimWhite">
            A new way to make the payments easy, reliable and secure.
          </p>
        </div>
        <div className="flex w-full flex-wrap gap-10 justify-between mt-10   ">
          {footerLinks.map((section) => {
            return (
              <div key={section.title}>
                <p className="font-semibold">{section.title}</p>
                {section.links.map((link) => {
                  return (
                    <div key={link.name} className="mt-2">
                      <a
                        href={link.link}
                        target="_blank"
                        rel="noreferrer"
                        className="text-dimWhite"
                      >
                        {link.name}
                      </a>
                    </div>
                  );
                })}
              </div>
            );
          })}
        </div>
      </div>
      <div className=" text-dimWhite flex flex-col lg:flex-row gap-5 mt-5 justify-between items-center">
        <p>Copyright &copy; 2021 HooBank. All Rights Reserved.</p>
        <p>Developed by Ueh-Kabari Lesuuh (xnightkode)</p>
        <div className="flex flex-row justify-between gap-5">
          <img src={instagram} alt="" className="cursor-pointer"/>
          <img src={twitter} alt="" className="cursor-pointer"/>
          <img src={facebook} alt="" className="cursor-pointer"/>
          <img src={linkedin} alt="" className="cursor-pointer"/>
        </div>
      </div>
    </section>
  );
};
