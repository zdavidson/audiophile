import "./MobileMenu.scss";
import ProductCategories from "./ProductCategories";

const MobileMenu = () => {
  return (
    <>
      <div id="mobile-menu-bg"></div>
      <div id="mobile-menu">
        <ProductCategories />
      </div>
    </>
  );
};

export default MobileMenu;
