import style from './StatisticsItem.module.css';
import { IconContext } from "react-icons";

const StatisticsItem = ({total, title, icon}) => {
  return ( <>
     <IconContext.Provider value={{ color: "grey", size:'30' }}>
  {icon}
</IconContext.Provider>
     <span className={style.counter}>{total}</span>
     <p className={style.text}>{title}</p>
  </>)
};

export default StatisticsItem;
