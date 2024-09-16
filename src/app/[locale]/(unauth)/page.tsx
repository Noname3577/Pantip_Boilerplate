/* eslint-disable react/no-useless-fragment */
import { getTranslations, unstable_setRequestLocale } from 'next-intl/server';

import Middlebody from '../../../components/HomeMe_a/Middlebody';

export async function generateMetadata(props: { params: { locale: string } }) {
  const t = await getTranslations({
    locale: props.params.locale,
    namespace: 'Index',
  });

  return {
    title: 'Pantip - Learn, Share & Fun',
    description: t('meta_description'),
  };
}

export default function Index(props: { params: { locale: string } }) {
  unstable_setRequestLocale(props.params.locale);

  return (
    <>
      <div>
        <Middlebody />
      </div>
    </>
  );
}
