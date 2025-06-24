import { useTranslation } from "react-i18next";

const Main = () => {
  const { t } = useTranslation('main');
  
  return (
    <div>
        {t('mainPage.title')}
    </div>
  );
};

export default Main;