import { useTranslation } from "react-i18next";

const About = () => {
  const { t } = useTranslation('about');

  return (
    <div>
      {t('aboutPage.title')}
    </div>
  );
};

export default About;