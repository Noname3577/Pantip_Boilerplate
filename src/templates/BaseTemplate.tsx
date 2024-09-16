import FooterA from '@/components/footer_a/FooterA';

import Tophead from '../components/HomeMe_a/Tophead';

const BaseTemplate = (props: {
  leftNav: React.ReactNode;
  rightNav?: React.ReactNode;
  children: React.ReactNode;
}) => {
  return (
    <div>
      <div>
        <header className="sticky top-0 z-[60] bg-[#ffff] ">
          <Tophead />
        </header>

        <main>{props.children}</main>

        <footer className="mt-10">
          <FooterA />
        </footer>
      </div>
    </div>
  );
};

export { BaseTemplate };
