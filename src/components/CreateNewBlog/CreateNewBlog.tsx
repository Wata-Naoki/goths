import { TextInput } from "../textInput/TextInput";

type Props = {
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export const CreateNewBlog: React.FC<Props> = ({ setIsModalOpen }) => {
  return (
    <>
      <div className="flex flex-col flex-wrap items-center p-10 gap-x-4 gap-y-8">
        <div className="text-2xl ">新規ブログ名</div>
        <div className="flex items-center ">
          <div>
            <TextInput type="text" className="px-8 text-2xl" />
          </div>
        </div>
        <div className="flex gap-x-4 ">
          <button
            className="px-8 py-2 text-white bg-gray-400 rounded"
            onClick={() => setIsModalOpen(false)}
          >
            閉じる
          </button>

          <button
            className="px-8 py-2 text-white bg-green-700 rounded"
            onClick={() => setIsModalOpen(false)}
          >
            追加
          </button>
        </div>
      </div>
    </>
  );
};
