import { ISocialMediaLink } from "@/_constants/socialMedia";

const SocialMediaLinkItem = ({ link, icon }: ISocialMediaLink) => {
  return (
    <div className="w-10 h-10 bg-agri-50 rounded-full flex justify-center items-center">
      {icon}
    </div>
  );
};

export default SocialMediaLinkItem;
