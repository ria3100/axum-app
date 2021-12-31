import {useForm, Controller} from 'react-hook-form';
import {useImageUpload} from '../../../../../hooks/imageUpload';
import {Button} from '../../../../commons/Button';
import {User} from '../../../../../apis/@types';
import {Input} from '../../../../commons/Input';
import {Textarea} from '../../../../commons/Textarea';

import styles from './ProfileEdit.module.css';

type FormData = {
  name: string;
  belongs: string;
  job: string;
  bio: string;
};

type Props = {userData: User};
export const ProfileEdit: React.VFC<Props> = ({userData}) => {
  const coverImage = useImageUpload(userData?.cover_image_url + '', {
    maxWidth: 1200,
    maxHeight: 1200,
  });
  const iconImage = useImageUpload(userData?.icon_image_url + '', {
    maxWidth: 600,
    maxHeight: 600,
  });

  const {
    control,
    formState: {errors},
    handleSubmit,
  } = useForm<FormData>();
  const onSubmit = data => alert(JSON.stringify(data));

  const changeCoverImageHandle = () => {
    console.log('changeCoverImageHandle');
    // coverImageInputRef.current.onchange = foo.handleChangeFile;
  };
  const changeIconImageHandle = () => {};

  return (
    <div className={styles.wrapper}>
      <label
        htmlFor="cover_image_input"
        className={styles.cover_image}
        style={{backgroundImage: `url(${coverImage.preview})`}}
        onClick={changeCoverImageHandle}
      />
      <div className={styles.container}>
        <label
          htmlFor="icon_image_input"
          className={styles.icon_image}
          style={{backgroundImage: `url(${iconImage.preview})`}}
          onClick={changeIconImageHandle}
        />

        <div className={styles.body}>
          <Controller
            name="name"
            control={control}
            defaultValue={userData.name}
            rules={{required: true}}
            render={({field}) => <Input {...field} />}
          />
          <p className={styles.error_message}>
            {errors.name?.type === 'required' && 'First name is required'}
          </p>

          <Controller
            name="belongs"
            control={control}
            defaultValue={userData.belongs}
            rules={{required: true}}
            render={({field}) => <Input {...field} />}
          />
          <p className={styles.error_message}>
            {errors.belongs?.type === 'required' && 'First name is required'}
          </p>

          <Controller
            name="job"
            control={control}
            defaultValue={userData.job}
            rules={{required: true}}
            render={({field}) => <Input {...field} />}
          />
          <p className={styles.error_message}>
            {errors.job?.type === 'required' && 'First name is required'}
          </p>

          <Controller
            name="bio"
            control={control}
            defaultValue={userData.bio}
            rules={{required: true}}
            render={({field}) => <Textarea {...field} />}
          />
          <p className={styles.error_message}>
            {errors.bio?.type === 'required' && 'First name is required'}
          </p>

          <Button onClick={handleSubmit(onSubmit)}>foo</Button>
        </div>
      </div>

      <input
        type="file"
        id="cover_image_input"
        className={styles.file_input}
        accept="image/png, image/jpeg"
        onChange={coverImage.handleChangeFile}
      />
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
