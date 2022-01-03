import {useState} from 'react';
import {v4 as uuidv4} from 'uuid';
import loadImage from 'blueimp-load-image';
import {getStorage, ref, uploadBytes} from 'firebase/storage';

import styles from './ImageUpload.module.css';

type Props = {};

export const ImageUpload: React.VFC<Props> = () => {
  const [preview, setPreview] = useState('/assets/image/no_image.png');

  const handleChangeFile = async (
    event: React.ChangeEvent<HTMLInputElement>
  ): Promise<void> => {
    const file = event.target.files[0];
    const uploadFile = await loadImage(file, {maxWidth: 1200, canvas: true});

    uploadFile.image.toBlob(blob => {
      setPreview(window.URL.createObjectURL(blob));

      let extension = '';
      if (file.type === 'image/png') extension = 'png';
      if (file.type === 'image/jpeg') extension = 'jpg';

      if (!extension) return;

      const fileName = `/${uuidv4()}.${extension}`;

      const storage = getStorage();
      const storageRef = ref(storage, fileName);

      uploadBytes(storageRef, blob).then(() => {
        // eslint-disable-next-line no-console
        console.log('Uploaded a blob or file!');
      });
    }, file.type);
  };

  return (
    <label htmlFor="photo">
      <div className={styles.preview}>
        <img src={preview} alt="preview" className={styles.previewImg} />
      </div>
      <input
        id="photo"
        type="file"
        name="photo"
        accept="image/png, image/jpeg"
        onChange={handleChangeFile}
        className={styles.inputPhoto}
      />
    </label>
  );
};
