import {useState} from 'react';
import {v4 as uuidv4} from 'uuid';
import loadImage from 'blueimp-load-image';
import {storage} from '../../../lib/firebase';

import styles from './ImageUpload.module.css';

type Props = {};

export const ImageUpload: React.VFC<Props> = () => {
  const [preview, setPreview] = useState('/img/no_image.png');

  const handleChangeFile = async e => {
    const file = e.target.files[0];
    const uploadFile = await loadImage(file, {maxWidth: 1200, canvas: true});

    uploadFile.image.toBlob(blob => {
      setPreview(window.URL.createObjectURL(blob));

      let extension = '';
      if (file.type === 'image/png') extension = '.png';
      if (file.type === 'image/jpeg') extension = '.jpg';

      if (!extension) return;

      const fileName = `/${uuidv4()}${extension}`;
      storage.ref().child(fileName).put(blob);
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
