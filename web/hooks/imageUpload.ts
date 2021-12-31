import {useState} from 'react';
import {v4 as uuidv4} from 'uuid';
import loadImage from 'blueimp-load-image';
import {storage} from '../lib/firebase';
import {client} from '../lib/aspida';

type Options = {
  maxWidth?: number;
  maxHeight?: number;
};

export const useImageUpload = (defaultImage: string, oprions: Options) => {
  const [preview, setPreview] = useState(defaultImage);

  const handleChangeFile = async e => {
    const file = e.target.files[0];
    const uploadFile = await loadImage(file, {...oprions, canvas: true});

    uploadFile.image.toBlob(blob => {
      setPreview(window.URL.createObjectURL(blob));

      let extension = '';
      if (file.type === 'image/png') extension = '.png';
      if (file.type === 'image/jpeg') extension = '.jpg';

      if (!extension) return;

      const fileName = `/${uuidv4()}${extension}`;
      storage.ref().child(fileName).put(blob);

      // TODO: API未実装
      // client.upload_image.put({body: {file_name: fileName}} as any);
    }, file.type);
  };

  return {
    preview,
    handleChangeFile,
  };
};
