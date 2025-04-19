import { Link, useLocation } from 'react-router-dom';
import css from './GoBackBtn.module.css';
import { useRef } from 'react';
const GoBackBtn = () => {
  const location = useLocation();

  const backLink = useRef(location.state ?? '/');

  return (
    <Link className={css.link} to={backLink.current}>
      GoBackBtn
    </Link>
  );
};

export default GoBackBtn;
