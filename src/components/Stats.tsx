import { stats } from "../constants";
import styles from "../style";

export default function Stats() {
  return (
    <section
      className={`${styles.flexCenter} flex-col flex-wrap sm:flex-row sm:mb-20 mb-6`}
    >
      {stats.map((stat) => (
        <div
          key={stat.id}
          className={`flex-1 flex justify-center items-center sm:flex-col flex-row sm:m-1 m-3`}
        >
          <h4 className="font-poppins font-semibold xs:text-[40px] text-[30px] xs:leading-[53px] leading-[43px] text-white">
            {stat.value}
          </h4>
          <p className="font-poppins font-normal text-center xs:text-[20px] text-[15px] xs:leading-[26px] leading-[21px] text-gradient uppercase ml-3">
            {stat.title}
          </p>
        </div>
      ))}
    </section>
  );
}
