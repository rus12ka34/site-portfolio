import { FC } from 'react';
import { ClassNames, Button, ButtonView } from '@/shared';
import { useTranslation } from 'react-i18next';

interface LangSwitcherProps {
  className?: string;
};

export const LangSwitcher: FC<LangSwitcherProps> = () => { 
  const { t, i18n } = useTranslation();

  const toggleLang = () => {
    i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
  }

  return (
    <Button view={ButtonView.PRIMARY} onClick={toggleLang} className={ClassNames('', {}, [])}>
      {t(i18n.language)}
    </Button>
  );
};