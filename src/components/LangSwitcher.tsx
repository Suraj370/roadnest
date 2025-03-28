import { useTranslation } from "react-i18next";

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    console.log(`Changing language to ${lng}`);
    i18n.changeLanguage(lng);
  };

  return (
    <div className="flex items-center space-x-2">
      <button className="hover:cursor-pointer" onClick={() => changeLanguage("en")}>English</button>
      <button className="hover:cursor-pointer" onClick={() => changeLanguage("fr")}>Spanish</button>
    </div>
  );
};

export default LanguageSwitcher;
