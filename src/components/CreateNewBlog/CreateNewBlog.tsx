import { useMutation } from "@apollo/client";
import { useEffect, useState } from "react";
import { CREATE_BLOG } from "../../queries";
import { CreateBlogMutation } from "../../types/generated/graphql.tsx/graphql";
import { useToast } from "../loading/useToast";
import { TextInput } from "../ui/textInput/TextInput";

type Props = {
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  userId: string;
  //refetchの型を定義
  refetch: () => void;
};

export const CreateNewBlog: React.FC<Props> = ({
  setIsModalOpen,
  userId,
  refetch,
}) => {
  const { toastLoading, toastSucceeded, toastFailed } = useToast();
  const [title, setTitle] = useState("");

  const [insert_Blog_one, { loading, error }] = useMutation<CreateBlogMutation>(
    CREATE_BLOG,
    {
      onCompleted: () => {
        toastSucceeded();
        refetch();
      },
      onError: () => {
        toastFailed();
      },
    }
  );
  const handleBlogInsert = async () => {
    if (title) {
      toastLoading();
      try {
        await insert_Blog_one({
          variables: {
            title: title,
            user_id: userId,
          },
        });
      } catch (error) {
        console.log(error);
      }
    }
    setIsModalOpen(false);
  };

  //setIsModalOpen(false)
  // { variables: { user_id: userId, title: "test" }
  // console.log(userId);
  // useEffect(() => {
  //   console.log(title);
  // }, [title]);
  return (
    <>
      <div className="flex flex-col flex-wrap items-center px-16 py-8 gap-x-4 gap-y-8">
        <div className="text-2xl ">新規ブログ名</div>
        <div className="flex items-center ">
          <div>
            <TextInput
              type="text"
              placeholder="ブログ名"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="text-xl"
            />
          </div>
        </div>
        <div className="flex justify-between w-full gap-x-4">
          <button
            className="px-10 py-2 text-white bg-gray-400 rounded"
            onClick={() => setIsModalOpen(false)}
          >
            閉じる
          </button>

          <button
            className="px-10 py-2 text-white bg-green-700 rounded"
            onClick={() => {
              handleBlogInsert();
            }}
          >
            追加
          </button>
        </div>
      </div>
    </>
  );
};
