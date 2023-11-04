import PropTypes from 'prop-types';

const LabeledInput = (props) => {
  const {
    inputType,
    inputName,
    id,
    labelClasses,
    inputClasses,
    spanClasses,
    spanText,
    value,
    handleChange,
    placeholder,
  } = props;

  return (
    <>
      <label className={labelClasses} htmlFor={id}>
        {spanText && <span className={spanClasses}>{spanText}</span>}
        <input
          id={id}
          type={inputType}
          name={inputName}
          value={value}
          onChange={handleChange}
          placeholder={placeholder}
          className={inputClasses}
        />
      </label>
    </>
  );
};

LabeledInput.propTypes = {
  inputType: PropTypes.string,
  inputName: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  labelClasses: PropTypes.string,
  inputClasses: PropTypes.string,
  spanClasses: PropTypes.string,
  spanText: PropTypes.string,
  value: PropTypes.any,
  handleChange: PropTypes.func,
  placeholder: PropTypes.string,
};

LabeledInput.defaultProps = {
  inputType: 'text',
  labelClasses: '',
  inputClasses: '',
  spanClasses: '',
  spanText: '',
  value: '',
  handleChange: () => {},
  placeholder: '',
};

export default LabeledInput;
