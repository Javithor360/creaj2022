import "./assets/scss/acc_main.scss";
// componentes
import { Navbar, Footer } from "../../components/";

// hooks
import { Link } from "react-router-dom";

// Assets
import {
  BsPiggyBank,
  BsArrowUpRightCircleFill,
  BsCreditCard2Back,
} from "react-icons/bs";
import {
  FaAngleRight,
  FaRegCreditCard,
  FaMoneyCheckAlt,
  FaScroll,
  FaClock,
} from "react-icons/fa";

const AccountsImg = require.context("./assets/img/acc", true);

export const AccountsPage = () => {
  return (
    <>
      <Navbar />
      <section className="hero">
        <div className="hero-cont">
          <BsPiggyBank size="4.375rem" color="#fff" />
          <h1>Cuentas</h1>
          <p>Conoce nuestra gama de posibilidades</p>
        </div>
      </section>

      <section className="post-hero-container">
        <div className="post-hero-info">
          <p>Tipos de cuenta</p>
          <hr />
        </div>

        <div className="acc-container">
          <div className="acc-details">
            <h1>Cuenta Corriente</h1>
            <p className="acc-desc">
              Disfruta de la liquidez inmediata con tu tarjeta de débito o
              chequera.
            </p>
            <p className="acc-feature">
              <FaMoneyCheckAlt color="#455FB9" /> Solicita tu chequera en Línea
            </p>
            <p className="acc-feature">
              <FaScroll color="#455FB9" /> Estado de cuenta digital
            </p>
            <p className="acc-feature">
              <FaRegCreditCard color="#455FB9" /> Tarjeta de débito
              internacional
            </p>
            <div className="acc-btn">
              <Link to="/accounts/checking">
                <span>Más información</span>
                <FaAngleRight color="#fff" />
              </Link>
            </div>
          </div>

          <div className="acc-img">
            <img src={AccountsImg("./acc_checking_card.jpg")} alt="" />
          </div>
        </div>

        <div className="acc-container">
          <div className="acc-details">
            <h1>Cuenta de Ahorros</h1>
            <p className="acc-desc">
              Dispone de tu dinero sin restricción de fondos las 24 horas del
              día.
            </p>
            <p className="acc-feature">
              <FaClock color="#455FB9" /> Disponibilidad inmediata
            </p>
            <p className="acc-feature">
              <BsCreditCard2Back color="#455FB9" /> Tarjeta de débito Demantur
              Classic
            </p>
            <p className="acc-feature">
              <BsArrowUpRightCircleFill color="#455FB9" /> Controla tus
              movimientos 24/7
            </p>
            <div className="acc-btn">
              <Link to="/accounts/savings">
                <span>Más información</span>
                <FaAngleRight color="#fff" />
              </Link>
            </div>
          </div>

          <div className="acc-img">
            <img src={AccountsImg("./acc_savings_card.jpg")} alt="" />
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};
