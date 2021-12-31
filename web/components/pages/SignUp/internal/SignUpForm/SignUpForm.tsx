import {User} from '../../../../../apis/@types';
import {Input} from '../../../../commons/Input';
import {useForm, Controller} from 'react-hook-form';
import {useImageUpload} from '../../../../../hooks/imageUpload';
import {Button} from '../../../../commons/Button';
import {PrefixedInput} from '../../../../commons/PrefixedInput';

import styles from './SignUpForm.module.css';

type FormData = {
  name: string;
  screen_name: string;
};

type Props = {userData: User};

export const SignUpForm: React.VFC<Props> = ({userData}) => {
  const iconImage = useImageUpload(
    'https://pbs.twimg.com/profile_images/1289222434122395648/BEtobgxi_400x400.png',
    {
      maxWidth: 600,
      maxHeight: 600,
    }
  );

  const {
    control,
    formState: {errors},
    handleSubmit,
  } = useForm<FormData>();
  const onSubmit = data => alert(JSON.stringify(data));

  const changeIconImageHandle = () => {
    console.log('changeIconImageHandle');
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <label
          htmlFor="icon_image_input"
          className={styles.icon_image}
          style={{backgroundImage: `url(${iconImage.preview})`}}
          onClick={changeIconImageHandle}
        />

        <div className={styles.body}>
          <Controller
            name="screen_name"
            control={control}
            rules={{required: true}}
            render={({field}) => (
              <Input
                label="名前"
                errorMessage={
                  errors.screen_name?.type === 'required' &&
                  'First name is required'
                }
                {...field}
              />
            )}
          />

          <Controller
            name="name"
            control={control}
            rules={{required: true}}
            render={({field}) => (
              <PrefixedInput
                label="表示名"
                errorMessage={
                  errors.name?.type === 'required' && 'First name is required'
                }
                prefix="http://foo.com/"
                {...field}
              />
            )}
          />
          <Button onClick={handleSubmit(onSubmit)}>foo</Button>
        </div>
      </div>

      <input
        type="file"
        id="icon_image_input"
        className={styles.file_input}
        accept="image/png, image/jpeg"
        onChange={iconImage.handleChangeFile}
      />
    </div>
  );
};
