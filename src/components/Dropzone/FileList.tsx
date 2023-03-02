import { List, FileInfo, Preview, CloseButton } from "./styles";
import "react-circular-progressbar/dist/styles.css";
import Img from "../../assets/image.jpeg";
import fileSize from "filesize";
import { FileType } from "../../@types/FileType";
import { GrClose } from "react-icons/gr";

interface IFileInfoProps {
  value: File & FileType;
  onDelete: (file: File & FileType) => void;
}

export const FileList: React.FC<IFileInfoProps> = ({ value, onDelete }) => {
  return (
    <List>
      <li>
        <FileInfo>
          <Preview
            style={{
              width: 36,
              height: 36,
              backgroundImage: `url(${value.preview ? value.preview : Img})`,
              backgroundSize: "cover",
              backgroundPosition: "50% 50%",
              backgroundRepeat: "no-repeat",
            }}
          />
          <div>
            <strong>{value.name}</strong>
            <span>{fileSize(value.size)}</span>
          </div>
        </FileInfo>
        <div>
          <CloseButton type="button" onClick={() => onDelete(value)}>
            <GrClose />
          </CloseButton>
        </div>
      </li>
    </List>
  );
};
