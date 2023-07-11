import {ChangeEvent, FC} from 'react';
import classNames from 'classnames';

import styles from './TextArea.module.scss';

interface ITextAreaProps {
  name?: string;
  value?: string;
  classNameTextArea?: string;
  classNameError?: string;
  errorMessage?: string;
  classNameWrapper?: string;
  onChange?: (e: ChangeEvent<HTMLTextAreaElement>) => void;
  placeholder?: string;
  disabled?: boolean;
}
export const TextArea: FC<ITextAreaProps> = ({
  name,
  classNameTextArea,
  classNameWrapper,
  onChange,
  errorMessage,
  classNameError,
  disabled,
  placeholder,
  value,
  ...otherProps
}) => {
  return (
    <div className={classNames(styles.textAriaWrapper, classNameWrapper)}>
      <textarea
        className={classNames(styles.textAria, classNameTextArea, {
          [styles.withError]: errorMessage,
        })}
        onChange={onChange}
        disabled={disabled}
        placeholder={placeholder}
        value={value}
        name={name}
        {...otherProps}
      />
      {errorMessage && (
        <p className={classNames(styles.errorMassage, classNameError)}>{errorMessage}</p>
      )}
    </div>
  );
};
