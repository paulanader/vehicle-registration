import { memo, useCallback, useState } from "react";
import { DropzoneOptions, useDropzone } from "react-dropzone";
import { dragActive, dragReject, DropContainer, notDragActive } from "./styles";

import { FileList } from "./FileList";
import { FileType } from "../../@types/FileType";

interface Props {
  onDrop: (files: File[]) => void;
  accept?: string;
  maxSize?: number;
}

const Dropzone: React.FC<Props> = ({ onDrop, accept, maxSize }) => {
  const [files, setFiles] = useState<(File & FileType)[]>([]);

  const options: DropzoneOptions = {
    onDropAccepted: useCallback(
      (acceptedFiles: File[]) => {
        onDrop([...files, ...acceptedFiles]);
        setFiles((prevFiles) => [
          ...prevFiles,
          ...acceptedFiles.map((file) =>
            Object.assign(file, {
              preview: URL.createObjectURL(file),
              progress: 0,
              uploaded: false,
              error: false,
              url: null,
            })
          ),
        ]);
      },
      [files, onDrop]
    ),

    accept: {
      "image/png": [".png"],
      "image/jpeg": [".jpeg"],
    },
    maxSize,
  };

  const { getRootProps, getInputProps, isDragActive, isDragReject } =
    useDropzone(options);

  const handleRemoveFile = useCallback(
    (file: File & FileType) => {
      setFiles((prevFiles) => prevFiles.filter((f) => f !== file));
      onDrop(files);
    },
    [files, onDrop]
  );

  return (
    <div>
      <DropContainer
        className={`${!isDragActive && notDragActive} ${
          isDragActive && dragActive
        } ${isDragReject && dragReject}`}
        {...getRootProps()}
        isDragActive={isDragActive}
        isDragReject={isDragReject}
      >
        <input {...getInputProps()} />
        {!isDragActive && (
          <div className="text-dark text-center">
            Arraste seus arquivos aqui
          </div>
        )}
        {isDragReject && (
          <div className="text-dark text-center">Arquivo não suportado</div>
        )}
        {isDragActive && (
          <div className="text-dark text-center">Solte os arquivos aqui</div>
        )}
      </DropContainer>
      {files.map((file) => (
        <FileList value={file} onDelete={handleRemoveFile} />
      ))}
    </div>
  );
};

export default memo(Dropzone);
