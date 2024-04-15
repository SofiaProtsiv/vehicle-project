import cl from "./HomePage.module.scss";

const HomePage = function () {
  return (
    <section className={cl.section}>
      <div className={cl["content-wrapper"]}>
        <h1 className={cl.title}>The Camper Rent</h1>
      </div>
    </section>
  );
};

export default HomePage;
