import styles from "./Pagination.module.css";
import NavigationIcon from "../NavigationIcon/NavigationIcon";
import PaginationButton from "../PaginationButton/PaginationButton";
import { useNavigate, useParams } from "react-router";
export default function Pagination({ data, route }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const handleNextPage = () => {
    navigate(`${route}/${Number(id) + 1}`);
  };

  const handlePrevPage = () => {
    navigate(`${route}/${Number(id) - 1}`);
  };

  return (
    <div className={styles.container}>
      <div className={styles.navigationLinks}>
        {data.map((el) => (
          <NavigationIcon key={el.id} active={Number(id) === el.id} />
        ))}
      </div>
      <div className={styles.buttons}>
        {Number(id) !== 1 && (
          <PaginationButton onClick={handlePrevPage}>Назад</PaginationButton>
        )}

        {data.length === Number(id) ? (
          <PaginationButton onClick={() => navigate(`${route}/1`)} active>
            В начало
          </PaginationButton>
        ) : (
          <PaginationButton onClick={handleNextPage} active>
            Далее
          </PaginationButton>
        )}
      </div>
    </div>
  );
}
