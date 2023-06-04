import propTypes from 'prop-types';
import css from './Section.module.css';

export const Section = ({ title, children }) => (
  <div>
    <h2 className={css.title}>{title}</h2>
    {children}    
  </div>
);

Section.propTypes = {
  title: propTypes.string.isRequired,
  children: propTypes.node.isRequired,
};

export const FirstOption = ({ props }) => (
  <div>
    <h1>Opcja bez return</h1>
  </div>
);

export const SecondOption = ({ props }) => {
  return (
    <div>
      <h1>Opcja z return</h1>
    </div>
  );
};