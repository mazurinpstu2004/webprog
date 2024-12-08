import AdminHeader from "../../components/admin/AdminHeader";
import AdminHero from "../../components/admin/AdminHero";
import AdminBrands from "../../components/admin/AdminBrands";
import AdminFutureHere from "../../components/admin/AdminFutureHere";
import AdminWhatIsChatGpt from "../../components/admin/AdminWhatIsChatGpt";
import AdminEarlyAccess from "../../components/admin/AdminEarlyAccess";
import AdminEarlyAccessRectangle from "../../components/admin/AdminEarlyAccessRectangle";
import AdminBlog from "../../components/admin/AdminBlog";
import AdminFinal from "../../components/admin/AdminFinal";

import HeroContextProvider from "../../contexts/admin/HeroContext";
import HeaderContextProvider from "../../contexts/admin/HeaderContext";
import FutureHereContextProvider from "../../contexts/admin/FutureHereContext";
import BrandsContextProvider from "../../contexts/admin/BrandsContext";
import WhatIsChatGptContextProvider from "../../contexts/admin/WhatIsChatGpt";
import EarlyAccessContextProvider from "../../contexts/admin/EarlyAccessContext";
import EarlyAccessRectangleContextProvider from "../../contexts/admin/EarlyAccessRectangleContext";
import BlogContextProvider from "../../contexts/admin/BlogContext";
import FinalContextProvider from "../../contexts/admin/FinalContext";

const AdminHome = () => {
  return (
    <div>
      <HeaderContextProvider>
        <AdminHeader />
      </HeaderContextProvider>
      <HeroContextProvider>
        <AdminHero />
      </HeroContextProvider>
      <BrandsContextProvider>
        <AdminBrands />
      </BrandsContextProvider>
      <WhatIsChatGptContextProvider>
        <AdminWhatIsChatGpt />
      </WhatIsChatGptContextProvider>
      <FutureHereContextProvider>
        <AdminFutureHere />
      </FutureHereContextProvider>
      <EarlyAccessContextProvider>
        <AdminEarlyAccess />
      </EarlyAccessContextProvider>
      <EarlyAccessRectangleContextProvider>
        <AdminEarlyAccessRectangle />
      </EarlyAccessRectangleContextProvider>
      <BlogContextProvider>
        <AdminBlog />
      </BlogContextProvider>
      <FinalContextProvider>
        <AdminFinal />
      </FinalContextProvider>
    </div>
  );
};

export default AdminHome;
