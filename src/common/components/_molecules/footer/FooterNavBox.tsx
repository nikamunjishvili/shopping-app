const FooterNavBox = (props: {
  title: string;
  contact: string;
  facts: string;
  conditions: string;
  privacy: string;
}) => {
  const { title, contact, facts, conditions, privacy } = props;
  
  return (
    <div className="w-[130px]">
      <h1 className="text-base text-white font-medium">{title}</h1>
      <div className="grid mt-5 text-sm gap-y-3 text-[#999999]">
        <p>{contact}</p>
        <p>{facts}</p>
        <p>{conditions}</p>
        <p>{privacy}</p>
      </div>
    </div>
  );
};

export default FooterNavBox;
