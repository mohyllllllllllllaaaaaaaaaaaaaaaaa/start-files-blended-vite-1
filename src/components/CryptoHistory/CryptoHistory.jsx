//import { formatDate } from "../helper/formatDate";
import { formatDate } from "../helper/formatDate";
import style from "./CryptoHistory.module.css";
const CryptoHistory = ({items}) => {
  return (
    <table className={style.table}>
  <thead className={style.thead}>
    <tr>
      <th className={style.th}>№</th>
      <th className={style.th}>PRICE</th>
      <th className={style.th}>AMOUNT</th>
      <th className={style.th}>DATE</th>
    </tr>
  </thead>

  <tbody>
    {items.map(({id, price, amount, date}, index) =>
     <tr className={style.tr} key={id}>
    <td className={style.td}>{index + 1}</td>
    <td className={style.td}>{price}</td>
    <td className={style.td}>{amount}</td>
    <td className={style.td}>{formatDate(date)}</td>
  </tr>
    )}
   

  </tbody>
</table>
  );
};

export default CryptoHistory;
