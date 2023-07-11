import { Button } from '@/common/components';
import { TextArea } from '@/common/components/TextArea/TextArea';

import styles from './FeedBackForm.module.scss';
import Input from '@/common/components/Input/Input';

export const FeedBackForm = () => {
  return (
    <>
      <form className={styles.feedBackForm}>
        <h3>/Зворотній з’вязок</h3>
        <div className={styles.fields}>
          <div className={styles.contacts}>
            <Input name={'name'} placeholder={'Ім’я'} />
            <Input name={'email'} placeholder={'Пошта'} />
          </div>
          <TextArea
            name={'message'}
            placeholder={'Ваше повідомлення'}
            classNameTextArea={styles.message}
          />
        </div>
        <Button type={'submit'} className={styles.submitBtn}>
          Надіслати
        </Button>
      </form>
    </>
  );
};
